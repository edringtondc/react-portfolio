import React from 'react';
import { Card } from 'react-materialize';
import styled from "styled-components";


const StyledLi= styled.li`
    border-box: 1px solid grey;
    font-size: 18px;
    color: #ccc
`;  

const SkillList = (props) => {

    return (
        <ul>
             {props.skills.map(skill=>(
                 <StyledLi>{skill}</StyledLi>
             ))}
        </ul>
       

    )
}

export default SkillList