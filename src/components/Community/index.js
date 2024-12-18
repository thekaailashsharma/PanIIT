import React, { useState, useEffect } from 'react';

const Community = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    const buttonStyle = {
        color: '#000',
        fontWeight:'600',
        margin: '2rem auto',
        width:'19rem',
        padding: '15px 0px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '1rem',
        background: isHovered
            ? 'linear-gradient(to right, #FFCB37, #EF7A42)' // Hover state
            : 'linear-gradient(to right, #EF7A42, #FFCB37)', // Default state
        transform: isHovered ? 'translateY(-1px)' : 'translateY(0)',
        transition: 'background 0.3s ease, transform 0.2s ease',
    };

    if (isMobile) {
        return (
            <div style={{ 
                textAlign: 'center', 
                background: `url('/images/mondaymondaymultiple.png') center no-repeat`,
                backgroundSize: 'cover',
                color: '#fff', 
                padding: '2rem 1rem',
                margin: '0'
            }}>
                <h2 style={{
                    fontSize: '2.5rem', 
                    lineHeight: '1.2',
                    margin: '0 0 1rem 0'
                }}>
                    What's Happening in <span style={{color: '#FFCB37'}}><br/>Our Community?</span>
                </h2>

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    alignItems: 'center',
                    margin: '1rem 0'
                }}>
                    <div style={{ width: '100%', maxWidth: '300px' }}>
                        <img 
                            style={{
                                width: '100%', 
                                height: 'auto', 
                                border: '2px solid #676767', 
                                borderRadius: '5px'
                            }} 
                            src="https://firebasestorage.googleapis.com/v0/b/gdsc-sies-gst.appspot.com/o/Frame%201261156484.png?alt=media&token=3790b781-a69a-417a-b85f-5c64c8ae2707" 
                            alt="Community Event 1" 
                        />
                    </div>

                    <div style={{ 
                        width: '100%', 
                        maxWidth: '300px',
                        height: '300px',
                        border: '2px solid #FFFFFF8C', 
                        borderRadius: '5px', 
                        backgroundColor: '#333', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center' 
                    }}>
                        <button style={{ 
                            backgroundColor: '#FFA500', 
                            color: '#000', 
                            border: 'none', 
                            borderRadius: '50%', 
                            padding: '20px 25px', 
                            cursor: 'pointer' 
                        }}>
                            <span style={{ fontSize: '24px' }}>▶</span>
                        </button>
                    </div>

                    <div style={{ width: '100%', maxWidth: '300px' }}>
                        <img 
                            style={{
                                width: '100%', 
                                height: 'auto', 
                                border: '2px solid #676767', 
                                borderRadius: '5px'
                            }} 
                            src="https://firebasestorage.googleapis.com/v0/b/gdsc-sies-gst.appspot.com/o/Frame%201261156484.png?alt=media&token=3790b781-a69a-417a-b85f-5c64c8ae2707" 
                            alt="Community Event 2" 
                        />
                    </div>
                </div>

                <h3 style={{
                    fontSize: '2rem', 
                    lineHeight: '1.2',
                    margin: '1rem 0'
                }}>
                    BECOME A PART OF OUR GROWING<br/>NETWORK
                </h3>

                <button 
                    style={{
                        ...buttonStyle,
                        width: '90%',
                        maxWidth: '300px'
                    }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    JOIN OUR TELEGRAM GROUP
                </button>
            </div>
        );
    }

    // Desktop view - exactly the same as original
    return (
        <div style={{ textAlign: 'center', background:`url('/images/mondaymondaymultiple.png') center no-repeat`, color: '#fff', height:'716px', margin:'20px 20px 18rem 20px'}}>
            <h2 style={{fontSize:'54px'}}>What's Happening in <span style={{color:' #FFCB37'}}><br/>Our Community?</span></h2>
            <div style={{ display: 'grid', justifyContent: 'center', margin: '20px 0', gridTemplateColumns:'1fr 1fr 1fr', alignItems:'center'}}>
                <div style={{ margin: 'auto 2rem auto auto'}}>
                    <img style= {{height:'412px', border:'2px solid #676767', borderRadius:'5px'}}src="https://firebasestorage.googleapis.com/v0/b/gdsc-sies-gst.appspot.com/o/Frame%201261156484.png?alt=media&token=3790b781-a69a-417a-b85f-5c64c8ae2707" alt="Community Event 1" />
                </div>
                <div style={{ margin: '0'}}>
                    <div style={{ height:'512px',border:'2px solid #FFFFFF8C', borderRadius:'5px', backgroundColor: '#333', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <button style={{ backgroundColor: '#FFA500', color: '#000', border: 'none', borderRadius: '50%', padding: '20px 25px', cursor: 'pointer' }}>
                            <span style={{ fontSize: '24px' }}>▶</span>
                        </button>
                    </div>
                </div>
                <div style={{margin: 'auto auto auto 2rem'}}>
                    <img style= {{height:'412px',border:'2px solid #676767', borderRadius:'5px'}} src="https://firebasestorage.googleapis.com/v0/b/gdsc-sies-gst.appspot.com/o/Frame%201261156484.png?alt=media&token=3790b781-a69a-417a-b85f-5c64c8ae2707" alt="Community Event 2" />
                </div>
            </div>
            <h3 style={{fontSize:'42px'}}>BECOME A PART OF OUR GROWING<br/>NETWORK</h3>
            <button style={buttonStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
                JOIN OUR TELEGRAM GROUP
            </button>
        </div>
    );
};

export default Community;