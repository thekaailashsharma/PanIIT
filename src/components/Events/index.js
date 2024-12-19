import React from 'react';
import styled from 'styled-components';
import PartnerSection from '../PartnerSection';
import SponsorshipSection from '../SponsorshipSection';
import QuickMeeting from '../QuickMeeting';
import FAQSection from '../FAQSection';

const EventsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 100px 20px;
  color: white;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  position: relative;
`;

const TextContainer = styled.div`
  max-width: 50%;
    margin-left: 60px;
    margin-top: 120px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #f7a31c;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  color: #ffffff;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #cccccc;
    margin-bottom: 20px;
`;

const Image = styled.img`
  width: 30%;
  height: auto;
  object-fit: contain;
  position: absolute;
  right: 20px;
  bottom: 20px;
    margin-bottom: 50px;
`;

const Events = () => {
  return (
    <>
      <EventsContainer>
        <TextContainer>
          <Title>Promote Your Brand Every Monday</Title>
          <Subtitle>at Money Monday Dubai!</Subtitle>
          <Description>
              Showcase your project to Dubai's top entrepreneurs, founders, and industry professionals. Choose a monthly or yearly sponsorship plan that fits your brand's goals.          </Description>
          <button style={{ backgroundColor: '#f7a31c', color: 'black', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            Become Sponsor Today
          </button>
        </TextContainer>
        <Image src="/images/eclipse.png" alt="Eclipse" />
      </EventsContainer>
      <PartnerSection />
      <SponsorshipSection />
      <FAQSection />
    </>
  );
};

export default Events;
