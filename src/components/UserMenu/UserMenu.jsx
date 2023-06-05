import clsx from 'clsx';
import css from './UserMenu.module.css'

const UserMenu = () => {
  return (
    <div className={clsx(css.userMenu)}>
      <p>user@mail.com</p>
      <button>Logout</button>
    </div>
  );
};

export default UserMenu;
