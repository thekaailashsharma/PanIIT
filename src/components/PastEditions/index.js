// src/components/PastEditions/index.js
import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 4rem 2rem;
  background-color: black;
`;

const Title = styled.h2`
  color: var(--primary-color);
  text-align: center;
  margin-bottom: 2rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Card = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
`;

const PastEditions = () => {
    return (
        <Section>
            <Title>Past Editions</Title>
            <Grid>
                {/* Add your past edition cards here */}
                <Card>
                    <img src="/path-to-your-image.jpg" alt="Past Edition" />
                </Card>
                {/* Repeat for other cards */}
            </Grid>
        </Section>
    );
};

export default PastEditions;