import React from 'react';
import Navbar from '../Component/Shared/Navbar/Navbar.jsx';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;