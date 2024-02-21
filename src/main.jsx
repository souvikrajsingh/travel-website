import React from 'react';
import ReactDOM from 'react-dom'; // Add this line

import App from './App.jsx';
import SigninPage from './SigninPage.jsx';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    // Home Page
    path: '/',
    element: <App />
  },

  // {
  //   // Explore Page
  //   path: '/Explore',
  //   element: <ExplorePage />
  // },

  // {
  //   // Treks Page
  //   path: '/Treks',
  //   element: <TreksPage />
  // },

  // {
  //   // Be A Guide Page
  //   path: '/BeAGuide',
  //   element: <BeAGuidePage />
  // },

  {
    // Sign in Page
    path: '/Signin',
    element: <SigninPage />
  }
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
