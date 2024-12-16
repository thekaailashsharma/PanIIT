import React from 'react';

const Partners = () => {
    return (
        <div style={{ textAlign: 'center', backgroundColor: '#000', color: '#fff', padding: '20px' }}>
            <h2>Our Partners</h2>
            <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
                <img src="path/to/paypal-logo" alt="PayPal" style={{ margin: '0 20px', height: '50px' }} />
                <img src="path/to/walmart-logo" alt="Walmart" style={{ margin: '0 20px', height: '50px' }} />
                <img src="path/to/google-logo" alt="Google" style={{ margin: '0 20px', height: '50px' }} />
                <img src="path/to/paypal-logo" alt="PayPal" style={{ margin: '0 20px', height: '50px' }} />
            </div>
            <div style={{ backgroundColor: '#333', padding: '20px', borderRadius: '8px', margin: '20px 0' }}>
                <h3 style={{ color: '#FFA500' }}>Your Next Big Opportunity Awaits!</h3>
                <button style={{ backgroundColor: '#FFA500', color: '#000', padding: '10px 20px', border: 'none', cursor: 'pointer' }}>
                    Register Now
                </button>
            </div>
            <footer style={{ marginTop: '40px', color: '#fff' }}>
                <nav>
                    <a href="#" style={{ color: '#fff', margin: '0 15px' }}>Home</a>
                    <a href="#" style={{ color: '#fff', margin: '0 15px' }}>Events</a>
                    <a href="#" style={{ color: '#fff', margin: '0 15px' }}>About</a>
                    <a href="#" style={{ color: '#fff', margin: '0 15px' }}>Contact Us</a>
                    <a href="#" style={{ color: '#fff', margin: '0 15px' }}>Terms & Conditions</a>
                    <a href="#" style={{ color: '#fff', margin: '0 15px' }}>Privacy Policy</a>
                </nav>
                <p style={{ marginTop: '20px' }}>© 2024 MoneyMonday. All rights reserved.</p>
                <p>Registered in the United Arab Emirates. Money Monday logo are registered trademarks of MONEYMONDAY Limited in the United Arab Emirates and other countries.</p>
            </footer>
        </div>
    );
};

export default Partners;
