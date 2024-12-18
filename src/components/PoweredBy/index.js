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
  color: #FFFFFF;
 font-size: 2.5rem;
  font-family: 'Sawarabi Gothic', sans-serif;
  margin: 0;
`;

const BlurBackground = styled.div`
background:rgba(3, 3, 3, 0.69);
margin: 0 10rem;
padding: 1rem;
`;

const TextContainer = styled.div`
display:flex;
flex-direction:row;
text-align:left;
margin-bottom:2rem;
`;

const PoweredByLogo = styled.img`
  height:80%;
  width: auto;
  margin:auto;
`;

const MainTitle = styled.h1`
  color: ${colors.highlightText};
  font-size: 2.5rem;
  font-family: 'Sawarabi Gothic', sans-serif;
  margin: 10px 0;
`;

const Description = styled.p`
  max-width: 55%;
  padding-right: 4rem;
  margin: 0 auto;
  line-height: 1.6;
  font-family: 'Sawarabi Gothic', sans-serif;
  font-size: 24px;
`;

const ImagesContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;

`;

const EventImage = styled.img`
  width:40%;
  height:auto;
  border-radius: 4px;
  object-fit: cover;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
`;

const ContactButton = styled.button`
  background: linear-gradient(to right, #EF7A42, #FFCB37);
  color: black;
  border: none;
  padding: 15px 30px;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  margin: 3rem 0 80px 0;

  &:hover {
  background: linear-gradient(to right, #FFCB37, #EF7A42);
  transform: translateY(-1px);
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
          src="https://placehold.co/463x300"
          alt="Event 1"
        />
        <EventImage
          src="https://placehold.co/463x300"
          alt="Event 2"
        />
      </ImagesContainer>
      <ContactButton>Contact Us Now</ContactButton>
      </BlurBackground>
    </Section>
  );
};

export default PoweredBy;
