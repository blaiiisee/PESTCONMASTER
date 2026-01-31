import React from 'react';
import Section from './Section';
import { Target, Eye, Star } from 'lucide-react';

const MissionVision = () => {
    const values = [
        "Health", "Innovation", "Excellence", "Partnerships",
        "Responsibility", "Commitment", "Synergy", "Quality"
    ];

    return (
        <Section id="mission-vision" bg="light">
            <div className="grid grid-2" style={{ gap: '3rem', marginBottom: '4rem' }}>

                {/* Mission */}
                <div style={{
                    backgroundColor: 'white',
                    padding: '2.5rem',
                    borderRadius: 'var(--radius)',
                    boxShadow: 'var(--shadow-sm)',
                    borderTop: '4px solid var(--primary)'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                        <Target size={32} color="var(--primary)" />
                        <h3 style={{ margin: 0 }}>Mission</h3>
                    </div>
                    <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-main)' }}>
                        <li>Improve quality of life through effective pest control.</li>
                        <li>Promote pleasant living environments.</li>
                        <li>Serve communities responsibly and ethically.</li>
                    </ul>
                </div>

                {/* Vision */}
                <div style={{
                    backgroundColor: 'white',
                    padding: '2.5rem',
                    borderRadius: 'var(--radius)',
                    boxShadow: 'var(--shadow-sm)',
                    borderTop: '4px solid var(--secondary)'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                        <Eye size={32} color="var(--secondary)" />
                        <h3 style={{ margin: 0 }}>Vision</h3>
                    </div>
                    <p style={{ color: 'var(--text-main)' }}>
                        To be a leader in environmental solutions, setting the standard for scientific and eco-friendly pest management in the Philippines and beyond.
                    </p>
                </div>
            </div>

            {/* Core Values */}
            <div style={{ textAlign: 'center' }}>
                <h3 style={{ marginBottom: '2rem' }}>Core Values</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
                    {values.map((val, index) => (
                        <div key={index} style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            backgroundColor: 'white',
                            padding: '0.75rem 1.5rem',
                            borderRadius: '50px',
                            border: '1px solid rgba(0,0,0,0.05)',
                            boxShadow: 'var(--shadow-sm)'
                        }}>
                            <Star size={16} color="var(--accent)" fill="var(--accent)" />
                            <span style={{ fontWeight: 500 }}>{val}</span>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default MissionVision;
