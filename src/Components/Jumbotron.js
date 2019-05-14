import React from 'react';
import { Row, Col, CardPanel } from 'react-materialize';
import styled from "styled-components"
import { Wobble } from 'animate-css-styled-components';
  import {TagCloud} from "react-tagcloud";

const StyledListItem = styled.li`
  color: #bdbdbd;
  float: left;
  display: inline-block;
`;

const StyledUl = styled.ul`
  list-style-type: none;
`;

const StyledCardPanel = styled(CardPanel)`
  background-image: url(../assets/images/Space.jpg);
  padding: 2rem;
  height: auto;
`;

const PortfolioPic = styled.img`
  height: 12rem;
  border-radius: 25px;
`;

const StyledRow = styled(Row)`
  display: flex;
  flex: row;
  justify-content: center;
  margin-bottom: 0;
  padding-left: 0px;
`;

const Title = styled.h1`
  color: #bdbdbd;
  text-align: center;
  font-size: 48px;
  margin-bottom: 3rem;
`;

const Subtitle = styled.p`
  color: #66C4E6;
  font-size: 24px;
`;

const Text = styled.p`
  color: #bdbdbd;
  text-align: center;
`;

const About = (props) => {
  return (
    <>
      <StyledCardPanel>
        <StyledRow>
          <Title>{props.title}</Title>
        </StyledRow>

        <StyledRow>
          <PortfolioPic src={props.image} atl={props.title} />
        </StyledRow>
        <StyledRow>
          <Subtitle>{props.subtitle}</Subtitle>
        </StyledRow>
        <StyledRow>
          <Text>{props.text}</Text>
        </StyledRow>


        <StyledRow>
        
  

          
        </StyledRow>
      </StyledCardPanel>
    </>
  );
};

export default About;

