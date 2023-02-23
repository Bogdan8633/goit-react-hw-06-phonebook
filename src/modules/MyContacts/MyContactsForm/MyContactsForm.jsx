import React, { useState } from 'react';
import PropTypes from 'prop-types';

import initialState from './initialState';

import styles from './myContactsForm.module.css';

const MyContactsForm = ({ onSubmit }) => {
  const [state, setState] = useState({ ...initialState });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    const newValue = value;
    setState(prevState => {
      return { ...prevState, [name]: newValue };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state });
    setState({ ...initialState });
  };

  const { name, number } = state;
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        value={name}
        onChange={handleChange}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <input
        value={number}
        onChange={handleChange}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button type="submit" className={styles.button}>
        Add contact
      </button>
    </form>
  );
};
export default MyContactsForm;

MyContactsForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
