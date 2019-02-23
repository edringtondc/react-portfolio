import React from 'react';
import { Navbar, NavItem, } from 'react-materialize';
import styled from "styled-components";

const StyledNavBar = styled(Navbar)`
  width: 100%;
  margin-left: 0px;
  padding-right: 2rem;
  a:hover{
      text-decoration: none;
      color: #66C4E6;
  };
  }
  
`;

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
      <StyledNavBar brand='EE' className="grey darken-4" left>
        {/* <NavItem href='get-started.html'>Contact</NavItem> */}

        <NavItem href={"../assets/ElisabethEdringtonResume .pdf"} download target='_blank'>Resume</NavItem>

      </StyledNavBar>
    );
  }
}