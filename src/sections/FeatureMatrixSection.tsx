import React, { useState } from 'react'
import { FEATURE_CATEGORIES } from '../data/features'
import { Check, ArrowRight } from 'lucide-react'

export const FeatureMatrixSection: React.FC = () => {
  const [selectedCat, setSelectedCat] = useState<string>('sell')

  const activeCategory = FEATURE_CATEGORIES.find((c) => c.id === selectedCat) || FEATURE_CATEGORIES[0]

  return (
    <section id="features-all" className="section section-subtle">
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '820px', marginBottom: '48px' }}>
          <span className="eyebrow">
            COMPREHENSIVE CAPABILITIES
          </span>
          <h2 className="section-title">
            The complete operating system matrix.
          </h2>
          <p className="section-lead">
            Every feature in ShoesPlace is engineered specifically for footwear stores. Explore the 9 core operational domains.
          </p>
        </div>

        {/* Category Tabs Bar */}
        <div
          className="mobile-scroll-x"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            overflowX: 'auto',
            paddingBottom: '16px',
            marginBottom: '32px',
            borderBottom: '1px solid var(--border-subtle)'
          }}
        >
          {FEATURE_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCat(cat.id)}
              style={{
                padding: '10px 18px',
                borderRadius: '8px',
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '0.04em',
                whiteSpace: 'nowrap',
                backgroundColor: selectedCat === cat.id ? 'var(--text-primary)' : '#ffffff',
                color: selectedCat === cat.id ? '#ffffff' : 'var(--text-secondary)',
                border: '1px solid',
                borderColor: selectedCat === cat.id ? 'var(--text-primary)' : 'var(--border-subtle)',
                transition: 'all 150ms ease'
              }}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Active Category Content Box */}
        <div
          className="card-responsive"
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            border: '1px solid var(--border-subtle)',
            padding: '40px',
            boxShadow: 'var(--shadow-subtle)'
          }}
        >
          <div style={{ maxWidth: '720px', marginBottom: '36px' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                fontWeight: 800,
                color: 'var(--brand-primary)',
                letterSpacing: '0.1em'
              }}
            >
              DOMAIN: {activeCategory.name}
            </span>
            <h3 style={{ fontSize: '26px', fontWeight: 800, color: 'var(--text-primary)', marginTop: '4px', marginBottom: '8px' }}>
              {activeCategory.headline}
            </h3>
            <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
              {activeCategory.description}
            </p>
          </div>

          {/* Features Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
              gap: '20px'
            }}
          >
            {activeCategory.features.map((feat, idx) => (
              <div
                key={idx}
                style={{
                  padding: '20px',
                  borderRadius: '10px',
                  backgroundColor: feat.highlight ? 'var(--bg-accent-subtle)' : 'var(--bg-subtle)',
                  border: '1px solid',
                  borderColor: feat.highlight ? 'var(--brand-subtle)' : 'var(--border-subtle)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Check size={16} color={feat.highlight ? 'var(--brand-primary)' : '#059669'} />
                  <h4 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-primary)' }}>
                    {feat.name}
                  </h4>
                </div>
                <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0, paddingLeft: '24px' }}>
                  {feat.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
