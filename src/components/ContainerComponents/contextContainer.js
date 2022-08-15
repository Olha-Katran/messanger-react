import React from 'react';
import Header from '../Header/header';
import SearchBar from '../Search/search';
import ContactList from '../ContactList/contactList';
import ContactRow from '../ContactRow/contactRow';

const ContextContainer = () => {
  return (
      <div className="context-container">
          <Header />
          <SearchBar />
          <ContactList />
          <ContactRow />
      </div>
  )
};

export default ContextContainer;