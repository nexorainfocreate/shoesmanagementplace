import React from 'react'
import { BarChart3, FileSpreadsheet, ArrowRight, Download, Check, ZoomIn } from 'lucide-react'
import { getAssetUrl } from '../config'

interface BusinessIntelligenceProps {
  onOpenScreenshot: (id: string) => void
}

export const BusinessIntelligenceSection: React.FC<BusinessIntelligenceProps> = ({ onOpenScreenshot }) => {
  const cadenceFlow = [
    { period: 'TODAY', label: 'Live Sales & Pairs Sold', desc: 'Net revenue, active cash till, and customer receipts' },
    { period: 'THIS WEEK', label: 'Brand & Velocity Trends', desc: 'Fastest-moving shoe categories and cashier performance' },
    { period: 'THIS MONTH', label: 'True Net P&L Summary', desc: 'Gross margin minus operational overheads (rent, bills)' },
    { period: 'OVERALL', label: 'Inventory Valuation at Cost', desc: 'Total wholesale capital locked in current stock vs potential MRP' }
  ]

  return (
    <section id="bi-reports" className="section section-subtle">
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '820px', marginBottom: '40px' }}>
          <span className="eyebrow">
            EXECUTIVE COMMAND CENTER & AUDIT REPORTS
          </span>
          <h2 className="section-title">
            From daily sales to the bigger picture.
          </h2>
          <p className="section-lead">
            Your numbers, ready when you need them. Track revenue velocity on the counter today, and export audit-ready financial statements for your accountant tomorrow.
          </p>
        </div>

        {/* Cadence Flow */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '12px',
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            border: '1px solid var(--border-subtle)',
            padding: '24px',
            marginBottom: '48px',
            boxShadow: 'var(--shadow-subtle)'
          }}
        >
          {cadenceFlow.map((c, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
                padding: '12px',
                backgroundColor: 'var(--bg-subtle)',
                borderRadius: '8px',
                border: '1px solid var(--border-subtle)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    fontWeight: 800,
                    color: 'var(--brand-primary)',
                    backgroundColor: 'var(--bg-accent-subtle)',
                    padding: '2px 6px',
                    borderRadius: '4px'
                  }}
                >
                  {c.period}
                </span>
                {i < cadenceFlow.length - 1 && <ArrowRight size={13} color="var(--text-light)" />}
              </div>
              <h4 style={{ fontSize: '13.5px', fontWeight: 800, color: 'var(--text-primary)' }}>
                {c.label}
              </h4>
              <p style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.4, margin: 0 }}>
                {c.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Feature Split with Real Reports Screenshot */}
        <div className="feature-split">
          <div className="feature-content">
            <h3 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.25 }}>
              Audit-ready footwear reporting with one-click PDF & Excel export.
            </h3>
            <p className="feature-description">
              Whether you file under regular GST or the Composition Scheme, ShoesPlace formats tax declarations, category sales, and inventory valuation sheets that match your chartered accountant's requirements.
            </p>

            <div className="feature-list">
              <div className="feature-list-item">
                <div className="feature-list-icon"><Check size={14} /></div>
                <div className="feature-list-text">
                  <strong>P&L Statement:</strong> Detailed retail margins with operational expense deductions to reveal true store profits.
                </div>
              </div>
              <div className="feature-list-item">
                <div className="feature-list-icon"><Check size={14} /></div>
                <div className="feature-list-text">
                  <strong>Inventory Valuation Report:</strong> Computes the exact rupee value of all shoe stock currently in your backroom and display racks at wholesale cost.
                </div>
              </div>
              <div className="feature-list-item">
                <div className="feature-list-icon"><Check size={14} /></div>
                <div className="feature-list-text">
                  <strong>Sales Breakdown by Brand & Gender:</strong> Spot whether Men’s Sneakers or Women’s Formal pairs are driving this month’s growth.
                </div>
              </div>
              <div className="feature-list-item">
                <div className="feature-list-icon"><Check size={14} /></div>
                <div className="feature-list-text">
                  <strong>One-Click Export:</strong> Instant downloads in formatted PDF or clean `.xlsx` spreadsheets for seamless accounting software imports.
                </div>
              </div>
            </div>
          </div>

          <div className="feature-visual">
            <div
              className="product-frame"
              style={{ cursor: 'pointer' }}
              onClick={() => onOpenScreenshot('reports-analytics')}
              title="Click to view full 1080p screenshot"
            >
              <div className="product-frame-header">
                <div className="product-frame-dots">
                  <div className="product-frame-dot" />
                  <div className="product-frame-dot" />
                  <div className="product-frame-dot" />
                </div>
                <span className="product-frame-title">
                  Business Reports & Financial Analytics Center
                </span>
                <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>1080p</span>
              </div>
              <img
                src={getAssetUrl('screenshots/21_Business_Analytics_Reports.png')}
                alt="ShoesPlace Business Analytics & Reports Screen"
                style={{ width: '100%', display: 'block' }}
              />
            </div>
            <div style={{ textAlign: 'center', marginTop: '10px' }}>
              <span style={{ fontSize: '12.5px', color: 'var(--text-muted)' }}>
                Real ShoesPlace Business Reports Center — Click to inspect in 1080p
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
