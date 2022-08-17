import React from 'react';
import HeaderContact from "../HeaderContact/headerContact";
import MessagingHistoryList from "../MessagingHistoryList/messagingHistoryList";
import MainMessageInput from "../MainMessageInput/mainMessageInput";

const HistoryContainer = (props) => {
    return (
        <div className="container history-container">
            <HeaderContact />
            <MessagingHistoryList messageHistory={props.messageHistory} />
            <MainMessageInput />
        </div>
    )
};

export default HistoryContainer;