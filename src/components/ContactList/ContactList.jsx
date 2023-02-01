import { Avatar, Flex, Text, Button } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { getContacts, getFilter } from 'redux/contacts/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/contacts/operations';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filterContacts = useSelector(getFilter);
  const dispatch = useDispatch();

  const getVisibleContacts = (contacts, filter) => {
    if (!filterContacts) {
      return contacts;
    }

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  const visibleContacts = getVisibleContacts(contacts, filterContacts);

  return (
    <>
      {visibleContacts.length !== 0 ? (
        visibleContacts.map(({ id, name, number }) => {
          return (
            <Flex
              key={id}
              justifyContent={'space-between'}
              alignItems={'center'}
              _notLast={{ paddingBottom: '16px' }}
            >
              <Avatar name={name} src="https://bit.ly/broken-link" />

              <Text display={'block'} width={'200px'}>
                {name}
              </Text>

              <Text>{number}</Text>

              <Button
                type="button"
                onClick={() => dispatch(deleteContacts(id))}
              >
                <DeleteIcon />
              </Button>
            </Flex>
          );
        })
      ) : (
        <Text textAlign={'center'} paddingTop="10px">
          The contact book is empty.
        </Text>
      )}
    </>
  );
};
