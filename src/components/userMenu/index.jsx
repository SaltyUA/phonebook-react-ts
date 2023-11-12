import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'store/auth/thunk';
import { selectUser } from 'store/selectors';

const UserMenu = () => {
  const { email } = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
  };
  return (
    <div className="d-flex">
      <p className="text-center m-2">{email}</p>
      <button type="button" className="btn btn-primary" onClick={handleLogOut}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
