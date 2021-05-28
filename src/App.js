import { Component, Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Container from './components/Container';

import AppBar from './components/AppBar';
import { authOperations } from './redux/auth';
import PrivateRoute from './components/Routes/PrivateRoute';
import PublicRoute from './components/Routes/PublicRoute';
import './styles.css';
import { SpinnerComponent } from 'react-element-spinner';

// import ContactList from './components/ContactList';
// import Form from './components/Form';
// import { contactsOperations, contactsSelectors } from './redux';
// import Filter from './components/Filter';


const HomeView = lazy(() => import('./components/views/HomeView'));
const RegisterView = lazy(() => import('./components/views/RegisterView'));
const LoginView = lazy(() => import('./components/views/LoginView'));
const ContactsView = lazy(() => import('./components/views/ContactsView'));


class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }
  render() {
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
}
const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
