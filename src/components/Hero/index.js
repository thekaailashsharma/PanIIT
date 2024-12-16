// src/components/Hero/index.js
import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HeroSection = styled.section`
  min-height: 100vh;
  background: #000; /* Background color */
  position: relative;
  padding-top: 80px;
  overflow: hidden;
  color: white;
  text-align: center;
`;

const MainTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
  color: #f7a31c; /* Golden color */
`;

const SubTitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 40px;
`;

const ReserveButton = styled.button`
  background: #f7a31c;
  color: black;
  border: none;
  padding: 15px 30px;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  margin: 30px 0;

  &:hover {
    background: #ff9900;
  }
`;

const Card = styled.div`
  background: rgba(20, 20, 20, 0.5);
  border: 1px solid rgba(247, 163, 28, 0.3);
  border-radius: 10px;
  overflow: hidden;
  margin: 0 10px;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .content {
    padding: 20px;
    text-align: left;
  }

  h3 {
    color: #f7a31c;
    font-size: 24px;
    margin-bottom: 10px;
  }

  p {
    color: #9b9b9b;
    font-size: 14px;
    line-height: 1.4;
  }
`;

const Hero = () => {
  const cards = [
    {
      title: "Network",
      description: "Connect with industry leaders, founders, and like-minded professionals to expand your business network.",
      image: "https://firebasestorage.googleapis.com/v0/b/gdsc-sies-gst.appspot.com/o/Frame%201261156484.png?alt=media&token=3790b781-a69a-417a-b85f-5c64c8ae2707"
    },
    {
      title: "Learn",
      description: "Gain valuable insights from expert-led panel discussions and master the art of pitching yourself.",
      image: "https://firebasestorage.googleapis.com/v0/b/gdsc-sies-gst.appspot.com/o/Frame%201261156484.png?alt=media&token=3790b781-a69a-417a-b85f-5c64c8ae2707"
    },
    {
      title: "Experience",
      description: "Enjoy an evening filled with vibrant energy, live entertainment, and an electrifying atmosphere.",
      image: "https://firebasestorage.googleapis.com/v0/b/gdsc-sies-gst.appspot.com/o/Frame%201261156484.png?alt=media&token=3790b781-a69a-417a-b85f-5c64c8ae2707"
    },
    {
      title: "Succeed",
      description: "Turn conversations into opportunities – secure deals, partnerships, and collaborations that drive success.",
      image: "https://firebasestorage.googleapis.com/v0/b/gdsc-sies-gst.appspot.com/o/Frame%201261156484.png?alt=media&token=3790b781-a69a-417a-b85f-5c64c8ae2707"
    },
    {
      title: "Pitch",
      description: "Perfect your pitch and share your ideas with decision-makers.",
      image: "https://firebasestorage.googleapis.com/v0/b/gdsc-sies-gst.appspot.com/o/Frame%201261156484.png?alt=media&token=3790b781-a69a-417a-b85f-5c64c8ae2707"
    }
  ];

  return (
    <HeroSection>
      <MainTitle>
        Make Your Mondays Meaningful: 
        <br />
        <span style={{ color: '#f7a31c' }}>Network, Learn, and Grow</span> with
        <br />
        Money Monday Dubai!
      </MainTitle>
      <SubTitle>
        Join Dubai's Premier Networking Event For Entrepreneurs And Business Professionals
        <br />
        Every Monday Evening.
      </SubTitle>
      <ReserveButton>Reserve Your Spot</ReserveButton>

      <Carousel
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        emulateTouch={true}
        swipeable={true}
      >
        {cards.map((card, index) => (
          <Card key={index}>
            <img src={card.image} alt={card.title} />
            <div className="content">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          </Card>
        ))}
      </Carousel>
    </HeroSection>
  );
};

export default Hero;