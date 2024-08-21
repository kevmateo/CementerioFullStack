import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { PATH_INICIO, PATH_INICIO_USUARIOS, PATH_ENTRADAS_USER, PATH_HISTORIAL_ENTRADAS } from '../routes/paths';

function AuthGuard({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem('access_token');
  const userRol = localStorage.getItem('userRole');
  const isAuthenticated = Boolean(token);
  const envRol = import.meta.env.VITE_ROL;

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/', { replace: true });
    } else {
      const adminRoutes = [PATH_INICIO, PATH_HISTORIAL_ENTRADAS];
      const userRoutes = [PATH_INICIO_USUARIOS, PATH_ENTRADAS_USER];

      if (userRol === envRol && !adminRoutes.includes(location.pathname)) {
        navigate(PATH_INICIO, { replace: true });
      } else if (userRol !== envRol && !userRoutes.includes(location.pathname)) {
        navigate(PATH_INICIO_USUARIOS, { replace: true });
      }
    }
  }, [isAuthenticated, userRol, envRol, navigate, location]);

  return isAuthenticated ? children : null;
}

export default AuthGuard;