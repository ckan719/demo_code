import React from 'react';
import Header from '../components/Header.js';
import Dashboard from './DashBoard.js';
import MenuBar from '../components/menu.js';
import Footer from '../components/Footer.js';
function Home() {
    return (
        <>
            <Header />
            <MenuBar />
            <Dashboard />
            <Footer />
        </>
    );
}
export default Home;