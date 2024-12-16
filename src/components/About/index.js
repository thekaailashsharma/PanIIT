import React from 'react';
import styled from 'styled-components';
import AboutUsSection from "../AboutUsSection";

const AboutContainer = styled.div`
    background-color: #000; /* Background color */
    color: white;
    padding: 40px 20px;
    text-align: center;
`;

const Title = styled.h1`
    font-size: 2.5rem;
    color: #f7a31c; /* Golden color for title */
`;

const Description = styled.p`
    font-size: 1rem;
    margin: 20px 0;
`;

const About = () => {
    return (
        <>
            <AboutContainer>
            </AboutContainer>
            <AboutUsSection/>
        </>
    );
};

export default About; 