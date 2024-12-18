import React, { useState } from 'react';
import styled from 'styled-components';

const AboutUsSectionContainer = styled.div`
  background: url('/images/background.png') center/cover no-repeat;
  width: 100vw; /* Full width */
  height: 100vh; /* Full height */
  border-radius: 8px; /* Rounded corners */
  padding: 40px 74px; /* Top, Right, Bottom, Left padding */
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-sizing: border-box; /* Include padding and border in dimensions */
  margin: 0 auto; /* Center the container horizontally */
  color: white;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 10px;
  background: linear-gradient(90deg, #CCCCCC 0%, #FF6B2C 35%, #FFB800 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-transform: uppercase;
`;

const Subtitle = styled.h3`
  font-size: 1.2rem;
  color: #CCCCCC;
  margin-bottom: 10px;
  font-weight: normal;
`;

const Description = styled.p`
  margin-bottom: 30px;
  color: #CCCCCC;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 40px;
`;

const IconBox = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #0A0A0A;
  border-top: 5px solid ${(props) => props.borderColor || '#FF6B2C'};
  padding: 20px;
  width: 180px;
  height: 120px;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
  transition: background-color 0.3s ease;
  font-family: 'Sawarabi Gothic', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;

  &:hover {
    background-color: #222;
  }

  img {
    width: 40px;
    margin-bottom: 10px;
  }
`;

const FormContainer = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr; /* Two columns layout */
  gap: 20px;
  max-width: 1102px;
  margin: 0 auto;
  padding: 20px;
  background: rgba(17, 17, 17, 0.9);
  border-radius: 8px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Stack fields on mobile */
  }
`;

const Label = styled.label`
  font-size: 1rem;
  color: #F4F4F4;
  text-transform: uppercase;
  display: block;
  margin-bottom: 8px;
  font-weight: normal;
  text-align: left;
`;

const Input = styled.input`
  padding: 15px;
  background: transparent;
  border: none;
  border-bottom: 1px solid #333;
  color: white;
  width: 100%;
  
  &::placeholder {
    color: #525252;
    text-transform: uppercase;
  }
`;

const TextArea = styled.textarea`
  grid-column: 1 / -1; /* Makes the textarea span across both columns */
  background: transparent;
  border: none;
  border-bottom: 1px solid #333;
  padding: 15px;
  color: white;
  width: 100%; /* Occupy full width of the container */

  &::placeholder {
    color: #525252;
  }
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
  grid-column: 1 / -1;
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;

const SubmitButton = styled.button`
  background: linear-gradient(90deg, #EF7A42 0%, #FFCB37 100%);
  color: black;
  padding: 8px 16px;
  gap: 8px;
  border-radius: 9px 0px 0px 0px;
  width: 156px; /* Fixed width */
  height: 48px; /* Fixed height */
  border: none;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
  opacity: 0; /* Initially set to 0 (invisible) */

  &:hover {
    opacity: 0.9;
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
        <div>
          <Label htmlFor="fullName">Full Name*</Label>
          <Input
            type="text"
            name="fullName"
            id="fullName"
            placeholder="So  we know how to address you"
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
        <div>
          <Label htmlFor="message">Message</Label>
          <TextArea
            name="message"
            id="message"
            placeholder="Give us more details about your request so the colleagues with relevant experience can focus on your needs"
            value={formData.message}
            onChange={handleChange}
            rows="4"
          />
        </div>
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
