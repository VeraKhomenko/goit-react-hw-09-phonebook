import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactForm from '../Form';
import ContactList from '../ContactList';
import Filter from '../Filter';
import contactsOperations from '../../redux/contactsOperations';
// import { fetchContacts } from '../../redux/contactsOperations';
import { getLoading, getError } from '../../redux/contactsSelectors';
import { SpinnerComponent } from 'react-element-spinner';

export default function ContactsView() {
  const isLoading = useSelector(getLoading);
  const dispatch = useDispatch();
  const isError = useSelector(getError);

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>

      <Filter />
      {isLoading && (
        <SpinnerComponent loading={true} position="global" />
      )}
      <h2>Contacts</h2>
      {isError && <h2>{isError}</h2>}
      <ContactList />
    </>
  );
}