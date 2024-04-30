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
import AddTouristsSpot from './component/AddTourist/AddTouristsSpot';
import PrivateRoute from './component/private/PrivateRoute';
import TourCard from './component/TourCard';
import ViewDetails from './component/ViewDetails';
import TourSpot from './component/TourSpot';
import MyListPage from './component/MyListPage/Mylistpage';
import MyList from './component/MyListPage/MyList';
import Update from './component/MyListPage/Update';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roote></Roote>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/touristsSpots')
      },
      {
        path: "/myList",
        element: <MyListPage></MyListPage>,
        loader: () => fetch('http://localhost:5000/touristsSpots')
      },
      {
        path: "/AddTouristsSpot",
        element: <PrivateRoute><AddTouristsSpot></AddTouristsSpot></PrivateRoute>
      },
      {
        path: "/viewDetails/:id",
        element: <PrivateRoute> <ViewDetails></ViewDetails> </PrivateRoute>,
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/tourCard",
        element: <TourCard></TourCard>
      },      
      {
        path: "/tourSpot",
        element: <TourSpot></TourSpot>
      },
      {
        path: "/myListe",
        element: <MyList></MyList>
      },
      {
        path: "/update/:id",
        element: <Update></Update>,
        loader: ({params}) => fetch(`http://localhost:5000/touristsSpots${params.id}`)
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
