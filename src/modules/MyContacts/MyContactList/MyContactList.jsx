import PropTypes from 'prop-types';

import ContactItem from './ContactItem/ContactItem';
import styles from './myContactList.module.css';

const MyContactList = ({ contacts, removeBook }) => {
  return (
    <ul className={styles.list}>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          removeBook={removeBook}
        />
      ))}
    </ul>
  );
};

MyContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default MyContactList;
