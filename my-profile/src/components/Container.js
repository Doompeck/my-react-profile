import React, { useState } from 'react';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
// import Footer from './Footer';
// import Header from './Header';
import { Container } from "@mui/material";

const MainContainer = () => {

    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        if (currentPage === 'Porfolio') {
            return <Portfolio />;
        }
        return <Resume />;
    }

}
export default MainContainer;