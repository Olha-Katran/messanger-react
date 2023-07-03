import React from 'react';
import './contactRow.css';

const ContactRow = (props) => {

    const options = { year: 'numeric', month: 'short', day: '2-digit' };

    return (
        <div className="contact-row" onClick={ () => props.onChange(props.id)}>
            <img src={props.avatar} alt="photo" className="avatar-contact"/>

            <div className="users-info">
                <div className="users-date">
                    <h3>{props.name}</h3>
                    <p className="users-date-paragraph">{props.getLastMessage(props.id).date.toLocaleDateString("en", options)}</p>
                </div>
                <p className="users-info-paragraph">{props.getLastMessage(props.id).text}</p>
            </div>
        </div>
    )
};

export default ContactRow;