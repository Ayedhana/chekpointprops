import React from 'react'
import Nav from "react-bootstrap/Nav";

const Navbar = () => {
  return (
    <div>
      <Nav variant="tabs" defaultActiveKey="/Profile">
        <Nav.Item>
          <Nav.Link eventKey="link-1">Profile</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Contact
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default Navbar
