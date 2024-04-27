import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Roote from './component/roote/Roote';
import Home from './component/Home/Home';
import Login from './component/login/Login';
import Register from './component/register/Register';
import AuthProvider from './component/AuthProvider/AuthProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roote></Roote>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)