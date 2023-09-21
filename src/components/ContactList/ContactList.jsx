import React from 'react';

import ContactItem from './ContactItem/ContactItem';

import { useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import {ContList} from './ContactList.styled';
import { useGetContactsQuery } from 'redux/contactsapi';

function ContactList() {

  const filter = useSelector(getFilter);


  const { data: contacts } = useGetContactsQuery();

  if (!contacts) {
    return null;
  }

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

 

  return (
    <ContList>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} />
      ))}
    </ContList>
  );
}


export default ContactList;