import axios from 'axios';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactError,
  deleteContactSuccess,
  fetchContactsError,
  fetchContactsSuccess,
  fetchContactsRequest,
} from './actions';


axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const fetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());
  try {
    const { data } = await axios.get('/contacts');
    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error));
  }
};

const addContact = ({ name, number }) => async dispatch => {
  try {
    const allContacts = await axios.get('/contacts');

    if (
      allContacts.data.find(
        item => item.name.toLowerCase() === name.toLowerCase(),
      )
    ) {
      alert(`${name} is already in contacts`);
    } else {
      const newContact = { name, number };
      dispatch(addContactRequest());
      try {
        const { data } = await axios.post('/contacts', newContact);
        dispatch(addContactSuccess(data));
      } catch (error) {
        dispatch(addContactError(error));
      }
    }
  } catch (error) {
    dispatch(fetchContactsError(error));
  }
};

const deleteContact = idContact => async dispatch => {
  dispatch(deleteContactRequest());

  try {
    await axios.delete(`/contacts/${idContact}`);
    dispatch(deleteContactSuccess(idContact));
  } catch (error) {
    dispatch(deleteContactError(error));
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  addContact,
  deleteContact,
  fetchContacts,
};
