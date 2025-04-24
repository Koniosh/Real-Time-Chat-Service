import React, { use, useEffect } from 'react'

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import SignUpPage from './pages/SignUpPage';
import SettingsPage from './pages/SettingsPage';
import AppRoute from './routes/AppRoute';

import { useAuthStore } from './store/useAuthStore';

import {Loader} from "lucide-react"
import Navbar from './components/navbar';

function App() {

  // checkauth is a function that will check if the user is logged in or not 
  const { authUser, checkAuth , isCheckingAuth} = useAuthStore();

  // CROS Error possible (if yes changes need to be made in the backend)

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  // if the user is not logged in and the page is not login or signup
  if(isCheckingAuth && !authUser) {
    // icon in case of loading
    return (
      <div className='flex justify-center items-center h-screen'>
        <Loader className='animate-spin' />
      </div>
    );
  }


  return (
    <div >
      <AppRoute />
      <Navbar/>
    </div>
  );
}

export default App;