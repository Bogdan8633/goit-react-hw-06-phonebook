import PropTypes from 'prop-types';
import styles from './contactItem.module.css';

const ContactItem = ({ id, name, number, removeBook }) => {
  return (
    <li className={styles.item}>
      <p className={styles.name}>{name}:</p>
      <p className={styles.number}>{number}</p>
      <button
        type="button"
        className={styles.deleteBtn}
        onClick={() => removeBook(id)}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default ContactItem;
