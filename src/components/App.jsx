import { Navigate, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import PublicGuard from 'guards/publicGuard';
import PrivateGuard from 'guards/privateGuard';
import { lazy } from 'react';
import SharedLayout from './sharedLayout';

const Homepage = lazy(() => import('../pages/homepage'));
const SignIn = lazy(() => import('../pages/signin'));
const SignUp = lazy(() => import('../pages/signup'));
const Contacts = lazy(() => import('../pages/contacts'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Homepage />} />
        <Route
          path="signin"
          element={
            <PublicGuard>
              <SignIn />
            </PublicGuard>
          }
        />
        <Route
          path="signup"
          element={
            <PublicGuard>
              <SignUp />
            </PublicGuard>
          }
        />
        <Route
          path="contacts"
          element={
            <PrivateGuard>
              <Contacts />
            </PrivateGuard>
          }
        />
      </Route>
      <Route path="*" element={<Navigate to={'/'} />} />
    </Routes>
  );
};

export default App;
