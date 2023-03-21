import React from 'react';

import messages from "../mocks/messages.json";
import contacts from "../mocks/contacts.json";
import cuid from 'cuid';
import ContactContainer from "./ContainerComponents/contactContainer";
import HistoryContainer from "./ContainerComponents/historyContainer";

class Main extends React.Component {

    isFirstTimeKey = "IsFirstTime";
    contactsKey = "contacts";
    messagesKey = "messages";

    constructor(props) {
        super(props);

        this.state = {
            contactList: [
                {name: 'Alice Freeman', avatar: 'https://picsum.photos/seed/picsum/200/300', id: 1},
            ],

            selectedContactId: 1,

            messageHistory: [
                {contactId: 1, messages: [
                        { senderId: 1, messageId: 0, date: new Date(2022, 1, 1), text: "You are the worst!" },
                        { senderId: 0, messageId: 1, date: new Date(2022, 2, 1), text: "No!" },
                        { senderId: 1, messageId: 2, date: new Date(2022, 3, 1), text: "Yes!" },
                        { senderId: 0, messageId: 3, date: new Date(2022, 4, 1), text: "Okay!" },
                        { senderId: 1, messageId: 4, date: new Date(2022, 5, 1), text: "Fine!" },
                    ]},
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
                newMessages.push({ senderId: senderId, messageId: cuid(), date: new Date(), text: value});
                return {...messageHis, messages: newMessages}
            } else {
                return messageHis;
            }
        });

        this.setState( {messageHistory: newState});
        localStorage.setItem(this.messagesKey, JSON.stringify(newState));

        if(isMessageFromUser) {
            const senderIdForApi = this.state.selectedContactId;
            this.getApiAnswer(senderIdForApi);
        }
    }

    getLastMessage (contactId) {
        let filterObject = this.state.messageHistory.find( obj => obj.contactId === contactId)
        if(filterObject !== undefined) {
            return filterObject.messages.sort((message1, message2) => Number(message1.date) - Number(message2.date)).slice(-1)[0];
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

    componentDidMount() {
        let isFirstTime = localStorage.getItem(this.isFirstTimeKey);

        if (isFirstTime === "false") {

            console.log("NOT FIRST TIME");

            this.setState({contactList: JSON.parse(localStorage.getItem(this.contactsKey))});
            this.setState({messageHistory: JSON.parse(localStorage.getItem(this.messagesKey), (key, value) => {
                    return key === "date" ? new Date(value) : value;
            })})

        } else {
            localStorage.setItem(this.isFirstTimeKey, "false")

            const contactsString = JSON.stringify(contacts.contactList);
            localStorage.setItem(this.contactsKey, contactsString)

            const messagesString = JSON.stringify(messages.messageHistory);
            localStorage.setItem(this.messagesKey, messagesString);

            this.setState({contactList: JSON.parse(contactsString)});
            this.setState({messageHistory: JSON.parse(messagesString, (key, value) => {
                    return key === "date" ? new Date(value) : value;
                })})
        }
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