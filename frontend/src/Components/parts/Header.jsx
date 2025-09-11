import React from 'react'
import { Navbar,Nav } from 'react-bootstrap'

const Header = () => {
  return (
  <header className="container py-2">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Navbar.Brand href="/" className='logo'><span>Gunawan</span> Construction</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/" className="nav-link" >Home</Nav.Link>
            <Nav.Link href="/AboutUs" className="nav-link">About Us</Nav.Link>
            <Nav.Link href="/Services" className="nav-link">Services</Nav.Link>
            <Nav.Link href="/Project" className="nav-link">Project</Nav.Link>
            <Nav.Link href="/Blogs" className="nav-link">Blogs</Nav.Link>
            <Nav.Link href="/Contact" className="nav-link">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    </header>
  )
}

export default Header
