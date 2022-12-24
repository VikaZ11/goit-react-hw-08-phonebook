import styled from 'styled-components';
import PropTypes from 'prop-types';

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

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <Item key={id}>
            {name}: {number}
            <Button type="button" onClick={() => onDeleteContact(id)}>
              X{' '}
            </Button>
          </Item>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onDeleteContact: PropTypes.func.isRequired,
};
