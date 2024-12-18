// src/components/WhatIs/index.js
import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  padding: 5rem 0 0 0px;
  position: relative;
  overflow: hidden;
  font-family: 'Satoshi', sans-serif;
`;

const ImageDiamond = styled.img`
  width: 90%;  // Make sure it stretches to the container's width
  padding: 0 0 0 3rem;
  height: auto;  // Maintain the aspect ratio
  display: block;  // Remove extra space below the image
  z-index:0;
  position:absolute;
`;

const Container = styled.div`
  max-width: 1100px;
  height: 150vh;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const Content = styled.div`
  padding-right: 50px;
`;

const Title1 = styled.h2`
  text-align:center;
  font-size: 56px;
  font-weight: 500;
  color: white;
  margin-bottom: 100px;
  line-height: 1.1;
  font-family: 'Sawarabi Gothic', sans-serif;
  height: 40vh;

  span {
    display: inline;;
    font-weight: 600;
    color: #f7a31c;
  }
`;

const Title = styled.h2`
  font-size: 56px;
  font-weight: 700;
  color: white;
  margin-bottom: 20px;
  line-height: 1.1;
  font-family: 'Satoshi', sans-serif;
  span {
    display: block;
    font-weight: 600;
    color: #f7a31c;
  }
`;

const Description = styled.p`
  line-height: 40px;
  color: #ffffff;
  margin-bottom: 40px;
  font-weight: 400;
   font-family: 'Sawarabi Gothic', sans-serif;

  font-size: 32px;
`;

const Stats = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
`;

const ContainerStat = styled.div`
display:grid;
grid-template-columns: 1fr 1fr;
gap: 5px;`;

const StatItem = styled.div`
  margin-bottom: 30px;
`;

const StatNumber = styled.h3`
  font-size: 48px;
  font-weight: bold;
  color: white;
  margin-bottom: 10px;

  span {
    color: #f7a31c;
  }
`;

const StatLabel = styled.p`
  font-size: 16px;
  color: white;
  line-height: 1.4;
  font-family: 'Sawarabi Gothic', sans-serif;
`;

const VideoContainer = styled.div`
  padding: 20px 20px 0 20px;
  width: 100%;
  height: 400px;
  background: rgba(20, 20, 20, 0.5);
  border: 1px solid rgba(247, 163, 28, 0.3);
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  .play-button {
    width: 80px;
    height: 80px;
    background: #f7a31c;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }

    svg {
      width: 30px;
      height: 30px;
      fill: black;
      margin-left: 5px;
    }
  }
`;

const WhatIs = () => {
  return (
    <Section>
       <Title1>
          See Our <span>Past Editions</span>
        </Title1>
      <Container>
        <ImageDiamond src="/images/diamond_gray.png" alt="Diamond" />
        <Content>
          <Title>
            What is
            <span>Money Monday Dubai?</span>
          </Title>
          <Description>
            Money Monday Dubai is a professional networking soirée held every Monday,
            bringing together entrepreneurs, founders, and business professionals from diverse
            industries such as Web3, blockchain, Forex, IT, and finance. Our mission is to create
            meaningful connections and provide actionable insights for business growth.
          </Description>
        </Content>
        <ContainerStat>
        <Stats>
            <StatItem>
              <StatNumber>6<span>+</span></StatNumber>
              <StatLabel>Successful Events Hosted</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>850<span>+</span></StatNumber>
              <StatLabel>Active Members In Our Community</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>10k<span>+</span></StatNumber>
              <StatLabel>Official Partner Of The Bitcoin Mena Conference.</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>850<span>+</span></StatNumber>
              <StatLabel>Active Members In Our Community</StatLabel>
            </StatItem>
          </Stats>
        <VideoContainer>
          <div className="play-button">
            <svg viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </VideoContainer>
        </ContainerStat>
      </Container>
    </Section>
  );
};

export default WhatIs;