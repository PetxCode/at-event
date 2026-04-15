import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Users, Mail, Briefcase, Building2, Calendar, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Participants = () => {
  const [participants, setParticipants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchParticipants = async () => {
      try {
        const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
        const response = await axios.get(`${API_URL}/users`);
        setParticipants(response.data);
      } catch (err) {
        setError('Failed to load participants. Make sure the server is running.');
      } finally {
        setLoading(false);
      }
    };
    fetchParticipants();
  }, []);

  const filtered = participants.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.email.toLowerCase().includes(search.toLowerCase()) ||
    p.company.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg-dark)', position: 'relative' }}>
      {/* Glow orbs */}
      <div className="glow-orb top-left" />
      <div className="glow-orb bottom-right" />

      {/* Navbar */}
      <nav style={{ padding: '1.5rem 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border)' }}>
        <img src="/logoB.png" alt="ENEXT Logo" style={{ height: '30px' }} />
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', textDecoration: 'none', fontWeight: '600', fontSize: '0.9rem' }}>
          <ArrowLeft size={16} /> Back to Event
        </Link>
      </nav>

      <div className="container" style={{ padding: '3rem 2rem' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.8rem', padding: '0.4rem 1.2rem', borderRadius: '50px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', marginBottom: '1rem', color: 'var(--primary)', fontWeight: '600', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '2px' }}>
            <Users size={16} /> Registered Attendees
          </div>
          <h2>
            Event <span className="text-gradient">Participants</span>
          </h2>
          <p style={{ marginTop: '0.5rem' }}>
            {loading ? 'Loading...' : `${participants.length} registered participant${participants.length !== 1 ? 's' : ''}`}
          </p>
        </div>

        {/* Search Bar */}
        {!loading && !error && participants.length > 0 && (
          <div style={{ maxWidth: '500px', margin: '0 auto 2.5rem auto' }}>
            <input
              type="text"
              placeholder="Search by name, email or company..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ width: '100%', padding: '1rem 1.5rem', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--border)', borderRadius: '50px', color: '#fff', fontFamily: 'inherit', fontSize: '1rem', outline: 'none', transition: 'border-color 0.3s' }}
              onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
              onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
            />
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div style={{ textAlign: 'center', padding: '4rem 0' }}>
            <div style={{ width: '50px', height: '50px', border: '3px solid var(--border)', borderTop: '3px solid var(--primary)', borderRadius: '50%', animation: 'spin 1s linear infinite', margin: '0 auto 1rem auto' }} />
            <p>Fetching participants...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="glass-card" style={{ textAlign: 'center', padding: '3rem', maxWidth: '500px', margin: '0 auto', borderColor: 'rgba(255,0,0,0.2)' }}>
            <p style={{ color: '#ff6b6b' }}>{error}</p>
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && participants.length === 0 && (
          <div className="glass-card" style={{ textAlign: 'center', padding: '4rem', maxWidth: '500px', margin: '0 auto' }}>
            <Users size={48} color="var(--text-muted)" style={{ marginBottom: '1rem' }} />
            <h3 style={{ marginBottom: '0.5rem' }}>No participants yet</h3>
            <p>Be the first to register for the event!</p>
          </div>
        )}

        {/* Participants Grid */}
        {!loading && !error && filtered.length > 0 && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {filtered.map((p, index) => (
              <div key={p._id || index} className="glass-card" style={{ padding: '1.8rem' }}>
                {/* Avatar */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.2rem' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--primary), var(--secondary))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '1.2rem', color: '#000', flexShrink: 0 }}>
                    {p.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '0.1rem' }}>{p.name}</h3>
                    <span style={{ fontSize: '0.75rem', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '1px' }}>#{String(index + 1).padStart(3, '0')}</span>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
                    <Mail size={14} color="var(--text-muted)" />
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', wordBreak: 'break-all' }}>{p.email}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
                    <Briefcase size={14} color="var(--text-muted)" />
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{p.jobTitle}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
                    <Building2 size={14} color="var(--text-muted)" />
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{p.company}</span>
                  </div>
                  {p.registeredAt && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
                      <Calendar size={14} color="var(--text-muted)" />
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                        {new Date(p.registeredAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* No search results */}
        {!loading && !error && participants.length > 0 && filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '3rem 0' }}>
            <p>No participants match "<strong>{search}</strong>"</p>
          </div>
        )}
      </div>

      {/* Spinner keyframes */}
      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </div>
  );
};

export default Participants;
