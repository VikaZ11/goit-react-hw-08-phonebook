import styled from 'styled-components';
// import PropTypes from 'prop-types';
import { deleteContact } from '../../redux/contactsSlice';
import { useSelector, useDispatch } from 'react-redux';

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
  const contacts = useSelector(state => state.contacts.contacts.items);
  const filter = useSelector(state => state.contacts.contacts.filter);
  const dispatch = useDispatch();

  const getVisibleContacts = (contacts, filter) => {
    if (filter === '') {
      return contacts;
    }
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  }

  return (
    <ul>
      {getVisibleContacts(contacts, filter).map(({ id, name, number }) => {
        return (
          <Item key={id}>
            {name}: {number}
            <Button type="button" onClick={() => dispatch(deleteContact(id))}>
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
