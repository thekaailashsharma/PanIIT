import React from 'react';
import styled from 'styled-components';
import PartnerSection from '../PartnerSection';
import SponsorshipSection from '../SponsorshipSection';
import QuickMeeting from '../QuickMeeting';
import FAQSection from '../FAQSection';

const EventsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px 20px;
    color: white;
    height: auto;
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
    position: relative;

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        padding: 100px 20px;
        height: 100vh;
    }
`;

const TextContainer = styled.div`
    max-width: 90%;
    margin: 20px 0;
    text-align: center;

    @media (min-width: 768px) {
        max-width: 50%;
        margin-left: 60px;
        margin-top: 120px;
        text-align: left;
    }
`;

const Title = styled.h1`
    font-size: 2rem;
    color: #f7a31c;

    @media (min-width: 768px) {
        font-size: 2.5rem;
    }
`;

const Subtitle = styled.h2`
    font-size: 1.2rem;
    color: #ffffff;

    @media (min-width: 768px) {
        font-size: 1.5rem;
    }
`;

const Description = styled.p`
    font-size: 0.9rem;
    color: #cccccc;
    margin-bottom: 20px;

    @media (min-width: 768px) {
        font-size: 1rem;
    }
`;

const Image = styled.img`
    width: 50%;
    height: auto;
    object-fit: contain;
    margin: 20px 0;

    @media (min-width: 768px) {
        width: 30%;
        position: absolute;
        right: 20px;
        bottom: 20px;
        margin-bottom: 50px;
    }
`;

const Button = styled.button`
  background-color: #f7a31c;
  color: black;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Events = () => {
    return (
        <>
            <EventsContainer>
                <TextContainer>
                    <Title>Promote Your Brand Every Monday</Title>
                    <Subtitle>at Money Monday Dubai!</Subtitle>
                    <Description>
                        Showcase your project to Dubai's top entrepreneurs, founders, and industry professionals. Choose a monthly or yearly sponsorship plan that fits your brand's goals.
                    </Description>
                    <Button>Become Sponsor Today</Button>
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
