import React from 'react'
import { Instagram, ShieldCheck, Heart } from 'lucide-react'
import { SITE_CONFIG, getAssetUrl } from '../config'

export const Footer: React.FC = () => {
  return (
    <footer
      style={{
        backgroundColor: '#0f172a',
        color: '#94a3b8',
        paddingTop: '80px',
        paddingBottom: '48px',
        borderTop: '1px solid #1e293b'
      }}
    >
      <div className="container">
        {/* Main Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr 1fr 1fr 1fr 1.2fr',
            gap: '48px',
            marginBottom: '64px'
          }}
          className="footer-grid"
        >
          {/* Column 1: Brand & Proposition */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <img
                src={getAssetUrl('logo.jpg')}
                alt="ShoesPlace Logo"
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '6px',
                  objectFit: 'cover',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.2)'
                }}
              />
              <span style={{ fontSize: '18px', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em' }}>
                ShoesPlace
              </span>
            </div>
            <p style={{ fontSize: '13.5px', color: '#94a3b8', lineHeight: 1.6, maxWidth: '320px' }}>
              The complete operating system built specifically for footwear stores. From the first barcode scan to your end-of-day profit.
            </p>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '12px',
                color: '#10b981',
                marginTop: '8px'
              }}
            >
              <ShieldCheck size={16} />
              <span>100% Offline-First Architecture</span>
            </div>
          </div>

          {/* Column 2: Product */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <h4 style={{ fontSize: '12.5px', fontWeight: 700, letterSpacing: '0.08em', color: '#ffffff', textTransform: 'uppercase' }}>
              Product
            </h4>
            <a href="#product" style={{ fontSize: '13.5px', color: '#94a3b8' }}>Point of Sale (POS)</a>
            <a href="#matrix" style={{ fontSize: '13.5px', color: '#94a3b8' }}>Footwear Matrix</a>
            <a href="#inventory" style={{ fontSize: '13.5px', color: '#94a3b8' }}>Real-Time Inventory</a>
            <a href="#crm" style={{ fontSize: '13.5px', color: '#94a3b8' }}>Size Memory CRM</a>
            <a href="#procurement" style={{ fontSize: '13.5px', color: '#94a3b8' }}>Procurement & POs</a>
            <a href="#expenses" style={{ fontSize: '13.5px', color: '#94a3b8' }}>Expense Tracking</a>
          </div>

          {/* Column 3: Intelligence */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <h4 style={{ fontSize: '12.5px', fontWeight: 700, letterSpacing: '0.08em', color: '#ffffff', textTransform: 'uppercase' }}>
              Intelligence
            </h4>
            <a href="#ai-insights" style={{ fontSize: '13.5px', color: '#94a3b8' }}>Festive Forecast</a>
            <a href="#ai-insights" style={{ fontSize: '13.5px', color: '#94a3b8' }}>Velocity Restocking</a>
            <a href="#ai-insights" style={{ fontSize: '13.5px', color: '#94a3b8' }}>Dead Stock Prevention</a>
            <a href="#bi-reports" style={{ fontSize: '13.5px', color: '#94a3b8' }}>Command Center</a>
            <a href="#bi-reports" style={{ fontSize: '13.5px', color: '#94a3b8' }}>P&L Reports</a>
            <a href="#bi-reports" style={{ fontSize: '13.5px', color: '#94a3b8' }}>Inventory Valuation</a>
          </div>

          {/* Column 4: Hardware & Reliability */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <h4 style={{ fontSize: '12.5px', fontWeight: 700, letterSpacing: '0.08em', color: '#ffffff', textTransform: 'uppercase' }}>
              Ecosystem
            </h4>
            <a href="#hardware" style={{ fontSize: '13.5px', color: '#94a3b8' }}>Thermal Bill Printing</a>
            <a href="#hardware" style={{ fontSize: '13.5px', color: '#94a3b8' }}>Dynamic UPI QR</a>
            <a href="#hardware" style={{ fontSize: '13.5px', color: '#94a3b8' }}>WhatsApp Invoicing</a>
            <a href="#hardware" style={{ fontSize: '13.5px', color: '#94a3b8' }}>Barcode Scanners</a>
            <a href="#security" style={{ fontSize: '13.5px', color: '#94a3b8' }}>RBAC & Audit Trail</a>
            <a href="#offline" style={{ fontSize: '13.5px', color: '#94a3b8' }}>SQLite Offline Engine</a>
          </div>

          {/* Column 5: Direct Contact */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <h4 style={{ fontSize: '12.5px', fontWeight: 700, letterSpacing: '0.08em', color: '#ffffff', textTransform: 'uppercase' }}>
              Connect & Demo
            </h4>
            <a
              href={SITE_CONFIG.links.instagramDirect}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '13.5px',
                color: '#f43f5e',
                backgroundColor: 'rgba(244, 63, 94, 0.1)',
                padding: '10px 14px',
                borderRadius: '6px',
                border: '1px solid rgba(244, 63, 94, 0.2)'
              }}
            >
              <Instagram size={16} />
              <span>DM @vernixdigital</span>
            </a>
            <p style={{ fontSize: '12px', color: '#94a3b8', marginTop: '6px', lineHeight: 1.6 }}>
              Reach out directly on Instagram for retail store walkthroughs, questions, and onboarding assistance.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="footer-bottom-row"
          style={{
            paddingTop: '32px',
            borderTop: '1px solid #1e293b',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            fontSize: '12.5px',
            color: '#64748b'
          }}
        >
          <div>
            © {new Date().getFullYear()} ShoesPlace Management POS & Retail Suite. All rights reserved.
          </div>
          <div className="footer-bottom-links" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <span>Built specifically for modern footwear retailers</span>
            <span className="bullet-separator">•</span>
            <a href="#faq" style={{ color: '#64748b' }}>Technical FAQ</a>
            <span className="bullet-separator">•</span>
            <a href="#gallery" style={{ color: '#64748b' }}>App Gallery (24 Screens)</a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 36px !important;
          }
        }
        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  )
}
