import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
   NavbarText
} from 'reactstrap';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="navbar" light expand="md" sticky="top">
        <NavbarBrand href="/">RAHUL THAKURI <br/> PIXELPRO STUDIO </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/#/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Gallery</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Write Me</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Login</NavLink>
            </NavItem>
           
          </Nav>

                    
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;