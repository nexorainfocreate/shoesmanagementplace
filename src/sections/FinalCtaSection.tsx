import React from 'react'
import { ArrowRight, Instagram, ShieldCheck, ZoomIn } from 'lucide-react'
import { SITE_CONFIG, getAssetUrl } from '../config'

interface FinalCtaProps {
  onOpenScreenshot: (id: string) => void
}

export const FinalCtaSection: React.FC<FinalCtaProps> = ({ onOpenScreenshot }) => {
  return (
    <section id="contact" className="section section-subtle" style={{ textAlign: 'center' }}>
      <div className="container container-narrow">
        {/* Eyebrow */}
        <span className="eyebrow" style={{ justifyContent: 'center' }}>
          ELEVATE YOUR FOOTWEAR BUSINESS
        </span>

        {/* Main Headline */}
        <h2
          style={{
            fontSize: 'clamp(2.2rem, 4vw, 3.25rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            color: 'var(--text-primary)',
            lineHeight: 1.15,
            marginBottom: '20px'
          }}
        >
          Run your footwear store with more control.
        </h2>

        {/* Supporting Copy */}
        <p
          style={{
            fontSize: 'clamp(1.1rem, 1.3vw, 1.25rem)',
            color: 'var(--text-secondary)',
            lineHeight: 1.6,
            maxWidth: '680px',
            margin: '0 auto 36px auto'
          }}
        >
          Sell faster. Keep stock accurate. Understand your customers. Know your numbers. Join modern footwear retailers who run on ShoesPlace.
        </p>

        {/* Action Buttons */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '14px',
            flexWrap: 'wrap',
            marginBottom: '32px'
          }}
        >
          <a
            href={SITE_CONFIG.links.instagramDirect}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg"
            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            <Instagram size={18} />
            <span>DM on Instagram for Live Demo (@vernixdigital)</span>
          </a>
          <a
            href="#product"
            className="btn btn-secondary btn-lg"
          >
            <span>Explore Product Features</span>
            <ArrowRight size={16} />
          </a>
        </div>

        {/* Assurance Bulletins */}
        <div
          className="assurance-bulletins"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '24px',
            flexWrap: 'wrap',
            fontSize: '12.5px',
            color: 'var(--text-muted)',
            marginBottom: '56px'
          }}
        >
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <ShieldCheck size={14} color="#059669" /> 100% Offline-first reliability
          </span>
          <span className="bullet-separator">•</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <ShieldCheck size={14} color="#059669" /> Free catalog Excel migration
          </span>
          <span className="bullet-separator">•</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <ShieldCheck size={14} color="#059669" /> Dedicated hardware calibration
          </span>
        </div>

        {/* Product UI Closing Showcase */}
        <div
          className="product-frame"
          style={{ cursor: 'pointer', maxWidth: '880px', margin: '0 auto' }}
          onClick={() => onOpenScreenshot('pos-clean')}
          title="Click to inspect 1080p full screenshot"
        >
          <div className="product-frame-header">
            <div className="product-frame-dots">
              <div className="product-frame-dot" />
              <div className="product-frame-dot" />
              <div className="product-frame-dot" />
            </div>
            <span className="product-frame-title">
              ShoesPlace High-Speed Point of Sale Billing Console
            </span>
            <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>1080p</span>
          </div>
          <img
            src={getAssetUrl('screenshots/03_Point_of_Sale_POS.png')}
            alt="ShoesPlace Point of Sale Console Screen"
            style={{ width: '100%', display: 'block' }}
          />
        </div>
      </div>
    </section>
  )
}
