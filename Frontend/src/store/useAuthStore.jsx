// this file will manage all the global states related to authentication

import { create } from 'zustand';
import { axiosInstance } from '../lib/axios';
import toast from 'react-hot-toast';

export const useAuthStore = create((set) => ({
     // using zustand we have made a global state for the authentication
     authUser: null,
     isSigningUp: false,
     isLoggingIn: false,
     isUpdatingProfile: false,

     isCheckingAuth: false,  // to check if the user is logged in or not while reload

     checkAuth: async () => {
          try {
               const res = await axiosInstance.get(" ");
               set({ authUser: res.data });

          } catch (error) {
               console.error("Error checking authentication:", error);
               set({ authUser: null });
          } finally {
               set({ isCheckingAuth: false });
          }
     },

     // the data in this will come from signup page if the form is valid 
     signup: async (data) => {
          set({ isSigningUp: true });
          try {
               const res = await axiosInstance.post("  ", data);
               set({ authUser: res.data });
               toast.success("Account Created Successfully");
          } catch (error) {
               toast.error("Something Went Wrong");
          } finally {
               set({ isSigningUp: false });
          }
     },

     login: async (data) => {
          set({ isLoggingIn: true });

          try {
               const res = await axiosInstance.post("  ", data);
               set({ authUser: res.data });
               toast.success("Logged in Successfully")

          } catch (error) {
               toast.error("Something went wrong");
          } finally {
               set({ isLoggingIn: false });
          }

     },

     // login out is very quick so we donot need a state for this 
     logout: async () => {
          try {
               await axiosInstance.post("   ");
               set({ authUser: null });
               toast.success("Logout Sucessfully");
          } catch (error) {
               toast.error("Something Went Wrong");
          }
     },


}));