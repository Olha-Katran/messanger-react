import React from 'react';

const ContactRow = (props) => {

    return (
        <div className="contact-row" onClick={ () => props.onChange(props.id)
        }>
            <img src={props.avatar} alt="photo" className="avatar contact"/>

            <div className="users-info">
                <h3>{props.name}</h3>
                <p>{props.message}</p>
            </div>

            <div className="users-date">
                <p>{props.date}</p>
            </div>
        </div>
    )
};

export default ContactRow;