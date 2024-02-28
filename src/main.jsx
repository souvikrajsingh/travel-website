import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Profile from './components/Profile-Page/Profile.jsx';
import SignInCard from './components/Profile-Page/SignInCard.jsx';
import SignUpCard from './components/Profile-Page/SignUpCard.jsx';
import Explore from './components/Explore-Page/Explore.jsx';
import Treks from './components/Treks-Page/Treks.jsx';

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
    // Explore Page
    path: '/Explore',
    element: (
      <Explore />
    ),
  },

  {
    // Treks Page
    path: '/Treks',
    element: (
      <Treks />
    ),
  },

  {
    // Profile Page
    path: '/Profile',
    element: (
      <Profile />
    ),
  },

  {
    // Sign in Page
    path: '/Profile/Signin',
    element: (
      <SignInCard />
    ),
  },

  {
    // Sign up Page
    path: '/Profile/Signup',
    element: (
      <SignUpCard />
    ),
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
