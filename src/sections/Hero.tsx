import React from 'react'
import { ArrowRight, MessageSquare, Check, ShieldCheck, Sparkles, ZoomIn } from 'lucide-react'
import { SITE_CONFIG, getAssetUrl } from '../config'

interface HeroProps {
  onOpenScreenshot: (id: string) => void
}

export const Hero: React.FC<HeroProps> = ({ onOpenScreenshot }) => {
  return (
    <section
      style={{
        paddingTop: '64px',
        paddingBottom: '96px',
        backgroundColor: 'var(--bg-page)',
        position: 'relative'
      }}
    >
      <div className="container" style={{ textAlign: 'center' }}>
        {/* Eyebrow */}
        <div style={{ display: 'inline-flex', marginBottom: '20px' }}>
          <span className="eyebrow eyebrow-badge">
            <Sparkles size={13} />
            FOOTWEAR RETAIL MANAGEMENT
          </span>
        </div>

        {/* Main Headline */}
        <h1
          style={{
            fontSize: 'clamp(2.5rem, 5.2vw, 4.25rem)',
            fontWeight: 800,
            letterSpacing: '-0.035em',
            color: 'var(--text-primary)',
            lineHeight: 1.1,
            maxWidth: '980px',
            margin: '0 auto 24px auto'
          }}
        >
          The operating system built for footwear stores.
        </h1>

        {/* Supporting Copy */}
        <p
          style={{
            fontSize: 'clamp(1.1rem, 1.4vw, 1.3rem)',
            color: 'var(--text-secondary)',
            lineHeight: 1.6,
            maxWidth: '780px',
            margin: '0 auto 36px auto'
          }}
        >
          Sell faster, manage every size and color, track inventory, understand your customers, and know your real profit — all from one powerful platform.
        </p>

        {/* CTA Actions */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '14px',
            flexWrap: 'wrap',
            marginBottom: '20px'
          }}
        >
          <a
            href={SITE_CONFIG.links.whatsappDirect}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg"
            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            <span>Book a Store Demo</span>
            <ArrowRight size={16} />
          </a>
          <a
            href="#product"
            className="btn btn-secondary btn-lg"
          >
            Explore Product Tour
          </a>
        </div>

        {/* Credibility Line */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            fontSize: '13px',
            fontWeight: 600,
            color: 'var(--text-muted)',
            marginBottom: '48px'
          }}
        >
          <ShieldCheck size={16} color="#059669" />
          <span>Built specifically for modern footwear retailers • 100% Offline-first reliability</span>
        </div>

        {/* Hero Product Showcase (Real Application UI Centerpiece) */}
        <div
          style={{
            maxWidth: '1180px',
            margin: '0 auto',
            position: 'relative',
            cursor: 'pointer'
          }}
          onClick={() => onOpenScreenshot('dashboard')}
          title="Click to view full 1080p screenshot"
        >
          <div className="product-frame">
            <div className="product-frame-header">
              <div className="product-frame-dots">
                <div className="product-frame-dot" />
                <div className="product-frame-dot" />
                <div className="product-frame-dot" />
              </div>
              <span className="product-frame-title">
                ShoesPlace Desktop — Live Executive Command Center
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '11px', color: 'var(--text-muted)' }}>
                <ZoomIn size={12} />
                <span>Click to inspect (1080p)</span>
              </div>
            </div>

            <img
              src={getAssetUrl('screenshots/02_Dashboard_Command_Center.png')}
              alt="ShoesPlace Store Command Center Dashboard"
              style={{ width: '100%', display: 'block' }}
            />
          </div>

          {/* Floating Subtle Spec Pill */}
          <div
            style={{
              position: 'absolute',
              bottom: '24px',
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: 'rgba(15, 23, 42, 0.88)',
              backdropFilter: 'blur(8px)',
              color: '#ffffff',
              padding: '8px 18px',
              borderRadius: '999px',
              fontSize: '12.5px',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
              pointerEvents: 'none'
            }}
          >
            <span style={{ color: '#34d399', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#34d399', display: 'inline-block' }} />
              Live POS Terminal
            </span>
            <span style={{ opacity: 0.4 }}>|</span>
            <span>Real Footwear Store Metrics</span>
            <span style={{ opacity: 0.4 }}>|</span>
            <span style={{ color: '#93c5fd' }}>Offline SQLite Engine</span>
          </div>
        </div>
      </div>
    </section>
  )
}
