import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const BackgroundImage = styled.section`
  min-height: 140vh;
  background: url('/images/Group 628010.png') center no-repeat;

  @media (max-width: 768px) {
    min-height: 100vh;
  }
`;

const HeroSection = styled.section`
  min-height: 50vh;
  background: url('/images/dots.png') center no-repeat; 
  position: relative;
  overflow: hidden;
  color: white;
  text-align: center;

  @media (max-width: 768px) {
    padding-top: 2rem; /* Larger margin top for mobile */
  }
`;

const MainTitle = styled.h1`
  font-size: 50px;
  line-height: 3rem;
  padding: 8rem 0 20px 0;
  font-weight: 400;
  font-family: 'Sawarabi Gothic', sans-serif;

  @media (max-width: 768px) {
    font-size: 30px;  /* Smaller title for mobile */
    padding: 6rem 0 20px 0;
  }
`;

const SubTitle = styled.p`
  font-family: 'Sawarabi Gothic', sans-serif;
  font-size: 20px;
  color: white;

  @media (max-width: 768px) {
    font-size: 16px;  /* Smaller subtitle for mobile */
  }
`;

const ReserveButton = styled.button`
  background: linear-gradient(to right, #EF7A42, #FFCB37);
  color: black;
  border: none;
  padding: 15px 30px;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 800;
  cursor: pointer;
  margin: 30px 0 80px 0;

  &:hover {
    background: linear-gradient(to right, #FFCB37, #EF7A42);
    transform: translateY(-1px);
  }

  @media (max-width: 768px) {
    padding: 12px 24px;  /* Smaller button for mobile */
    font-size: 16px; 
    margin: 20px 0 60px 0;  /* Adjusted margin for mobile */
  }
`;

const Card = styled.div`
  background: rgba(20, 20, 20, 0.5);
  border-radius: 10px;
  margin: 10px 10px;
  overflow: hidden;
  backdrop-filter: blur(4px);
  user-select: none;
  

  img {
    width: 100%;
    height: 300px;
    padding: 10px;
    object-fit: cover;
  }

  .content {
    padding: 10px;
    text-align: left;
  }

  h3 {
    color: rgb(255, 255, 255);
    border-bottom: 0.2px solid rgb(122, 122, 122);
    font-weight: 400;
    font-size: 23px;
    margin-bottom: 10px;
  }

  p {
    color: rgb(255, 255, 255);
    font-size: 14px;
    line-height: 1.4;
  }

  @media (max-width: 768px) {
    /* Smaller cards for mobile */
    height: 220px;
    width: 100%;

    h3 {
      font-size: 18px;  /* Smaller title for mobile */
      margin-bottom: 5px;
    }

    p {
      font-size: 14px;  /* Smaller description for mobile */
    }

    img {
      height: 180px;  /* Smaller image for mobile */
    }
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
      <BackgroundImage>
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
          showArrows={false}
          showStatus={false}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
          emulateTouch={true}
          swipeable={true}
          centerMode
          centerSlidePercentage={24}
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
      </BackgroundImage>
    </HeroSection>
  );
};

export default Hero;
