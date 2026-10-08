import React, { useState } from 'react'
import { QrCode, Printer, MessageSquare, Zap, Shield, Check, ZoomIn } from 'lucide-react'
import { getAssetUrl } from '../config'

interface PosSectionProps {
  onOpenScreenshot: (id: string) => void
}

export const PosSection: React.FC<PosSectionProps> = ({ onOpenScreenshot }) => {
  const [activeTab, setActiveTab] = useState<'cart' | 'tender' | 'receipt'>('cart')

  const tabData = {
    cart: {
      id: 'pos-cart',
      title: 'Active Footwear Cart & Quick Barcode Scan',
      image: 'screenshots/04_POS_With_Cart_Items.png',
      caption: 'Real cart calculation with live shoe sizes, colors, MRP, discount percentage, and GST subtotal.'
    },
    tender: {
      id: 'pos-tender',
      title: 'Multi-Tender Modal & Dynamic UPI QR',
      image: 'screenshots/05_POS_Payment_Tender_Modal.png',
      caption: 'Instant dynamic UPI QR generation, split tender between cash & card, and change calculation.'
    },
    receipt: {
      id: 'receipt-modal',
      title: 'ESC/POS Thermal Bill & WhatsApp Digital Invoicing',
      image: 'screenshots/14_Thermal_Receipt_Modal.png',
      caption: 'High-speed thermal print layout with QR payment verification, tax declaration, and WhatsApp delivery.'
    }
  }

  const current = tabData[activeTab]

  return (
    <section id="features" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="feature-split" style={{ alignItems: 'flex-start', marginBottom: '40px' }}>
          <div>
            <span className="eyebrow">
              POINT OF SALE & BILLING
            </span>
            <h2 className="feature-headline" style={{ fontSize: 'clamp(2rem, 3.2vw, 2.75rem)' }}>
              Checkout built for speed.
            </h2>
          </div>
          <p className="feature-description" style={{ fontSize: '1.1rem', paddingTop: '8px' }}>
            Move customers through the counter faster with a billing engine designed around real footwear-store workflows. Zero delay, zero internet buffering, instant thermal bills, and automatic WhatsApp sharing.
          </p>
        </div>

        {/* Feature Grid Highlights */}
        <div className="grid-4" style={{ marginBottom: '48px' }}>
          <div className="spec-box">
            <div className="spec-box-header">
              <div className="spec-box-icon"><Zap size={18} /></div>
              <h4 className="spec-box-title">Keyboard & Scanner Speed</h4>
            </div>
            <p className="spec-box-desc">
              Dedicated keyboard shortcuts (F2 barcode focus, F8 tender) allow your staff to ring up shoes in seconds without touching the mouse.
            </p>
          </div>

          <div className="spec-box">
            <div className="spec-box-header">
              <div className="spec-box-icon"><QrCode size={18} /></div>
              <h4 className="spec-box-title">Dynamic UPI QR Codes</h4>
            </div>
            <p className="spec-box-desc">
              Generates instant UPI QR codes tied directly to the exact bill amount. Customers scan and pay instantly with zero manual typing errors.
            </p>
          </div>

          <div className="spec-box">
            <div className="spec-box-header">
              <div className="spec-box-icon"><Printer size={18} /></div>
              <h4 className="spec-box-title">Thermal Receipt Engine</h4>
            </div>
            <p className="spec-box-desc">
              Native ESC/POS support prints high-contrast 2-inch and 3-inch receipts with your brand logo, article breakdown, and GST declarations.
            </p>
          </div>

          <div className="spec-box">
            <div className="spec-box-header">
              <div className="spec-box-icon"><MessageSquare size={18} /></div>
              <h4 className="spec-box-title">Automated WhatsApp Bills</h4>
            </div>
            <p className="spec-box-desc">
              Integrated WhatsApp Web automation delivers a branded digital PDF invoice straight to customer phones upon checkout.
            </p>
          </div>
        </div>

        {/* Real Product UI Showcase with State Tabs */}
        <div>
          {/* Tab Selector Bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#f8fafc',
              border: '1px solid var(--border-subtle)',
              borderBottom: 'none',
              borderRadius: '12px 12px 0 0',
              padding: '12px 20px',
              flexWrap: 'wrap',
              gap: '12px'
            }}
          >
            <div className="mobile-scroll-x" style={{ display: 'flex', gap: '8px' }}>
              <button
                onClick={() => setActiveTab('cart')}
                style={{
                  padding: '8px 16px',
                  borderRadius: '6px',
                  fontSize: '13px',
                  fontWeight: 600,
                  backgroundColor: activeTab === 'cart' ? '#ffffff' : 'transparent',
                  color: activeTab === 'cart' ? 'var(--brand-primary)' : 'var(--text-secondary)',
                  border: activeTab === 'cart' ? '1px solid var(--border-subtle)' : '1px solid transparent',
                  boxShadow: activeTab === 'cart' ? '0 1px 2px rgba(0,0,0,0.05)' : 'none',
                  transition: 'all 150ms ease'
                }}
              >
                1. Cart & Scanner Interface
              </button>
              <button
                onClick={() => setActiveTab('tender')}
                style={{
                  padding: '8px 16px',
                  borderRadius: '6px',
                  fontSize: '13px',
                  fontWeight: 600,
                  backgroundColor: activeTab === 'tender' ? '#ffffff' : 'transparent',
                  color: activeTab === 'tender' ? 'var(--brand-primary)' : 'var(--text-secondary)',
                  border: activeTab === 'tender' ? '1px solid var(--border-subtle)' : '1px solid transparent',
                  boxShadow: activeTab === 'tender' ? '0 1px 2px rgba(0,0,0,0.05)' : 'none',
                  transition: 'all 150ms ease'
                }}
              >
                2. Multi-Tender & UPI QR
              </button>
              <button
                onClick={() => setActiveTab('receipt')}
                style={{
                  padding: '8px 16px',
                  borderRadius: '6px',
                  fontSize: '13px',
                  fontWeight: 600,
                  backgroundColor: activeTab === 'receipt' ? '#ffffff' : 'transparent',
                  color: activeTab === 'receipt' ? 'var(--brand-primary)' : 'var(--text-secondary)',
                  border: activeTab === 'receipt' ? '1px solid var(--border-subtle)' : '1px solid transparent',
                  boxShadow: activeTab === 'receipt' ? '0 1px 2px rgba(0,0,0,0.05)' : 'none',
                  transition: 'all 150ms ease'
                }}
              >
                3. Thermal & WhatsApp Receipt
              </button>
            </div>

            <span className="desktop-only-caption" style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
              Source: Real ShoesPlace Desktop App
            </span>
          </div>

          {/* Screenshot Display Frame */}
          <div
            className="product-frame"
            style={{ borderRadius: '0 0 12px 12px', cursor: 'pointer' }}
            onClick={() => onOpenScreenshot(current.id)}
            title="Click to inspect 1080p full screenshot"
          >
            <img
              src={getAssetUrl(current.image)}
              alt={current.title}
              style={{ width: '100%', display: 'block' }}
            />
          </div>

          <div
            className="product-caption-row"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: '12px',
              padding: '0 8px',
              fontSize: '13px',
              color: 'var(--text-secondary)'
            }}
          >
            <span>{current.caption}</span>
            <button
              onClick={() => onOpenScreenshot(current.id)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                color: 'var(--brand-primary)',
                fontWeight: 600,
                fontSize: '12.5px'
              }}
            >
              <ZoomIn size={14} />
              <span>Inspect full screen (1080p)</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
