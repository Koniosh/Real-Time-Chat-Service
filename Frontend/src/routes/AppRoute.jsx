// content of the AppRoute.jsx file
// 1. it has routes of all the pages that our applcation has

import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import ProfilePage from '../pages/ProfilePage';
import SignUpPage from '../pages/SignupPage';
import SettingsPage from '../pages/SettingsPage';

import { useAuthStore } from '../store/useAuthStore';


function AppRoute() {

    const {authUser} = useAuthStore();

    

  const router = createBrowserRouter([
    { path: '/', element:  authUser?<HomePage />:<Navigate to="/login" /> },
    { path: '/signup', element: !authUser ? <SignUpPage /> : <Navigate to="/" /> },
    { path: '/login', element: !authUser ?  <LoginPage /> : <Navigate to="/" /> },
    { path: '/settings', element: <SettingsPage /> },
    { path: '/profile', element: authUser? <ProfilePage /> : <Navigate to="/login" /> },
  ]);
  

  return (
    <div>
      NavBar
      <RouterProvider router={router} />
    </div>
  );
}

export default AppRoute;