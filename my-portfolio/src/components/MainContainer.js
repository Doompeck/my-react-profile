import React, { useState } from "react";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Footer from "./Footer";
import Header from "./Header";
import { Container } from "@mui/material";

const styles = {
  spacer: {
      marginTop: 30
  }
}

export default function MainContainer() {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <Container>
      <Header handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer style={styles.spacer} />
    </Container>
  );
}
