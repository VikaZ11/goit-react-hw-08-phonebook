import styled from 'styled-components';
// import PropTypes from 'prop-types';
// import { deleteContact } from '../../redux/contactsSlice';
import { getContacts, getFilter } from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/operations';

const Item = styled.li`
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

const Button = styled.button`
  margin-left: 8px;
  width: 30px;
  border: 1px solid #2a2a2a;
  border-radius: 7px;
  padding: 3px;
  background-color: #ff000029;
  :hover,
  :focus {
    background-color: #ff000067;
  }
`;

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
    <ul>
      {visibleContacts.map(({ id, name, phone }) => {
        return (
          <Item key={id}>
            {name}: {phone}
            <Button type="button" onClick={() => dispatch(deleteContacts(id))}>
              X
            </Button>
          </Item>
        );
      })}
    </ul>
  );
};

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(PropTypes.object),
//   onDeleteContact: PropTypes.func.isRequired,
// };
