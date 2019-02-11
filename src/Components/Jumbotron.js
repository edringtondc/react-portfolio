import React from 'react';
import { Row, Col, CardPanel } from 'react-materialize';
import styled from "styled-components"

const StyledCardPanel = styled(CardPanel)`
  height: 300px;
  position: relative;
  
`;

const PortfolioPic = styled.img`
  height: 10rem;
  border-radius: 25px;
  position: absolute;
  top: 1rem;
  left: 3rem;
 

`;

const Title = styled.h1`
  color: #bdbdbd;
  position: absolute;
  top: 1rem;
  left: 15rem;
  font-size: 48px;
  margin-bottom: 3rem;

  
`;

const Text = styled.p`
  color: #bdbdbd;
  position: absolute;
  top: 5rem;
  left: 15rem;
  padding-right: 5rem;
`;
const About = (props) => {


    return (

    <Row>
    <Col s={12} m={12}>
      <StyledCardPanel className="grey darken-3 grey-text">
      <Title>Elisabeth Edrington</Title>
      <PortfolioPic src="../assets/images/130419_E Edrington-17-Edit.jpg"/>
      
        <Text>After 8 plus years of working in the health industry as a doctor of chiropractic, I turned back to my original love of technology. Web development allows me to use both my creative and logical skills, and I am looking forward to turning this interest into a dynamic career. Currently I am utilizing javascript and libraries such as node.js, express.js, and jQuery. Along with HTML, CSS, handlebars and mySql.</Text>
      </StyledCardPanel>
    </Col>
 
  </Row>
  //     <div>
  //       <Jumbotron>
  //         <h1 className="display-3">Elisabeth Edrington</h1>
  //         <p className="lead">After 8 plus years of working in the health industry as a doctor of chiropractic, I turned back to my original love of technology. Web development allows me to use both my creative and logical skills, and I am looking forward to turning this interest into a dynamic career. Currently I am utilizing javascript and libraries such as node.js, express.js, and jQuery. Along with HTML, CSS, handlebars and mySql.</p>
  //         <hr className="my-2" />

  //       </Jumbotron>
  //     </div>
    );
  };

  export default About;

