import React from 'react';
import styled from 'styled-components';

const HeroSection = styled.section`
  min-height: 100vh;
  background-color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: var(--primary-color);
  margin-bottom: 2rem;
`;

const SubTitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const CTAButton = styled.button`
  background-color: var(--primary-color);
  color: var(--secondary-color);
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.9;
  }
`;

const Hero = () => {
    return (
        <HeroSection>
            <Title>Make Your Mondays Meaningful</Title>
            <SubTitle>Network with Industry Leaders</SubTitle>
            <CTAButton>Join Next Session</CTAButton>
        </HeroSection>
    );
};

export default Hero;