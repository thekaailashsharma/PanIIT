import React from 'react';
import styled from 'styled-components';

const PartnerSectionContainer = styled.div`
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

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px; /* Space between cards */
`;

const Card = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 20px;
  width: 250px; /* Card width */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const CardDescription = styled.p`
  font-size: 0.9rem;
`;

const PartnerSection = () => {
  return (
    <PartnerSectionContainer>
      <Title>Why Your Brand Should Partner With Us?</Title>
      <Subtitle>
        Gain direct access to a growing community of business professionals, decision-makers, founders, and investors. Elevate your brand visibility in one of Dubai's most prestigious networking events.
      </Subtitle>
      <CardsContainer>
        <Card>
          <CardTitle>Direct Exposure</CardTitle>
          <CardDescription>Showcase Your Brand To 500+ Attendees Every Week.</CardDescription>
        </Card>
        <Card>
          <CardTitle>Brand Credibility</CardTitle>
          <CardDescription>Associate Your Name With Dubai’s Top Business And Networking Event.</CardDescription>
        </Card>
        <Card>
          <CardTitle>Lasting Impressions</CardTitle>
          <CardDescription>Your Logo On Banners, Event Materials, Emails, And Our Website.</CardDescription>
        </Card>
        <Card>
          <CardTitle>Custom Visibility</CardTitle>
          <CardDescription>Get Highlighted During Panel Discussions And Through Shoutouts By Moderators.</CardDescription>
        </Card>
        <Card>
          <CardTitle>Endless Networking</CardTitle>
          <CardDescription>Direct Access To Entrepreneurs, Founders, And Potential Partners.</CardDescription>
        </Card>
      </CardsContainer>
    </PartnerSectionContainer>
  );
};

export default PartnerSection; 