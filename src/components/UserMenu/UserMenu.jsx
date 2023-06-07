import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import authOperations from 'redux/authOperations';
import { getIsLoggedIn, getUserName } from 'redux/selectors';
import css from './UserMenu.module.css'

const UserMenu = () => {
  const userName = useSelector(getUserName)
  const isLoggedIn = useSelector(getIsLoggedIn)
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(authOperations.logout())
  }

  return (
    <div className={clsx(css.userMenu)}>
      {(isLoggedIn && userName) && <p className={clsx(css.name)}>{userName}</p>}
      <button type="button" onClick={handleClick} className={clsx(css.button)}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
