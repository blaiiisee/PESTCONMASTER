import React from 'react';

const Section = ({ id, title, subtitle, bg = "light", children, className = "" }) => {
  return (
    <section 
      id={id} 
      className={`section ${bg === "dark" ? "section-alt" : "section-bg"} ${className}`}
    >
      <div className="container">
        {(title || subtitle) && (
          <div className="section-header" style={{ marginBottom: '3rem', textAlign: 'center' }}>
            {title && <h2 className="fade-in">{title}</h2>}
            {subtitle && <p className="section-subtitle fade-in" style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-light)' }}>{subtitle}</p>}
          </div>
        )}
        <div className="fade-in">
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;
