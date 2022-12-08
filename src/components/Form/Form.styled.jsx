import styled from 'styled-components';
import { Form, Field} from 'formik';


export const StyledForm = styled(Form)`
  border: 1px solid #2a2a2a;
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: fit-content;
`;

export const StyledLabel = styled.label`
  margin-bottom: 10px;
`;

export const StyledField = styled(Field)`
  display: block;
  margin-top: 5px;
  width: 300px;
  height: 30px;
  padding-left: 10px;
`;

export const StyledBtn = styled.button`
  width: 100px;
  border: 1px solid #2a2a2a;
  border-radius: 3px;
  padding: 5px;
  margin: 0 auto;

  :hover, :focus {
background-color: white;
  }
`;
