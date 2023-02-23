import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import MyContactsForm from './MyContactsForm/MyContactsForm';
import MyContactList from './MyContactList/MyContactList';
import MyContactsFilter from './MyContactsFilter/MyContactsFilter';

import { addContact, deleteContact } from '../../redux/actions';

const MyContacts = () => {
  const contacts = useSelector(store => store.contacts);
  const [filter, setFilter] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem('my-contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = ({ name, number }) => {
    const normalaizedName = name.toLowerCase();

    if (
      contacts.find(contact => contact.name.toLowerCase() === normalaizedName)
    ) {
      alert(`${name} is already in contacts`);
      return false;
    }

    const action = addContact({ name, number });
    dispatch(action);
  };

  const handleDeleteContact = id => {
    const action = deleteContact(id);
    dispatch(action);
  };

  // const deleteContact = id => {
  //   setContacts(prevContacts =>
  //     prevContacts.filter(contact => contact.id !== id)
  //   );
  // };

  const changeFilter = e => {
    setFilter(e.target.value);
  };

  const getVisibleContacts = () => {
    if (!filter) {
      return contacts;
    }

    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();
  const isContacts = Boolean(visibleContacts.length);

  return (
    <div>
      <h1>Phonebook</h1>
      <MyContactsForm onSubmit={handleAddContact} />
      <h2>Contacts</h2>
      <MyContactsFilter value={filter} onChange={changeFilter} />
      {isContacts && (
        <MyContactList
          contacts={visibleContacts}
          removeBook={handleDeleteContact}
        />
      )}
      {!isContacts && <p>No contacts in list, yet</p>}
    </div>
  );
};

export default MyContacts;
