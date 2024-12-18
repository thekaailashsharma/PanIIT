import React, { useState } from 'react';

const Testimonials = () => {
    const [isHovered, setIsHovered] = useState(false);

    const buttonStyle = {
        color: '#000',
        margin: 'auto 11rem auto auto',
        width:'12rem',
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
    return (
        <div style={{ textAlign: 'center', backgroundColor: '#000', color: '#fff', padding: '40px 20px' }}>
            {/* Section Headers */}
            <div style={{  backgroundColor:'#FFFFFF0F', borderTop: '1px solid #262626',
                borderBottom: '1px solid #262626', height: '15rem', display:'grid',gridTemplateColumns: '70% 30%',
                alignContent:'center',justifyContent:'center'
            }}>
                <div style={{textAlign:'left', padding:'0 0 0 10rem'}}>
                <p style={{ color: '#fff', fontWeight: 'bold', letterSpacing: '1px'}}><span style = {{ background:'#333333', padding:'5px', borderRadius:'4px'}}>What Our Readers Say</span></p>
                <h2 style={{ fontSize: '2.5rem', margin: '0', fontWeight: '700' }}>What Our Attendees Say?</h2>
                </div>
                {/* Call-To-Action Button */}
                <button style={buttonStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
                    Reserve Your Spot
                </button>
            </div>

            <div
            style={{
                display: 'grid',
                justifyContent: 'center',
                justifyItems: 'center',
                gridTemplateColumns: '1fr 1fr 1fr',
                margin: '0rem 10rem',
            }}
            >
            {[
                { name: "Sarah Thompson", location: "San Francisco, USA", comment: "The ebooks on AI in education have been a game-changer for my research. They provide in-depth insights and case studies that are invaluable for staying updated." },
                { name: "Raj Patel", location: "Mumbai, India", comment: "The whitepapers on renewable energy strategies have greatly influenced my work. They offer detailed data and analysis." },
                { name: "Emily Adams", location: "London, UK", comment: "The AI in healthcare reports have been an essential resource for our hospital. They highlight the latest innovations and best practices, improving patient care." },
                { name: "Alan Jackson", location: "Houston, USA", comment: "The reports on space mining prospects have fueled my passion for space exploration. They provide a comprehensive view." },
                { name: "Jessica Miller", location: "Boston, USA", comment: "The research papers on genomic breakthroughs have been a goldmine of information. They’ve shaped the direction of my research in genomics." },
                { name: "Diego Lopez", location: "Barcelona, Spain", comment: "The ebooks on renewable energy strategies have given me the insights I needed to pivot our startup toward sustainability." },
            ].map((testimonial, index) => {
                // Calculate row and column
                const isTopRow = index < 3; // Top row has indices 0, 1, 2
                const isFirstCol = index % 3 === 0; // First column (0, 3, ...)
                const isLastCol = index % 3 === 2; // Third column (2, 5, ...)

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
                        }}>
                        <div style={{padding:'2rem',
                            display:'grid',
                            gridTemplateColumns: '10% 90%',
                        }}>
                        <img src = "https://placehold.co/50x50"/>
                        <div style={{textAlign:'left'}}>
                        <h4
                            style={{
                                margin: '0 0 5px',
                                fontSize: '1.1rem',
                                fontWeight: '600',
                            }}
                        >
                            {testimonial.name}
                        </h4>
                        <p
                            style={{
                                color: '#aaa',
                                margin: '0 0 10px',
                                fontSize: '0.9rem',
                            }}
                        >
                            {testimonial.location}
                        </p>
                        </div>
                        </div>
                        <div>
                        <div
                            style={{
                                color: '#FFA500',
                                marginBottom: '10px',
                            }}
                        >
                            ⭐⭐⭐⭐⭐
                        </div>
                        <p
                            style={{
                                fontSize: '0.95rem',
                                lineHeight: '1.5',
                                color: '#ccc',
                            }}
                        >
                            {testimonial.comment}
                        </p>
                        </div>
                    </div>
                );
            })}
        </div>


        </div>
    );
};

export default Testimonials;
