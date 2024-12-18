import React from "react";
import styled from "styled-components";

// Styled variables
const colors = {
  background: "#111",
  cardBackground: "#222",
  text: "#fff",
  title: "#f90",
  subtitle: "#aaa",
};

// Shared Styled Components
const Section = styled.section`
  text-align: center;
  background-color: ${colors.background};
  color: ${colors.text};
  padding: 50px 20px;
  font-family: Arial, sans-serif;
`;

const Title1 = styled.div`
  font-size: 1.8rem;
  color: ${colors.title};
  margin-bottom: 20px;
`;

const MainTitle = styled.h2`
  font-size: 2.5rem;
  font-family: 'Sawarabi Gothic', sans-serif;
  margin: 0;
`;

const SubTitle = styled.h3`
  margin: 0 10rem;
  text-align: left;
  font-family: 'Sawarabi Gothic', sans-serif;
  font-size: 1.8rem;
  color: #FFFFFF;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    margin: 0 2rem; /* Adjust margin for tablets */
    font-size: 1.6rem;
  }

  @media (max-width: 480px) {
    margin: 0 1rem; /* Adjust margin for mobile */
    font-size: 1.4rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin: 30px 10rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* Responsive for tablets */
    margin: 30px 5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr; /* Responsive for mobile */
    margin: 30px 1rem;
  }
`;

const Card = styled.div`
  background-color: ${colors.cardBackground};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease;
  text-align: center;
  padding-bottom: 15px;
  height: 50vh;
  border: 1px solid rgba(158, 158, 158, 0.38);

  &:hover {
    transform: translateY(-10px);
  }

  @media (max-width: 768px) {
    height: auto; /* Adjust card height for smaller screens */
  }
`;

const Image = styled.img`
  width: 100%;
  height: 250px;
  padding: 15px 20px;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 200px; /* Adjust image height for smaller screens */
  }

  @media (max-width: 480px) {
    height: 180px; /* Further adjust image height for mobile */
  }
`;

const Name = styled.h4`
  margin: 10px 0 5px;
  font-family: 'Sawarabi Gothic', sans-serif;
  font-size: 1.2rem;
`;

const Title = styled.p`
  color: ${colors.subtitle};
  margin: 0;
  font-family: 'Sawarabi Gothic', sans-serif;
  font-size: 1rem;
`;

// Panelists Component
const Panelists = () => {
  const panelistData = [
    { id: 1, img: "/images/panel1.png" },
    { id: 2, img: "/images/panel2.png" },
    { id: 3, img: "/images/panel3.png" },
    { id: 4, img: "/images/panel4.png" },
  ];

  const moderatorData = [
    { id: 5, img: "/images/panel1.png" },
    { id: 6, img: "/images/panel2.png" },
    { id: 7, img: "/images/panel3.png" },
    { id: 8, img: "/images/panel4.png" },
  ];

  return (
    <Section>
      {/* Panelists Section */}
      <MainTitle>Our Esteemed</MainTitle>
      <Title1>Panelists & Moderators</Title1>
      <SubTitle>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#EF65FF" // Change color as needed
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ marginRight: '8px' }} // Space between icon and text
          >
            <polygon points="12 2 2 22 22 22 12 2" />
          </svg>
          <span style={{ fontFamily: 'Sawarabi Gothic', fontSize: '1.5rem', color: '#fff' }}>
            PANELISTS
          </span>
        </div>
      </SubTitle>
      <Grid>
        {panelistData.map((panelist) => (
          <Card key={panelist.id}>
            <Image src={panelist.img} alt="Panelist" />
            <Name>Duncan Davies</Name>
            <Title>Chief Executive Officer</Title>
          </Card>
        ))}
      </Grid>

      {/* Moderators Section */}
      <SubTitle>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#EF65FF" // Change color as needed
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ marginRight: '8px' }} // Space between icon and text
          >
            <polygon points="12 2 2 22 22 22 12 2" />
          </svg>
          <span style={{ fontFamily: 'Sawarabi Gothic', fontSize: '1.5rem', color: '#fff' }}>
            MODERATORS
          </span>
        </div>
      </SubTitle>
      <Grid>
        {moderatorData.map((moderator) => (
          <Card key={moderator.id}>
            <Image src={moderator.img} alt="Moderator" />
            <Name>Duncan Davies</Name>
            <Title>Chief Executive Officer</Title>
          </Card>
        ))}
      </Grid>
    </Section>
  );
};

export default Panelists;
