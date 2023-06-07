import clsx from 'clsx';
import { Circles } from 'react-loader-spinner';
import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/selectors';
import UserMenu from 'components/UserMenu/UserMenu';
import Nav from 'components/Nav/Nav';
import css from './SharedLayout.module.css';

export const SharedLayout = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <div className={clsx(css.container)}>
      <header className={clsx(css.header)}>
        <NavLink to="/" className={clsx(css.homeLink)}>
          Phonebook
        </NavLink>
        {isLoggedIn ? <UserMenu /> : <Nav />}
      </header>
      <Suspense
        fallback={
          <div className={clsx(css.loader)}>
            <Circles
              height="50"
              width="50"
              color="#3dc7fd"
              ariaLabel="circles-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </div>
  );
};
