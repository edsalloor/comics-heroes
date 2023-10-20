import AuthProvider from './auth/context/AuthProvider';
import AppRouter from './router/AppRouter';

const ComicsHeroesApp = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  )
};

export default ComicsHeroesApp;
