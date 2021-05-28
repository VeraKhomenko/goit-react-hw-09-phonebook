import { useEffect, Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Container from './components/Container';

import AppBar from './components/AppBar';
import { authOperations } from './redux/auth';
import PrivateRoute from './components/Routes/PrivateRoute';
import PublicRoute from './components/Routes/PublicRoute';
import './styles.css';
import { SpinnerComponent } from 'react-element-spinner';

const HomeView = lazy(() => import('./components/views/HomeView'));
const RegisterView = lazy(() => import('./components/views/RegisterView'));
const LoginView = lazy(() => import('./components/views/LoginView'));
const ContactsView = lazy(() => import('./components/views/ContactsView'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [ dispatch ]);
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<SpinnerComponent />}>
        <Switch>
          <Route exact path="/" component={HomeView} />
          <PublicRoute restricted path="/register" component={RegisterView} />
          <PublicRoute restricted path="/login" component={LoginView} />
          <PrivateRoute path="/contacts" component={ContactsView} />
        </Switch>
      </Suspense>
    </Container>
  );
}
