"use client";

import { useState, useEffect, createContext, useContext } from 'react';

import axiosInstance from '@libs/axios/axiosInstance';

const UserContext = createContext();

export function useUserData() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error(contextError);
  }

  return context;
};


export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await axiosInstance.get("/users/me?populate=*");

        return res.data;
      } catch (error) {
        let errorMessage = "";

        if (error.response) {
          const { status, data } = error.response;

          if (status === 400 || status === 429) {
            const serverErrorMessage = data?.error?.message || errorMessage;

            errorMessage = serverErrorMessage;
          } else {
            errorMessage = data;
          }
        } else {
          errorMessage = error.message || "Something went wrong. Please try again.";
        }

        return errorMessage;
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  return (
    <UserContext.Provider value={{ user, loading, error }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
