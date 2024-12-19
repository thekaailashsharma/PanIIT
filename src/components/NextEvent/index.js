import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "styled-components";

const Section = styled.div`
  background: #000000;
  padding: 15rem 0;
  position: relative;
  overflow: hidden;
`;

const GridBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("/images/3D Bg.png") no-repeat center center;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 56px;
  color: white;
  margin-bottom: 60px;
  font-family: 'Satoshi', sans-serif;

  span {
    color: #f7a31c;
    font-family: 'Satoshi', sans-serif;
  }

  @media (max-width: 768px) {
    font-size: 40px; /* Adjust title size for tablets */
    margin-bottom: 40px;
  }

  @media (max-width: 480px) {
    font-size: 32px; /* Adjust title size for mobile */
    margin-bottom: 20px;
  }
`;

const EventCard = styled.div`
  user-select: none;
  margin: 0rem 1.5rem;
  gap: 20px;
  padding: 20px;
  background-color: rgba(30, 30, 30, 0.45);
  backdrop-filter: blur(2px);
  text-align: center;
  height: 70vh; /* Adjusted height for desktop */
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Ensures content stays in place */

  img {
    width: 100%;
    height: 200px; /* Adjusted image height */
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 20px;
  }

  &:hover {
    border-left: 2px solid #EF7A42;
  }

  @media (max-width: 768px) {
    margin: 0rem 1rem;
    height: 70vh; /* Adjusted height for tablets */
  }

  @media (max-width: 480px) {
    margin: 0rem;
    padding: 15px;
    height: auto; /* Allow content to grow for mobile */
  }
`;

const EventTitle = styled.h3`
  font-size: 32px;
  font-family: 'Sawarabi Gothic', sans-serif;
  color: white;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 24px; /* Adjust title size for tablets */
  }

  @media (max-width: 480px) {
    font-size: 20px; /* Adjust title size for mobile */
  }
`;

const EventDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* Adjust grid layout for tablets */
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr; /* Ensure 1 column for mobile */
  }
`;

const DetailBox = styled.div`
  background: rgba(30, 30, 30, 0.5);
  padding: 20px;
  border-radius: 10px;

  h4 {
    color: #999;
    font-size: 14px;
    margin-bottom: 10px;
    font-family: 'Sawarabi Gothic', sans-serif;
  }

  p {
    color: white;
    font-size: 16px;
  }

  @media (max-width: 768px) {
    padding: 15px; /* Adjust padding for smaller screens */
  }

  @media (max-width: 480px) {
    padding: 10px; /* Further reduce padding for mobile */
  }
`;

const NextEvent = () => {
  const events = [
    {
      title: "How to Successfully Pitch Yourself and Close Deals?",
      image: "/images/oppp.png",
      date: "Monday, December 9th",
      time: "8:00 PM - 11:00 PM",
      venue: "J'adore Dubai, Hilton Hotel Al Habtoor City",
    },
    {
      title: "AI in Business: Shaping the Future",
      image: "/images/oppp.png",
      date: "Tuesday, December 10th",
      time: "6:00 PM - 9:00 PM",
      venue: "Tech Park, Innovation Center Dubai",
    },
  ];

  return (
      <Section>
        <GridBackground />
        <Container>
          <Title>
            Next <span>Event</span> Details
          </Title>

          {/* React Responsive Carousel */}
          <Carousel
              showArrows
              autoPlay
              interval={5000}
              showThumbs={false}
              showStatus={false}
              centerMode
              centerSlidePercentage={75}
              swipeable
          >
            {events.map((event, index) => (
                <EventCard key={index}>
                  <img src={event.image} alt={event.title} />
                  <EventTitle>{event.title}</EventTitle>
                  <EventDetails>
                    <DetailBox>
                      <h4>Date</h4>
                      <p>{event.date}</p>
                    </DetailBox>
                    <DetailBox>
                      <h4>Time</h4>
                      <p>{event.time}</p>
                    </DetailBox>
                    <DetailBox>
                      <h4>Venue</h4>
                      <p>{event.venue}</p>
                    </DetailBox>
                  </EventDetails>
                </EventCard>
            ))}
          </Carousel>
        </Container>
      </Section>
  );
};

export default NextEvent;
