import React from 'react';
import { Row, Col, Icon } from 'react-materialize';
import styled from "styled-components"

const StyledFooter = styled.footer`
    background-color: #212121;
    height: 15rem;
    width: 100%;
    color: #ccc;
    text-align: center;
    padding: 2rem;
    margin-top: 2rem;


`;

const StyledRow = styled(Row)`
    text-align: center;
`;

const StyledH4 = styled.h4`
    text-align: center;
`;


const FooterBar = () => {

    return (
        < StyledFooter >
            <StyledRow>
                <Col md={12}>
                    <h4>Elisabeth Edrington</h4>
                </Col>

            </StyledRow >
            <StyledRow>
                <Col md={4}>
                    <a href="https://www.linkedin.com/in/elisabethedrington/" target="_blank"><img src="../assets/images/iconfinder_linkedin_28298.png"/></a>
                </Col>
                <Col md={4}>
                <a href="https://github.com/edringtondc" target="_blank"><img src="../assets/images/Octocat.png"/></a>
                </Col>
                <Col md={4}>
                <a href="mailto:edringtondc@gmail.com" target="_blank">   <Icon small>mail</Icon></a>
                </Col>
            </StyledRow>
            <StyledRow>

                <Col md={12}>
                   <span>&copy;2019</span>
                </Col>
            </StyledRow>


        </StyledFooter >
    )
}

export default FooterBar;