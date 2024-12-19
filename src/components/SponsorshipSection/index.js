import React from 'react';
import styled from 'styled-components';

const SponsorshipSectionContainer = styled.div`
    text-align: center;
    padding: 50px 20px;
    background-color: #000; /* Background color */
    color: white;
`;

const Title = styled.h2`
    font-size: 42px;
    margin-bottom: 7px;
`;

const Subtitle = styled.p`
    font-size: 38px;
    margin-bottom: 40px;
    color: #f7a31c;
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
`;

const SponsorsContainer = styled.div`
    overflow: hidden; /* Hide overflow for marquee effect */
    position: relative;
    background-color: #000; /* Background color for the container */
    padding: 20px; /* Padding for the card */
`;

const Marquee = styled.div`
    display: flex;
    width: 200%; /* Double the width for two lines */
    animation: marquee 30s linear infinite; /* Animation for scrolling */
    
    @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); } /* Move left by half the width */
    }
`;
const Marquee1 = styled.div`
    display: flex;
    width: 200%; /* Double the width for two lines */
    animation: marquee 45s linear infinite; /* Animation for scrolling */
    
    @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); } /* Move left by half the width */
    }
`;

const SponsorLogo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80px; /* Adjust the height of the logos */
    margin: 0 20px; /* Space between logos */
    background: linear-gradient(90deg, rgba(255, 255, 255, 0.1), rgba(241, 240, 240, 0.1)); /* Gradient background */
    border-radius: 8px; /* Rounded corners */
    padding: 10px; /* Padding for the logo container */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Slight shadow */
    border: 1px solid rgba(255, 255, 255, 0.2); /* Faded white border */
`;

const SponsorImage = styled.img`
    height: 25px; /* Adjust the height of the logos */
    filter: brightness(0) invert(1); /* Invert colors for visibility */
`;

const SponsorshipSection = () => {
    const poweredByStyles = {
        poweredBy: {
            backgroundColor: "#000",
            color: "#fff",
            textAlign: "center",
            padding: "40px 20px",
            fontFamily: "Arial, sans-serif",
        },
        partners: {
            marginBottom: "40px",
        },
        partnerLogos: {
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            margin: '0 0 15rem 0',
            flexWrap: "wrap",
        },
        partnerLogo: {
            background: 'linear-gradient(to bottom left, #070707, #1C1C1C)',
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            fontSize: "18px",
            fontWeight: "bold",
            color: "#fff",
            gap: "8px",
            backgroundColor: "#ffffff",
            width: '300px',
            height: '100px',
            padding: '0 auto',
            border: "1px solid rgba(57, 57, 57, 0.56)",
            boxShadow: `
        inset 0px 2px 2px 0px #525154, /* Inner Shadow */
        0px 13px 25px 0px rgba(0, 0, 0, 1) /* Drop Shadow */
    `,
        },
        partnerLogoImage: {
            filter: 'brightness(0) invert(1)',
            maxHeight: "30px",
            margin: 'auto'
        },
        opportunity: {
            border: "0.5px solid rgba(112, 112, 112, 0.6)",
            background: "linear-gradient(180deg, #070707, #1C1C1C)",
            color: "#fff",
            margin: "50px auto",
            borderRadius: "12px",
            width: "1400px",
            height: '450px',
            display: 'flex',
            flexDirection: 'row',
        },
        opportunityHeading: {

            fontSize: "52px",
            fontWeight: '400',
            margin: "0 0 20px",
        },
        button: {
            background: "linear-gradient(90deg, #f57c00, #ffca28)",
            fontSize: '25px',
            fontWeight: '600',
            width: '420px',
            height: '62px',
            border: "none",
            padding: "10px 25px",
            color: "#000",
            cursor: "pointer",
            borderRadius: "8px",
            transition: "transform 0.2s ease",
        },
        buttonHover: {
            transform: "scale(1.05)",
        },
    };
    return (
        <SponsorshipSectionContainer>
            <div style={poweredByStyles.opportunity}>
                <div style={{margin: 'auto 2rem', textAlign: 'center'}}>
                    <h3 style={poweredByStyles.opportunityHeading}>
                        Choose a <span
                        style={{fontWeight: 'bold', color: '#f7a31c'}}>Sponsorship Plan</span> That <br/> Works For You!
                    </h3>
                    <button
                        style={poweredByStyles.button}
                        onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
                        onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                        onClick={() => alert("Redirecting to registration...")}
                    >
                        Download Our Deck Here
                    </button>
                </div>
                <img src="/images/Circle.png" alt="circle" style={{marginTop: '20px'}}/>
            </div>
            <SponsorsContainer>
                <div>
                    <Title>Our Previous</Title>
                    <Subtitle>Sponsors & Partners</Subtitle>
                </div>
                <div>
                    <Marquee>
                        <SponsorLogo>
                            <SponsorImage src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                                          alt="PayPal"/>
                        </SponsorLogo>
                        <SponsorLogo>
                            <SponsorImage src="https://upload.wikimedia.org/wikipedia/commons/c/ca/Walmart_logo.svg"
                                          alt="Walmart"/>
                        </SponsorLogo>
                        <SponsorLogo>
                            <SponsorImage src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                                          alt="Google"/>
                        </SponsorLogo>
                        <SponsorLogo>
                            <SponsorImage src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                                          alt="PayPal"/>
                        </SponsorLogo>
                        <SponsorLogo>
                            <SponsorImage src="https://upload.wikimedia.org/wikipedia/commons/c/ca/Walmart_logo.svg"
                                          alt="Walmart"/>
                        </SponsorLogo>
                        <SponsorLogo>
                            <SponsorImage src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                                          alt="Google"/>
                        </SponsorLogo>
                        <SponsorLogo>
                            <SponsorImage src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                                          alt="PayPal"/>
                        </SponsorLogo>
                        <SponsorLogo>
                            <SponsorImage src="https://upload.wikimedia.org/wikipedia/commons/c/ca/Walmart_logo.svg"
                                          alt="Walmart"/>
                        </SponsorLogo>
                    </Marquee>
                </div>
                <br/>
                <div>
                    <Marquee1>
                        <SponsorLogo>
                            <SponsorImage src="https://upload.wikimedia.org/wikipedia/commons/c/ca/Walmart_logo.svg"
                                          alt="Walmart"/>
                        </SponsorLogo>
                        <SponsorLogo>
                            <SponsorImage src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                                          alt="PayPal"/>
                        </SponsorLogo>
                        <SponsorLogo>
                            <SponsorImage src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                                          alt="Google"/>
                        </SponsorLogo>
                        <SponsorLogo>
                            <SponsorImage src="https://upload.wikimedia.org/wikipedia/commons/c/ca/Walmart_logo.svg"
                                          alt="Walmart"/>
                        </SponsorLogo>
                        <SponsorLogo>
                            <SponsorImage src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                                          alt="Google"/>
                        </SponsorLogo>
                        <SponsorLogo>
                            <SponsorImage src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                                          alt="PayPal"/>
                        </SponsorLogo>
                        <SponsorLogo>
                            <SponsorImage src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                                          alt="PayPal"/>
                        </SponsorLogo>
                        <SponsorLogo>
                            <SponsorImage src="https://upload.wikimedia.org/wikipedia/commons/c/ca/Walmart_logo.svg"
                                          alt="Walmart"/>
                        </SponsorLogo>
                    </Marquee1>
                </div>
            </SponsorsContainer>
        </SponsorshipSectionContainer>
    );
};

export default SponsorshipSection; 