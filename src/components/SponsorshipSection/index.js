import React from 'react';
import styled from 'styled-components';

const SponsorshipSectionContainer = styled.div`
  text-align: center;
  padding: 50px 20px;
  background-color: #000; /* Background color */
  color: white;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  margin-bottom: 40px;
`;

const DownloadButton = styled.button`
  background-color: #f7a31c;
  color: black;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ff9900;
  }
`;

const SponsorsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px; /* Space between sponsor logos */
  margin-top: 20px;
`;

const SponsorLogo = styled.img`
  height: 50px; /* Adjust the height of the logos */
  margin: 0 10px; /* Space between logos */
`;

const SponsorshipSection = () => {
  return (
    <SponsorshipSectionContainer>
      <Title>Choose a Sponsorship Plan That Works For You</Title>
      <DownloadButton>Download Our Deck Here</DownloadButton>
      <Subtitle>Our Previous Sponsors & Partners</Subtitle>
      <SponsorsContainer>
        <SponsorLogo src="/images/paypal-logo.png" alt="PayPal" />
        <SponsorLogo src="/images/walmart-logo.png" alt="Walmart" />
        <SponsorLogo src="/images/google-logo.png" alt="Google" />
        <SponsorLogo src="/images/walmart-logo.png" alt="Walmart" />
        <SponsorLogo src="/images/paypal-logo.png" alt="PayPal" />
        <SponsorLogo src="/images/google-logo.png" alt="Google" />
      </SponsorsContainer>
    </SponsorshipSectionContainer>
  );
};

export default SponsorshipSection; 