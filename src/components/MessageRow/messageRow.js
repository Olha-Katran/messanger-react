import React from 'react';

function MessageRow (props) {

    return (
        <div className="message-row">
            {/*<h4>{props.id}</h4>*/}
            <p>{props.date}</p>
            <p>{props.avatar}</p>
            <p>{props.text}</p>
        </div>
    )
};

export default MessageRow;