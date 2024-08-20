import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {useState} from "react";
import { ExpandMoreRounded } from '@mui/icons-material';

const BasicMenu = ({options = [], color}) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const [currentValue, setCurrentValue] = useState(options[0]);
    const handleClose = () => {
        setAnchorEl(null);
    };


    const selectHandler = (value) =>{
        setCurrentValue(value);
        handleClose();
    }

    return (
        <div>
            <Button
                id="basic-button"
                // aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                // aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                style={styles.button(color)}
            >
                {currentValue}
                <ExpandMoreRounded fontSize='medium'/>
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {/*<MenuItem onClick={handleClose}>Profile</MenuItem>*/}
                {/*<MenuItem onClick={handleClose}>My account</MenuItem>*/}
                {/*<MenuItem onClick={handleClose}>Logout</MenuItem>*/}


                {
                    options.map(option => {
                    return <MenuItem onClick={selectHandler.bind(this, option)}>{option}</MenuItem>
                    })
                }

            </Menu>
        </div>
    );
}

const styles = {
    button:(color)=>( {
        color,
        display: 'flex',
        flexDirection:'row',
        textTransform: 'none'
    }),
}

export default BasicMenu;
