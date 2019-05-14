import React, { Component } from 'react';
import { Container, } from "react-materialize"
import NavBar from "./Components/NavBar"
import Footer from "./Components/Footer"
import Jumbotron from "./Components/Jumbotron"
import ContactForm from "./Components/ContactForm"
import styled from "styled-components"
import ProjectContainer from "./Components/ProjectContainer"
import SkillList from "./Components/SkillList"
import projects from "./projects.json"
import "./App.css";

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

class App extends Component {

  state = {
    projects: projects,
    skills: ["Javascript", "React", "MongoDB", "Express", "Node", "MySql", "Mongoose", "", "Bootstrap", "Materialize", "HandleBars", ""]
  }

  render() {
    return (
      <>
        <NavBar />
        <Jumbotron
          image="../assets/images/elisabeth.jpg"
          title="Elisabeth Edrington"
          subtitle="Full Stack Developer"
          text="Arising Full Stack Web Developer who brings a wealth of experience from the fast---paced, competitive healthcare field to IT. Proven professional with a record of successfully managing projects and teams, and making critical decisions under challenging circumstances. Lifelong learner, with a desire to always improve."
        
          skills={this.state.skills}
        />
        <StyledContainer >


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

        </StyledContainer>

        {/* <Jumbotron
          title="Skills"
          text={<SkillList skills={this.state.skills}></SkillList>}
          >
   
          </Jumbotron> */}
         

        <Footer />






      </>

    );
  }
}

export default App;
