import React, { useState } from 'react';
import styled from 'styled-components';

const AboutUsSectionContainer = styled.div`
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

const Description = styled.p`
  margin-bottom: 30px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px; /* Space between buttons */
`;

const Button = styled.a`
  background-color: #222; /* Default button background */
  color: white;
  padding: 15px 20px;
  border-radius: 8px;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f7a31c; /* Change to golden on hover */
  }
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 600px; /* Limit width */
  margin: 0 auto; /* Center the form */
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
`;

const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #222;
  color: white;
`;

const TextArea = styled.textarea`
  margin: 10px 0;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #222;
  color: white;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;

const SubmitButton = styled.button`
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
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <AboutUsSectionContainer>
      <Title>SAY HI! AND TELL US HOW CAN WE HELP YOU.</Title>
      <Subtitle>Get In Touch To Discuss Your Project Or Service Expectations.</Subtitle>
      <Description>Simply Fill In The Form Below Or Send Us An E-Mail To Info@Justux.Com</Description>
      <ButtonContainer>
        <Button href="#">Chat With Us</Button>
        <Button href="#">Discord Link</Button>
        <Button href="#">Telegram</Button>
      </ButtonContainer>
      <FormContainer onSubmit={handleSubmit}>
        <Input
          type="text"
          name="fullName"
          placeholder="FULL NAME*"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="EMAIL*"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          name="companyName"
          placeholder="COMPANY NAME"
          value={formData.companyName}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="referredBy"
          placeholder="WHO REFERRED YOU TO US?"
          value={formData.referredBy}
          onChange={handleChange}
        />
        <TextArea
          name="message"
          placeholder="MESSAGE"
          value={formData.message}
          onChange={handleChange}
          rows="4"
        />
        <CheckboxContainer>
          <Checkbox
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
          />
          <span>I agree and consent to the Privacy Policy.</span>
        </CheckboxContainer>
        <SubmitButton type="submit">Let’s Work Together</SubmitButton>
      </FormContainer>
    </AboutUsSectionContainer>
  );
};

export default AboutUsSection; 