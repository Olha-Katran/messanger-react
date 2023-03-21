import React from 'react';
import HeaderContact from "../HeaderContact/headerContact";
import MessagingHistoryList from "../MessagingHistoryList/messagingHistoryList";
import MainMessageInput from "../MainMessageInput/mainMessageInput";

const HistoryContainer = (props) => {

    return (
        <div className="history-container">
            <HeaderContact contactInfo={props.contactInfo.find(x => x.id === props.selectedContactId)}/>
            <MessagingHistoryList messageHistory={props.messageHistory}
                                  avatar={props.contactInfo.find(x => x.id === props.selectedContactId).avatar}
                                  selectedContactId={props.selectedContactId} />
            <MainMessageInput addMessage={props.addMessage} />
        </div>
    )
};

export default HistoryContainer;