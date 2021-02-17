import { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';

import s from './App.module.css';

import Container from './components/Container';
import Filter from './components/Filter';
import AddContactForm from './components/AddContactForm';
import ContactsList from './components/ContactsList';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const storagedTodos = localStorage.getItem('userContacts');
    if (storagedTodos) {
      setContacts(JSON.parse(storagedTodos));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('userContacts', JSON.stringify(contacts));
  }, [contacts]);
  const onAddContact = ({ name, number }) => {
    const contact = {
      id: uuid(),
      name: name,
      number: number,
    };
    const existElement = contacts.find(el => el.name === name);
    existElement
      ? alert(`${name} has already exist`)
      : setContacts(prevContacts => [...prevContacts, contact]);
  };
  const onChangeFilter = e => {
    setFilter(e.currentTarget.value);
  };
  const onDeleteButton = id => {
    setContacts(prevContacts => prevContacts.filter(el => el.id !== id));
  };
  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };
  return (
    <Container>
      <h1 className={s.mainHeading}>Phonebook</h1>
      <AddContactForm onAddContact={onAddContact} />
      <h2>Contacts: </h2>
      <Filter onChangeFilter={onChangeFilter} />
      <ContactsList
        visibleContacts={getVisibleContacts()}
        onDeleteButton={onDeleteButton}
      />
    </Container>
  );
};

export default App;
