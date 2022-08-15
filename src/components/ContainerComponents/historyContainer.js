import React from 'react';
import HeaderContact from "../HeaderContact/headerContact";
import MessagingHistoryList from "../MessagingHistoryList/messagingHistoryList";
import MainMessageInput from "../MainMessageInput/mainMessageInput";

const HistoryContainer = () => {
    return (
        <div>
            <HeaderContact />
            <MessagingHistoryList />
            <MainMessageInput />
        </div>
    )
};

export default HistoryContainer;