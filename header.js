import React from 'react';
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import './Login.css';
import './popup.css';
import Login from "./Login";


class Popup extends React.Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <Login />
		 
        <button className='button' onClick={this.props.closePopup}>X</button>
		
        </div>
      </div>
    );
  }
}

class Header extends React.Component {
	constructor() {
    super();
    this.state = {
      showPopup: false
    };
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }
     render() {
        return (
		<div>
           <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">PRODUCT_NAME</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Scan</Nav.Link>
      <NavDropdown title="MY ACCOUNT" id="basic-nav-dropdown">
        <NavDropdown.Item onClick={this.togglePopup.bind(this)}>SIGN IN</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">SIGN UP</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
{this.state.showPopup ? 
          <Popup
            closePopup={this.togglePopup.bind(this)}
          />
          : null
        }
  </div>
        );
    }
}

export default Header; 
