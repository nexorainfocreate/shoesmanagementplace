import React from 'react'
import { Store, ShoppingCart, BarChart3, TrendingUp, ArrowRight } from 'lucide-react'

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Set up your store',
      desc: 'Bulk import products from Excel or create styles via the Footwear Matrix. Set size runs, color swatches, cashier logins, and thermal printers.',
      icon: Store
    },
    {
      step: '02',
      title: 'Start selling',
      desc: 'Scan shoe box barcodes with laser speed, accept multi-tender cash or Dynamic UPI QR, print thermal receipts, and auto-dispatch WhatsApp bills.',
      icon: ShoppingCart
    },
    {
      step: '03',
      title: 'Manage operations',
      desc: 'Handle size exchanges without a calculator, remember customer shoe sizes, track neighborhood store Khata, and log wholesale purchase orders.',
      icon: BarChart3
    },
    {
      step: '04',
      title: 'Grow with better decisions',
      desc: 'Leverage AI Festive Forecast demand projections, restock fast-selling shoe sizes before stockouts occur, and review accurate net P&L reports.',
      icon: TrendingUp
    }
  ]

  return (
    <section className="section">
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '820px', marginBottom: '56px' }}>
          <span className="eyebrow">
            STORE ONBOARDING LIFECYCLE
          </span>
          <h2 className="section-title">
            Simple to deploy. Powerful to run.
          </h2>
          <p className="section-lead">
            Get your footwear store fully operational on ShoesPlace in an afternoon, whether you are opening a brand-new showroom or migrating an established retail business.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid-4">
          {steps.map((s, idx) => {
            const Icon = s.icon
            return (
              <div
                key={idx}
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '16px',
                  padding: '32px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  boxShadow: 'var(--shadow-subtle)',
                  position: 'relative'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '13px',
                      fontWeight: 800,
                      color: 'var(--brand-primary)',
                      backgroundColor: 'var(--bg-accent-subtle)',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      border: '1px solid var(--brand-subtle)'
                    }}
                  >
                    STEP {s.step}
                  </span>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      backgroundColor: 'var(--bg-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--text-primary)'
                    }}
                  >
                    <Icon size={18} />
                  </div>
                </div>

                <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.25 }}>
                  {s.title}
                </h3>

                <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  {s.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
