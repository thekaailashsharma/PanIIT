import React from 'react';
import styled from 'styled-components';

const PartnerSectionContainer = styled.div`
  text-align: center;
  padding: 50px 20px;
  background-color: #000;
  color: white;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 7px;

  @media (min-width: 768px) {
    font-size: 42px;
  }
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #f7a31c;

  @media (min-width: 768px) {
    font-size: 38px;
    margin-bottom: 40px;
  }
`;

const Para = styled.p`
  font-size: 1rem;
  margin-bottom: 20px;
  margin-left: 20px;
  margin-right: 20px;

  @media (min-width: 768px) {
    font-size: 22px;
    margin-bottom: 40px;
    margin-left: 140px;
    margin-right: 140px;
  }
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px; /* Space between cards */
`;

const Card = styled.div`
  background-color: transparent;
  border-radius: 8px;
  padding: 20px;
  width: 90%;
  max-width: 300px; /* Card max width */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 250px;
  }
`;

const CardTitle = styled.h3`
  font-size: 1rem;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

const CardImage = styled.img`
  width: 100%;
  max-width: 100px;
  height: auto;
  border-radius: 8px 8px 0 0;
  margin-bottom: 8px;

  @media (min-width: 768px) {
    width: 30%;
  }
`;

const CardDescription = styled.p`
  font-size: 0.8rem;

  @media (min-width: 768px) {
    font-size: 0.9rem;
  }
`;

const PartnerSection = () => {
  return (
      <PartnerSectionContainer>
        <Title>
          <div>
            Why Your Brand Should <br />
            <Subtitle>Partner With Us?</Subtitle>
          </div>
        </Title>
        <Para>
          Gain direct access to a growing community of business professionals, decision-makers, founders, and investors. Elevate your brand visibility in one of Dubai's most prestigious networking events.
        </Para>
        <CardsContainer>
          <div>
            <Card>
              <CardImage src="/images/full-eclipse.png" alt="Eclipse" />
              <CardTitle>Direct Exposure</CardTitle>
              <CardDescription>Showcase Your Brand To 500+ Attendees Every Week.</CardDescription>
            </Card>
            <Card>
              <CardImage src="/images/full-eclipse.png" alt="Eclipse" />
              <CardTitle>Brand Credibility</CardTitle>
              <CardDescription>Associate Your Name With Dubai’s Top Business And Networking Event.</CardDescription>
            </Card>
            <Card>
              <CardImage src="/images/full-eclipse.png" alt="Eclipse" />
              <CardTitle>Lasting Impressions</CardTitle>
              <CardDescription>Your Logo On Banners, Event Materials, Emails, And Our Website.</CardDescription>
            </Card>
          </div>
          <div>
            <Card>
              <CardImage src="/images/full-eclipse.png" alt="Eclipse" />
              <CardTitle>Custom Visibility</CardTitle>
              <CardDescription>Get Highlighted During Panel Discussions And Through Shoutouts By Moderators.</CardDescription>
            </Card>
            <Card>
              <CardImage src="/images/full-eclipse.png" alt="Eclipse" />
              <CardTitle>Endless Networking</CardTitle>
              <CardDescription>Direct Access To Entrepreneurs, Founders, And Potential Partners.</CardDescription>
            </Card>
            <Card>
              <CardImage src="/images/full-eclipse.png" alt="Eclipse" />
              <CardTitle>Lasting Impressions</CardTitle>
              <CardDescription>Your Logo On Banners, Event Materials, Emails, And Our Website.</CardDescription>
            </Card>
          </div>
        </CardsContainer>
      </PartnerSectionContainer>
  );
};

export default PartnerSection;
