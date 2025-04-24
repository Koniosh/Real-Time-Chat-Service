import React from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import ProfilePage from '../pages/ProfilePage';
import SignUpPage from '../pages/SignUpPage';
import SettingsPage from '../pages/SettingsPage';

import { useAuthStore } from '../store/useAuthStore';

function AppRoute() {
  const { authUser, isCheckingAuth } = useAuthStore();

  // Show a loading spinner while authentication is being checked
  if (isCheckingAuth) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  const router = createBrowserRouter([
    { path: '/', element: authUser !== null ? <HomePage /> : <Navigate to="/login" /> },
    { path: '/signup', element: authUser === null ? <SignUpPage /> : <Navigate to="/" /> },
    { path: '/login', element: authUser === null ? <LoginPage /> : <Navigate to="/" /> },
    { path: '/settings',element: <SettingsPage />},
    { path: '/profile', element: authUser !== null ? <ProfilePage /> : <Navigate to="/login" /> },
  ]);

  return (
    <div>
      {/* Add NavBar or other layout components here */}
      <RouterProvider router={router} />
    </div>
  );
}

export default AppRoute;