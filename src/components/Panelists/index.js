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
  margin-bottom: 20px;`;

const MainTitle = styled.h2`
  font-size: 2.5rem;
  margin: 0;
`;

const SubTitle = styled.h3`
margin: 0 10rem;
text-align:left;
  font-size: 1.8rem;
  color: ${colors.title};
  margin-bottom: 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin: 30px 10rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* Responsive for tablets */
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr; /* Responsive for mobile */
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
`;

const Image = styled.img`
  width: 100%;
  height: 250px;
  padding:15px 20px;
  object-fit: cover;
`;

const Name = styled.h4`
  margin: 10px 0 5px;
  font-size: 1.2rem;
`;

const Title = styled.p`
  color: ${colors.subtitle};
  margin: 0;
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
      <SubTitle>Panelists</SubTitle>
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
      <SubTitle style={{ marginTop: "50px" }}>Moderators</SubTitle>
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
