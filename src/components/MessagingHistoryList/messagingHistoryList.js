import React from 'react';
import MessageRow from '../MessageRow/messageRow';

function MessagingHistoryList (props) {

    return (
        <div className="messaging-history-list">
            {
                props.messageHistory.find(x => x.contactId === props.selectedContactId).messages
                    .sort((objA, objB) => Number(objB.date) - Number(objA.date))
                    .map(message => {
                return <MessageRow
                    key={message.messageId}
                    avatar={props.avatar}
                    text={message.text}
                    date={message.date}
                    senderId={message.senderId}
                />
            })}
        </div>
    )
};

export default MessagingHistoryList;