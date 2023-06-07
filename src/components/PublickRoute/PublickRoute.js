import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/selectors';

const PublickRoute = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return !isLoggedIn ? <Outlet /> : <Navigate to="/" />;
};

export default PublickRoute;
