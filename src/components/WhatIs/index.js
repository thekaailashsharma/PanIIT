// src/components/WhatIs/index.js
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

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const WhatIs = () => {
    return (
        <Section>
            <Title>What is Money Monday Online?</Title>
            <Content>
                <p>Description of your program goes here...</p>
            </Content>
        </Section>
    );
};

export default WhatIs;