import React, { useState } from 'react';
import {
  Collapse,
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavLink,
  NavbarToggler,
  NavItem,
} from 'reactstrap';

import './styles.scss';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="light" light expand="md" sticky="top">
      <Container>
        <NavbarBrand>Leetcode Patterns</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink
                target="_blank"
                href="https://github.com/SeanPrashad/leetcode-patterns"
              >
                GitHub
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
