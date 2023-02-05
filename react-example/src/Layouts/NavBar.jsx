import { Navbar, Nav, Container } from "react-bootstrap"
import { Outlet, Link } from "react-router-dom"

import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'

export function NavBar() {
  return (
    <>    
       <Navbar className="navBg" expand="lg">
        <Container>
            <Navbar.Brand as={Link} to="/" className="nav_logo">Brand Example</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link as={Link} to="/" >Home</Nav.Link>
                <Nav.Link as={Link} to="/ServiceA">Service A</Nav.Link>
                <Nav.Link as={Link} to="/ServiceB">Service B</Nav.Link>  
                <Nav.Link as={Link} to="/ServiceC">Service C</Nav.Link>
                <Nav.Link as={Link} to="/Comunication">Contact</Nav.Link>              
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>  
        <section className="section">
            <Outlet></Outlet>
        </section> 

        
       </> 
  )
}

