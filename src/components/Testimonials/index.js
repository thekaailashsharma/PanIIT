import React from 'react';

const Testimonials = () => {
    return (
        <div style={{ textAlign: 'center', backgroundColor: '#000', color: '#fff', padding: '20px' }}>
            <h2>What Our Readers Say</h2>
            <h3>What Our Attendees Say?</h3>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', margin: '20px 0' }}>
                <div style={{ border: '1px solid #fff', borderRadius: '8px', padding: '20px', margin: '10px', width: '300px' }}>
                    <h4>Sarah Thompson</h4>
                    <p>San Francisco, USA</p>
                    <div>⭐⭐⭐⭐⭐</div>
                    <p>The ebooks on AI in education have been a game-changer for my research. They provide in-depth insights and case studies that are invaluable for staying updated.</p>
                </div>
                <div style={{ border: '1px solid #fff', borderRadius: '8px', padding: '20px', margin: '10px', width: '300px' }}>
                    <h4>Raj Patel</h4>
                    <p>Mumbai, India</p>
                    <div>⭐⭐⭐⭐⭐</div>
                    <p>The whitepapers on renewable energy strategies have greatly influenced my work. They offer detailed data and analysis.</p>
                </div>
                <div style={{ border: '1px solid #fff', borderRadius: '8px', padding: '20px', margin: '10px', width: '300px' }}>
                    <h4>Emily Adams</h4>
                    <p>London, UK</p>
                    <div>⭐⭐⭐⭐⭐</div>
                    <p>The AI in healthcare reports have been an essential resource for our hospital. They highlight the latest innovations and best practices, improving patient care.</p>
                </div>
                <div style={{ border: '1px solid #fff', borderRadius: '8px', padding: '20px', margin: '10px', width: '300px' }}>
                    <h4>Alan Jackson</h4>
                    <p>Houston, USA</p>
                    <div>⭐⭐⭐⭐⭐</div>
                    <p>The reports on space mining prospects have fueled my passion for space exploration. They provide a comprehensive view.</p>
                </div>
                <div style={{ border: '1px solid #fff', borderRadius: '8px', padding: '20px', margin: '10px', width: '300px' }}>
                    <h4>Jessica Miller</h4>
                    <p>Boston, USA</p>
                    <div>⭐⭐⭐⭐⭐</div>
                    <p>The research papers on genomic breakthroughs have been a goldmine of information. They’ve shaped the direction of my research in genomics.</p>
                </div>
                <div style={{ border: '1px solid #fff', borderRadius: '8px', padding: '20px', margin: '10px', width: '300px' }}>
                    <h4>Diego Lopez</h4>
                    <p>Barcelona, Spain</p>
                    <div>⭐⭐⭐⭐⭐</div>
                    <p>The ebooks on renewable energy strategies have given me the insights I needed to pivot our startup toward sustainability.</p>
                </div>
            </div>
            <button style={{ backgroundColor: '#FFA500', color: '#000', padding: '10px 20px', border: 'none', cursor: 'pointer' }}>
                Reserve Your Spot
            </button>
        </div>
    );
};

export default Testimonials;
