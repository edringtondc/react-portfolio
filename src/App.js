import React, { Component } from 'react';
import { Container, } from "react-materialize"
import NavBar from "./Components/NavBar"
import Footer from "./Components/Footer"
import Jumbotron from "./Components/Jumbotron"
import ProjectContainer from "./Components/ProjectContainer"
import projects from "./projects.json"
import "./App.css";



class App extends Component {

  state = {
    projects: projects
  }

  render() {
    return (
      <>
        <NavBar />
        <Jumbotron />
        <Container>


          {this.state.projects.map(project => {
            return (<ProjectContainer
              title={project.title}
              link={project.link}
              image={project.image}
              text={project.text}
              gitHub={project.gitHub}
              subtitle={project.subtitle}
            />)

          })
          }
        </Container>

        <Footer />






      </>

    );
  }
}

export default App;
