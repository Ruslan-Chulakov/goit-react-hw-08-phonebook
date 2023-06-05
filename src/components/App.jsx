import { useEffect, lazy } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { getContacts} from 'redux/selectors';
import { fetchContacts } from 'redux/operations';

import { SharedLayout } from './SharedLayout/SharedLayout';
// import { Registration } from 'pages/Registration/Registration';
// import { Login } from 'pages/Login/Login';
// import { NotFound } from 'pages/NotFound/NotFound';

import css from './App.module.css';

const Phonebook = lazy(() => import('pages/Phonebook/Phonebook'));
const Registration = lazy(() => import('pages/Registration/Registration'));
const Login = lazy(() => import('pages/Login/Login'));
const NotFound = lazy(()=> import('pages/NotFound/NotFound'))
 

export const App = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts())
  },[dispatch])
  
  return (
    <BrowserRouter basename="goit-react-hw-08-phonebook">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Phonebook />} />
          <Route path="registration" element={<Registration />} />
          <Route path='login' element={<Login />} />
        <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>

    // <div className={clsx(css.container)}>
    //   <SharedLayout />
    //   <span className={clsx(css.titleSpan)}>
    //     <h1 className={clsx(css.title)}>Phonebook</h1>
    //   </span>
    //   <div>Phonebook aplication created for holding your contakts</div>
    //   {/* <ContactForm />
    //   {contacts.length !== 0 && (
    //     <span className={clsx(css.titleSpan)}>
    //       <h2 className={clsx(css.title)}>Contacts</h2>
    //     </span>
    //   )}
    //   {contacts.length > 2 && <Filter />}
    //   {contacts.length !== 0 && (
    //     <ContactList />
    //   )} */}
    // </div>
  );
};
