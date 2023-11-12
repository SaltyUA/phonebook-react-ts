import { useState } from 'react';
import {
  FormContainer,
  FormWrap,
  LabelTypography,
  Input,
  SubmitButton,
} from './Form.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'store/selectors';
import { addContact } from 'store/contacts/thunks';

const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    const { name, value } = target;
    if (name === 'name') setName(value);
    else setNumber(value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    let isExist = contacts
      ? contacts.some(
          contact => contact.name.toLowerCase() === name.toLowerCase()
        )
      : false;
    if (isExist) {
      window.alert(`${name} is already in contacts`);
      return;
    }
    dispatch(addContact({ name, number }));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormWrap>
        <LabelTypography htmlFor="name">Name</LabelTypography>
        <Input
          onChange={handleChange}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </FormWrap>
      <FormWrap>
        <LabelTypography htmlFor="number">Number</LabelTypography>
        <Input
          onChange={handleChange}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </FormWrap>
      <SubmitButton type="submit">Add contact</SubmitButton>
    </FormContainer>
  );
};

export default Form;
