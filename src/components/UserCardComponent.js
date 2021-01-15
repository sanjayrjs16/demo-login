import React from 'react';
import '../App.css';
import user from "../assets/user.png"

export default function UserCardComponent({id,details}) {
    return (
        <div className="user-card">
           <img className="user-icon" src={user} alt="user-icon" />
            <hr />
            
            <h4> {details.name}</h4>
            <div><span className="user-label">Age:    </span>{details.age}</div>
            <p><span className="user-label">Gender:</span>{details.gender}</p>
            <hr />
            <p><span className="user-label">✉️: </span>{details.email}</p>
            <p><span className="user-label">📞: </span>{details.phoneNo}</p>
        </div>
    );
}
