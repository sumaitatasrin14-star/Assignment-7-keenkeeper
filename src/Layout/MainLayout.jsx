import React from 'react';
import Navbar from '../Component/Shared/Navbar/Navbar';
import { Outlet } from 'react-router';
import Banner from '../Component/Banner/Banner';
import StateCard  from '../Component/StateCard/StateCard';
import Friends from '../Component/Friends/Friends';
const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <StateCard></StateCard>
            <Friends></Friends>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;