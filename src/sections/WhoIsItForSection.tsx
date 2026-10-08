import React from 'react'
import { Store, Layers, Trophy, HeartHandshake, GitBranch, Warehouse, Check } from 'lucide-react'

export const WhoIsItForSection: React.FC = () => {
  const segments = [
    {
      title: 'Independent Shoe Stores',
      desc: 'Eliminate manual bill books and handwritten stock ledgers. Get fast barcode billing, automated box labels, and accurate daily till cash.',
      icon: Store,
      badge: 'Single Counter'
    },
    {
      title: 'Multi-Brand Footwear Showrooms',
      desc: 'Manage hundreds of brands (Nike, Adidas, Puma, Woodland, Campus) with structured categorization across Men, Women, and Kids size runs.',
      icon: Layers,
      badge: 'High Catalog Volume'
    },
    {
      title: 'Sports & Sneaker Retailers',
      desc: 'High inventory turnover demands real-time tracking of fast-depleting shoe sizes (UK 7, 8, 9) and rapid customer size memory lookups.',
      icon: Trophy,
      badge: 'Fast Turnover'
    },
    {
      title: 'Family-Owned Footwear Businesses',
      desc: 'Maintain customer relationships with neighborhood Khata (Udhar) management, WhatsApp bills, and simple accountant-ready P&L reports.',
      icon: HeartHandshake,
      badge: 'Customer Loyalty'
    },
    {
      title: 'Growing Footwear Chains',
      desc: 'Standardize counter workflows with strict role-based access: cashiers bill rapidly while owner margins stay completely confidential.',
      icon: GitBranch,
      badge: 'Role Security'
    },
    {
      title: 'Wholesale & Retail Distributors',
      desc: 'Manage manufacturer purchase orders, supplier payables, bulk Excel inventory uploads, and wholesale stock replenishments.',
      icon: Warehouse,
      badge: 'B2B Procurement'
    }
  ]

  return (
    <section className="section section-subtle">
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '820px', marginBottom: '56px' }}>
          <span className="eyebrow">
            BUILT FOR FOOTWEAR RETAILERS
          </span>
          <h2 className="section-title">
            Built for footwear retailers of every size.
          </h2>
          <p className="section-lead">
            Whether you operate a boutique high-street shoe store or a sprawling multi-brand family showroom, ShoesPlace adapts seamlessly to your counter workflows.
          </p>
        </div>

        {/* 6 Retailer Segments Grid */}
        <div className="grid-3">
          {segments.map((seg, idx) => {
            const Icon = seg.icon
            return (
              <div
                key={idx}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '16px',
                  padding: '32px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                  boxShadow: 'var(--shadow-subtle)',
                  transition: 'all 200ms ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      backgroundColor: 'var(--bg-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--brand-primary)'
                    }}
                  >
                    <Icon size={18} />
                  </div>
                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      backgroundColor: 'var(--bg-subtle)',
                      color: 'var(--text-muted)',
                      padding: '3px 8px',
                      borderRadius: '4px',
                      letterSpacing: '0.04em',
                      textTransform: 'uppercase'
                    }}
                  >
                    {seg.badge}
                  </span>
                </div>

                <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.25 }}>
                  {seg.title}
                </h3>

                <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  {seg.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
