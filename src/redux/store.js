import { createStore } from 'redux';

const reducer = state => {
  return state;
};

const initialState = {
  contacts: [],
  filter: '',
};

const store = createStore(reducer, initialState);

export default store;
