import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';

const styles = {
  form: {
    width: 320,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

const initialState = { email: '', password: '' };

export default function LoginView() {
  const dispatch = useDispatch();
  const [state, setState] = useState(initialState);
  const { email, password } = state;

  const handleChange = ({ target: { name, value } }) => {
    setState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      dispatch(authOperations.logIn(state));
      setState(initialState);
    },
    [dispatch, state],
  );
  return (
    <div>
      <h1>Sign in</h1>

      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <label style={styles.label}>
          E-mail
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label style={styles.label}>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
