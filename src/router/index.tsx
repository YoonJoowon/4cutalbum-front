import { lazy } from 'react';
import App from '../App';
import NotFound from '@Pages/NotFound';
import { createBrowserRouter } from 'react-router-dom';

import { ROUTES_PATH } from '@Constants/routes';

const Home = lazy(() => import('@Pages/Home'));
const Hello = lazy(() => import('@Pages/Hello'));
const Create = lazy(() => import('@Pages/Create/Create'));

const router = createBrowserRouter([
  {
    path: ROUTES_PATH.home,
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: ROUTES_PATH.hello,
        element: <Hello />,
      },
      {
        path: ROUTES_PATH.create,
        element: <Create />,
      },
    ],
  },
]);

export default router;
