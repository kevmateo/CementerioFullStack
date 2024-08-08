import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { PATH_INICIO, PATH_INICIO_USUARIOS } from '../routes/paths';

function AuthGuard({ children }) {
  const navigate = useNavigate();
  const token = localStorage.getItem('access_token');
  const userRol = localStorage.getItem('userRole');
  const isAuthenticated = Boolean(token);
  const envRol = import.meta.env.VITE_ROL;

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/');
    } else if (isAuthenticated && userRol === envRol) {
      navigate(PATH_INICIO);
    } else if (isAuthenticated && userRol !== envRol) {
      navigate(PATH_INICIO_USUARIOS);
    }
  }, [isAuthenticated, userRol, envRol, navigate]);

  return isAuthenticated ? children : null;
}

export default AuthGuard;