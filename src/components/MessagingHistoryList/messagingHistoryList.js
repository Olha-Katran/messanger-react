import React from 'react';
import MessageRow from '../MessageRow/messageRow';

function MessagingHistoryList (props) {


    return (
        <div className="messagingHistoryList">
            {props.messageHistory.map(message => {
                return <MessageRow
                    key={message}
                    id={message.id}
                    date={message.date}
                />
            })}
        </div>
    )
};

export default MessagingHistoryList;