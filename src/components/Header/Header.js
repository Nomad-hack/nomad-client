import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

const authenticatedOptions = (
  <Fragment>
    <Nav.Link href="#create-appointment">Book Appointment</Nav.Link>
    {/* <Nav.Link href="#change-password">Change Password</Nav.Link>
    <Nav.Link href="#sign-out">Sign Out</Nav.Link> */}
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <Nav.Link href="#sign-up">Sign Up</Nav.Link>
    {/* <Nav.Link href="#sign-in">Sign In</Nav.Link> */}
  </Fragment>
)

const alwaysOptions = (
  <Fragment>
    <Nav.Link href="#/calendar">Home</Nav.Link>
  </Fragment>
)

const Header = ({ user }) => (
  <Navbar bg="primary" variant="dark" expand="md">
    <Navbar.Brand href="#">
      Nomad_Hack
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        {/* // { user && <span className="navbar-text mr-2">Welcome, {user.username}</span>} */}
        { user && <NavDropdown title={user.username} id="basic-nav-dropdown" className="dropdownitem">
          {user.role === 'Business Owner'
            ? <Fragment>
              <NavDropdown.Item className="dropdownitem" href="#analytics">Get Analytics</NavDropdown.Item>
              <NavDropdown.Item className="dropdownitem" href="#appointment-index">All Appointments</NavDropdown.Item>
            </Fragment>
            : null}
          <NavDropdown.Divider className="dropdownitem"/>
          <NavDropdown.Item className="dropdownitem" href="#change-password">Change Password</NavDropdown.Item>
          <NavDropdown.Item className="dropdownitem" href="#sign-out">Sign Out</NavDropdown.Item>
        </NavDropdown>}
        { alwaysOptions }
        { user ? authenticatedOptions : unauthenticatedOptions }
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
