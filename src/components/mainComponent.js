import React from 'react';

import ContactContainer from "./ContainerComponents/contactContainer";
import HistoryContainer from "./ContainerComponents/historyContainer";

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contactList: [
                {name: 'Alice Freeman', avatar: 'avatar1', date: 12, message: 'You are the worst!', id: 1},
                {name: 'Josefina', avatar: 'avatar2', date: 13, message: 'We are losing money! Quick!', id: 2},
                {name: 'Velazquez', avatar: 'avatar3', date: 14, message: 'Quickly come to the meeting room 1B, we have a big server issue', id: 3},
                {name: 'Barrera', avatar: 'avatar4', date: 12, message: 'Hello!', id: 4},
                {name: 'Mary', avatar: 'avatar1', date: 12, message: 'Sorry', id: 5},
                {name: 'Paul', avatar: 'avatar1', date: 12, message: 'You are the worst!', id: 6},
                {name: 'Henry Field', avatar: 'avatar1', date: 12, message: 'You are the worst!', id: 7},
            ],

            messageHistory: [
                {id: 0, text: 'texttext', date: 15},
                {id: 1, text: 'tetxtteh', date: 16}
            ]
        }
    }

    render () {
        return (
            <div className="main-container">
                <ContactContainer contactList={this.state.contactList}/>
                <HistoryContainer messageHistory={this.state.messageHistory} />
            </div>
        )
    }
};

export default Main;