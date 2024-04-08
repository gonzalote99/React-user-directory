import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import { UsersProvider } from './context/UsersContext';
import UserList from './routes/UserList';
import UserDetails from './routes/UserDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <UserList/>,
  },
  {
    path: '/:id',
    element: <UserDetails />,
  },
  
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <UsersProvider>
  <RouterProvider router={router} />
  </UsersProvider>
  </React.StrictMode>
)