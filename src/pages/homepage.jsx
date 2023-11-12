import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectIsLoggedIn } from 'store/selectors';

const HomePage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className="container">
      <p>This app created on React course for GoIT</p>
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
