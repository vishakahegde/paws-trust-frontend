import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import NavbarItem from "./NavbarItem";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";
import { NavDropdown } from "react-bootstrap";

export default function Navigation() {
  const token = useSelector(selectToken);

  const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand as={NavLink} to="/">
        Paws Trust
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav style={{ width: "100%" }} fill>
          <NavbarItem path="/" linkText="Home" />
          <NavbarItem path="/listofdogs" linkText="List of Dogs" />
          <NavDropdown
            title="Adoption Information"
            id="collasible-nav-dropdown"
          >
            <NavDropdown.Item href="/adoptioninformation/preadoptioninformation">
              Pre Adoption Information
            </NavDropdown.Item>
            <NavDropdown.Item href="/adoptioninformation/dogadoptionchecklist">
              Dog Adoption Checklist
            </NavDropdown.Item>
            <NavDropdown.Item href="/adoptioninformation/rulesbygovt">
              Rules by government for Adoption
            </NavDropdown.Item>
          </NavDropdown>

          {loginLogoutControls}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
