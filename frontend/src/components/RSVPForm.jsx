import React, { useState } from 'react';
import axios from 'axios';

const RSVPForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    jobTitle: '',
    company: ''
  });
  const [status, setStatus] = useState(null); // 'loading', 'success', 'error'
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      // API URL is loaded from VITE_API_URL env variable
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const response = await axios.post(`${API_URL}/api/register`, formData);
      setStatus('success');
      setMessage(response.data.message || 'Registration successful! We will be in touch with your approval status.');
      setFormData({ name: '', email: '', jobTitle: '', company: '' });
    } catch (error) {
      console.error(error);
      setStatus('error');
      setMessage(error.response?.data?.error || 'Registration failed. Please try again later.');
    }
  };

  return (
    <section id="register" style={{ padding: '5rem 0', position: 'relative' }}>
      <div className="glow-orb bottom-right"></div>
      
      <div className="container" style={{ maxWidth: '600px' }}>
        <div className="glass-card">
          <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Request an <span className="text-gradient">Invite</span></h2>
          <p style={{ textAlign: 'center', marginBottom: '2.5rem', color: 'var(--text-muted)' }}>
            Attendance is strictly by approval. Only registered executives and developers with confirmed approval will be granted entry.
          </p>
          
          {status === 'success' && (
            <div style={{ padding: '1rem', background: 'rgba(0,255,0,0.1)', border: '1px solid #00FF00', borderRadius: '10px', color: '#00FF00', marginBottom: '1.5rem', textAlign: 'center' }}>
              {message}
            </div>
          )}
          
          {status === 'error' && (
            <div style={{ padding: '1rem', background: 'rgba(255,0,0,0.1)', border: '1px solid #FF0000', borderRadius: '10px', color: '#FF0000', marginBottom: '1.5rem', textAlign: 'center' }}>
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} placeholder="e.g. John Doe" />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} placeholder="name@company.com" />
            </div>
            
            <div className="form-group">
              <label htmlFor="jobTitle">Job Title</label>
              <input type="text" id="jobTitle" name="jobTitle" required value={formData.jobTitle} onChange={handleChange} placeholder="e.g. CTO, Founder" />
            </div>
            
            <div className="form-group">
              <label htmlFor="company">Company / Organization</label>
              <input type="text" id="company" name="company" required value={formData.company} onChange={handleChange} placeholder="Your Company Name" />
            </div>
            
            <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '1rem' }} disabled={status === 'loading'}>
              {status === 'loading' ? 'Submitting...' : 'Submit Registration'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RSVPForm;
