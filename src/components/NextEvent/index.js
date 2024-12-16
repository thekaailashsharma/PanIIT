import React, { useState } from 'react';
import styled from 'styled-components';

const Section = styled.div`
  background: #000000;
  padding: 100px 0;
  position: relative;
  overflow: hidden;
`;

const GridBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: linear-gradient(#333 1px, transparent 1px),
    linear-gradient(90deg, #333 1px, transparent 1px);
  background-size: 50px 50px;
  perspective: 1000px;
  transform: rotateX(60deg);
  transform-origin: top;
  opacity: 0.2;
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

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  padding: 0 40px;
`;

const CarouselTrack = styled.div`
  display: flex;
  transition: transform 0.5s ease;
`;

const EventCard = styled.div`
  flex: 0 0 100%;
  padding: 20px;
  
  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 20px;
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

const CarouselDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 30px;
`;

const Dot = styled.button`
  width: 50px;
  height: 4px;
  background: ${props => props.active ? '#f7a31c' : '#333'};
  border: none;
  cursor: pointer;
  transition: background 0.3s ease;
`;

const NextEvent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const events = [
    {
      title: "How to Successfully Pitch Yourself and Close Deals?",
      image: "https://firebasestorage.googleapis.com/v0/b/gdsc-sies-gst.appspot.com/o/Frame%201261156484.png?alt=media&token=3790b781-a69a-417a-b85f-5c64c8ae2707",
      date: "Monday, December 9th",
      time: "8:00 PM - 11:00 PM",
      venue: "J'adore Dubai, Hilton Hotel Al Habtoor City"
    },
    // Add more events if needed
  ];

  return (
    <Section>
      <GridBackground />
      <Container>
        <Title>
          Next <span>Event</span> Details
        </Title>

        <CarouselContainer>
          <CarouselTrack style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
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
          </CarouselTrack>
        </CarouselContainer>

        <CarouselDots>
          {events.map((_, index) => (
            <Dot 
              key={index}
              active={currentSlide === index}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </CarouselDots>
      </Container>
    </Section>
  );
};

export default NextEvent;
