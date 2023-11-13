import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectIsLoggedIn } from 'store/selectors';

const HomePage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className="container py-5">
      <p className="h2">
        Welcome to <br />
        Save My Contacts
      </p>
      <p>
        Here you can save your contacts in case they are deleted for some reason
        from your device or account
      </p>
      {isLoggedIn ? (
        <p>
          {' '}
          <Link to={'/contacts'} className="btn btn-primary">
            To Contacts
          </Link>
        </p>
      ) : (
        <p>
          Please <Link to="/signin">signin</Link> or{' '}
          <Link to="/signup">signup</Link>
        </p>
      )}
    </div>
  );
};

export default HomePage;
