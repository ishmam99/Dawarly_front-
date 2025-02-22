import { createContext, useState, useContext } from 'react';
import axios from '../api/axios';
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Retrieve user from localStorage on initial load
    console.log('csfrr')
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [token, setToken] = useState(() => {
    // Retrieve token from localStorage on initial load
    return localStorage.getItem('token') || null;
  });

  const csrf = () => axios.get('/sanctum/csrf/cookie');
  const login = async (phone, password) => {
    try {
        const response = await axios.post('/login', { phone, password });
        if (response) {
            setUser(response.data.user);
            setToken(response.data.token);
            // Save user and token to localStorage
            localStorage.setItem('user', JSON.stringify(response.data.user));
            localStorage.setItem('token', response.data.token);
      }
     
        return response // Return null if no error occurred
    } catch (error) {
        // Check if error.response exists and log the message
        if (error.response) {
            console.error('Error response:', error.response.data);
            return error.response; // Return the error message
        } else {
            console.error('Error message:', error.message);
            return 'An unexpected error occurred'; // Handle unexpected errors
        }
    }
  };

  const logout = async () => {
    try {
      console.log(localStorage.getItem('token'))
      try {
        const data = await axios.post('/logout');
        useNavigate().redirect('/login');
      } catch (esd)
      {
         console.log(esd)
      }
     
     
      setUser(null);
      setToken(null);
      // Remove user and token from localStorage
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  const register = async (userData) => {
    try {
      // await csrf();
      const response = await axios.post('/register', userData);
      setUser(response.data.user);
      setToken(response.data.token);
      // Save user and token to localStorage
      localStorage.setItem('user', JSON.stringify(response.data.user));
      localStorage.setItem('token', response.data.token);
    } catch (error) {
      console.error(error.response.data.message);
    }
  };
  const getUser = async () => {
    let user = localStorage.getItem('user')
   if(user)
   try {
    
     const response = await axios.get('/user-data')
      setUser(response.data.user)
    
      // Save user and token to localStorage
      localStorage.setItem('user', JSON.stringify(response.data.user))
     
   } catch (error) {
     console.log(error)
   }
 }
  return (
    <AuthContext.Provider value={{ user, token, login, logout, register ,getUser }}>
      {children}
    </AuthContext.Provider>
  );
};
export default function useAuthContext() {
    return useContext(AuthContext);
}
