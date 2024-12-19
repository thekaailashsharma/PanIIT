import React from 'react';
import styled from 'styled-components';

const PartnerSectionContainer = styled.div`
  text-align: center;
  padding: 50px 20px;
  background-color: #000; /* Background color */
  color: white;
`;

const Title = styled.h2`
  font-size: 42px;
  margin-bottom: 7px;
`;

const Subtitle = styled.p`
  font-size: 38px;
  margin-bottom: 40px;
  color: #f7a31c;
`;

const Para = styled.p`
  font-size: 22px;
  margin-bottom: 40px;
  align-content: center;
  margin-left: 140px;
  margin-right: 140px;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 4px; /* Space between cards */
`;

const Card = styled.div`
  background-color: transparent;
  border-radius: 8px;
  padding: 20px;
  width: 250px; /* Card width */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const CardImage = styled.img`
    width: 30%; /* Full width for the image */
    border-radius: 8px 8px 0 0; /* Rounded top corners */
  margin-bottom: 8px;
`;

const CardDescription = styled.p`
  font-size: 0.9rem;
`;

const PartnerSection = () => {
  return (
    <PartnerSectionContainer>
      <Title>
        <div>
          Why Your Brand Should <br/>
          <Subtitle>
            Partner With Us?
          </Subtitle>
        </div></Title>
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