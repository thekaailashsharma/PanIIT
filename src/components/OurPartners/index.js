import React from "react";

const PoweredBy = () => {
    // Inline styles
    const styles = {
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
            width:'300px',
            height: '100px',
            padding:'0 auto',
            border: "1px solid rgba(57, 57, 57, 0.56)",
            boxShadow: `
        inset 0px 2px 2px 0px #525154, /* Inner Shadow */
        0px 13px 25px 0px rgba(0, 0, 0, 1) /* Drop Shadow */
    `,
        },
        partnerLogoImage: {
            filter: 'brightness(0) invert(1)',
            maxHeight: "30px",
            margin:'auto'
        },
        opportunity: {
            border: "0.5px solid rgba(112, 112, 112, 0.6)",
            background: "linear-gradient(180deg, #070707, #1C1C1C)",
            color: "#fff",
            margin: "50px auto",
            borderRadius: "12px",
            width: "100%",            // Use full width
            maxWidth: "1400px",       // Restrict maximum width
            height: "450px",
            display: "flex",
            flexDirection: "row",
            overflow: "hidden",       // Ensure no overflow
            boxSizing: "border-box",  // Include padding/border in width calculation
        },
        opportunityHeading: {
            
            fontSize: "52px",
            fontWeight:'400',
            margin: "0 0 20px",
        },
        button: {
            background: "linear-gradient(90deg, #f57c00, #ffca28)",
            fontSize:'25px',
            fontWeight:'600',
            width:'420px',
            height:'62px',
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
        <div style={styles.poweredBy}>
        {/* Partners Section */}
        <div style={styles.partners}>
        <h2 style = {{fontSize:"60px", fontWeight:'400', margin:'0 0 2rem 0'}}>Our Partners</h2>
        <div style={styles.partnerLogos}>
        <div style={styles.partnerLogo}>
        <img
        style={styles.partnerLogoImage}
        src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
        alt="PayPal"
        />
        </div>
        <div style={styles.partnerLogo}>
        <img
        style={styles.partnerLogoImage}
        src="https://upload.wikimedia.org/wikipedia/commons/c/ca/Walmart_logo.svg"
        alt="Walmart"
        />
        </div>
        <div style={styles.partnerLogo}>
        <img
        style={styles.partnerLogoImage}
        src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
        alt="Google"
        />
        </div>
        <div style={styles.partnerLogo}>
        <img
        style={styles.partnerLogoImage}
        src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
        alt="PayPal"
        />
        </div>
        </div>
        </div>
        
        {/* Opportunity Section */}
        <div style={styles.opportunity}>
        <img src = "/images/circleOpp.png" alt = "circle" />
        <div style={{margin:'auto 2rem'}}>
        <h3 style={styles.opportunityHeading}>
        Your Next Big Opportunity<br/> Awaits!
        </h3>
        <button
        style={styles.button}
        onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
        onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
        onClick={() => alert("Redirecting to registration...")}
        >
        Register Now
        </button>
        </div>
        </div>
        </div>
    );
};

export default PoweredBy;
