import { useDispatch } from 'react-redux';
import authOperations from 'redux/authOperations';

const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const userData = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    dispatch(authOperations.login(userData));
    e.target.reset();
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input name="email" type="email" />
        <input name="password" type="password" />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default Login;
