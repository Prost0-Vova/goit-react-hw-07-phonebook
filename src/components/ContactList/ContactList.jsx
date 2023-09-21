import React from 'react';

import ContactItem from './ContactItem/ContactItem';
import Notiflix from 'notiflix';
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

  if (!filteredContacts?.length) {
    Notiflix.Notify.info('No contacts found.');
  }

  return (
    <ContList>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} />
      ))}
    </ContList>
  );
}


export default ContactList;