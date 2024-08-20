import {PhoneOutlined} from "@mui/icons-material";
import BasicMenu from "./BasicMenu";

const Header = () => {
    const langOptions = [
        'English',
        'French',
        'Spanish'
    ];

    const locationOptions = [
        'location',
        'location',
        'location'
    ];

    return (
        <div style={styles.container}>
            <div style={styles.wrapper}>
                <div style={styles.firstSection}>
                    <PhoneOutlined style={styles.phoneIcon}/>
                    <p>+2348104517357</p>
                </div>
                <div style={styles.secondSection}>
                    <p>Get 50% off Selected Items</p>
                    <div style={styles.vertDivider}></div>
                    <p>Shop now</p>
                </div>
                <div style={styles.thirdSection}>
                    <BasicMenu color={'white'} options={langOptions}/>
                    <BasicMenu color={'white'} options={locationOptions}/>
                </div>
            </div>
        </div>
    )
}

export default Header;

const styles = {
    container:{
        width:'100%',
        height:'6%',
        margin:0,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#392381',
        // position: 'fixed',
        top: 0,
        // zIndex:999
    },
    wrapper:{
        width: '100%',
        marginLeft: 100,
        marginRight:100,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    firstSection:{
        display: 'flex',
        flexDirection:'row',
        gap:10,
        color: '#fff'
    },
    secondSection:{
        display: 'flex',
        flexDirection:'row',
        gap:10,
        color: '#fff',
        alignItems:'center',
        justifyContent:'center'
    },
    phoneIcon:{
        color: '#fff'
    },
    vertDivider:{
        width: 2,
        height: '90%',
        backgroundColor: '#fff',
        alignSelf:'center',
        justifyContent: 'center'
    },
    thirdSection:{
        display: 'flex',
        flexDirection:'row',
        gap:10,
        justifyContent:'center',
        alignItems:'center'
    }
}
