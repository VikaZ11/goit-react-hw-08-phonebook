import { useSelector, useDispatch } from 'react-redux';
import { Input, FormLabel, Button, FormControl } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';
import { addContacts } from 'redux/contacts/operations';
import { getContacts } from 'redux/contacts/selectors';

export function ContactForm() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const toast = useToast();

  const checkName = name => {
    return contacts.map(contact => contact.name).includes(name.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const {
      elements: { name, number },
    } = e.currentTarget;
    if (checkName(name)) {
      toast({
        title: `${name.value} is already exist in contacts.`,
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
      });
      name.value = '';
      number.value = '';
      return;
    }

    const newContact = {
      name: name.value,
      number: number.value,
    };

    dispatch(addContacts(newContact));
    name.value = '';
    number.value = '';
    toast({
      title: 'Contact added.',
      status: 'success',
      duration: 3000,
      isClosable: true,
      position: 'top-right',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl width="400px" margin={'0 auto'} paddingBottom="16px">
        <FormLabel>
          Name
          <Input
            placeholder="Jacob Mercer"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces.
              For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            isRequired
          />
        </FormLabel>
      </FormControl>

      <FormControl width="400px" margin={'0 auto'} paddingBottom="16px">
        <FormLabel>
          Number
          <Input
            placeholder="+123-456-789"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            isRequired
          />
        </FormLabel>
      </FormControl>
      <Button type="submit" margin={'0 auto'} width="300px" display={'block'}>
        Add contacts
      </Button>
    </form>
  );
}
