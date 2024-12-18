import React from 'react';

const Footer = () => {
    return (
        <div style={{ textAlign: 'center', backgroundColor: '#000', color: '#fff', padding: '64px' }}>
            <div style={{ marginTop: '64px 0' }}>
                <footer style={{ color: '#fff' }}>
                    <hr style={{ border: 'none', borderTop: '1px solid #808080', margin: '0 0 20px 0', width: '100%', marginBottom: '91px' }} />
                    <nav style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        
                        {/* Primary Links */}
                        <div style={{ 
                            display: 'flex', 
                            justifyContent: 'space-between', 
                            width: '100%', 
                            maxWidth: '800px', 
                            marginBottom: '27px', 
                            flexWrap: 'wrap' 
                        }}>
                            <a href="#" style={{ color: '#C6C6C6', textDecoration: 'none', fontSize: '20px', margin: '10px' }}>Home</a>
                            <a href="#" style={{ color: '#C6C6C6', textDecoration: 'none', fontSize: '20px', margin: '10px' }}>Events</a>
                            <a href="#" style={{ color: '#C6C6C6', textDecoration: 'none', fontSize: '20px', margin: '10px' }}>About</a>
                            <a href="#" style={{ color: '#C6C6C6', textDecoration: 'none', fontSize: '20px', margin: '10px' }}>Traders Brawl</a>
                            <a href="#" style={{ color: '#C6C6C6', textDecoration: 'none', fontSize: '20px', margin: '10px' }}>BrandPR</a>
                        </div>

                        {/* Secondary Links */}
                        <div style={{ 
                            display: 'flex', 
                            justifyContent: 'space-between', 
                            width: '100%', 
                            maxWidth: '700px', 
                            marginBottom: '80px',
                            flexWrap: 'wrap'
                        }}>
                            <a href="#" style={{ color: '#C6C6C6', textDecoration: 'none', fontSize: '20px', margin: '10px' }}>Contact Us</a>
                            <a href="#" style={{ color: '#C6C6C6', textDecoration: 'none', fontSize: '20px', margin: '10px' }}>Terms & Conditions</a>
                            <a href="#" style={{ color: '#C6C6C6', textDecoration: 'none', fontSize: '20px', margin: '10px' }}>Privacy Policy</a>
                        </div>
                    </nav>

                    {/* Logo Section */}
                    <div style={{ 
                        display: 'flex', 
                        flexDirection: 'column', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        width: '100%', 
                        marginBottom: '60px' 
                    }}>
                        <img 
                            src="/images/moneymonday.png" 
                            alt="MONDAY" 
                            style={{ 
                                width: '90%', 
                                height: 'auto', 
                                maxWidth: '500px' 
                            }} 
                        />
                    </div>

                    {/* Footer Text */}
                    <p style={{ fontSize: '18px', color: '#FFD11A' }}>© 2024 Moneymonday. All rights reserved.</p>
                    <p style={{ fontSize: '20px', color: '#fff' }}>Registered in the United Arab Emirates. money monday logo are registered trademarks of MONEYMONDAY Limited in the United Arab Emirates and other countries.</p>
                </footer>
            </div>

            {/* Inline Media Query */}
            <style>
                {`
                    @media (max-width: 768px) {
                        img {
                            max-width: 300px;
                        }
                    }
                `}
            </style>
        </div>
    );
};

export default Footer;
