// this file will manage all the global states related to authentication

import {create} from 'zustand';
import { axiosInstance } from '../lib/axios';

export const useAuthStore = create((set) => ({

     authUser: null,
     isSigningUp: false,
     isLoggingIn: false,
     isUpdatingProfile: false,
     
     isCheckingAuth: true,  // to check if the user is logged in or not while reload

     checkAuth: async () => {
          try {
               const res = await axiosInstance.get("/auth/check");
               set({authUser  :res.data});
          } catch (error) {
               console.error("Error checking authentication:", error);
               set({authUser : null});
          }finally {
               set({isCheckingAuth: false});
          }   
     },
}));