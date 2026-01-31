import React from 'react';
import Section from './Section';
import { CheckCircle } from 'lucide-react';

const Services = () => {
    const services = [
        { title: "General Pest Control Service", desc: "Comprehensive solutions for common household and commercial pests." },
        { title: "Integrated Pest Management (IPM)", desc: "Holistic approach combining biological, cultural, physical, and chemical tools." },
        { title: "Termite Control", desc: "Post & Pre-Construction treatments including Reticulation Piping Systems." },
        { title: "Chemical Supply", desc: "Distribution of earth-friendly and effective pest control chemicals." },
        { title: "Equipment Distribution", desc: "Supply of professional-grade pest control equipment." },
        { title: "Disinfection Services", desc: "Ensuring hygienic environments free from harmful pathogens." }
    ];

    const pests = [
        "Cockroaches", "Ants", "Bedbugs", "Mosquitoes", "Flies",
        "Rodents", "Bees", "Ticks & Mites", "Crawling Insects", "Flying Insects"
    ];

    return (
        <Section id="services" title="Our Services" bg="dark">
            <div className="grid grid-3" style={{ marginBottom: '4rem' }}>
                {services.map((service, index) => (
                    <div key={index} style={{
                        backgroundColor: 'white',
                        padding: '2rem',
                        borderRadius: 'var(--radius)',
                        boxShadow: 'var(--shadow-sm)',
                        transition: 'transform 0.3s ease',
                        cursor: 'default'
                    }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-5px)';
                            e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                        }}
                    >
                        <div style={{
                            width: '50px',
                            height: '50px',
                            backgroundColor: 'rgba(22, 163, 74, 0.1)',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '1.5rem',
                            color: 'var(--primary)'
                        }}>
                            <CheckCircle size={24} />
                        </div>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>{service.title}</h3>
                        <p style={{ color: 'var(--text-light)', margin: 0 }}>{service.desc}</p>
                    </div>
                ))}
            </div>

            <div style={{
                backgroundColor: 'var(--secondary)',
                color: 'white',
                padding: '3rem',
                borderRadius: 'var(--radius)',
                textAlign: 'center'
            }}>
                <h3 style={{ color: 'white', marginBottom: '2rem' }}>Pests We Control</h3>
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '1rem'
                }}>
                    {pests.map((pest, index) => (
                        <span key={index} style={{
                            backgroundColor: 'rgba(255,255,255,0.1)',
                            padding: '0.5rem 1.25rem',
                            borderRadius: '50px',
                            fontSize: '0.95rem'
                        }}>
                            {pest}
                        </span>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Services;
