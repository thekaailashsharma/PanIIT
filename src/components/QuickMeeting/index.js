import React, { useState } from 'react';
import styled from 'styled-components';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import calendar styles

const QuickMeetingContainer = styled.div`
  background-color: #000; /* Background color */
  color: white;
  padding: 40px 20px;
  text-align: left; /* Align text to the left */
  display: flex; /* Use flexbox for layout */
  flex-direction: column; /* Stack items vertically */
  max-width: 600px; /* Limit width */
  margin: auto; /* Center the container */
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const MeetingDetails = styled.div`
  margin-bottom: 30px;
`;

const MeetingTitle = styled.h3`
  font-size: 1.5rem;
  color: #f7a31c; /* Different color for title */
`;

const MeetingInfo = styled.p`
  font-size: 1rem;
  margin: 5px 0; /* Add margin for spacing */
`;

const CalendarContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const StyledCalendar = styled(Calendar)`
  background-color: #222; /* Calendar background */
  border-radius: 8px;
  padding: 10px;
`;

const Button = styled.button`
  background-color: #f7a31c;
  color: black;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ff9900;
  }
`;

const TimeZone = styled.p`
  font-size: 0.9rem;
  color: #cccccc; /* Light color for time zone */
  margin-top: 20px; /* Add margin for spacing */
`;

const QuickMeeting = () => {
  const [date, setDate] = useState(new Date());

  return (
    <QuickMeetingContainer>
      <Title>Let's Hop On</Title>
      <MeetingDetails>
        <MeetingTitle>MM</MeetingTitle>
        <MeetingInfo>Promote Your Brand</MeetingInfo>
        <MeetingInfo>Every Monday</MeetingInfo>
        <MeetingInfo>30 min</MeetingInfo>
        <MeetingInfo>Phone call</MeetingInfo>
        <MeetingInfo>This is an example of a meeting you would have with a potential customer to demonstrate your product.</MeetingInfo>
      </MeetingDetails>
      <CalendarContainer>
        <StyledCalendar
          onChange={setDate}
          value={date}
        />
      </CalendarContainer>
      <Button>Download Our Deck Here</Button>
      <TimeZone>Time zone: Central European Time (8:11pm)</TimeZone>
    </QuickMeetingContainer>
  );
};

export default QuickMeeting; 