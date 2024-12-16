// src/components/Hero/index.js
import React from 'react';
import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const HeroSection = styled.section`
  min-height: 100vh;
  background: #000000;
  position: relative;
  padding-top: 80px;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: radial-gradient(#ffffff06 2px, transparent 2px);
    background-size: 30px 30px;
    z-index: 1;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 3;
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
  text-align: center;
`;

const MainTitle = styled.div`
  font-size: 56px;
  color: white;
  line-height: 1.2;
  margin-bottom: 20px;
  font-weight: 500;

  .highlight {
    color: #f7a31c;
  }
`;

const SubTitle = styled.p`
  font-size: 20px;
  color: white;
  margin-bottom: 10px;
  font-weight: 300;
  text-align: center;
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
  margin: 30px 0 60px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: #ff9900;
  }
`;

const StyledCarousel = styled(Carousel)`
  .carousel .slide {
    background: transparent;
    padding: 0 10px;
  }

  .carousel.carousel-slider {
    overflow: visible;
  }

  .carousel .control-dots {
    display: none;
  }

  .carousel .control-arrow {
    background: none;
    border: none;
    color: #f7a31c;
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
      description: "Gain valuable insights from expert-led panel discussions and master the art of pitching yourself",
      image: "https://firebasestorage.googleapis.com/v0/b/gdsc-sies-gst.appspot.com/o/Frame%201261156484.png?alt=media&token=3790b781-a69a-417a-b85f-5c64c8ae2707"
    },
    {
      title: "Experience",
      description: "Enjoy an evening filled with vibrant energy, live entertainment, and an electrifying atmosphere",
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
      <Content>
        <MainTitle>
          Make Your Mondays Meaningful:
          <br />
          <span className="highlight">Network, Learn, and Grow</span> with
          <br />
          Money Monday Dubai!
        </MainTitle>
        <SubTitle>
          Join Dubai's Premier Networking Event For Entrepreneurs And Business Professionals
        </SubTitle>
        <SubTitle>
          Every Monday Evening.
        </SubTitle>
        <ReserveButton>Reserve Your Spot</ReserveButton>

        <StyledCarousel
          showArrows={true}
          showStatus={false}
          showThumbs={false}
          infiniteLoop={true}
          centerMode={true}
          centerSlidePercentage={33.33}
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
        </StyledCarousel>
      </Content>
    </HeroSection>
  );
};

export default Hero;