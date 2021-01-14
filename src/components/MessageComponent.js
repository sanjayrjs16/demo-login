import React from 'react';
import '../App.css';

export default function MessageComponent({message, type}) {
    return (
        <div className={`message${type}`}>
            <p>{message}</p>
        </div>
    )
}
