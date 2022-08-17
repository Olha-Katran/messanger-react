import React from 'react';

const ContactRow = (props) => {

    return (
        <div className="contact-row">
            <h3>{props.name}</h3>
            <p>{props.id}</p>
        </div>
    )
};

export default ContactRow;