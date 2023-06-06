import clsx from 'clsx';
import UserMenu from 'components/UserMenu/UserMenu';
import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/selectors';
import css from './SharedLayout.module.css';

export const SharedLayout = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

    return (
      <div className={clsx(css.container)}>
        <header className={clsx(css.header)}>
          <NavLink to="/" className={clsx(css.homeLink)}>
            Phonebook
          </NavLink>
          {isLoggedIn ? (
            <UserMenu />
          ) : (
            <nav className={clsx(css.nav)}>
              <NavLink to="/login" className={clsx(css.navLink)}>
                Log in
              </NavLink>
              <NavLink to="/registration" className={clsx(css.navLink)}>
                Sign up
              </NavLink>
            </nav>
          )}
        </header>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    );
};
