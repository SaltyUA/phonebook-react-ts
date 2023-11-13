import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { selectIsLoggedIn, selectToken } from 'store/selectors';
import { selectError } from 'store/selectors';
import 'react-toastify/dist/ReactToastify.css';
import UserMenu from 'components/userMenu';
import LoginMenu from 'components/loginMenu';
import { refreshUser } from 'store/auth/thunk';
import Skeleton from 'react-loading-skeleton';

const SharedLayout = () => {
  const error = useSelector(selectError);
  const isLogged = useSelector(selectIsLoggedIn);
  const token = useSelector(selectToken);
  const dispatch = useDispatch();

  useEffect(() => {
    !isLogged && token && dispatch(refreshUser());
  }, [dispatch, isLogged, token]);

  useEffect(() => {
    error && toast.warning(error);
  }, [error]);

  return (
    <>
      <header className="container d-flex justify-content-around align-items-end pb-2 border-bottom">
        <Link
          to="/"
          className="h1 text-primary mb-0 rounded-bottom border border-primary border-top-0 p-2 border-3"
        >
          sMc
        </Link>
        {isLogged ? <UserMenu /> : <LoginMenu />}
      </header>
      <Suspense fallback={<Skeleton count={10} />}>
        <main className=" bg-primary bg-gradient bg-opacity-10">
          <Outlet />
        </main>
      </Suspense>
      <ToastContainer />
    </>
  );
};

export default SharedLayout;
