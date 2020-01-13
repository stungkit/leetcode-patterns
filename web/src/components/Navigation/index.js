import React from 'react';
import {
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavLink,
  NavItem,
} from 'reactstrap';
import { FaGithub } from 'react-icons/fa';

import './styles.scss';

const Navigation = () => {
  return (
    <Navbar color="light" light>
      <Container>
        <NavbarBrand>Leetcode Patterns</NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink
              target="_blank"
              href="https://github.com/SeanPrashad/leetcode-patterns"
            >
              <FaGithub />
            </NavLink>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
