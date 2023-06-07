import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/authOperations';
import css from './Login.module.css'

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
      <form className={clsx(css.form)} onSubmit={handleSubmit}>
        <label className={clsx(css.label)}>
          Email
          <input
            className={clsx(css.input)}
            name="email"
            type="email"
            placeholder="user@mail.com"
          />
        </label>
        <label className={clsx(css.label)}>
          Password
          <input
            className={clsx(css.input)}
            name="password"
            type="password"
            placeholder="password"
          />
        </label>
        <button className={clsx(css.loginButton)} type="submit">
          Log in
        </button>
      </form>
    </div>
  );
};

export default Login;
