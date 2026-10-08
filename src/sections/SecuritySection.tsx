import React, { useState } from 'react'
import { Shield, Lock, UserCheck, ShieldAlert, Check, ZoomIn } from 'lucide-react'
import { getAssetUrl } from '../config'

interface SecuritySectionProps {
  onOpenScreenshot: (id: string) => void
}

export const SecuritySection: React.FC<SecuritySectionProps> = ({ onOpenScreenshot }) => {
  const [activeTab, setActiveTab] = useState<'audit' | 'roles'>('audit')

  return (
    <section id="security" className="section">
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '820px', marginBottom: '48px' }}>
          <span className="eyebrow">
            ACCESS CONTROL & AUDIT INTEGRITY
          </span>
          <h2 className="section-title">
            The right people see the right information.
          </h2>
          <p className="section-lead">
            Empower counter staff to bill customers and manage stock while completely protecting your sensitive wholesale profit margins, supplier debt, and business settings.
          </p>
        </div>

        {/* Role Comparison Table (Clean Editorial Box) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            marginBottom: '48px'
          }}
        >
          {/* Admin Role */}
          <div
            style={{
              backgroundColor: '#ffffff',
              border: '2px solid var(--border-subtle)',
              borderRadius: '16px',
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span className="badge badge-emerald">ADMINISTRATOR</span>
              <Shield size={18} color="#059669" />
            </div>
            <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-primary)' }}>
              Store Owner & Senior Manager
            </h3>
            <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
              Unrestricted operational and financial oversight over the retail business.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--text-primary)' }}>
                <Check size={14} color="#059669" /> Full access to wholesale purchase costs & margins
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--text-primary)' }}>
                <Check size={14} color="#059669" /> Profit & Loss reports and inventory valuation
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--text-primary)' }}>
                <Check size={14} color="#059669" /> Supplier accounts payable & purchase order creation
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--text-primary)' }}>
                <Check size={14} color="#059669" /> Staff user management, database backup & system settings
              </div>
            </div>
          </div>

          {/* Cashier Role */}
          <div
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid var(--border-subtle)',
              borderRadius: '16px',
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span className="badge badge-blue">SALES PERSON</span>
              <UserCheck size={18} color="var(--brand-primary)" />
            </div>
            <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-primary)' }}>
              Counter Cashier & Floor Staff
            </h3>
            <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
              Focused billing tools with strict wholesale price masking.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--text-primary)' }}>
                <Check size={14} color="var(--brand-primary)" /> Rapid POS billing, barcode scanning & receipt printing
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--text-primary)' }}>
                <Check size={14} color="var(--brand-primary)" /> Customer size lookups and size exchanges
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--text-muted)' }}>
                <Lock size={13} color="var(--text-muted)" /> <em>Wholesale cost prices and profit margins hidden</em>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--text-muted)' }}>
                <Lock size={13} color="var(--text-muted)" /> <em>Financial P&L reports and settings inaccessible</em>
              </div>
            </div>
          </div>
        </div>

        {/* Screenshot Showcase (Audit Logs vs Users) */}
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
                onClick={() => setActiveTab('audit')}
                className={`btn btn-sm ${activeTab === 'audit' ? 'btn-primary' : 'btn-secondary'}`}
              >
                1. Tamper-Evident Security Audit Logs
              </button>
              <button
                onClick={() => setActiveTab('roles')}
                className={`btn btn-sm ${activeTab === 'roles' ? 'btn-primary' : 'btn-secondary'}`}
              >
                2. User Account & Role Configuration
              </button>
            </div>

            <button
              onClick={() => onOpenScreenshot(activeTab === 'audit' ? 'audit-logs' : 'users-roles')}
              style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '13px', color: 'var(--brand-primary)', fontWeight: 600 }}
            >
              <ZoomIn size={14} />
              <span>Inspect (1080p)</span>
            </button>
          </div>

          <div
            className="product-frame"
            style={{ cursor: 'pointer' }}
            onClick={() => onOpenScreenshot(activeTab === 'audit' ? 'audit-logs' : 'users-roles')}
            title="Click to view full 1080p screenshot"
          >
            <div className="product-frame-header">
              <div className="product-frame-dots">
                <div className="product-frame-dot" />
                <div className="product-frame-dot" />
                <div className="product-frame-dot" />
              </div>
              <span className="product-frame-title">
                {activeTab === 'audit' ? 'Immutable Security Audit Trail' : 'User Accounts & Roles Management'}
              </span>
              <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>1080p Native</span>
            </div>
            <img
              src={getAssetUrl(
                activeTab === 'audit'
                  ? 'screenshots/22_Security_Audit_Logs.png'
                  : 'screenshots/23_Users_Role_Management.png'
              )}
              alt="ShoesPlace Security and User Management Screen"
              style={{ width: '100%', display: 'block' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
