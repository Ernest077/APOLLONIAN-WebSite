import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import HomePage from './Pages/Home/HomePage';
import ErrorPage from './Pages/Error/ErrorPage';
import GiftsPage from './Pages/Gifts/GiftsPage';
import NewReleases from './Pages/NewReleases/NewReleases';
import LocationPage from './Pages/Location/LocationPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/gifts',
    element: <GiftsPage />,
  },
  {
    path: '/newreleases',
    element: <NewReleases />,
  },
  {
    path: '/location',
    element: <LocationPage />,
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

reportWebVitals();
