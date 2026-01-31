import React from 'react';
import Section from './Section';
import { MapPin } from 'lucide-react';

const Coverage = () => {
    const areas = [
        "Manila", "Cavite", "Pampanga", "Bulacan", "Pangasinan", "Baguio",
        "La Union", "Ilocos Region", "Nueva Ecija", "Isabela", "Cagayan",
        "Tuguegarao", "Quezon Province", "Batangas", "Laguna", "Boracay",
        "Palawan", "Rizal", "Olongapo", "Aparri", "Quirino", "Nueva Vizcaya"
    ];

    return (
        <Section id="coverage" title="Nationwide Coverage" bg="dark">
            <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
                <p style={{ marginBottom: '3rem', fontSize: '1.2rem' }}>
                    We serve clients across key locations in the Philippines:
                </p>
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '1rem'
                }}>
                    {areas.map((area, index) => (
                        <div key={index} style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            backgroundColor: 'white',
                            padding: '0.75rem 1.25rem',
                            borderRadius: '50px',
                            boxShadow: 'var(--shadow-sm)',
                            fontSize: '1rem',
                            color: 'var(--secondary)'
                        }}>
                            <MapPin size={18} color="var(--primary)" />
                            {area}
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Coverage;
