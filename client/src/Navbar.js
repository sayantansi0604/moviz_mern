import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link
import { Film } from 'react-bootstrap-icons'; 
import { FaHome, FaList, FaUser } from 'react-icons/fa';

export default function NavB() {  
  return (
    <Navbar variant="dark" expand="lg" fixed="top" className="custom-navbar">
      <Container fluid className="px-lg-5">
        {/* Use 'as={Link}' to make Bootstrap work with React Router */}
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <Film className="IconT" />
          <span className="DesignT">Moviz</span>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto"> 
            
            <Nav.Link as={Link} to="/" className="text-white px-3 d-flex align-items-center">
              <FaHome className="navI" />
              <span className="textI ms-2">Home</span>
            </Nav.Link>

            <Nav.Link as={Link} to="/watchlist" className="text-white px-3 d-flex align-items-center">
              <FaList className="navI" />
              <span className="textI ms-2">Watchlist</span>
            </Nav.Link>

            <Nav.Link as={Link} to="/profile" className="text-white px-3 d-flex align-items-center">
              <FaUser className="navI" />
              <span className="textI ms-2">Profile</span>
            </Nav.Link>

          </Nav>
          <div className="d-none d-lg-block" style={{ width: '150px' }}></div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}