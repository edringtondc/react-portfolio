import React from 'react';
import ProjectCard from "./ProjectCard"
import { Container, Row, Col } from 'reactstrap';

const Portfolio = () => {

    

  return   <Container grey lighten-2r>
        <Row>
            <Col>
                <ProjectCard 
                title="Grumpy Cat Clicky" 
                subtitle="A Memory Game" 
                text="Play this game with a friend" 
                src="../../assets/images/cat1.png"
                gitHub=""
                link=""
                />
            </Col>
            <Col>
                <ProjectCard />
            </Col>
            <Col>
                <ProjectCard />
            </Col>
        </Row>
        <Row className="mt-2">
            <Col>
                <ProjectCard />
            </Col>
            <Col>
                <ProjectCard />
            </Col>
            <Col>
                <ProjectCard />
            </Col>
        </Row>

    </Container>

}

export default Portfolio