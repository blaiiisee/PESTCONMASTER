import React from 'react';
import { Facebook, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: 'var(--secondary)', color: 'white', padding: '4rem 0 2rem' }}>
            <div className="container">
                <div className="grid grid-4" style={{ gap: '3rem' }}>

                    {/* Company Info */}
                    <div>
                        <h3 style={{ color: 'white', marginBottom: '1.5rem' }}>PESTCONMASTER</h3>
                        <p style={{ opacity: 0.8, fontSize: '0.9rem' }}>
                            Experts in essential pest management, committed to providing a clean and pest-free environment so customers can grow and flourish.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}>Quick Links</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <li><a href="#about" style={{ opacity: 0.8 }}>About Us</a></li>
                            <li><a href="#services" style={{ opacity: 0.8 }}>Services</a></li>
                            <li><a href="#coverage" style={{ opacity: 0.8 }}>Coverage</a></li>
                            <li><a href="#contact" style={{ opacity: 0.8 }}>Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}>Contact Us</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', opacity: 0.8 }}>
                                <Phone size={18} /> 0927-485-3172
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', opacity: 0.8 }}>
                                <Mail size={18} /> pestconmaster@yahoo.com
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', opacity: 0.8 }}>
                                <Facebook size={18} /> Pestconmaster
                            </li>
                        </ul>
                    </div>

                    {/* Credentials */}
                    <div>
                        <h4 style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}>Accreditation</h4>
                        <ul style={{ opacity: 0.8, fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <li>FDA Licensed</li>
                            <li>KAPESTCOPI Member</li>
                            <li>Internationally Accredited</li>
                        </ul>
                    </div>
                </div>

                <div style={{
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    marginTop: '3rem',
                    paddingTop: '2rem',
                    textAlign: 'center',
                    opacity: 0.6,
                    fontSize: '0.875rem'
                }}>
                    <p>© {new Date().getFullYear()} PESTCONMASTER. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
