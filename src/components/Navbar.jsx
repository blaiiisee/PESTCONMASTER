import React, { useState, useEffect } from 'react';
import { Menu, X, Bug } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#hero' },
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Coverage', href: '#coverage' },
        { name: 'Contact', href: '#contact' },
    ];

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            height: 'var(--nav-height)',
            backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'white',
            backdropFilter: scrolled ? 'blur(10px)' : 'none',
            boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
            zIndex: 1000,
            transition: 'all 0.3s ease',
            display: 'flex',
            alignItems: 'center'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <a href="#hero" className="logo" style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                    <img
                        src="/pestconmaster_logo.png"
                        alt="PESTCONMASTER"
                        style={{ maxHeight: '60px', width: 'auto' }}
                    />
                </a>

                {/* Desktop Nav */}
                <div className="desktop-nav" style={{ display: 'flex', gap: '2rem' }}>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            style={{ fontWeight: 500, color: 'var(--secondary)', fontSize: '0.95rem' }}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <button
                    className="mobile-toggle"
                    onClick={() => setIsOpen(!isOpen)}
                    style={{ display: 'none', background: 'none', border: 'none', color: 'var(--secondary)' }}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Nav Overlay */}
                {isOpen && (
                    <div style={{
                        position: 'absolute',
                        top: 'var(--nav-height)',
                        left: 0,
                        right: 0,
                        backgroundColor: 'white',
                        padding: '2rem',
                        boxShadow: 'var(--shadow-lg)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1.5rem',
                        textAlign: 'center'
                    }}>
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={handleLinkClick}
                                style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--secondary)' }}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                )}
            </div>
            <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
