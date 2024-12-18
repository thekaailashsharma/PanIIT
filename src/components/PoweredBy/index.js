import React from "react";
import styled from "styled-components";

// Styled Variables
const colors = {
  background: "#000",
  primaryText: "#fff",
  highlightText: "#FFA500",
  buttonBackground: "#FFA500",
  buttonText: "#000",
};

// Styled Components
const Section = styled.section`
  text-align: center;
  background-color: ${colors.background};
  color: ${colors.primaryText};
  padding: 50px 20px;
   background: url('/images/sphere.png')center no-repeat; 
`;

const Title = styled.h2`
  color: ${colors.highlightText};
  font-size: 1.8rem;
  margin: 0;
`;

const BlurBackground = styled.div`
background:rgba(3, 3, 3, 0.69);
margin: 0 20rem;
padding: 1rem;
`;

const TextContainer = styled.div`
display:grid;
grid-template-columns: 50% 50%;
`;

const PoweredByLogo = styled.img`
    padding:20px;
`;

const MainTitle = styled.h1`
  color: ${colors.highlightText};
  font-size: 2.5rem;
  margin: 10px 0;
`;

const Description = styled.p`
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  font-size: 1rem;
`;

const ImagesContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 30px 0;
`;

const EventImage = styled.img`
  width: 300px;
  border-radius: 10px;
  object-fit: cover;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
`;

const ContactButton = styled.button`
  background-color: ${colors.buttonBackground};
  color: ${colors.buttonText};
  padding: 12px 24px;
  border: none;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e59400;
  }
`;

const PoweredBy = () => {
  return (
    <Section>
      <Title>Powered by</Title>
      <MainTitle>Traders Brawl Media</MainTitle>
      <BlurBackground>
      <TextContainer>
      <PoweredByLogo src="/images/Traders Brawl Logo.png" alt="TradersBrawl" />
      <Description>
        Traders Brawl Media is a premier marketing and growth strategy agency
        specializing in Web3 partnerships and events. As a core partner, Traders
        Brawl Media brings its expertise in hosting world-class networking
        events and fostering meaningful business relationships.
      </Description>
      </TextContainer>
      <ImagesContainer>
        <EventImage
          src="https://firebasestorage.googleapis.com/v0/b/gdsc-sies-gst.appspot.com/o/Frame%201261156484.png?alt=media&token=3790b781-a69a-417a-b85f-5c64c8ae2707"
          alt="Event 1"
        />
        <EventImage
          src="https://firebasestorage.googleapis.com/v0/b/gdsc-sies-gst.appspot.com/o/Frame%201261156484.png?alt=media&token=3790b781-a69a-417a-b85f-5c64c8ae2707"
          alt="Event 2"
        />
      </ImagesContainer>
      <ContactButton>Contact Us Now</ContactButton>
      </BlurBackground>
    </Section>
  );
};

export default PoweredBy;
