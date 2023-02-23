import PropTypes from 'prop-types';

import styles from './myContactsFilter.module.css';

const MyContactsFilter = ({ value, onChange }) => (
  <div className={styles.wrapper}>
    <label className={styles.label} htmlFor="filter">
      Find contacts by name
    </label>
    <input type="text" name="filter" value={value} onChange={onChange} />
  </div>
);

export default MyContactsFilter;

MyContactsFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
