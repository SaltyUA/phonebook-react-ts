import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'store/selectors';

const PublicGuard = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return !isLoggedIn ? children : <Navigate to={'/'} />;
};

export default PublicGuard;
