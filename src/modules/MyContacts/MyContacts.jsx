import { useSelector, useDispatch } from 'react-redux';

import MyContactsForm from './MyContactsForm/MyContactsForm';
import MyContactList from './MyContactList/MyContactList';
import MyContactsFilter from './MyContactsFilter/MyContactsFilter';

// import { deleteContact } from '../../redux/contacts/contacts-slice';
import { setFilter } from '../../redux/filter/filter-slice';

// import { getFilteredContacts } from '../../redux/contacts/contacts-selectors';
import { getFilter } from '../../redux/filter/filter-selectors';

const MyContacts = () => {
  // const filteredContacts = useSelector(getFilteredContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  // const handleAddContact = ({ name, number }) => {
  //   const normalaizedName = name.toLowerCase();

  //   if (
  //     allContacts.find(
  //       contact => contact.name.toLowerCase() === normalaizedName
  //     )
  //   ) {
  //     alert(`${name} is already in contacts`);
  //     return false;
  //   }

  //   dispatch(addContact({ name, number }));
  // };

  // const handleDeleteContact = id => {
  //   dispatch(deleteContact(id));
  // };

  const handleFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  // const isContacts = Boolean(filteredContacts.length);

  return (
    <div>
      <h1>Phonebook</h1>
      <MyContactsForm />
      <h2>Contacts</h2>
      <MyContactsFilter value={filter} onChange={handleFilter} />
      <MyContactList />
    </div>
  );
};

export default MyContacts;

///////////////Ось так все було і все працювало чудово/////////////////////////
// import { useSelector, useDispatch } from 'react-redux';

// import MyContactsForm from './MyContactsForm/MyContactsForm';
// import MyContactList from './MyContactList/MyContactList';
// import MyContactsFilter from './MyContactsFilter/MyContactsFilter';

// import { addContact, deleteContact } from '../../redux/contacts/contacts-slice';
// import { setFilter } from '../../redux/filter/filter-slice';

// import {
//   getAllContacts,
//   getFilteredContacts,
// } from '../../redux/contacts/contacts-selectors';
// import { getFilter } from '../../redux/filter/filter-selectors';

// const MyContacts = () => {
//   const filteredContacts = useSelector(getFilteredContacts);
//   const allContacts = useSelector(getAllContacts);
//   const filter = useSelector(getFilter);

//   const dispatch = useDispatch();

//   const handleAddContact = ({ name, number }) => {
//     const normalaizedName = name.toLowerCase();

//     if (
//       allContacts.find(
//         contact => contact.name.toLowerCase() === normalaizedName
//       )
//     ) {
//       alert(`${name} is already in contacts`);
//       return false;
//     }

//     dispatch(addContact({ name, number }));
//   };

//   const handleDeleteContact = id => {
//     dispatch(deleteContact(id));
//   };

//   const handleFilter = ({ target }) => {
//     dispatch(setFilter(target.value));
//   };

//   const isContacts = Boolean(filteredContacts.length);

//   return (
//     <div>
//       <h1>Phonebook</h1>
//       <MyContactsForm onSubmit={handleAddContact} />
//       <h2>Contacts</h2>
//       <MyContactsFilter value={filter} onChange={handleFilter} />
//       {isContacts && (
//         <MyContactList
//           contacts={filteredContacts}
//           removeBook={handleDeleteContact}
//         />
//       )}
//       {!isContacts && <p>No contacts in list, yet</p>}
//     </div>
//   );
// };

// export default MyContacts;
