import React from 'react';
import { Navbar, NavItem, } from 'react-materialize';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <Navbar brand='logo' className="deep-purple lighten-1" left>
      <NavItem href='get-started.html'>Contact</NavItem>
      <NavItem to={"/"} target='_blank' >pdf</NavItem>
     
    </Navbar>
    );
  }
}