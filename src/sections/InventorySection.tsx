import React, { useState } from 'react'
import { Boxes, AlertTriangle, ArrowRight, ShieldCheck, History, ZoomIn } from 'lucide-react'
import { getAssetUrl } from '../config'

interface InventorySectionProps {
  onOpenScreenshot: (id: string) => void
}

export const InventorySection: React.FC<InventorySectionProps> = ({ onOpenScreenshot }) => {
  const [view, setView] = useState<'overview' | 'ledger'>('overview')

  const flowSteps = [
    { num: '01', title: 'STOCK IN', desc: 'Distributor delivery received with factory batch invoice' },
    { num: '02', title: 'INVENTORY', desc: 'Real-time shelf count updated across sizes & colors' },
    { num: '03', title: 'COUNTER SALE', desc: 'Instant barcode scan deducts sellable unit at billing' },
    { num: '04', title: 'RETURN / EXCHANGE', desc: 'Item swapped or restocked with automated price diff' },
    { num: '05', title: 'AUDIT LEDGER', desc: 'Every unit movement recorded with user signature' }
  ]

  return (
    <section id="inventory" className="section section-subtle">
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '820px', marginBottom: '40px' }}>
          <span className="eyebrow">
            REAL-TIME FOOTWEAR STOCK
          </span>
          <h2 className="section-title">
            Know exactly what's on your shelves.
          </h2>
          <p className="section-lead">
            Track every sellable pair, damaged pair and stock movement in real time. Set reorder thresholds on high-demand sizes so you never lose a sale to an out-of-stock pair.
          </p>
        </div>

        {/* Visual Lifecycle Flow: STOCK IN -> INVENTORY -> SALE -> EXCHANGE -> AUDIT TRAIL */}
        <div
          className="responsive-flow-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '12px',
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            border: '1px solid var(--border-subtle)',
            padding: '24px',
            marginBottom: '48px',
            boxShadow: 'var(--shadow-subtle)'
          }}
        >
          {flowSteps.map((step, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                position: 'relative',
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
                  {step.num}
                </span>
                {i < flowSteps.length - 1 && (
                  <ArrowRight size={14} color="var(--text-light)" />
                )}
              </div>
              <h4 style={{ fontSize: '13px', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '0.04em' }}>
                {step.title}
              </h4>
              <p style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.4, margin: 0 }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Interactive Real Screenshot Display */}
        <div>
          {/* Toggle Controls */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '16px',
              flexWrap: 'wrap',
              gap: '12px'
            }}
          >
            <div className="mobile-scroll-x" style={{ display: 'flex', gap: '8px' }}>
              <button
                onClick={() => setView('overview')}
                className={`btn btn-sm ${view === 'overview' ? 'btn-primary' : 'btn-secondary'}`}
              >
                1. Shelf Stock Overview & Low-Stock Alerts
              </button>
              <button
                onClick={() => setView('ledger')}
                className={`btn btn-sm ${view === 'ledger' ? 'btn-primary' : 'btn-secondary'}`}
              >
                2. Immutable Movements Audit Ledger
              </button>
            </div>

            <button
              onClick={() => onOpenScreenshot(view === 'overview' ? 'inventory-stock' : 'inventory-movements')}
              style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: 'var(--brand-primary)', fontWeight: 600 }}
            >
              <ZoomIn size={14} />
              <span>Inspect current view (1080p)</span>
            </button>
          </div>

          <div
            className="product-frame"
            style={{ cursor: 'pointer' }}
            onClick={() => onOpenScreenshot(view === 'overview' ? 'inventory-stock' : 'inventory-movements')}
            title="Click to view full 1080p screenshot"
          >
            <div className="product-frame-header">
              <div className="product-frame-dots">
                <div className="product-frame-dot" />
                <div className="product-frame-dot" />
                <div className="product-frame-dot" />
              </div>
              <span className="product-frame-title">
                {view === 'overview'
                  ? 'Real-Time Inventory Ledger — Sellable vs Damaged Pairs'
                  : 'Inventory Movements Drawer — Chronological Audit Trail'}
              </span>
              <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>ShoesPlace Live</span>
            </div>
            <img
              src={getAssetUrl(
                view === 'overview'
                  ? 'screenshots/09_Inventory_Stock_Overview.png'
                  : 'screenshots/10_Inventory_Movements_Modal.png'
              )}
              alt="ShoesPlace Inventory Management"
              style={{ width: '100%', display: 'block' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
