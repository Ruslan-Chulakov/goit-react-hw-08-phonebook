import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/authOperations';
import css from './Registration.module.css';

const Registration = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const userData = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };

    dispatch(authOperations.register(userData));
    e.target.reset();
  };

  return (
    <div>
      <form className={clsx(css.form)} onSubmit={handleSubmit}>
        <label className={clsx(css.label)}>
          Name
          <input
            className={clsx(css.input)}
            name="name"
            type="text"
            placeholder="User Name"
          />
        </label>
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
        <button className={clsx(css.signupButton)} type="submit">
          Sign up
        </button>
      </form>
    </div>
  );
};

export default Registration;
