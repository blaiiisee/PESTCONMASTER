import React from 'react';
import Section from './Section';
import { Users, FileCheck, Search } from 'lucide-react';

const Manpower = () => {
    return (
        <Section id="manpower" bg="light">
            <div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
                <div style={{ order: 1 }}> {/* Image on right for desktop, generic logic handled via grid but order assumes LTR */}
                    {/* Actually grid-2 is auto-fit, but order might be tricky without media queries in JS or CSS. 
               I'll just put text first.
           */}
                    <h2 style={{ textAlign: 'left', marginBottom: '1.5rem' }}>Our Expertise & Manpower</h2>
                    <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
                        Our team is our greatest asset. We are proud to employ over 100 licensed and professionally trained technicians who embody our core values of ethics, honesty, and customer focus.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
                            <div style={{ backgroundColor: 'var(--primary)', padding: '0.75rem', borderRadius: '50%', color: 'white' }}>
                                <Users size={24} />
                            </div>
                            <div>
                                <h4 style={{ margin: '0 0 0.5rem 0' }}>Professional Team</h4>
                                <p style={{ margin: 0, color: 'var(--text-light)' }}>100+ licensed technicians trained in scientific pest management.</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
                            <div style={{ backgroundColor: 'var(--primary)', padding: '0.75rem', borderRadius: '50%', color: 'white' }}>
                                <Search size={24} />
                            </div>
                            <div>
                                <h4 style={{ margin: '0 0 0.5rem 0' }}>Thorough Process</h4>
                                <p style={{ margin: 0, color: 'var(--text-light)' }}>Complete inspection, treatment, and detailed reporting process.</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
                            <div style={{ backgroundColor: 'var(--primary)', padding: '0.75rem', borderRadius: '50%', color: 'white' }}>
                                <FileCheck size={24} />
                            </div>
                            <div>
                                <h4 style={{ margin: '0 0 0.5rem 0' }}>Ethical Service</h4>
                                <p style={{ margin: 0, color: 'var(--text-light)' }}>Committed to honest, transparent, and responsible service delivery.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{
                    height: '100%',
                    minHeight: '400px',
                    borderRadius: 'var(--radius)',
                    overflow: 'hidden',
                    boxShadow: 'var(--shadow-lg)',
                    /* REPLACE IMAGE URL HERE */
                    backgroundImage: 'url("/group_pic2.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    order: 2
                }}>
                    {/* Image Div */}
                </div>
            </div>
        </Section>
    );
};

export default Manpower;
