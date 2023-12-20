import { useReducer } from 'react';
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';
import { types } from '../types/types';

const init = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const isUserLogged = !!user;

  return isUserLogged
    ? {
      logged: isUserLogged,
      user
    } : { logged: isUserLogged };
};

const AuthProvider = ({ children }) => {
  const [ authState, dispatch ] = useReducer(authReducer, {}, init);

  const login = (name='') => {
    const user = {
      id: 'ABC',
      name
    };

    const action = {
      type: types.login,
      payload: user
    };

    localStorage.setItem('user', JSON.stringify(user));

    dispatch(action);
  };

  return (
    <AuthContext.Provider value={{ login, ...authState }}>
      { children }
    </AuthContext.Provider>
  )
}

export default AuthProvider;
