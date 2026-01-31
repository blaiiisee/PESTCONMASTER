import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section id="hero" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            color: 'white',
            paddingTop: 'var(--nav-height)',
            overflow: 'hidden'
        }}>
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                /* REPLACE IMAGE URL HERE */
                backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.75), rgba(15, 23, 42, 0.8)), url('/landing_page_image.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'blur(3px)',
                transform: 'scale(1.02)', // Prevent blurred edges
                zIndex: 0
            }} />
            <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                <div className="fade-in" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <span style={{
                        display: 'inline-block',
                        padding: '0.5rem 1rem',
                        backgroundColor: 'rgba(152, 186, 66, 0.9)',
                        borderRadius: '50px',
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        marginBottom: '1.5rem',
                        textTransform: 'uppercase',
                        letterSpacing: '1px'
                    }}>
                        Scientific Pest Control Management
                    </span>
                    <h1 style={{ color: 'white', marginBottom: '1.5rem', lineHeight: 1.1 }}>
                        Innovation in <span style={{ color: 'var(--primary)' }}>Greencare</span>
                    </h1>
                    <p style={{ fontSize: '1.25rem', marginBottom: '2.5rem', opacity: 0.9, lineHeight: 1.6 }}>
                        Experts in essential pest management, committed to providing a clean and pest-free environment so customers can grow and flourish.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="#contact" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
                            Contact Us <ArrowRight size={20} />
                        </a>
                        <a href="#services" className="btn btn-outline" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
                            Our Services
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
