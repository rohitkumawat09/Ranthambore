
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

import Home from './pages/Home.jsx';
import Register from './auth/Register.jsx';
import Login from './auth/Login.jsx';
import { First } from './First';
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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
