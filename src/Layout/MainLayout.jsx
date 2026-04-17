import React from 'react';
import Navbar from '../Component/Shared/Navbar/Navbar.jsx';
import { Outlet } from 'react-router-dom';
import Footer from '../Component/Footer/Footer.jsx';

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;