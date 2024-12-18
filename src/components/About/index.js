import React, { useState } from 'react';
import styled from 'styled-components';

const AboutUsSectionContainer = styled.div`
  background: url('/images/background.png') center/cover no-repeat;
  width: 100vw;
  height: 100%;
  border-radius: 8px;
  padding: 40px 74px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
  margin: 0 auto;
  color: white;
  overflow: auto; /* Allow scrolling on smaller screens */

  @media (max-width: 768px) {
    padding: 20px;
    margin-top: 80px; /* Add margin top for mobile view */
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 10px;
  background: linear-gradient(90deg, #CCCCCC 0%, #FF6B2C 35%, #FFB800 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Subtitle = styled.h3`
  font-size: 1.2rem;
  color: #CCCCCC;
  margin-bottom: 10px;
  font-weight: normal;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Description = styled.p`
  margin-bottom: 30px;
  color: #CCCCCC;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 15px;
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 22px;
  margin-bottom: 30px;
  width: 1102px;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
`;

const IconBox = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #0A0A0A;
  border-top: 5px solid ${(props) => props.borderColor || '#FF6B2C'};
  padding: 20px;
  width: 259px;
  height: 127px;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
  transition: background-color 0.3s ease;
  font-family: 'Sawarabi Gothic', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-align: center;

  &:hover {
    background-color: #222;
  }

  img {
    width: 40px;
    margin-bottom: 10px;
  }

  @media (max-width: 768px) {
    width: 200px;
    height: 100px;
    font-size: 12px;
  }
`;

const FormContainer = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  gap: 20px;
  width: 100%;
  max-width: 1102px;
  margin: 0 auto;
  padding: 20px;
  background: rgba(17, 17, 17, 0.9);
  border-radius: 8px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 15px;
    margin: 0 auto;
  }
`;

const InputGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 22px;
  grid-column: span 2;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

const Label = styled.label`
  font-size: 1rem;
  color: #F4F4F4;
  text-transform: uppercase;
  display: block;
  margin-bottom: 4px;
  font-weight: normal;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Input = styled.input`
  padding: 12px;
  background: transparent;
  border: none;
  border-bottom: 1px solid #333;
  color: white;
  width: 100%;
  box-sizing: border-box;

  &::placeholder {
    color: #A8A8A8;
    font-size: 0.9rem;
    text-transform: uppercase;
  }

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const TextArea = styled.textarea`
  grid-column: span 2;
  background: transparent;
  border: none;
  border-bottom: 1px solid #333;
  padding: 12px;
  color: white;
  width: 100%;
  height: 50px;
  resize: none;
  box-sizing: border-box;

  &::placeholder {
    color: #A8A8A8;
    font-size: 0.9rem;
  }

  @media (max-width: 768px) {
    padding: 10px;
    height: auto;
  }
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  grid-column: span 2;

  span {
    color: #6F6F6F;
    font-size: 0.85rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;

const SubmitButton = styled.button`
  background: linear-gradient(90deg, #EF7A42 0%, #FFCB37 100%);
  color: black;
  padding: 8px 16px;
  width: 156px;
  height: 48px;
  border-radius: 9px;
  border: none;
  cursor: pointer;
  font-family: 'Sawarabi Gothic', sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 12px 0;
  }
`;

const AboutUsSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    companyName: '',
    referredBy: '',
    message: '',
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <AboutUsSectionContainer>
      <Title>SAY HI! AND TELL US HOW CAN WE HELP YOU.</Title>
      <Subtitle>Get In Touch To Discuss Your Project Or Service Expectations.</Subtitle>
      <Description>Simply Fill In The Form Below Or Send Us An E-Mail To Info@Justux.Com</Description>

      <IconContainer>
        <IconBox href="#" borderColor="#FF6B2C">
          <img src="/images/chatwithus.png" alt="Chat" />
          Chat With Us
        </IconBox>
        <IconBox href="#" borderColor="#5E63FF">
          <img src="/images/Discord Link.png" alt="Discord" />
          Discord Link
        </IconBox>
        <IconBox href="#" borderColor="#F7A31C">
          <img src="/images/Telegram.png" alt="Telegram" />
          Telegram
        </IconBox>
        <IconBox href="mailto:hello@moneymonday" borderColor="#009FFF">
          <img src="/images/gmail.png" alt="Email" />
          hello@moneymonday
        </IconBox>
      </IconContainer>

      <FormContainer onSubmit={handleSubmit}>
        <InputGroup>
          <div>
            <Label htmlFor="fullName">Full Name*</Label>
            <Input
              type="text"
              name="fullName"
              id="fullName"
              placeholder="So we know how to address you"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="companyName">Company Name</Label>
            <Input
              type="text"
              name="companyName"
              id="companyName"
              placeholder="So we can tailor the services to your business needs"
              value={formData.companyName}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label htmlFor="email">Email*</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="So we can respond promptly to your enquiry"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="referredBy">Who Referred You?</Label>
            <Input
              type="text"
              name="referredBy"
              id="referredBy"
              placeholder="So we can say thank you"
              value={formData.referredBy}
              onChange={handleChange}
            />
          </div>
        </InputGroup>
        
        <Label htmlFor="message">Message*</Label>
        <TextArea
          name="message"
          id="message"
          placeholder="Give us more details about your request"
          value={formData.message}
          onChange={handleChange}
          required
        />
        
        <CheckboxContainer>
          <div>
            <Checkbox
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
            />
            <span>I agree and consent to the Privacy Policy, its terms of processing of my personal data.</span>
          </div>
          <SubmitButton type="submit">Let's Work Together</SubmitButton>
        </CheckboxContainer>
      </FormContainer>
    </AboutUsSectionContainer>
  );
};

export default AboutUsSection;
