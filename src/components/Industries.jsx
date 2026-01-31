import React from 'react';
import Section from './Section';
import { Building, Home, ShoppingCart, Truck, Utensils, HeartPulse, Factory, Warehouse } from 'lucide-react';

const Industries = () => {
    const industries = [
        { icon: <HeartPulse size={40} />, name: "Hospitals" },
        { icon: <ShoppingCart size={40} />, name: "Supermarkets" },
        { icon: <Home size={40} />, name: "Residential" },
        { icon: <Building size={40} />, name: "Buildings & Condos" },
        { icon: <Utensils size={40} />, name: "Restaurants & Hotels" },
        { icon: <Warehouse size={40} />, name: "Warehouses" },
        { icon: <Truck size={40} />, name: "Bus Terminals" },
        { icon: <Factory size={40} />, name: "Poultry & Plants" }
    ];

    return (
        <Section id="industries" title="Industries We Serve" bg="light">
            <div className="grid grid-4" style={{ gap: '1.5rem', textAlign: 'center' }}>
                {industries.map((item, index) => (
                    <div key={index} style={{
                        backgroundColor: 'white',
                        padding: '2rem 1rem',
                        borderRadius: 'var(--radius)',
                        boxShadow: 'var(--shadow-sm)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '1rem',
                        color: 'var(--secondary)'
                    }}>
                        <div style={{ color: 'var(--primary)' }}>{item.icon}</div>
                        <h4 style={{ margin: 0, fontSize: '1.1rem' }}>{item.name}</h4>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Industries;
