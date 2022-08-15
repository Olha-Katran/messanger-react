import React from 'react';

const ContactRow = () => {
    const contactInfo = {
        name: "name",
        avatar: "img",
        date: "12:03:22",
        messageText: "Some text"
    };

    return (
        <div>
            {contactInfo}
        </div>
    )
};

export default ContactRow;