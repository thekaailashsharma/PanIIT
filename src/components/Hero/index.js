import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

// Styled Components
const BackgroundImage = styled.section`
  min-height: 140vh;
  background: url('/images/Group 628010.png') center no-repeat;

  @media (max-width: 768px) {
    min-height: 100vh;
    background-size: cover;
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
    padding-top: 2rem;
  }
`;

const MainTitle = styled.h1`
  font-size: 50px;
  line-height: 3rem;
  padding: 8rem 0 20px 0;
  font-weight: 400;
  font-family: 'Sawarabi Gothic', sans-serif;

  @media (max-width: 768px) {
    font-size: 30px;
    padding: 6rem 0 20px 0;
  }
`;

const SubTitle = styled.p`
  font-family: 'Sawarabi Gothic', sans-serif;
  font-size: 20px;
  color: white;

  @media (max-width: 768px) {
    font-size: 16px;
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
    padding: 12px 24px;
    font-size: 16px;
    margin: 20px 0 60px 0;
  }
`;

const Card = styled.div`
  background: rgba(20, 20, 20, 0.5);
  border-radius: 10px;
  margin: 10px;
  overflow: hidden;
  backdrop-filter: blur(4px);
  user-select: none;

  img {
    width: 100%;
    height: 300px; /* Set a fixed height for images on desktop */
    object-fit: cover; /* Ensure the image covers the area */
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.05); /* Scale effect on hover */
    }
  }

  .content {
    padding: 10px;
    text-align: center;
  }

  h3 {
    color: white;
    border-bottom: 0.2px solid #7a7a7a;
    font-weight: 400;
    font-size: 20px;
    margin-bottom: 10px;
  }

  p {
    color: white;
    font-size: 14px;
    line-height: 1.4;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media (max-width: 768px) {
    height: auto;

    img {
      height: 180px; /* Adjust height for mobile */
    }

    h3 {
      font-size: 18px;
      margin-bottom: 5px;
    }

    p {
      font-size: 12px;
    }
  }
`;

const cardData = [
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

// Hero Component
const Hero = ({ onReserveClick }) => {
  return (
      <HeroSection>
        <BackgroundImage>
          <MainTitle>
            Make Your Mondays Meaningful: <br />
            <span style={{ color: '#f7a31c' }}>Network, Learn, and Grow</span> with <br />
            Money Monday Dubai!
          </MainTitle>
          <SubTitle>
            Join Dubai's Premier Networking Event For Entrepreneurs And Business Professionals <br />
            Every Monday Evening.
          </SubTitle>
          <ReserveButton onClick={onReserveClick}>Reserve Your Spot</ReserveButton>

          <Carousel
              showArrows={true}
              showStatus={false}
              showThumbs={false}
              infiniteLoop
              autoPlay
              interval={3000}
              emulateTouch
              swipeable
              centerMode
              centerSlidePercentage={80} // Adjusted for mobile
              stopOnHover
              dynamicHeight
              width="100%" // Ensure the carousel occupies full width
              selectedItem={0}
          >
            {cardData.map((card, index) => (
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

// Prop Validation
Hero.propTypes = {
  onReserveClick: PropTypes.func
};

Hero.defaultProps = {
  onReserveClick: () => alert('Reserve button clicked!')
};

export default Hero;
