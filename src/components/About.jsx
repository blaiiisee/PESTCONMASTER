import React from 'react';
import Section from './Section';
import { ShieldCheck, Leaf, Award } from 'lucide-react';

const About = () => {
    const highlights = [
        {
            icon: <ShieldCheck size={32} color="var(--primary)" />,
            title: "FDA Licensed",
            text: "Fully licensed by the Food and Drug Administration to operate safely."
        },
        {
            icon: <Award size={32} color="var(--primary)" />,
            title: "Accredited Provider",
            text: "Internationally accredited service provider and member of KAPESTCOPI."
        },
        {
            icon: <Leaf size={32} color="var(--primary)" />,
            title: "Eco-Friendly",
            text: "Scientific approach focusing on environmental responsibility."
        }
    ];

    return (
        <Section id="about" title="About PESTCONMASTER" bg="light">
            <div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <h3 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>
                        A Fast-Growing Pest Control Provider in the Philippines
                    </h3>
                    <p style={{ color: 'var(--text-main)', fontSize: '1.1rem' }}>
                        PESTCONMASTER is a dedicated provider of scientific pest control management. We combine innovation with ethical practices to ensure safe, effective, and environmentally sound solutions for our clients.
                    </p>
                    <p style={{ color: 'var(--text-light)' }}>
                        We are ethical, honest, and customer-focused, employing over 100 licensed and professionally trained technicians. Our process ensures complete inspection, treatment, and detailed reporting to give you peace of mind.
                    </p>
                    <div style={{ marginTop: '1rem' }}>
                        <h4 style={{ marginBottom: '1rem' }}>Core Strengths:</h4>
                        <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                            {highlights.map((item, index) => (
                                <li key={index} style={{
                                    display: 'flex',
                                    alignItems: 'start',
                                    gap: '1rem',
                                    padding: '1rem',
                                    backgroundColor: 'white',
                                    borderRadius: 'var(--radius)',
                                    boxShadow: 'var(--shadow-sm)'
                                }}>
                                    <div style={{ flexShrink: 0 }}>{item.icon}</div>
                                    <div>
                                        <h5 style={{ margin: '0 0 0.25rem 0', fontSize: '1rem' }}>{item.title}</h5>
                                        <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-light)' }}>{item.text}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div style={{
                    position: 'relative',
                    height: '100%',
                    minHeight: '400px',
                    borderRadius: 'var(--radius)',
                    overflow: 'hidden',
                    boxShadow: 'var(--shadow-lg)'
                }}>
                    {/* REPLACE IMAGE URL HERE */}
                    <img
                        src="/group_pic1.jpg"
                        alt="Pest control team"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>
            </div>
        </Section>
    );
};

export default About;
