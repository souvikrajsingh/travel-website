import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import SigninPage from './SigninPage.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    // Home Page
    path: '/',
    element: (
      <App />
    ),
  },
  
  {
    // Sign in Page
    path: '/Signin',
    element: (
      <SigninPage />
    ),
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
