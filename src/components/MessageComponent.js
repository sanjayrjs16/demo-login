import React from 'react';
import '../App.css';
import ButtonComponent from './ButtonComponent';
//This is a reusable Message component
export default function MessageComponent({message, type, hideMessage}) {
    return (
        <div className={`message${type}`}>
           <span> <span>{message}</span>
           
           <ButtonComponent style="-transparent" text="close" onClick={hideMessage} /></span>
        </div>
    )
}
