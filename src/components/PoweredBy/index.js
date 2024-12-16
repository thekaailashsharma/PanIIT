import React from 'react';

const PoweredBy = () => {
    return (
        <div style={{ textAlign: 'center', backgroundColor: '#000', color: '#fff', padding: '20px' }}>
            <h2 style={{ color: '#FFA500' }}>Powered by</h2>
            <h1 style={{ color: '#FFA500' }}>Traders Brawl Media</h1>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>
                Traders Brawl Media is a premier marketing and growth strategy agency specializing in Web3 partnerships and events. As a core partner, Traders Brawl Media brings its expertise in hosting world-class networking events and fostering meaningful business relationships.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
                <img src="https://firebasestorage.googleapis.com/v0/b/gdsc-sies-gst.appspot.com/o/Frame%201261156484.png?alt=media&token=3790b781-a69a-417a-b85f-5c64c8ae2707" alt="Event 1" style={{ width: '200px', margin: '0 10px' }} />
                <img src="https://firebasestorage.googleapis.com/v0/b/gdsc-sies-gst.appspot.com/o/Frame%201261156484.png?alt=media&token=3790b781-a69a-417a-b85f-5c64c8ae2707" alt="Event 2" style={{ width: '200px', margin: '0 10px' }} />
            </div>
            <button style={{ backgroundColor: '#FFA500', color: '#000', padding: '10px 20px', border: 'none', cursor: 'pointer' }}>
                Contact Us Now
            </button>
        </div>
    );
};

export default PoweredBy;
