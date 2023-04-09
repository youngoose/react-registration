import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Navigate, RouterProvider, createHashRouter } from 'react-router-dom';
import NotFound from './pages/NotFound';
import FavoritePokemon from './pages/FavoritePokemon';
import Root from './pages/Root';
import BasicInfo from './pages/BasicInfo';
import FinalReview from './pages/FinalReview';

const router = createHashRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { path: '/', element: <Navigate to="/basic-info" replace /> },
      { path: '/basic-info', element: <BasicInfo /> },
      { path: '/favorite-pokemon', element: <FavoritePokemon /> },
      { path: '/review', element: <FinalReview /> },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
