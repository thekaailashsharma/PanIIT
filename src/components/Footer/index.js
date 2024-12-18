import React from 'react';

const Footer = () => {
    return (
        <div style={{ textAlign: 'center', backgroundColor: '#000', color: '#fff', padding: '64px' }}>
            <div style={{ margintop: '64px 0' }}>
                <footer style={{ color: '#fff' }}>
                    <hr style={{ border: 'none', borderTop: '1px solid #808080', margin: '0 0 20px 0', width: '100%', marginBottom: '91px' }} />
                    <nav style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', maxWidth: '800px', marginBottom: '27px' }}>
                            <a href="#" style={{ color: '#808080', textDecoration: 'none', fontSize: '17px', marginRight: '27px' }}>Home</a>
                            <a href="#" style={{ color: '#808080', textDecoration: 'none', fontSize: '17px', marginRight: '27px' }}>Events</a>
                            <a href="#" style={{ color: '#808080', textDecoration: 'none', fontSize: '17px', marginRight: '27px' }}>About</a>
                            <a href="#" style={{ color: '#808080', textDecoration: 'none', fontSize: '17px', marginRight: '27px' }}>Traders Brawl</a>
                            <a href="#" style={{ color: '#808080', textDecoration: 'none', fontSize: '17px' }}>BrandPR</a>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', maxWidth: '700px',marginBottom: '60px' }}>
                            <a href="#" style={{ color: '#808080', textDecoration: 'none', fontSize: '17px', marginRight: '12px' }}>Contact Us</a>
                            <a href="#" style={{ color: '#808080', textDecoration: 'none', fontSize: '17px', marginRight: '12px' }}>Terms & Conditions</a>
                            <a href="#" style={{ color: '#808080', textDecoration: 'none', fontSize: '17px' }}>Privacy Policy</a>
                        </div>
                    </nav>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%' , marginBottom: '40px'}}>
                        <p style={{ fontSize: '200px', color: '#FFD11A', margin: '0', marginBottom: '0', lineHeight: '1', fontFamily: 'Syncopate, sans-serif' }}>MONEY</p>
                        <p style={{ fontSize: '200px', color: '#FFD11A', margin: '0', lineHeight: '1' }}>MONDAY</p>
                    </div>
                    <p style={{ fontSize: '16px', color: '#FFD11A' }}>© 2024 Moneymonday. All rights reserved.</p>
                    <p style={{ fontSize: '18px', color: '#fff' }}>Registered in the United Arab Emirates. money monday logo are registered trademarks of MONEYMONDAY Limited in the United Arab Emirates and other countries.</p>
                </footer>
            </div>
        </div>
    );
};

export default Footer;
