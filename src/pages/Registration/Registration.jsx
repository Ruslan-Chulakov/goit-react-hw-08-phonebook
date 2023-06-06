import { useDispatch, useSelector } from 'react-redux';
import authOperations from 'redux/authOperations';

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
      <form action="" onSubmit={handleSubmit}>
        <input name="name" type="text" />
        <input name="email" type="email" />
        <input name="password" type="password" />
        <button type="submit">Registr</button>
      </form>
    </div>
  );
};

export default Registration;
