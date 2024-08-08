import { lazy, Fragment, Suspense } from 'react';
import { Route, Outlet } from 'react-router-dom';
import { PATH_INICIO, PATH_HISTORIAL_ENTRADAS, PATH_INICIO_USUARIOS, PATH_ENTRADAS_USER } from './paths';

export const renderRoutes = (routes) => {
  return routes.map((route, index) => {
    const Component = route.element ? lazy(() => route.element()) : Fragment;
    const Layout = route.layout ? lazy(() => route.layout()) : Fragment;
    const Guard = route.guard ? lazy(() => route.guard()) : Fragment;
    
    return (
      <Route
        key={index}
        path={route.path}
        element={
          <Suspense fallback={<h1>Loading...</h1>}>
            <Guard>
              <Layout>
                {route.children ? <Outlet /> : <Component />}
              </Layout>
            </Guard>
          </Suspense>
        }
      >
        {route.children && renderRoutes(route.children)}
      </Route>
    )
  })
}

export const routes = [
  {
    path: "/",
    element: () => import('../pages/Home'),
  },
  {
    layout: () => import('../layouts/AppLayout'),
    guard: () => import('../guards/AuthGuard'),
    children: [
      {
        path: PATH_INICIO,
        element: () => import('../pages/InicioAdministrador'),
      },
      {
        path: PATH_HISTORIAL_ENTRADAS,
        element: () => import('../pages/HistorialEntradas'),
      },
      {
        path: PATH_INICIO_USUARIOS,
        element: () => import('../pages/InicioUsuarios'),
      },
      {
        path: PATH_ENTRADAS_USER,
        element: () => import('../pages/EntradasUser'),
      }
    ]
  }
]

export default renderRoutes;