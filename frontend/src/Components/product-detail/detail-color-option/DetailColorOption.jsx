import React from 'react'
import './DetailColorOption.css';


function DetailColorOption({color, selected, onClick}) {
  return (
    <div
    className='colorOptionBorder'
    style={{
        border: selected ? '2px solid black' : 'none',
        width:37,
        height:37,
        borderRadius:'100%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        padding:0
    }}
    >
        <div 
        onClick={onClick} 
        style={{
            height:35,
            width:35,
            // border:'1px solid black',
            borderRadius:'100%',
            display:'flex',
            flexDirection:'column',
            overflow:'hidden',
            margin:0,
            cursor:'pointer'
        }} 
        className='coloroptionContainer'
        >
        <div
        style={
                {
                    backgroundColor:color[0],
                    // flex:1,
                    height:'100%',
                    width:'100%'
                }
            } 
        className="color1"
        >

        </div>
        <div 
        style={
            {
                backgroundColor:color[1],
                // flex:1,
                height:'100%',
                width:'100%'
            }
        } 
        className="color2"
        >

        </div>
        </div>
    </div>
  )
}

export default DetailColorOption
