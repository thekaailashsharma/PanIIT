import React from 'react';

const Footer = () => {
    return (
        <div style={{ textAlign: 'center', backgroundColor: '#000', color: '#fff', padding: '20px' }}>
            <h2>Our Partners</h2>
            <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
                <img src="/images/paypal.png" alt="PayPal" style={{ margin: '0 20px', height: '50px' }} />
                <img src="/images/walmart.png" alt="Walmart" style={{ margin: '0 20px', height: '50px' }} />
                <img src="/images/google.png" alt="Google" style={{ margin: '0 20px', height: '50px' }} />
                <img src="/images/paypal.png" alt="PayPal" style={{ margin: '0 20px', height: '50px' }} />
            </div>
            <div style={{ backgroundColor: '#333', padding: '20px', borderRadius: '8px', margin: '20px 0' }}>
                <h3 style={{ color: '#FFA500' }}>Your Next Big Opportunity Awaits!</h3>
                <button style={{ backgroundColor: '#FFA500', color: '#000', padding: '10px 20px', border: 'none', cursor: 'pointer' }}>
                    Register Now
                </button>
            </div>
            <footer style={{marginTop: '40px', color: '#fff'}}>
                <nav>
                    <a href="#" style={{color: '#fff', margin: '0 15px'}}>Home</a>
                    <a href="#" style={{color: '#fff', margin: '0 15px'}}>Events</a>
                    <a href="#" style={{color: '#fff', margin: '0 15px'}}>About</a>
                    <a href="#" style={{color: '#fff', margin: '0 15px'}}>Contact Us</a>
                    <a href="#" style={{color: '#fff', margin: '0 15px'}}>Terms & Conditions</a>
                    <a href="#" style={{color: '#fff', margin: '0 15px'}}>Privacy Policy</a>
                </nav>
                <br/>
                <img src="/images/money-monday.png" alt="PayPal" style={{margin: '0 20px', height: '250px', width: '400px'}}/>
            </footer>
        </div>
    );
};

export default Footer;
