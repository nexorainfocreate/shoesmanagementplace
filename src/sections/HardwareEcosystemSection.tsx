import React from 'react'
import { Barcode, Monitor, CreditCard, Printer, MessageSquare, ArrowRight } from 'lucide-react'

export const HardwareEcosystemSection: React.FC = () => {
  const hardwareSteps = [
    {
      num: '01',
      title: 'Barcode Scanner',
      subtitle: 'Physical Hardware',
      desc: 'Standard USB or Bluetooth laser scanner reads box barcode tag instantly into POS (F2).',
      icon: Barcode,
      color: '#2563eb'
    },
    {
      num: '02',
      title: 'ShoesPlace POS',
      subtitle: 'Core Engine',
      desc: 'Variant detected, shoe size memory queried, price and taxes calculated in milliseconds.',
      icon: Monitor,
      color: '#0f172a'
    },
    {
      num: '03',
      title: 'Dynamic Payment',
      subtitle: 'Multi-Tender',
      desc: 'Exact amount coded on dynamic UPI QR, split across cash, credit card, or customer Khata.',
      icon: CreditCard,
      color: '#059669'
    },
    {
      num: '04',
      title: 'Thermal Printer',
      subtitle: 'ESC/POS 2" or 3"',
      desc: 'Instant silent thermal bill generated with store branding, itemized sizes, and tax summary.',
      icon: Printer,
      color: '#d97706'
    },
    {
      num: '05',
      title: 'WhatsApp Invoice',
      subtitle: 'Digital Delivery',
      desc: 'Automatic WhatsApp Web service delivers a branded PDF invoice straight to customer’s phone.',
      icon: MessageSquare,
      color: '#10b981'
    }
  ]

  return (
    <section id="hardware" className="section">
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '820px', marginBottom: '56px' }}>
          <span className="eyebrow">
            HARDWARE & DIGITAL ECOSYSTEM
          </span>
          <h2 className="section-title">
            The complete physical + digital counter workflow.
          </h2>
          <p className="section-lead">
            ShoesPlace connects your physical retail counter hardware with modern digital billing touchpoints in one seamless, high-speed loop.
          </p>
        </div>

        {/* 5-Step Connected Ecosystem Grid */}
        <div
          className="hardware-steps-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px',
            position: 'relative'
          }}
        >
          {hardwareSteps.map((step, idx) => {
            const Icon = step.icon
            return (
              <div
                key={idx}
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '12px',
                  padding: '24px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  boxShadow: 'var(--shadow-subtle)',
                  position: 'relative'
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
                      color: step.color
                    }}
                  >
                    <Icon size={18} />
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      fontWeight: 800,
                      color: 'var(--text-muted)'
                    }}
                  >
                    {step.num}
                  </span>
                </div>

                <div>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--brand-primary)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    {step.subtitle}
                  </span>
                  <h3 style={{ fontSize: '16px', fontWeight: 800, color: 'var(--text-primary)', marginTop: '2px' }}>
                    {step.title}
                  </h3>
                </div>

                <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  {step.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
