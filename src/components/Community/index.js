import React from 'react';

const Community = () => {
    return (
        <div style={{ textAlign: 'center', backgroundColor: '#000', color: '#fff', padding: '20px' }}>
            <h2>What’s Happening in the Our Community?</h2>
            <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
                <div style={{ margin: '0 10px' }}>
                    <img src="https://firebasestorage.googleapis.com/v0/b/gdsc-sies-gst.appspot.com/o/Frame%201261156484.png?alt=media&token=3790b781-a69a-417a-b85f-5c64c8ae2707" alt="Community Event 1" style={{ width: '200px', borderRadius: '8px' }} />
                </div>
                <div style={{ margin: '0 10px' }}>
                    <div style={{ width: '200px', height: '200px', borderRadius: '8px', backgroundColor: '#333', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <button style={{ backgroundColor: '#FFA500', color: '#000', border: 'none', borderRadius: '50%', padding: '20px', cursor: 'pointer' }}>
                            <span style={{ fontSize: '24px' }}>▶</span>
                        </button>
                    </div>
                </div>
                <div style={{ margin: '0 10px' }}>
                    <img src="https://firebasestorage.googleapis.com/v0/b/gdsc-sies-gst.appspot.com/o/Frame%201261156484.png?alt=media&token=3790b781-a69a-417a-b85f-5c64c8ae2707" alt="Community Event 2" style={{ width: '200px', borderRadius: '8px' }} />
                </div>
            </div>
            <h3>BECOME A PART OF OUR GROWING NETWORK</h3>
            <button style={{ backgroundColor: '#FFA500', color: '#000', padding: '10px 20px', border: 'none', cursor: 'pointer' }}>
                JOIN OUR TELEGRAM GROUP
            </button>
        </div>
    );
};

export default Community;
