import { FormContainer } from 'components/form/Form.styled';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logIn } from 'store/auth/thunk';

const SignIn = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    const inputValues = {
      email: email.value,
      password: password.value,
    };

    dispatch(logIn(inputValues));
  };

  return (
    <>
      <h2 className="mb-4">SignIn</h2>
      <FormContainer onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            E-mail
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="name@example.com"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="********"
            required
          />
        </div>
        <Link to={'/signup'} className="mb-2 text-decoration-none fw-medium">
          SignUp
        </Link>
        <button type="submit" className="btn btn-primary">
          SignIn
        </button>
      </FormContainer>
    </>
  );
};

export default SignIn;
