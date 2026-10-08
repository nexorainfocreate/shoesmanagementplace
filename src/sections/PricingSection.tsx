import React, { useState } from 'react'
import { PRICING_PLANS } from '../data/features'
import { Check, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react'
import { SITE_CONFIG } from '../config'

export const PricingSection: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true)

  return (
    <section id="pricing" className="section section-subtle">
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '820px', marginBottom: '40px', textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            TRANSPARENT RETAIL LICENSING
          </span>
          <h2 className="section-title">
            Simple, honest pricing for footwear retail.
          </h2>
          <p className="section-lead" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            No hidden per-scan fees. No cloud bandwidth surcharges. All plans include 100% offline desktop reliability and local database backups.
          </p>

          {/* Billing Toggle (Monthly vs Annual) */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              backgroundColor: '#ffffff',
              border: '1px solid var(--border-subtle)',
              borderRadius: '8px',
              padding: '4px',
              marginTop: '28px',
              gap: '4px',
              boxShadow: 'var(--shadow-subtle)'
            }}
          >
            <button
              onClick={() => setIsAnnual(false)}
              style={{
                padding: '8px 18px',
                borderRadius: '6px',
                fontSize: '13px',
                fontWeight: 600,
                backgroundColor: !isAnnual ? 'var(--text-primary)' : 'transparent',
                color: !isAnnual ? '#ffffff' : 'var(--text-secondary)',
                transition: 'all 150ms ease'
              }}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              style={{
                padding: '8px 18px',
                borderRadius: '6px',
                fontSize: '13px',
                fontWeight: 600,
                backgroundColor: isAnnual ? 'var(--text-primary)' : 'transparent',
                color: isAnnual ? '#ffffff' : 'var(--text-secondary)',
                transition: 'all 150ms ease',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <span>Annual Billing</span>
              <span
                style={{
                  fontSize: '10px',
                  fontWeight: 800,
                  backgroundColor: '#ecfdf5',
                  color: '#047857',
                  padding: '2px 6px',
                  borderRadius: '4px'
                }}
              >
                SAVE 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid-3" style={{ alignItems: 'stretch' }}>
          {PRICING_PLANS.map((plan, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: '#ffffff',
                border: plan.highlighted ? '2px solid var(--brand-primary)' : '1px solid var(--border-subtle)',
                borderRadius: '16px',
                padding: '36px 28px',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                boxShadow: plan.highlighted ? '0 10px 30px -4px rgba(37, 99, 235, 0.12)' : 'var(--shadow-subtle)'
              }}
            >
              {plan.badge && (
                <div
                  style={{
                    position: 'absolute',
                    top: '-12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: 'var(--brand-primary)',
                    color: '#ffffff',
                    fontSize: '10px',
                    fontWeight: 800,
                    letterSpacing: '0.08em',
                    padding: '4px 12px',
                    borderRadius: '999px',
                    textTransform: 'uppercase'
                  }}
                >
                  {plan.badge}
                </div>
              )}

              <div style={{ marginBottom: '24px' }}>
                <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '6px' }}>
                  {plan.name}
                </h3>
                <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.5, minHeight: '40px' }}>
                  {plan.tagline}
                </p>
              </div>

              {/* Price Display */}
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '28px', paddingBottom: '24px', borderBottom: '1px solid var(--border-subtle)' }}>
                <span style={{ fontSize: '36px', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.03em' }}>
                  {isAnnual ? plan.priceAnnual : plan.priceMonthly}
                </span>
                <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                  {plan.period}
                </span>
              </div>

              {/* Feature Checklist */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '36px', flex: 1 }}>
                {plan.features.map((feat, fIdx) => (
                  <div key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <Check size={15} color="#059669" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                      {feat}
                    </span>
                  </div>
                ))}
              </div>

              {/* Plan Action CTA */}
              <div>
                <a
                  href={SITE_CONFIG.links.instagramDirect}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn ${plan.highlighted ? 'btn-primary' : 'btn-secondary'}`}
                  style={{ width: '100%' }}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight size={14} />
                </a>
                <div style={{ textAlign: 'center', marginTop: '10px' }}>
                  <span style={{ fontSize: '11.5px', color: 'var(--text-muted)' }}>
                    Instant response via Instagram DM @vernixdigital
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Trust Footer */}
        <div
          style={{
            marginTop: '40px',
            padding: '20px',
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            border: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            fontSize: '13px',
            color: 'var(--text-secondary)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ShieldCheck size={16} color="#059669" />
            <span>Hardware installation support, thermal printer calibration, and catalog migration included.</span>
          </div>
          <a
            href={SITE_CONFIG.links.instagramDirect}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--brand-primary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}
          >
            <span>Have custom multi-store requirements? DM @vernixdigital</span>
            <ArrowRight size={13} />
          </a>
        </div>
      </div>
    </section>
  )
}
