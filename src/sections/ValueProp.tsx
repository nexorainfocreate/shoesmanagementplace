import React from 'react'
import { ShoppingCart, Boxes, BarChart3, TrendingUp, Check } from 'lucide-react'

export const ValueProp: React.FC = () => {
  const pillars = [
    {
      code: 'SELL',
      icon: ShoppingCart,
      title: 'Fast Checkout & Modern Payments',
      description:
        'Rapid counter billing with barcode scanner hotkeys, multi-tender cash/card split, on-screen dynamic UPI QR codes, 2-inch/3-inch thermal receipts, and automated WhatsApp bills.'
    },
    {
      code: 'MANAGE',
      icon: Boxes,
      title: 'Footwear Matrix & Live Inventory',
      description:
        'Structured catalog organizing Brand, Article, Category, Gender, Size, and Color. Track sellable stock, quarantine factory damages, and print shoe box barcode labels in bulk.'
    },
    {
      code: 'UNDERSTAND',
      icon: BarChart3,
      title: 'Customer CRM & Store Overheads',
      description:
        'Customer shoe size memory recalls what fit them before. Track customer Khata/credit balances, supplier wholesale orders, and store expenses (rent, staff wages, electricity).'
    },
    {
      code: 'GROW',
      icon: TrendingUp,
      title: 'AI Festive Forecast & Real P&L',
      description:
        'Demand surge projections for Diwali, Eid, and wedding seasons. Identify high-velocity shoe styles, clear slow-moving pairs, and calculate true net profit after retail overheads.'
    }
  ]

  return (
    <section id="product" className="section section-subtle">
      <div className="container">
        {/* Editorial Section Header */}
        <div style={{ maxWidth: '820px', marginBottom: '56px' }}>
          <span className="eyebrow">
            PURPOSE-BUILT ARCHITECTURE
          </span>
          <h2 className="section-title">
            Everything your footwear store needs. Nothing you don't.
          </h2>
          <p className="section-lead">
            Generic POS systems weren't designed around shoe sizes, colors, articles, exchanges, supplier purchases and footwear inventory. ShoesPlace was.
          </p>
        </div>

        {/* Four Core Pillars (Clean Typographic Grid) */}
        <div className="grid-4">
          {pillars.map((p, idx) => {
            const Icon = p.icon
            return (
              <div
                key={idx}
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '32px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  boxShadow: 'var(--shadow-subtle)',
                  transition: 'all 200ms cubic-bezier(0.22, 1, 0.36, 1)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      fontWeight: 800,
                      letterSpacing: '0.12em',
                      color: 'var(--brand-primary)',
                      backgroundColor: 'var(--bg-accent-subtle)',
                      padding: '3px 8px',
                      borderRadius: '4px',
                      border: '1px solid var(--brand-subtle)'
                    }}
                  >
                    {p.code}
                  </span>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '6px',
                      backgroundColor: 'var(--bg-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--text-secondary)'
                    }}
                  >
                    <Icon size={16} />
                  </div>
                </div>

                <h3 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.3 }}>
                  {p.title}
                </h3>

                <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  {p.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
