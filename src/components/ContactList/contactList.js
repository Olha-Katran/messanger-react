import React from 'react';
import ContactRow from "../ContactRow/contactRow";

const ContactList = (props) => {
  return (
      <div className="contact-list">
          {props.contactList.map(contact => {
              return <ContactRow
                  key={contact.id}
                  name={contact.name}
                  id={contact.id}
              />
          })}
      </div>
  )
};

export default ContactList;