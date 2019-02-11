import React from 'react';
import styled from "styled-components"
import { Card, CardTitle } from 'react-materialize'


const StyledCard = styled(Card)`
    width: 100%;
    height: 30rem;
`;


const StyledLink = styled.a`
    color: black
    hover: {
        text-decoration: none;
        color: black;
    }
`;

const ProjectContainer = (props) => {

    return (


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

    )
}

export default ProjectContainer
