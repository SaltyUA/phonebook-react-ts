import ContactList from 'components/contactList';
import Form from 'components/form';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { selectIsLoggedIn } from 'store/selectors';

const Contacts = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    !isLoggedIn && navigate('/');
  }, [isLoggedIn, navigate]);

  return (
    <div>
      <h2 className="text-primary mb-4">Add contact</h2>
      <Form />
      <h2 className="text-primary mb-4 mt-4">Contacts</h2>
      <ContactList />
      <ToastContainer />
    </div>
  );
};

export default Contacts;
