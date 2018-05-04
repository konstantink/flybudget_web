import React from 'react';
// import ReactDOM from 'react-dom';

// import {
//   Collapse,
//   Nav,
//   NavItem,
//   NavLink,
//   Navbar,
//   NavbarBrand,
//   NavbarToggler } from 'reactstrap';

class NavigationBar extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top flex-md-nowrap">
        <a className="navbar-brand logo-text" href="#">FlyBudget</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="#">Dashboard <span className="sr-only">(current)</span></a>
            </li>
          </ul>
          <input className="form-control form-control-dark w-100" type="search" placeholder="Search" />
          <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap">
              <a href="#" className="nav-link">Profile</a>
            </li>
            <li className="nav-item text-nowrap">
              <a href="#" className="nav-link">Sign out</a>
            </li>
          </ul>
        </div>
      </nav>

    );
    // return (
    //   <Navbar sticky="top" color="light" className="flex-md-nowrap p-1" expand="md">
    //     <NavbarBrand className="logo-text" href="#">FlyBudget</NavbarBrand>
    //     <NavbarToggler onClick={this.toggle} />
    //     <Collapse isOpen={this.state.isOpen} navbar>
    //       <Nav className="ml-auto" navbar>
    //         <NavItem>
    //           <NavLink href="/profile/">Profile</NavLink>
    //         </NavItem>
    //         <NavItem>
    //           Sign out
    //         </NavItem>
    //       </Nav>
    //     </Collapse>
    //   </Navbar>
    // );
    // return (
    //   <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
    //     <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">FlyBudget</a>
    //     <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />
    //     <ul className="navbar-nav px-3">
    //       <li className="nav-item text-nowrap">
    //         <a href="#" className="nav-link">Sign out</a>
    //       </li>
    //     </ul>
    //   </nav>
    // );
  }
}

export default NavigationBar;
