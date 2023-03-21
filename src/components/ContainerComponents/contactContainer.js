import React from 'react';
import Header from '../Header/header';
import SearchBar from '../Search/search';
import ContactList from '../ContactList/contactList';
import {useState} from 'react';

const ContactContainer = (props) => {

    const [searchValue, setSearchValue] = useState("");

    const searchInputHandler = (value) => {
        setSearchValue(value)
    }

  return (
      <div className="contact-container" >

          <div className="grey-block">
              <Header />
              <SearchBar searchInputHandler={searchInputHandler}/>
          </div>

          <ContactList
              contactList={props.contactList
                  .filter(obj => obj.name.toLowerCase().includes(searchValue.toLowerCase()))
                  .sort( (objA, objB) => Number(props.getLastMessage(objB.id).date) - Number(props.getLastMessage(objA.id).date))}
              onChange={props.onChange}
              getLastMessage={props.getLastMessage}/>
      </div>
  )
};

export default ContactContainer;