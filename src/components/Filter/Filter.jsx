import styled from 'styled-components';
import PropTypes from 'prop-types';

const Input = styled.input`
  display: block;
  margin-top: 5px;
  width: 300px;
  height: 30px;
  padding-left: 10px;
`;

export const Filter = ({ value, onChange }) => (
  <label>
    Filter by name:
    <Input type="text" value={value} onChange={onChange} />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
