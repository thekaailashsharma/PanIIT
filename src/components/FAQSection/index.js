import React, { useState } from 'react';
import styled from 'styled-components';

const FAQSectionContainer = styled.div`
  background-color: #000; /* Background color */
  color: white;
  padding: 40px 20px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 10px;
`;

const Subtitle = styled.h3`
  font-size: 1.5rem;
  color: #f7a31c; /* Golden color for subtitle */
  margin-bottom: 20px;
`;

const QuestionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); /* Responsive grid */
  gap: 20px; /* Space between questions */
`;

const QuestionContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 15px;
  cursor: pointer;
  transition: background-color 0.3s, border 0.3s;
  border: 1px solid transparent; /* Default border */

  &:hover {
    background: linear-gradient(90deg, rgba(247, 163, 28, 0.2), rgba(247, 163, 28, 0.5)); /* Golden gradient on hover */
    border: 1px solid #f7a31c; /* Golden border on hover */
  }
`;

const Question = styled.h3`
  font-size: 1.2rem;
  margin: 0;
`;

const Answer = styled.p`
  font-size: 0.9rem;
  margin: 10px 0 0 0;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')}; /* Show or hide answer */
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
  ];

  return (
    <FAQSectionContainer>
      <Title>Got Questions?</Title>
      <Subtitle>We’ve Got Answers!</Subtitle>
      <QuestionsGrid>
        {faqs.map((faq, index) => (
          <QuestionContainer key={index} onClick={() => toggleAnswer(index)}>
            <Question>{faq.question}</Question>
            <Answer isOpen={openIndex === index}>{faq.answer}</Answer>
          </QuestionContainer>
        ))}
      </QuestionsGrid>
    </FAQSectionContainer>
  );
};

export default FAQSection; 