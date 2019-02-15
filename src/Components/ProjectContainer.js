import React from 'react';
import styled from "styled-components"
import { Card, CardTitle, Row, Col } from 'react-materialize'


const StyledCard = styled(Card)`
    width: 18rem;
    height: 18rem;
    :hover {
        border-color: grey;
        transform: scale(1.1);
    }

`;


const StyledLink = styled.a`
 
    hover: {
        text-decoration: none;
    }
`;

const ProjectContainer = (props) => {

    return (
        

        <Col md={6}>


        <StyledCard  header={<CardTitle reveal image={props.image} waves='light'  /> }
            title={props.title}
            reveal={
                <>
                    <p className="grey-text">{props.text}</p>
                    <p className="grey-text "><a href={props.gitHub}>Check out the repository</a></p>
                </>
            }
        >
            <p className="grey-text "><a href={props.link}>Play the Game</a></p>

        </StyledCard>

        </Col>

    )
}

export default ProjectContainer
