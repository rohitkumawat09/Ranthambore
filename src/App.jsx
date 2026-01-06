
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

import Home from './pages/Home.jsx';
import Register from './auth/Register.jsx';
import Login from './auth/Login.jsx';
import { First } from './First';
import AboutUs from './pages/AboutUs.jsx';
import Contactus from './pages/Contactus.jsx';
import Carboock from './pages/Carboock.jsx';
import SafariBooking from './pages/SafariBooking.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <First />, 
    children: [
      { index: true, element: <Home /> },           
            
         {
        path: "Register",
        element: <Register />,
      },

      {
        path: "Login",
        element: <Login />,
      },
      { path: 'AboutUs', element: <AboutUs /> },
      {
        path: 'Contactus', element: <Contactus />,
      }

      ,
      {
        path: 'Carboock', element: <Carboock />
      }
      ,
      {
path: 'SafariBooking', element: <SafariBooking />
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
