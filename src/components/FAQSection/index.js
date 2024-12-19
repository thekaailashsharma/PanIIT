import React, { useState } from 'react';
import styled from 'styled-components';
import { FaPlus, FaMinus } from 'react-icons/fa'; // Importing icons

const FAQSectionContainer = styled.div`
  background-color: #000; /* Background color */
  color: white;
  padding: 40px 20px;
  text-align: center;
  max-width: 1200px;
  margin: 0 auto; /* Center the container */
  border-radius: 10px; /* Rounded corners for container */
  @media (max-width: 768px) {
    padding: 30px 15px; /* Adjust padding for smaller screens */
  }
`;

const Title = styled.p`
  font-size: 2rem;
  margin-bottom: 10px;
  font-family: "SawarabiGothic", Arial, sans-serif;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: #f7a31c; /* Golden color for subtitle */
  margin-bottom: 20px;
  font-family: 'Sawarabi Gothic', sans-serif;
`;

const QuestionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Two columns */
  gap: 20px; /* Space between questions */
  margin-top: 30px; /* Add margin for spacing between title and questions */

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Single column on smaller screens */
    gap: 15px; /* Smaller gap on mobile */
  }
`;

const QuestionContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 15px;
  cursor: pointer;
  transition: border 0.3s, height 0.3s;
  border: 1px solid transparent; /* Default border */
  position: relative; /* Added for positioning the border */
  height: ${({ isOpen }) => (isOpen ? 'auto' : '60px')};
  margin: 0; /* Ensures no additional margin is applied */

  &:hover {
    border: 1px solid #f7a31c; /* Golden border on hover */
    height: auto; /* Expand on hover */
  }

  &.active {
    border: 1px solid #f7a31c; /* Active border */
  }

  @media (max-width: 768px) {
    padding: 10px; /* Adjust padding for mobile */
  }
`;

const Question = styled.h3`
  font-size: 1.2rem;
  margin: 0;
  display: flex;
  justify-content: space-between; /* Align question and icon */
  align-items: center; /* Center vertically */
`;

const Answer = styled.p`
  font-size: 0.9rem;
  margin: 10px 0 0 0;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')}; /* Show or hide answer */
  padding: 10px; /* Padding for the answer */
  background-color: transparent; /* Background for the answer */
  border-radius: 8px; /* Rounded corners */
  color: white; /* Keep answer text color white */
`;

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is the minimum sponsorship period?",
      answer: "You can sponsor for as little as 1 month or choose an annual plan for better rates.",
    },
    {
      question: "Can I upgrade my sponsorship package later?",
      answer: "Yes, you can upgrade your sponsorship package at any time.",
    },
    {
      question: "Can I set up a booth at the event?",
      answer: "Yes, booths can be set up at the event for sponsors.",
    },
    {
      question: "What type of exposure will my brand get?",
      answer: "Your brand will be featured in various promotional materials and at the event.",
    },
    {
      question: "How do I use this?",
      answer: "You can use this platform to connect with potential customers and partners.",
    },
    {
      question: "How do I know my brand is being promoted?",
      answer: "You will receive updates and reports on your brand's exposure.",
    },
  ];

  return (
      <FAQSectionContainer>
        <Title>Got Questions?</Title>
        <Subtitle>We’ve Got Answers!</Subtitle>
        <QuestionsGrid>
          {faqs.map((faq, index) => (
              <QuestionContainer
                  key={index}
                  onClick={() => toggleAnswer(index)}
                  className={openIndex === index ? 'active' : ''}
                  isOpen={openIndex === index}
              >
                <Question>
                  {faq.question}
                  <span>
                {openIndex === index ? <FaMinus /> : <FaPlus />} {/* Plus/Minus icon */}
              </span>
                </Question>
                <Answer isOpen={openIndex === index}>
                  {faq.answer}
                </Answer>
              </QuestionContainer>
          ))}
        </QuestionsGrid>
      </FAQSectionContainer>
  );
};

export default FAQSection;
