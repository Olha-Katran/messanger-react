import React from 'react';
// import { createStore } from 'redux';

import ContactContainer from "./ContainerComponents/contactContainer";
import HistoryContainer from "./ContainerComponents/historyContainer";

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contactList: [
                {name: 'Alice Freeman', avatar: 'https://picsum.photos/seed/picsum/200/300', date: "Jun 12, 2022", id: 1},
                {name: 'Josefina', avatar: 'https://picsum.photos/seed/picsum/200/300', date: "Jun 11, 2022", id: 2},
                {name: 'Velazquez', avatar: 'https://picsum.photos/seed/picsum/200/300', date: "Jun 9, 2022",  id: 3},
                {name: 'Barrera', avatar: 'https://picsum.photos/seed/picsum/200/300', date: "Jun 8, 2022", id: 4},
                {name: 'Mary', avatar: 'https://picsum.photos/seed/picsum/200/300', date: "Jun 7, 2022",  id: 5},
                {name: 'Paul', avatar: 'https://picsum.photos/seed/picsum/200/300', date: "Jun 6, 2022",  id: 6},
                {name: 'Henry Field', avatar: 'https://picsum.photos/seed/picsum/200/300', date: "Jun 4, 2022", id: 7},
                {name: 'Henry Field', avatar: 'https://picsum.photos/seed/picsum/200/300', date: "Jun 4, 2022", id: 8},
                {name: 'Henry Field', avatar: 'https://picsum.photos/seed/picsum/200/300', date: "Jun 4, 2022", id: 9},
                {name: 'Henry Field', avatar: 'https://picsum.photos/seed/picsum/200/300', date: "Jun 4, 2022", id: 10},
                {name: 'Henry Field', avatar: 'https://picsum.photos/seed/picsum/200/300', date: "Jun 4, 2022", id: 11},
            ],

            selectedContactId: 1,

            messageHistory: [
                {contactId: 1, messages: [
                        { senderId: 1, messageId: 0, date: new Date(2022, 1, 1).toDateString(), text: "You are the worst!" },
                        { senderId: 0, messageId: 1, date: new Date(2022, 2, 1).toDateString(), text: "No!" },
                        { senderId: 1, messageId: 2, date: new Date(2022, 3, 1).toDateString(), text: "Yes!" },
                        { senderId: 0, messageId: 3, date: new Date(2022, 4, 1).toDateString(), text: "Okay!" },
                        { senderId: 1, messageId: 4, date: new Date(2022, 5, 1).toDateString(), text: "Fine!" },
                    ]},
                {contactId: 2, messages: [
                        { senderId: 2, messageId: 5, date: new Date(2022, 1, 1).toDateString(), text: "You asdfsdfsdfre the worst!" },
                        { senderId: 0, messageId: 6, date: new Date(2022, 2, 1).toDateString(), text: "Nosdfsdf!" },
                        { senderId: 2, messageId: 7, date: new Date(2022, 3, 1).toDateString(), text: "Yesdfsdfsdfs!" },
                        { senderId: 0, messageId: 8, date: new Date(2022, 4, 1).toDateString(), text: "Oksdfsdfsdfay!" },
                    ]},
                {contactId: 3, messages: [
                        { senderId: 3, messageId: 9, date: new Date(2022, 1, 1).toDateString(), text: "You are the worst!" },
                        { senderId: 0, messageId: 10, date: new Date(2022, 2, 1).toDateString(), text: "No!" },
                        { senderId: 3, messageId: 11, date: new Date(2022, 3, 1).toDateString(), text: "Yes!" },
                    ]},
                {contactId: 4, messages: [
                        { senderId: 4, messageId: 12, date: new Date(2022, 1, 1).toDateString(), text: "You are the worst!" },
                        { senderId: 0, messageId: 13, date: new Date(2022, 2, 1).toDateString(), text: "No!" },
                        { senderId: 4, messageId: 14, date: new Date(2022, 3, 1).toDateString(), text: "Yes!" },
                        { senderId: 0, messageId: 15, date: new Date(2022, 4, 1).toDateString(), text: "Okay!" },
                        { senderId: 4, messageId: 16, date: new Date(2022, 5, 1).toDateString(), text: "Fine!" },
                    ]},
                {contactId: 5, messages: [
                        { senderId: 5, messageId: 17, date: new Date(2022, 1, 1).toDateString(), text: "You are the worst!" },
                        { senderId: 0, messageId: 18, date: new Date(2022, 2, 1).toDateString(), text: "No!" },
                        { senderId: 5, messageId: 19, date: new Date(2022, 3, 1).toDateString(), text: "Yes!" },
                        { senderId: 0, messageId: 20, date: new Date(2022, 4, 1).toDateString(), text: "Okay!" },
                        { senderId: 5, messageId: 21, date: new Date(2022, 5, 1).toDateString(), text: "Fine!" },
                    ]},
                {contactId: 6, messages: [
                        { senderId: 6, messageId: 22, date: new Date(2022, 1, 1).toDateString(), text: "You are the worst!" },
                        { senderId: 0, messageId: 23, date: new Date(2022, 2, 1).toDateString(), text: "No!" },

                    ]},
                {contactId: 7, messages: [
                        { senderId: 7, messageId: 24, date: new Date(2022, 1, 1).toDateString(), text: "You are the worst!" }
                    ]},
                {contactId: 8, messages: [
                        { senderId: 8, messageId: 25, date: new Date(2022, 1, 1).toDateString(), text: "You are the worst!" },
                        { senderId: 0, messageId: 26, date: new Date(2022, 2, 1).toDateString(), text: "No!" },

                    ]},
                {contactId: 9, messages: [
                        { senderId: 9, messageId: 27, date: new Date(2022, 1, 1).toDateString(), text: "You are the worst!" },
                        { senderId: 0, messageId: 28, date: new Date(2022, 2, 1).toDateString(), text: "No!" },

                    ]},
                {contactId: 10, messages: [
                        { senderId: 10, messageId: 29, date: new Date(2022, 1, 1).toDateString(), text: "You are the worst!" },
                        { senderId: 0, messageId: 30, date: new Date(2022, 2, 1).toDateString(), text: "No!" },

                    ]},
                {contactId: 11, messages: [
                        { senderId: 11, messageId: 31, date: new Date(2022, 1, 1).toDateString(), text: "You are the worst!" },
                        { senderId: 0, messageId: 32, date: new Date(2022, 2, 1).toDateString(), text: "No!" },
                    ]}
            ]};

        this.handleChange = this.handleChange.bind(this);
        this.addMessage = this.addMessage.bind(this);
        this.getLastMessage = this.getLastMessage.bind(this);
    }

    handleChange (id) {
        this.setState({selectedContactId: id })
    }

    addMessage (value, isMessageFromUser, senderId) {
        let contactId = isMessageFromUser ? this.state.selectedContactId : senderId;
        let newState = this.state.messageHistory.map(messageHis => {
            if (messageHis.contactId === contactId) {

                const newMessages = [...messageHis.messages]
                newMessages.push({ senderId: senderId, messageId: Math.floor(Math.random() * 100), date: Date(), text: value});
                return {...messageHis, messages: newMessages}
            } else {
                return messageHis;
            }
        });

        this.setState( {messageHistory: newState});
        if(isMessageFromUser) {
            const senderIdForApi = this.state.selectedContactId;
            this.getApiAnswer(senderIdForApi);
        }
    }

    getLastMessage (contactId) {

        let filterObject = this.state.messageHistory.find( obj => obj.contactId === contactId)
        if(filterObject !== undefined) {
            let lastMessage = filterObject.messages.slice(-1)[0].text;
            return lastMessage;
        } else {
            return 'No messages yet'
        }

    }

    getApiAnswer (senderIdForApi) {
        fetch('https://api.chucknorris.io/jokes/random')
            .then(response => response.json())
                .then(responseObj => this.delay(10000, responseObj.value ))
                .then(value => this.addMessage(value, false, senderIdForApi));
    }

    delay (ms, value) {
        return new Promise(resolve => setTimeout(resolve, ms, value));
    }

    render () {
        return (
            <div className="main-container">
                <ContactContainer
                    contactList={this.state.contactList}
                    onChange={this.handleChange}
                    getLastMessage={this.getLastMessage}
                />
                <HistoryContainer
                    messageHistory={this.state.messageHistory}
                    selectedContactId={this.state.selectedContactId}
                    contactInfo={this.state.contactList}
                    addMessage={this.addMessage}
                />
            </div>
        )
    }
};

export default Main;