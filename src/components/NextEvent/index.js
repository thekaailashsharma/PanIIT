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

  span {
    color: #f7a31c;
  }
`;

const EventCard = styled.div`
  margin: 0rem 1.5rem;
  gap: 20px;
  padding: 20px;
  background-color: rgba(30, 30, 30, 0.45);
  backdrop-filter: blur(2px);
  text-align: center;
  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 20px;
  }
    &:hover{
  border-left: 2px solid #EF7A42;
    }
`;

const EventTitle = styled.h3`
  font-size: 32px;
  color: white;
  margin-bottom: 30px;
`;

const EventDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

const DetailBox = styled.div`
  background: rgba(30, 30, 30, 0.5);
  padding: 20px;
  border-radius: 10px;

  h4 {
    color: #999;
    font-size: 14px;
    margin-bottom: 10px;
  }

  p {
    color: white;
    font-size: 16px;
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
      image: "/images/ai-event.png",
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
