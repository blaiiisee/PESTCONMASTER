import React from 'react';
import Section from './Section';
import { Quote } from 'lucide-react';

const Executive = () => {
    return (
        <Section id="executive" bg="dark">
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                <h2 style={{ marginBottom: '3rem' }}>Leadership</h2>

                <div style={{
                    backgroundColor: 'white',
                    padding: '3rem',
                    borderRadius: 'var(--radius)',
                    boxShadow: 'var(--shadow-md)',
                    position: 'relative'
                }}>
                    <Quote size={48} color="rgba(22, 163, 74, 0.2)" style={{ position: 'absolute', top: '2rem', left: '2rem' }} />

                    <div style={{
                        width: '120px',
                        height: '120px',
                        borderRadius: '50%',
                        backgroundColor: '#ddd',
                        margin: '0 auto 1.5rem',
                        overflow: 'hidden',
                        // Placeholder for image
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#666',
                        fontSize: '3rem',
                        /* REPLACE IMAGE URL HERE */
                        backgroundImage: 'url("/Executive.png")',
                        backgroundSize: 'cover'
                    }}>
                    </div>

                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>Romeo Sanchez Baoson</h3>
                    <p style={{ color: 'var(--primary)', fontWeight: 600, marginBottom: '1.5rem' }}>President</p>

                    <p style={{ fontStyle: 'italic', color: 'var(--text-main)', fontSize: '1.1rem', lineHeight: 1.8 }}>
                        "Our commitment is to excellence and integrity in every service we provide. We believe in creating safer, healthier environments for our clients through scientific and eco-friendly pest management solutions."
                    </p>
                </div>
            </div>
        </Section>
    );
};

export default Executive;
