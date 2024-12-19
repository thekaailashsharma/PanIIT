import React from 'react';
import styled from 'styled-components';

const SponsorshipSectionContainer = styled.div`
    text-align: center;
    padding: 50px 20px;
    background-color: #000;
    color: white;

    @media (max-width: 768px) {
        padding: 30px 15px;
    }
`;

const Title = styled.h2`
    font-size: 42px;
    margin-bottom: 7px;

    @media (max-width: 768px) {
        font-size: 32px;
    }
`;

const Subtitle = styled.p`
    font-size: 38px;
    margin-bottom: 40px;
    color: #f7a31c;

    @media (max-width: 768px) {
        font-size: 28px;
    }
`;

const DownloadButton = styled.button`
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

    @media (max-width: 768px) {
        font-size: 0.9rem;
        padding: 8px 16px;
    }
`;

const SponsorsContainer = styled.div`
    overflow: hidden;
    position: relative;
    background-color: #000;
    padding: 20px;

    @media (max-width: 768px) {
        padding: 15px;
    }
`;

const Marquee = styled.div`
    display: flex;
    width: 200%;
    animation: marquee 30s linear infinite;

    @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
    }

    @media (max-width: 768px) {
        animation: marquee 20s linear infinite;
    }
`;

const SponsorLogo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80px;
    margin: 0 20px;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0.1), rgba(241, 240, 240, 0.1));
    border-radius: 8px;
    padding: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.2);

    @media (max-width: 768px) {
        height: 60px;
        margin: 0 10px;
    }
`;

const SponsorImage = styled.img`
    height: 25px;
    filter: brightness(0) invert(1);

    @media (max-width: 768px) {
        height: 20px;
    }
`;

const SponsorshipSection = () => {
    return (
        <SponsorshipSectionContainer>
            <div>
                <Title>Our Previous</Title>
                <Subtitle>Sponsors & Partners</Subtitle>
                <DownloadButton onClick={() => alert("Redirecting to registration...")}>Download Our Deck Here</DownloadButton>
            </div>
            <SponsorsContainer>
                <Marquee>
                    <SponsorLogo>
                        <SponsorImage src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" />
                    </SponsorLogo>
                    <SponsorLogo>
                        <SponsorImage src="https://upload.wikimedia.org/wikipedia/commons/c/ca/Walmart_logo.svg" alt="Walmart" />
                    </SponsorLogo>
                    <SponsorLogo>
                        <SponsorImage src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" />
                    </SponsorLogo>
                    <SponsorLogo>
                        <SponsorImage src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" />
                    </SponsorLogo>
                </Marquee>
            </SponsorsContainer>
        </SponsorshipSectionContainer>
    );
};

export default SponsorshipSection;
