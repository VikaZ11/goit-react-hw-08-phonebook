import { useState } from 'react';
import PropTypes from 'prop-types';
import { StyledForm, StyledLabel, StyledField, StyledBtn } from './Form.styled';
// import { Formik, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import styled from 'styled-components';

export function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(name, number);
    setName('');
    setNumber('');
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledLabel>
        Name
        <StyledField
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
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
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </StyledLabel>
      <StyledBtn type="submit">Add contacts</StyledBtn>
    </StyledForm>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

// const ErrorText = styled.p`
//   color: red;
// `;

// const FormError = ({ name }) => {
//   return (
//     <ErrorMessage
//       name={name}
//       render={message => <ErrorText>{message}</ErrorText>}
//     />
//   );
// };

// const validationSchema = Yup.object({
//   name: Yup.string().required('Please enter the name'),
//   number: Yup.string().required('Please enter the number'),
// });

// const initialValues = {
//   name: '',
//   number: '',
// };

// export class ContactForm extends Component {
//   handleSubmit = ({name, number}, { resetForm }) => {
//     this.props.onSubmit(name, number);
//     resetForm();
//   };

//   render() {
//     return (
//       <Formik
//         initialValues={initialValues}
//         onSubmit={this.handleSubmit}
//         validationSchema={validationSchema}
//       >
//         <StyledForm>
//           <StyledLabel>
//             Name
//             <StyledField
//               type="text"
//               name="name"
//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Name may contain only letters, apostrophe, dash and spaces.
//               For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//               required
//             />
//             <FormError name="name" />
//           </StyledLabel>
//           <StyledLabel>
//             Number
//             <StyledField
//               type="tel"
//               name="number"
//               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//               title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//               required
//             />
//             <FormError name="number" />
//           </StyledLabel>
//           <StyledBtn type="submit">Add contact</StyledBtn>
//         </StyledForm>
//       </Formik>
//     );
//   }
// }

