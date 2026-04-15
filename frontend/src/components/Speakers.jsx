import React from 'react';
import { Briefcase, Globe } from 'lucide-react';

const Speakers = () => {
  const speakers = [
    {
      name: 'Peter Oti',
      role: 'AI Automation Engineer, Software Engineer &  DevOps Engineer ',
      image: 'speaker_peter.png', // Placeholder for generated image
      linkedin: 'https://www.linkedin.com/in/peter-otunuya-518a10271/',
      link: "https://futurelab.ng"
    },
    {
      name: 'Bukola Gbemi',
      role: 'AI Strategist & Business Leader',
      image: 'speaker_bukola.png', // Placeholder
      linkedin: "https://www.linkedin.com/in/bukolapeter-chukwusah/",
      link: "https://futurelab.ng"
    },
    {
      name: 'Gbemisola Esho',
      role: 'Google Developer Expert(GDE) Cloud',
      image: 'speaker_gbemi.png',
      link: "https://futurelab.ng" ,
      linkedin: ""
      // Placeholder
    }
  ];

  return (
    <section className="speakers-section" style={{ padding: '5rem 0', position: 'relative' }}>
      <div className="container">
        <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>
          Meet Our <span className="text-gradient">Visionaries</span>
        </h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
          {speakers.map((speaker, index) => (
            <div key={index} className="glass-card" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
              <div style={{ width: '120px', height: '120px', margin: '0 auto 1.5rem auto', borderRadius: '50%', background: 'linear-gradient(135deg, var(--primary), var(--secondary))', padding: '4px' }}>
                <div style={{ width: '100%', height: '100%', borderRadius: '50%', backgroundColor: 'var(--bg-dark)', overflow: 'hidden' }}>
                    <img src={`/${speaker.image}`} alt={speaker.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => { e.target.style.display = 'none'; }} />
                </div>
              </div>
              <h3 style={{ marginBottom: '0.5rem' }}>{speaker.name}</h3>
              <p style={{ color: 'var(--primary)', marginBottom: '1.5rem', fontSize: '0.9rem', minHeight: '40px' }}>{speaker.role}</p>
              
              <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                <a href={`${speaker.linkedin}`} 
                target="_blank"
                style={{ color: 'var(--text-muted)', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--primary)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>
                  <Briefcase size={20} />
                </a>
                <a href={`${speaker.link}`} target="_blank" style={{ color: 'var(--text-muted)', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--primary)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>
                  <Globe size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
