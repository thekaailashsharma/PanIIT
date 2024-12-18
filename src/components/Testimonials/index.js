import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
const Testimonials = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const sliderRef = useRef(null);

    // Check screen size
    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        
        // Check on mount
        checkScreenSize();
        
        // Add event listener for resize
        window.addEventListener('resize', checkScreenSize);
        
        // Cleanup
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);



    const Button = styled.button`
    color: #000;
    margin: auto 11rem auto auto;
    width: 12rem;
    padding: 15px 0px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    background: ${props => props.isHovered
      ? 'linear-gradient(to right, #FFCB37, #EF7A42)' 
      : 'linear-gradient(to right, #EF7A42, #FFCB37)'};
    transform: ${props => props.isHovered ? 'translateY(-1px)' : 'translateY(0)'};
    transition: background 0.3s ease, transform 0.2s ease;
  
    /* Media query for mobile view */
    @media (max-width: 768px) {
      max-width: 100%; /* Use full width on smaller screens */
      padding-right: 0;
      font-size: 18px;
      margin: auto 15px; /* Adjust margin for mobile view */
    }
  `;
  

    const testimonials = [
        { name: "Sarah Thompson", location: "San Francisco, USA", comment: "The ebooks on AI in education have been a game-changer for my research. They provide in-depth insights and case studies that are invaluable for staying updated." },
        { name: "Raj Patel", location: "Mumbai, India", comment: "The whitepapers on renewable energy strategies have greatly influenced my work. They offer detailed data and analysis." },
        { name: "Emily Adams", location: "London, UK", comment: "The AI in healthcare reports have been an essential resource for our hospital. They highlight the latest innovations and best practices, improving patient care." },
        { name: "Alan Jackson", location: "Houston, USA", comment: "The reports on space mining prospects have fueled my passion for space exploration. They provide a comprehensive view." },
        { name: "Jessica Miller", location: "Boston, USA", comment: "The research papers on genomic breakthroughs have been a goldmine of information. They've shaped the direction of my research in genomics." },
        { name: "Diego Lopez", location: "Barcelona, Spain", comment: "The ebooks on renewable energy strategies have given me the insights I needed to pivot our startup toward sustainability." },
    ];


    const renderTestimonials = (isMobileView) => {
        if (isMobileView) {
            return (
                <div 
                    ref={sliderRef}
                    style={{
                        display: 'flex',
                        overflowX: 'scroll',
                        scrollSnapType: 'x mandatory',
                        WebkitOverflowScrolling: 'touch',
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                        padding: '20px 10px',
                        gap: '15px'
                    }}
                >
                    {testimonials.map((testimonial, index) => (
                        <div 
                            key={index}
                            style={{
                                flex: '0 0 80%',
                                scrollSnapAlign: 'center',
                                backgroundColor: '#1A1A1A',
                                borderRadius: '15px',
                                padding: '20px',
                                border: '1px solid #262626',
                                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                                minWidth: '250px'
                            }}
                        >
                            <div style={{
                                display: 'flex', 
                                alignItems: 'center', 
                                marginBottom: '15px'
                            }}>
                                <img 
                                    src="https://placehold.co/50x50" 
                                    alt="photoperson" 
                                    style={{
                                        borderRadius: '50%', 
                                        marginRight: '15px',
                                        width: '50px',
                                        height: '50px'
                                    }} 
                                />
                                <div>
                                    <h4 style={{
                                        margin: '0', 
                                        color: 'white', 
                                        fontSize: '1rem'
                                    }}>
                                        {testimonial.name}
                                    </h4>
                                    <p style={{
                                        margin: '5px 0 0', 
                                        color: '#aaa', 
                                        fontSize: '0.8rem'
                                    }}>
                                        {testimonial.location}
                                    </p>
                                </div>
                            </div>
                            <div style={{
                                color: '#FFA500',
                                textAlign: 'center',
                                marginBottom: '10px'
                            }}>
                                ⭐⭐⭐⭐⭐
                            </div>
                            <p style={{
                                color: 'white',
                                fontSize: '0.9rem',
                                lineHeight: '1.6'
                            }}>
                                {testimonial.comment}
                            </p>
                        </div>
                    ))}
                </div>
            );
        }

        // Desktop view - unchanged
        return (
            <div
                style={{
                    display: 'grid',
                    justifyContent: 'center',
                    justifyItems: 'center',
                    gridTemplateColumns: '1fr 1fr 1fr',
                    margin: '0rem 10rem',
                }}
            >
                {testimonials.map((testimonial, index) => {
                    const isTopRow = index < 3;
                    const isFirstCol = index % 3 === 0;
                    const isLastCol = index % 3 === 2;

                    return (
                        <div
                            key={index}
                            style={{
                                height: '400px',
                                textAlign: 'center',
                                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
                                borderTop: isTopRow ? 'none' : '1px solid #262626', 
                                borderLeft: isFirstCol ? 'none' : '1px solid #262626', 
                                borderRight: isLastCol ? 'none' : '1px solid #262626', 
                                borderBottom: '1px solid #262626',
                                display:'grid',
                                padding:'2rem',
                                gridTemplateRows: '40% 60%',
                            }}
                        >
                            {/* Full desktop testimonial card content */}
                            <div style={{padding:'2rem',
                                display:'grid',
                                gridTemplateColumns: '1fr 3fr',
                                justifyContent:'center',
                                margin:'auto'
                            }}>
                                <img style={{borderRadius:'50%'}} src="https://placehold.co/50x50" alt="photoperson" />
                                <div style={{textAlign:'left', padding:'0rem 0 0 1rem'}}>
                                    <h4 style={{
                                        margin: '0 0 5px',
                                        fontSize: '1.1rem',
                                        fontWeight: '600',
                                    }}>
                                        {testimonial.name}
                                    </h4>
                                    <p style={{
                                        color: '#aaa',
                                        margin: '0 0 10px',
                                        fontSize: '0.9rem',
                                    }}>
                                        {testimonial.location}
                                    </p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <div style={{
                                    color: '#FFA500',
                                    marginBottom: '-1rem',
                                    zIndex: 1,
                                    background: '#141414',
                                    borderRadius: '1rem',
                                    padding: '0.3rem 1rem',
                                    border: '1px solid #262626',
                                    display: 'inline-block',
                                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
                                }}>
                                    ⭐⭐⭐⭐⭐
                                </div>
                                <p style={{
                                    fontSize: '0.95rem',
                                    lineHeight: '1.5',
                                    background: '#1A1A1A',
                                    padding: '2rem 1.5rem 1.5rem',
                                    borderRadius: '1rem',
                                    color: 'white',
                                    textAlign: 'center',
                                    border: '1px solid #262626',
                                    position: 'relative',
                                    zIndex: 0,
                                }}>
                                    {testimonial.comment}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    };

    return (
        <div style={{ 
            textAlign: 'center', 
            backgroundColor: '#000', 
            color: '#fff', 
            padding: '40px 20px 10px 20px' 
        }}>
            {/* Desktop Header - Unchanged */}
            <div style={{
            backgroundColor:'#FFFFFF0F',
            borderTop: '1px solid #262626',
            borderBottom: '1px solid #262626',
            height: isMobile ? 'auto' : '15rem',
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: 'center',
            justifyContent: 'center',
            padding: isMobile ? '1rem' : '0'
        }}>
            <div style={{
                textAlign: isMobile ? 'center' : 'left', 
                padding: isMobile ? '0' : '0 0 0 10rem',
                marginBottom: isMobile ? '1rem' : '0'
            }}>
                <p style={{ 
                    color: '#fff', 
                    fontWeight: 'bold', 
                    letterSpacing: '1px',
                    textAlign: isMobile ? 'center' : 'left'
                }}>
                    <span style={{ 
                        background:'#333333', 
                        padding:'5px', 
                        borderRadius:'4px',
                        display: 'inline-block'
                    }}>
                        What Our Readers Say
                    </span>
                </p>
                <h2 style={{ 
                    fontSize: isMobile ? '1.8rem' : '2.5rem', 
                    margin: '0', 
                    fontWeight: '700',
                    textAlign: isMobile ? 'center' : 'left'
                }}>
                    What Our Attendees Say?
                </h2>
            </div>
            
            <Button
      isHovered={isHovered}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
     Reserve Your Spot
    </Button>
        </div>

            {/* Responsive Testimonials */}
            {renderTestimonials(isMobile)}
        </div>
    );
};

export default Testimonials;