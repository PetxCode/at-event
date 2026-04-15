import React from 'react';
import Hero from './components/Hero';
import Speakers from './components/Speakers';
import RSVPForm from './components/RSVPForm';
import './index.css';

function App() {
  return (
    <div className="App">
      {/* Dynamic Navbar */}
      <nav style={{ padding: '2rem 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'absolute', top: 0, left: 0, right: 0, zIndex: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <img src="/logoB.png" alt="ENEXT Logo" style={{ height: '35px', filter: 'drop-shadow(0 0 5px rgba(255,255,255,0.2))' }} />
        </div>
        <div>
          <button onClick={() => document.getElementById('register').scrollIntoView({ behavior: 'smooth' })} style={{ background: 'transparent', border: '1px solid var(--primary)', color: 'var(--primary)', padding: '0.6rem 1.5rem', borderRadius: '50px', cursor: 'pointer', fontWeight: '600', transition: 'all 0.3s ease' }} onMouseOver={(e) => { e.currentTarget.style.background = 'var(--primary)'; e.currentTarget.style.color = '#000'; }} onMouseOut={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--primary)'; }}>
            RSVP
          </button>
        </div>
      </nav>

      <main>
        <Hero />
        <Speakers />
        <RSVPForm />
      </main>

      <footer style={{ textAlign: 'center', padding: '3rem 0', color: 'var(--text-muted)', borderTop: '1px solid var(--border)', marginTop: '2rem' }}>
        <div className="container">
          <p>© 2026 AI for Business with NEXT & Google Developer Community.</p>
          <p style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>Ajegunle Lagos Community.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
