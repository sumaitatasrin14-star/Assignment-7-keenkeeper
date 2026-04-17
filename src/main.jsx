import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './index.css';
import MainLayout from './Layout/MainLayout';
import FriendDetails from './Pages/FriendDetails/FriendDetails';
import Home from "./Pages/Home/Home.jsx";
import Timeline from './Component/Timeline/Timeline.jsx';
import Stats from './Component/Stats/Stats.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "friend/:id", element: <FriendDetails /> },
      { path: "/timeline", element: <Timeline /> },
      {path: "/stats", element: <Stats />},
    ],
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);