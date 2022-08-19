import React from 'react';
import MessageRow from '../MessageRow/messageRow';

function MessagingHistoryList (props) {

    return (
        <div className="messagingHistoryList">
            {
                props.messageHistory.find(x => x.contactId === props.selectedContactId).messages.map(message => {
                return <MessageRow
                    key={message.messageId}
                    avatar={props.avatar}
                    text={message.text}
                    date={message.date}
                />
            })}
        </div>
    )
};

export default MessagingHistoryList;