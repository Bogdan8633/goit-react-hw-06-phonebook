import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
// import { ADD_CONTACT, DELETE_CONTACT } from './contacts-types';

export const addContact = createAction('contacts/add', data => {
  return {
    payload: {
      ...data,
      id: nanoid(),
    },
  };
});

export const deleteContact = createAction('contacts/delete');
