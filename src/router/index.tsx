import { lazy } from 'react';
import App from '../App';
import NotFound from '@Pages/NotFound';
import { createBrowserRouter } from 'react-router-dom';

import { ROUTES_PATH } from '@Constants/routes';

const Home = lazy(() => import('@Pages/Home'));
const Hello = lazy(() => import('@Pages/Hello'));

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
    ],
  },
]);

export default router;
