// src/components/Hero/index.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

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

const GoldenOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(50% 50% at 50% 50%, rgba(247, 163, 28, 0.15) 0%, rgba(247, 163, 28, 0) 100%);
  z-index: 2;
`;

const Content = styled.div`
  position: relative;
  z-index: 3;
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
  text-align: center;
`;

const MainTitle = styled.h1`
  font-size: 56px;
  font-weight: 500;
  color: white;
  line-height: 1.2;
  margin-bottom: 20px;

  span {
    color: #f7a31c;
    font-weight: 500;
  }
`;

const SubTitle = styled.p`
  font-size: 20px;
  color: white;
  margin-bottom: 10px;
  font-weight: 300;
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

const CarouselContainer = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
`;

const CarouselTrack = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  gap: 20px;
  padding: 0 20px;
`;

const Card = styled.div`
  flex: 0 0 calc(33.33% - 20px);
  background: rgba(20, 20, 20, 0.5);
  border: 1px solid rgba(247, 163, 28, 0.3);
  border-radius: 10px;
  overflow: hidden;
  min-width: 300px;

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

const CarouselButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #f7a31c;
  font-size: 24px;
  cursor: pointer;
  z-index: 2;
  padding: 10px;
  
  &:hover {
    color: #ff9900;
  }

  &.prev {
    left: 0;
  }

  &.next {
    right: 0;
  }
`;

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      title: "Network",
      description: "Connect with industry leaders, founders, and like-minded professionals to expand your business network.",
      image: "https://source.unsplash.com/random/800x600?networking"
    },
    {
      title: "Learn",
      description: "Gain valuable insights from expert-led panel discussions and master the art of pitching yourself",
      image: "https://source.unsplash.com/random/800x600?learning"
    },
    {
      title: "Experience",
      description: "Enjoy an evening filled with vibrant energy, live entertainment, and an electrifying atmosphere",
      image: "https://source.unsplash.com/random/800x600?event"
    },
    {
      title: "Succeed",
      description: "Turn conversations into opportunities – secure deals, partnerships, and collaborations that drive success.",
      image: "https://source.unsplash.com/random/800x600?success"
    },
    {
      title: "Pitch",
      description: "Perfect your pitch and share your ideas with decision-makers.",
      image: "https://source.unsplash.com/random/800x600?presentation"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === cards.length - 3 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? cards.length - 3 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <HeroSection>
      <GoldenOverlay />
      <Content>
        <MainTitle>
          Make Your Mondays Meaningful:
          <br />
          <span>Network, Learn, and Grow</span> with
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

        <CarouselContainer>
          <CarouselButton className="prev" onClick={prevSlide}>❮</CarouselButton>
          <CarouselTrack style={{
            transform: `translateX(-${currentIndex * (100 / 3)}%)`
          }}>
            {cards.map((card, index) => (
              <Card key={index}>
                <img src={card.image} alt={card.title} />
                <div className="content">
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
              </Card>
            ))}
          </CarouselTrack>
          <CarouselButton className="next" onClick={nextSlide}>❯</CarouselButton>
        </CarouselContainer>
      </Content>
    </HeroSection>
  );
};

export default Hero;