import { useEffect, lazy } from 'react';
import {  useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublickRoute from './PublickRoute/PublickRoute';
import authOperations from 'redux/authOperations';
import { SharedLayout } from './SharedLayout/SharedLayout';

const Phonebook = lazy(() => import('pages/Phonebook/Phonebook'));
const Registration = lazy(() => import('pages/Registration/Registration'));
const Login = lazy(() => import('pages/Login/Login'));
const NotFound = lazy(()=> import('pages/NotFound/NotFound'))
 

export const App = () => {
  const dispatch = useDispatch();
  
   useEffect(() => {
     dispatch(authOperations.refreshCurrentUser());
   }, [dispatch]);
  
  return (
    <BrowserRouter basename="goit-react-hw-08-phonebook">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Phonebook />} />
          </Route>
          <Route element={<PublickRoute />}>
            <Route path="registration" element={<Registration />} />
            <Route path="login" element={<Login />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
