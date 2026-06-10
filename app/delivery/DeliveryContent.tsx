'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function DeliveryContent() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/delivery-notify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      });

      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else {
        throw new Error('Server error');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again.');
    }
  }

  return (
    <main style={{ minHeight: '100vh', background: '#FFFFFF' }}>
      <Navbar />

      {/* Full-screen Coming Soon section */}
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0a2e0a 0%, #1B5E20 50%, #2E7D32 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 24px 80px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>

        {/* Background decorative circles */}
        <div style={{
          position: 'absolute', top: '-120px', right: '-120px',
          width: '500px', height: '500px', borderRadius: '50%',
          background: 'rgba(255,255,255,0.03)', pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '-80px', left: '-80px',
          width: '350px', height: '350px', borderRadius: '50%',
          background: 'rgba(255,255,255,0.04)', pointerEvents: 'none',
        }} />

        {/* Badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          background: 'rgba(255,255,255,0.12)',
          border: '1px solid rgba(255,255,255,0.2)',
          borderRadius: '100px',
          padding: '8px 20px',
          marginBottom: '32px',
          backdropFilter: 'blur(8px)',
        }}>
          <span style={{ fontSize: '18px' }}>🚚</span>
          <span style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '12px', fontWeight: 700,
            textTransform: 'uppercase', letterSpacing: '0.1em',
            color: 'rgba(255,255,255,0.9)',
          }}>
            Delivery Service
          </span>
        </div>

        {/* Main heading */}
        <h1 style={{
          fontFamily: 'Inter, system-ui, sans-serif',
          fontSize: 'clamp(3rem, 8vw, 6rem)',
          fontWeight: 900,
          color: '#FFFFFF',
          letterSpacing: '-0.04em',
          lineHeight: 1.05,
          marginBottom: '16px',
          textShadow: '0 4px 32px rgba(0,0,0,0.3)',
        }}>
          Coming Soon
        </h1>

        {/* Divider line */}
        <div style={{
          width: '60px', height: '3px',
          background: 'rgba(255,255,255,0.4)',
          borderRadius: '100px',
          margin: '0 auto 28px',
        }} />

        {/* Subtext */}
        <p style={{
          fontFamily: 'Inter, system-ui, sans-serif',
          fontSize: 'clamp(15px, 2.5vw, 18px)',
          color: 'rgba(255,255,255,0.75)',
          lineHeight: 1.7,
          maxWidth: '480px',
          marginBottom: '48px',
        }}>
          We&apos;re working on bringing cannabis delivery to your door.
          Be the first to know when we launch — drop your email below.
        </p>

        {/* Email form / success state */}
        {status === 'success' ? (
          <div style={{
            background: 'rgba(255,255,255,0.12)',
            border: '1px solid rgba(255,255,255,0.25)',
            borderRadius: '16px',
            padding: '32px 40px',
            backdropFilter: 'blur(12px)',
            maxWidth: '440px',
            width: '100%',
          }}>
            <div style={{ fontSize: '40px', marginBottom: '12px' }}>✅</div>
            <h2 style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '20px', fontWeight: 800,
              color: '#FFFFFF', marginBottom: '8px',
            }}>
              You&apos;re on the list!
            </h2>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, margin: 0 }}>
              We&apos;ll email you the moment delivery goes live. In the meantime,
              visit us in-store at 2655 Eglinton Ave E, Toronto.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '440px' }}>
            <div style={{
              display: 'flex',
              gap: '0',
              borderRadius: '12px',
              overflow: 'hidden',
              border: '1.5px solid rgba(255,255,255,0.25)',
              boxShadow: '0 8px 40px rgba(0,0,0,0.25)',
              background: 'rgba(255,255,255,0.08)',
              backdropFilter: 'blur(12px)',
            }}>
              <input
                type="email"
                required
                placeholder="your@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                disabled={status === 'loading'}
                style={{
                  flex: 1,
                  padding: '16px 20px',
                  fontSize: '15px',
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  color: '#FFFFFF',
                  fontFamily: 'Inter, system-ui, sans-serif',
                }}
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                style={{
                  padding: '16px 28px',
                  background: '#FFFFFF',
                  color: '#1B5E20',
                  border: 'none',
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: '13px',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  cursor: status === 'loading' ? 'wait' : 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'background 0.2s',
                  flexShrink: 0,
                }}
              >
                {status === 'loading' ? '...' : 'Notify Me'}
              </button>
            </div>

            {status === 'error' && (
              <p style={{
                marginTop: '12px', fontSize: '13px',
                color: 'rgba(255,180,180,0.9)', textAlign: 'center',
              }}>
                {errorMsg}
              </p>
            )}

            <p style={{
              marginTop: '14px', fontSize: '12px',
              color: 'rgba(255,255,255,0.45)', textAlign: 'center',
            }}>
              No spam. Just one email when delivery goes live.
            </p>
          </form>
        )}

        {/* In-store CTA */}
        <div style={{
          marginTop: '60px',
          paddingTop: '40px',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          width: '100%',
          maxWidth: '440px',
        }}>
          <p style={{
            fontSize: '13px',
            color: 'rgba(255,255,255,0.5)',
            marginBottom: '16px',
            fontFamily: 'Inter, system-ui, sans-serif',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
          }}>
            Meanwhile — Visit Us In-Store
          </p>
          <a
            href="https://maps.app.goo.gl/QLXiNDUaaMBTjKey6"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 24px',
              border: '1.5px solid rgba(255,255,255,0.25)',
              borderRadius: '8px',
              color: 'rgba(255,255,255,0.85)',
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '14px',
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'all 0.2s',
              backdropFilter: 'blur(8px)',
              background: 'rgba(255,255,255,0.06)',
            }}
          >
            📍 2655 Eglinton Ave E, Toronto
          </a>
        </div>
      </div>

      <Footer />
    </main>
  );
}
