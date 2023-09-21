import React from 'react';
import { ListItem, Button } from '../ContactList.styled';
import { useDeleteContactFromFilterMutation } from 'redux/contactsapi';
import Notiflix from 'notiflix';


function ContactItem({ id, name, number }) {


  const [deleteContactFromFilter] = useDeleteContactFromFilterMutation();

  const removeContact = async () => {
    try {

      await deleteContactFromFilter(id);
      
      Notiflix.Notify.success("Successful")
    } catch (error) {
      Notiflix.Notify.failure("Error");
    }
  };
  return (
    <ListItem key={id}>
      {name}: {number}
      <Button onClick={() => removeContact(id)}>Delete</Button>
    </ListItem>
  );
}

export default ContactItem;
