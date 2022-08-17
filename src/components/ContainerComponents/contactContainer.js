import React from 'react';
import Header from '../Header/header';
import SearchBar from '../Search/search';
import ContactList from '../ContactList/contactList';
import ContactRow from '../ContactRow/contactRow';

const ContactContainer = (props) => {
  return (
      <div className="container context-container" >
          <div className="grey-block">
              <Header />
              <SearchBar />
          </div>
          <ContactList contactList={props.contactList}/>
      </div>
  )
};

export default ContactContainer;