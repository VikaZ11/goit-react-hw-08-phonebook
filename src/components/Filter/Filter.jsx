import styled from 'styled-components';
// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { changeFilter } from '../../redux/contactsSlice';

const Input = styled.input`
  display: block;
  margin-top: 5px;
  width: 300px;
  height: 30px;
  padding-left: 10px;
`;

export const Filter = () => {
  const filteredContacts = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <label>
      Filter by name:
      <Input
        type="text"
        value={filteredContacts}
        onChange={e => dispatch(changeFilter(e.target.value.toLowerCase()))}
      />
    </label>
  );
};

// Filter.propTypes = {
//   value: PropTypes.string,
//   onChange: PropTypes.func.isRequired,
// };
