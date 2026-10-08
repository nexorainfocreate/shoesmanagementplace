import React, { useState } from 'react'
import { Building2, FileCheck, Truck, CreditCard, ArrowRight, ZoomIn } from 'lucide-react'
import { getAssetUrl } from '../config'

interface ProcurementProps {
  onOpenScreenshot: (id: string) => void
}

export const ProcurementSection: React.FC<ProcurementProps> = ({ onOpenScreenshot }) => {
  const [tab, setTab] = useState<'po' | 'suppliers' | 'create'>('po')

  const procurementFlow = [
    { title: 'Supplier Directory', desc: 'Manufacturer & agency details' },
    { title: 'Purchase Order', desc: 'Negotiated wholesale rate entry' },
    { title: 'Goods Received', desc: 'Factory delivery verification' },
    { title: 'Inventory Updated', desc: 'Shelf stock immediately stocked' },
    { title: 'Supplier Payable', desc: 'Wholesale ledger tracking balance' }
  ]

  const screenMap = {
    po: {
      id: 'purchases-orders',
      title: 'Purchase Orders & Stock Replenishment Ledger',
      image: 'screenshots/17_Purchases_Orders.png'
    },
    create: {
      id: 'purchases-create',
      title: 'Create Purchase Order Dialog with Wholesale Unit Rates',
      image: 'screenshots/18_Purchases_Create_PO_Modal.png'
    },
    suppliers: {
      id: 'suppliers-directory',
      title: 'Wholesale Supplier Directory & Accounts Payable',
      image: 'screenshots/16_Suppliers_Directory.png'
    }
  }

  const current = screenMap[tab]

  return (
    <section id="procurement" className="section">
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '820px', marginBottom: '40px' }}>
          <span className="eyebrow">
            B2B PROCUREMENT & FACTORY REORDERS
          </span>
          <h2 className="section-title">
            From supplier order to stock received.
          </h2>
          <p className="section-lead">
            Manage relationships with wholesale shoe manufacturers, track purchase orders, record incoming batch deliveries at negotiated rates, and maintain clear accounts payable.
          </p>
        </div>

        {/* 5-Step Procurement Flowchart */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
            gap: '12px',
            backgroundColor: 'var(--bg-subtle)',
            borderRadius: '16px',
            border: '1px solid var(--border-subtle)',
            padding: '24px',
            marginBottom: '48px'
          }}
        >
          {procurementFlow.map((step, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
                padding: '12px',
                backgroundColor: '#ffffff',
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
                  STEP 0{idx + 1}
                </span>
                {idx < procurementFlow.length - 1 && <ArrowRight size={13} color="var(--text-light)" />}
              </div>
              <h4 style={{ fontSize: '13px', fontWeight: 800, color: 'var(--text-primary)' }}>
                {step.title}
              </h4>
              <p style={{ fontSize: '11.5px', color: 'var(--text-muted)', lineHeight: 1.4, margin: 0 }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Interactive Screenshot Showcase */}
        <div>
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
                onClick={() => setTab('po')}
                className={`btn btn-sm ${tab === 'po' ? 'btn-primary' : 'btn-secondary'}`}
              >
                1. Purchase Orders Ledger
              </button>
              <button
                onClick={() => setTab('create')}
                className={`btn btn-sm ${tab === 'create' ? 'btn-primary' : 'btn-secondary'}`}
              >
                2. Create PO Modal (Wholesale Rates)
              </button>
              <button
                onClick={() => setTab('suppliers')}
                className={`btn btn-sm ${tab === 'suppliers' ? 'btn-primary' : 'btn-secondary'}`}
              >
                3. Suppliers Directory & Payables
              </button>
            </div>

            <button
              onClick={() => onOpenScreenshot(current.id)}
              style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '13px', color: 'var(--brand-primary)', fontWeight: 600 }}
            >
              <ZoomIn size={14} />
              <span>Inspect (1080p)</span>
            </button>
          </div>

          <div
            className="product-frame"
            style={{ cursor: 'pointer' }}
            onClick={() => onOpenScreenshot(current.id)}
            title="Click to view full 1080p screenshot"
          >
            <div className="product-frame-header">
              <div className="product-frame-dots">
                <div className="product-frame-dot" />
                <div className="product-frame-dot" />
                <div className="product-frame-dot" />
              </div>
              <span className="product-frame-title">{current.title}</span>
              <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>1080p Native</span>
            </div>
            <img
              src={getAssetUrl(current.image)}
              alt={current.title}
              style={{ width: '100%', display: 'block' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
