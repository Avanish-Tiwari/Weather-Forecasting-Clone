
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import WeatherDetails from './components/WeatherDetails.jsx';
import Error from './components/Error.jsx';
import Home from './components/Home.jsx';

//Header 
    // Search
// Home page 
  // Weather Details Page


  const router = createBrowserRouter([
    {
      path: "/",
      element:<App />,
      errorElement: <Error />,
      children: [
        {
          index: true, // This makes Home the default child route for "/"
          element: <Home />,
        },
        {
          path: "city", // No need to add a leading "/" here
          element: <WeatherDetails />,
        },
      ],
    },
  ]);
  
  export default router;
createRoot(document.getElementById('root')).render(<RouterProvider router={router} />)
