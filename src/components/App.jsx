import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ContactForm } from './Form/Form';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { fetchContacts } from 'redux/operations';
import { getIsLoading, getError } from 'redux/selectors';

export function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList />
    </>
  );
}
// }
