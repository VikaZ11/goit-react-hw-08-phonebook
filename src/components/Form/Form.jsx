// import PropTypes from 'prop-types';
// import { addContact } from '../../redux/contactsSlice';
import { useSelector, useDispatch } from 'react-redux';
import { addContacts } from 'redux/operations';
import { StyledForm, StyledLabel, StyledField, StyledBtn } from './Form.styled';

export function ContactForm() {
  const contacts = useSelector(state => state.contacts.contacts.items);
  const dispatch = useDispatch();

  const checkName = name => {
    return contacts.map(contact => contact.name).includes(name.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const {
      elements: { name, number },
    } = e.currentTarget;
    if (checkName(name)) {
      alert(`${name.value} is already exist in contacts.`);
      return;
    }

    const newContact = {
      name: name.value,
      phone: number.value,
    };

    dispatch(addContacts(newContact));
    name.value = '';
    number.value = '';
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledLabel>
        Name
        <StyledField
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces.
              For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </StyledLabel>
      <StyledLabel>
        Number
        <StyledField
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </StyledLabel>
      <StyledBtn type="submit">Add contacts</StyledBtn>
    </StyledForm>
  );
}

// ContactForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
