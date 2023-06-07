import clsx from "clsx";
import { NavLink } from "react-router-dom";
import css from './Nav.module.css'

const Nav = () => {
    return (
      <nav className={clsx(css.nav)}>
        <NavLink to="/login" className={clsx(css.button)}>
          Log in
        </NavLink>
        <NavLink to="/registration" className={clsx(css.button)}>
          Sign up
        </NavLink>
      </nav>
    );
}

export default Nav;