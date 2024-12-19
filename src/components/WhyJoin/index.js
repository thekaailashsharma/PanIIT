import React from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the styles

const Section = styled.div`
  background: #000000;
  padding: 0 20px 100px 20px;
  text-align: center;
  overflow-x: hidden;

  @media (max-width: 768px) {
    padding: 20px 10px 50px 10px;
    margin-top: 50px; /* Add space from top in mobile view */
  }
`;

const Title = styled.h2`
  font-size: 56px;
  line-height: 1.2;
  margin-bottom: 20px;
  font-family: 'Satoshi', sans-serif;

  .highlight {
    color: #f7a31c;
    background: linear-gradient(to right, #f7a31c, #ffa726);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .white {
    color: white;
  }

  @media (max-width: 768px) {
    font-size: 32px;
    margin-bottom: 15px;
  }
`;

const Subtitle = styled.h3`
  color: #cccccc;
  font-family: 'Angkor', sans-serif;
  font-size: 24px;
  margin-bottom: 60px;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 30px;
  }
`;

const CardContainer = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  transition: transform 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    margin-bottom: 20px; /* Add space between cards */
  }

  &:hover {
    transform: scale(1.05); /* Slightly reduced scale for smoother hover */
  }
`;

const Card = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 10px;

  img {
    width: 45%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05); /* Slight zoom effect on hover */
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 250px; /* Adjust card height for mobile view */
  }
`;

const CardContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  font-family: 'Sawarabi Gothic', sans-serif;
  background: linear-gradient(to top, rgba(0,0,0,0.9), transparent);
  color: white;
  text-align: left;

  p {
    margin: 0;
    font-size: 24px;
    font-weight: 400;
    line-height: 1.4;
  }

  .orange-text {
    font-weight: 700;
    font-family: 'Satoshi', sans-serif;
    color: #f7a31c;
  }

  @media (max-width: 768px) {
    font-size: 18px;
    padding: 15px;

    p {
      font-size: 14px;
    }
  }
`;

const WhyJoin = () => {
  const cards = [
    {
      image: "/images/opp1.png",
      text: "Learn from ",
      highlight: "Industry Experts",
      subtext: "through insightful panel discussions.",
    },
    {
      image: "/images/opp2.png",
      text: "Discover new opportunities in ",
      highlight: "Web3, Blockchain, And Finance",
    },
    {
      image: "/images/opp3.png",
      text: "Network with like-minded ",
      highlight: "professionals",
      subtext: "and decision-makers.",
    },
    {
      image: "/images/opp4.png",
      text: "Enjoy a ",
      highlight: "Vibrant Ambiance",
      subtext: "with live entertainment.",
    },
  ];

  return (
      <Section>
        <Title>
          <span className="highlight">Why Should You Join</span>
          <br />
          <span className="white">Money Monday Dubai?</span>
        </Title>
        <Subtitle>Here's how we make your Mondays impactful</Subtitle>

        <Carousel
            infiniteLoop
            useKeyboardArrows
            autoPlay
            interval={3000}
            transitionTime={500}
            showArrows
            showThumbs={false}
            showStatus={false}
            swipeable
            centerMode={false} // Disabled centerMode for better responsiveness
            dynamicHeight={false}
            emulateTouch
            centerSlidePercentage={20} // Show 4-5 items on desktop (roughly 20% of the container width)
        >
          {cards.map((card, index) => (
              <div key={index}>
                <CardContainer>
                  <Card>
                    <img src={card.image} alt={card.highlight} />
                    <CardContent>
                      <p>
                        {card.text}
                        <span className="orange-text">{card.highlight}</span>
                        {card.subtext && <><br />{card.subtext}</>}
                      </p>
                    </CardContent>
                  </Card>
                </CardContainer>
              </div>
          ))}
        </Carousel>
      </Section>
  );
};

export default WhyJoin;
