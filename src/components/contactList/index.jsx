import ContactItem from 'components/contactItem';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from 'store/selectors';
import FilterInput from 'components/filterInput';
import { useEffect } from 'react';
import { fetchAllContacts } from 'store/contacts/thunks';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  return (
    <>
      <FilterInput />
      {contacts.length > 0 ? (
        <ul className="d-flex flex-column justify-content-center align-items-center gap-2">
          {contacts.map(({ id, name, number }) => (
            <ContactItem name={name} key={id} number={number} id={id} />
          ))}
        </ul>
      ) : (
        <p>Have no any contacts</p>
      )}
    </>
  );
};

export default ContactList;
