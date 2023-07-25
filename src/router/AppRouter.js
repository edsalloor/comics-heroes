import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '../auth/pages';
import { HeroesRoutes } from '../heroes/routes';

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login/" element={<LoginPage />}/>
        <Route path="/*" element={<HeroesRoutes />}/>
      </Routes>
    </>
  )
}

export default AppRouter;
