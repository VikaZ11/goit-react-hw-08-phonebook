import { useSelector, useDispatch } from 'react-redux';
import { FormLabel, Input } from '@chakra-ui/react';
import { getFilter } from 'redux/contacts/selectors';
import { changeFilter } from '../../redux/contacts/contactsSlice';

export const Filter = () => {
  const filteredContacts = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <FormLabel>
      Enter name:
      <Input
        type="text"
        value={filteredContacts}
        onChange={e => dispatch(changeFilter(e.target.value.toLowerCase()))}
      />
    </FormLabel>
  );
};
