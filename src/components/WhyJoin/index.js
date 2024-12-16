import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  background: #000000;
  padding: 100px 20px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 56px;
  line-height: 1.2;
  margin-bottom: 20px;

  .highlight {
    color: #f7a31c;
    background: linear-gradient(to right, #f7a31c, #ffa726);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .white {
    color: white;
  }
`;

const Subtitle = styled.h3`
  color: #cccccc;
  font-size: 24px;
  margin-bottom: 60px;
  font-weight: 400;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Card = styled.div`
  position: relative;
  aspect-ratio: 3/4;
  overflow: hidden;
  border-radius: 10px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const CardContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  background: linear-gradient(to top, rgba(0,0,0,0.9), transparent);
  color: white;
  text-align: left;

  p {
    margin: 0;
    line-height: 1.4;
  }

  .orange-text {
    color: #f7a31c;
  }
`;

const WhyJoin = () => {
  const cards = [
    {
      image: "/images/opp1.png",
      text: "Learn from ",
      highlight: "Industry Experts",
      subtext: "through insightful panel discussions."
    },
    {
      image: "/images/opp2.png",
      text: "Discover new opportunities in ",
      highlight: "Web3, Blockchain, And Finance"
    },
    {
      image: "/images/opp3.png",
      text: "Network with like-minded ",
      highlight: "professionals",
      subtext: "and decision-makers."
    },
    {
      image: "/images/opp4.png",
      text: "Enjoy a ",
      highlight: "Vibrant Ambiance",
      subtext: "with live entertainment."
    }
  ];

  return (
    <Section>
      <Title>
        <span className="highlight">Why Should You Join</span>
        <br />
        <span className="white">Money Monday Dubai?</span>
      </Title>
      <Subtitle>Here's how we make your Mondays impactful</Subtitle>
      
      <Grid>
        {cards.map((card, index) => (
          <Card key={index}>
            <img src={card.image} alt={card.highlight} />
            <CardContent>
              <p>
                {card.text}
                <span className="orange-text">{card.highlight}</span>
                {card.subtext && <><br />{card.subtext}</>}
              </p>
            </CardContent>
          </Card>
        ))}
      </Grid>
    </Section>
  );
};

export default WhyJoin;
