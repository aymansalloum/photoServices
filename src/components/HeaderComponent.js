import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,

} from 'reactstrap';
import './HeaderComponent.css'

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
              <NavLink className="nav-style" href="/#/">Home <i className="fa fa-home fa-md" /></NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-style" href="#">Gallery <i className="fa fa-image fa-md" /></NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-style" href="#">About <i className="fa fa-info fa-md" /></NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-style"  href="#">Contact <i className="fa fa-address-card fa-md" /></NavLink>
            </NavItem>
            
           
          </Nav>

                    
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;