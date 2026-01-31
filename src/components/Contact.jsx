import React from 'react';
import Section from './Section';
import { Mail, Phone, Facebook } from 'lucide-react';

const Contact = () => {
    return (
        <Section id="contact" title="Get in Touch" bg="dark">
            <div className="grid grid-3" style={{ maxWidth: '1000px', margin: '0 auto', gap: '2rem' }}>

                <a href="tel:09274853172" style={{
                    backgroundColor: 'white',
                    padding: '2rem',
                    borderRadius: 'var(--radius)',
                    boxShadow: 'var(--shadow-sm)',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1rem',
                    transition: 'transform 0.2s',
                    textDecoration: 'none',
                    color: 'inherit'
                }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                    <div style={{ backgroundColor: 'rgba(22, 163, 74, 0.1)', padding: '1rem', borderRadius: '50%', color: 'var(--primary)' }}>
                        <Phone size={32} />
                    </div>
                    <h4 style={{ margin: 0 }}>Call Us</h4>
                    <p style={{ margin: 0, fontWeight: 600 }}>0927-485-3172</p>
                </a>

                <a href="mailto:pestconmaster@yahoo.com" style={{
                    backgroundColor: 'white',
                    padding: '2rem',
                    borderRadius: 'var(--radius)',
                    boxShadow: 'var(--shadow-sm)',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1rem',
                    transition: 'transform 0.2s',
                    textDecoration: 'none',
                    color: 'inherit'
                }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                    <div style={{ backgroundColor: 'rgba(22, 163, 74, 0.1)', padding: '1rem', borderRadius: '50%', color: 'var(--primary)' }}>
                        <Mail size={32} />
                    </div>
                    <h4 style={{ margin: 0 }}>Email Us</h4>
                    <p style={{ margin: 0, fontWeight: 600 }}>pestconmaster@yahoo.com</p>
                </a>

                <a href="https://facebook.com/Pestconmaster" target="_blank" rel="noreferrer" style={{
                    backgroundColor: 'white',
                    padding: '2rem',
                    borderRadius: 'var(--radius)',
                    boxShadow: 'var(--shadow-sm)',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1rem',
                    transition: 'transform 0.2s',
                    textDecoration: 'none',
                    color: 'inherit'
                }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                    <div style={{ backgroundColor: 'rgba(22, 163, 74, 0.1)', padding: '1rem', borderRadius: '50%', color: 'var(--primary)' }}>
                        <Facebook size={32} />
                    </div>
                    <h4 style={{ margin: 0 }}>Facebook</h4>
                    <p style={{ margin: 0, fontWeight: 600 }}>@Pestconmaster</p>
                </a>
            </div>
        </Section>
    );
};

export default Contact;
