// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import { RouterProvider } from 'react-router-dom';

// import './index.css';
// import router from './routes/routes';

// createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import { RouterProvider } from 'react-router-dom'
import router from './routes/routes';
import { AuthProvider } from './context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
)
