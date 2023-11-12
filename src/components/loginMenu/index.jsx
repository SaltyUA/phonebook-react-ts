import { Link } from 'react-router-dom';

const LoginMenu = () => {
  return (
    <div className="btn-group" role="group" aria-label="Basic outlined example">
      <Link to={'/signin'} className="btn btn-outline-primary">
        SignIn
      </Link>
      <Link to={'/signup'} className="btn btn-outline-primary">
        SignUp
      </Link>
    </div>
  );
};

export default LoginMenu;
