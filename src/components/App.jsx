
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { useSelector } from 'react-redux';



export function App() {


  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm  />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}

export default App;
