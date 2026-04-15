import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';

const Hero = () => {
  const handleScroll = () => {
    document.getElementById('register').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section" style={{ position: 'relative', overflow: 'hidden', padding: '6rem 0' }}>
      <div className="glow-orb top-left"></div>
      
      <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'inline-block', padding: '0.4rem 1.2rem', borderRadius: '50px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', marginBottom: '1.5rem', color: 'var(--primary)', fontWeight: '600', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.85rem' }}>
          Exclusive Global Event
        </div>
        
        <h1 style={{ marginBottom: '1.5rem' }}>
          <span className="text-gradient">AI for Business</span> <br />
          Ajegunle Lagos Community
        </h1>
        
        <p style={{ maxWidth: '600px', margin: '0 auto 3rem auto', fontSize: '1.2rem' }}>
          An exclusive, no-code workshop designed specifically for business owners and executives. Discover practical, easy-to-use AI tools to streamline your operations, scale your growth, and transform your business. No programming experience required.
        </p>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', marginBottom: '3rem' }}>
          <div className="glass-card" style={{ padding: '1rem 2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Calendar color="var(--primary)" size={24} />
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Date</div>
              <div style={{ fontWeight: '600' }}>25th April 2026</div>
            </div>
          </div>
          
          <div className="glass-card" style={{ padding: '1rem 2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Clock color="var(--primary)" size={24} />
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Time</div>
              <div style={{ fontWeight: '600' }}>10:00 AM Prompt</div>
            </div>
          </div>
          
          <div className="glass-card" style={{ padding: '1rem 2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <MapPin color="var(--primary)" size={24} />
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Location</div>
              <div style={{ fontWeight: '600' }}>2 Mba Street Near<br/>  Achakpo Bus Stop
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '2rem' }}>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem', fontWeight: '500' }}>Powered By</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            {/* NEXT Logo */}
            <img src="/logoB.png" alt="NEXT" style={{ height: '24px', filter: 'brightness(1.2)' }} />
            
            {/* Hype Logo */}
            <img src="/hype.jpeg" alt="Hype" style={{ height: '24px', filter: 'brightness(1.2)', borderRadius: '4px' }} />
            
            {/* Google Developer Community Logo */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: '600', fontSize: '1.05rem', color: '#fff' }}>
              <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span style={{ whiteSpace: 'nowrap' }}>Google Developer Community</span>
            </div>
          </div>
        </div>

        <button onClick={handleScroll} className="btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.2rem' }}>
          Secure Your Seat
        </button>
      </div>
    </section>
  );
};

export default Hero;
