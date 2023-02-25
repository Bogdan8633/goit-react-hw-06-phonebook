import { useSelector } from 'react-redux';

import ContactItem from './ContactItem/ContactItem';
import styles from './myContactList.module.css';
import { getFilteredContacts } from 'redux/contacts/contacts-selectors';

const MyContactList = () => {
  const filteredContacts = useSelector(getFilteredContacts);

  const isContacts = Boolean(filteredContacts.length);

  return (
    <div>
      {isContacts && (
        <ul className={styles.list}>
          {filteredContacts.map(({ id, name, number }) => (
            <ContactItem key={id} id={id} name={name} number={number} />
          ))}
        </ul>
      )}
      {!isContacts && <p>No contacts in list, yet</p>}
    </div>
  );
};

export default MyContactList;

//////////////Було все ось так і чудово працювало////////////////////

// import PropTypes from 'prop-types';

// import ContactItem from './ContactItem/ContactItem';
// import styles from './myContactList.module.css';

// const MyContactList = ({ contacts, removeBook }) => {
//   return (
//     <ul className={styles.list}>
//       {contacts.map(({ id, name, number }) => (
//         <ContactItem
//           key={id}
//           id={id}
//           name={name}
//           number={number}
//           removeBook={removeBook}
//         />
//       ))}
//     </ul>
//   );
// };

// MyContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     }).isRequired
//   ).isRequired,
//   removeBook: PropTypes.func.isRequired,
// };

// export default MyContactList;
