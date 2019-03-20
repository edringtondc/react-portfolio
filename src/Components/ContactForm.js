import React from 'react';
import { Row, Input, Container, Card } from 'react-materialize';
import styled from "styled-components"


const StyledContainer = styled.div`
    width: 100%;
    background-image: url(../assets/images/Space.jpg);

`;
const ContactCard = styled(Card)`
    width: 100%;
    margin: 1rem 2rem;


`;

const ContactForm = () => {
    return (
        <StyledContainer>
            <ContactCard>

                <Input s={6} label="First Name" />
                <Input s={6} label="Last Name" />
                <Input type="email" label="Email" s={12} />
                <Input type="textarea" label="Message" s={12}/>


            </ContactCard>
        </StyledContainer>
    )

}

export default ContactForm