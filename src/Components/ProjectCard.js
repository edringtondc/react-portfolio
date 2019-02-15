import React from 'react';
import { Card, CardImg, CardText, CardBody, CardLink } from 'reactstrap';

const ProjectCard = (props) => {
  return (
    <div>
      <Card className="grey lighten-2">
        <CardImg width="100%" src={props.src} alt={props.title} />
        <CardBody >
          <CardText>{props.text}</CardText>
          <CardLink href={props.gitHub}>Git Hub Link</CardLink>
          <CardLink href={props.link}>Play Me!</CardLink>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProjectCard;