import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Profile from './Profile.jsx';
import SignInCard from './components/SigninCard.jsx';
import SignUpCard from './components/SignUpCard.jsx';

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
