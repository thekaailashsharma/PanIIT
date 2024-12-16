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
  background: url('/images/eclipse.png') no-repeat center center;
  background-size: cover;
`;

const TextContainer = styled.div`
  max-width: 50%;
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
`;

const Image = styled.img`
  width: 50%;
  height: 100%;
  object-fit: cover;
`;

const Events = () => {
  return (
    <>
      <EventsContainer>
        <TextContainer>
          <Title>Promote Your Brand</Title>
          <Subtitle>Every Monday at Money Monday Dubai!</Subtitle>
          <Description>
            Showcase Your Project To Dubai's Top Entrepreneurs, Founders, And Industry Professionals. Choose A Monthly Or Yearly Sponsorship Plan That Fits Your Brand's Goals.
          </Description>
          <button style={{ backgroundColor: '#f7a31c', color: 'black', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            Become Sponsor Today
          </button>
        </TextContainer>
        <Image src="/images/eclipse.png" alt="Eclipse" />
      </EventsContainer>
      <PartnerSection />
      <SponsorshipSection />
      <QuickMeeting />
      <FAQSection />
    </>
  );
};

export default Events;
