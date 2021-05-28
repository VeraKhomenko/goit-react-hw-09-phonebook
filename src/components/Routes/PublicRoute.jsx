import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
// import { Children } from 'react';

export default function PublicRoute({ children, ...routeProps }) {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);
  return (
    <Route {...routeProps}>
      {isLoggedIn && routeProps.restricted ? (
        <Redirect to="/contacts" />
      ) : (
        children
      )}
    </Route>
  );
}
