import React from 'react';
import '../App.css';

//This is a re-usable button component
export default function ButtonComponent({style, text, onClick}) {
    return (
    
            <button className={`button${style}`} onClick={() => onClick()}>{text}</button>
       
    )
}
