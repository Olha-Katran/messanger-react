import React from 'react';

function MessageRow (props) {

    return (
        <div className="message-template-row">
            <div className={props.senderId === 0 ? "my-message-template-row": "contact-message-template-row"}>
                <div className={props.senderId === 0 ? "my-message-template-flex": "contact-message-template-flex"}>
                    {props.senderId !== 0 ? <img className="message-avatar" alt='avatar' src={props.senderId === 0 ? '' : props.avatar} /> : ''}
                    <p className="messages-text">{props.text}</p>
                </div>

                <p  className={props.senderId === 0 ? "my-message-date": "contact-message-date"}>{props.date.toLocaleString()}</p>
            </div>
        </div>

    )
}

export default MessageRow;