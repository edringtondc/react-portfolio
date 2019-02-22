import React from 'react';
import { Row, Col, CardPanel } from 'react-materialize';
import styled from "styled-components"
import { Wobble } from 'animate-css-styled-components';

const StyledListItem = styled.li`
  color: #bdbdbd;
`;

const StyledUl = styled.ul`
display:inline
`;


const StyledCardPanel = styled(CardPanel)`
  background-image: url(../assets/images/Space.jpg);
  padding: 4rem;
  
`;

const PortfolioPic = styled.img`
  height: 12rem;
  border-radius: 25px;

`;

const StyledRow = styled(Row)`
  display: flex;
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
          <Col>
            <StyledRow>
              <PortfolioPic src={props.image} atl={props.title} />
            </StyledRow>
            <StyledRow>
              <Subtitle>{props.subtitle}</Subtitle>
            </StyledRow>
            <StyledRow>
              <Text>{props.text}</Text>
            </StyledRow>

          </Col>
          <Col>
       
            <StyledRow>
             
                <ul >
                  {props.skills.map(skill => (
                     <Wobble duration="1s" iterationCount="infinite" delay="1s">
                    <StyledListItem >
                      <span class="skillitem">{skill} </span>
                    </StyledListItem>
                       </Wobble>

                  ))}


                </ul>
           

            </StyledRow>
          </Col>

        </StyledRow>
      </StyledCardPanel>



    </>
  );
};

export default About;

