import { FormContainer } from 'components/form/Form.styled';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from 'store/auth/thunk';

const SignUp = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const { name, email, password } = e.target.elements;
    const inputValues = {
      name: name.value,
      email: email.value,
      password: password.value,
    };

    dispatch(register(inputValues));
  };
  return (
    <>
      <h2 className="mb-4">SignUp</h2>
      <FormContainer onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input
            className="form-control"
            type="text"
            name="name"
            placeholder="name"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            E-mail
          </label>
          <input
            className="form-control"
            type="email"
            name="email"
            placeholder="name@example.com"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="password">
            Password
          </label>
          <input
            className="form-control"
            type="password"
            name="password"
            placeholder="********"
            required
          />
        </div>
        <Link to={'/signin'} className="mb-2 text-decoration-none fw-medium">
          SignIn
        </Link>
        <button className="btn btn-primary" type="submit">
          SignUp
        </button>
      </FormContainer>
    </>
  );
};

export default SignUp;
