import React from 'react';
import ContactRow from "../ContactRow/contactRow";

const ContactList = (props) => {
  return (
      <div className="contact-list">
          <h1 className="header-chat">Chats</h1>
          {props.contactList.map(contact => {
              return <ContactRow
                  key={contact.id}
                  id={contact.id}
                  name={contact.name}
                  avatar={contact.avatar}
                  date={contact.date}
                  getLastMessage={props.getLastMessage}
                  onChange={props.onChange}
              />
          })}
      </div>
  )
};

export default ContactList;