import React from 'react'
import { HardDrive, Database, ShieldCheck, RefreshCw, KeyRound, ArrowRight, ZoomIn } from 'lucide-react'
import { getAssetUrl } from '../config'

interface OfflineFirstProps {
  onOpenScreenshot: (id: string) => void
}

export const OfflineFirstSection: React.FC<OfflineFirstProps> = ({ onOpenScreenshot }) => {
  const offlineFlow = [
    { label: 'FOOTWEAR STORE', desc: 'Counter staff & barcode scanner', icon: HardDrive },
    { label: 'LOCAL SQLITE ENGINE', desc: 'Zero-latency embedded database', icon: Database },
    { label: 'POS & BILLING', desc: 'Instant checkouts with no network lag', icon: ShieldCheck },
    { label: 'INVENTORY UPDATE', desc: 'Local shelf counts deduct in real time', icon: RefreshCw },
    { label: 'AUTOMATIC BACKUP', desc: 'Scheduled daily snapshots to local disk', icon: KeyRound }
  ]

  return (
    <section id="offline" className="section section-subtle">
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '820px', marginBottom: '40px' }}>
          <span className="eyebrow">
            UNCOMPROMISING RELIABILITY
          </span>
          <h2 className="section-title">
            Your store shouldn't stop when the internet does.
          </h2>
          <p className="section-lead">
            ShoesPlace is designed offline-first, so your core store operations continue even when connectivity doesn't. Cloud POS apps freeze during internet drops. ShoesPlace keeps scanning, billing, and printing.
          </p>
        </div>

        {/* Clean Architectural Offline Concept Diagram */}
        <div
          className="responsive-flow-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
            gap: '12px',
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            border: '1px solid var(--border-subtle)',
            padding: '24px',
            marginBottom: '48px',
            boxShadow: 'var(--shadow-subtle)'
          }}
        >
          {offlineFlow.map((step, idx) => {
            const Icon = step.icon
            return (
              <div
                key={idx}
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
                  <Icon size={16} color="var(--brand-primary)" />
                  {idx < offlineFlow.length - 1 && <ArrowRight size={13} color="var(--text-light)" />}
                </div>
                <h4 style={{ fontSize: '12.5px', fontWeight: 800, color: 'var(--text-primary)', marginTop: '4px' }}>
                  {step.label}
                </h4>
                <p style={{ fontSize: '11.5px', color: 'var(--text-secondary)', lineHeight: 1.4, margin: 0 }}>
                  {step.desc}
                </p>
              </div>
            )
          })}
        </div>

        {/* Feature Split with Settings Screenshot */}
        <div className="feature-split reverse">
          <div className="feature-visual">
            <div
              className="product-frame"
              style={{ cursor: 'pointer' }}
              onClick={() => onOpenScreenshot('settings-store')}
              title="Click to view full 1080p screenshot"
            >
              <div className="product-frame-header">
                <div className="product-frame-dots">
                  <div className="product-frame-dot" />
                  <div className="product-frame-dot" />
                  <div className="product-frame-dot" />
                </div>
                <span className="product-frame-title">
                  Store Setup, Thermal Printer Port & Local Backup Management
                </span>
                <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>1080p</span>
              </div>
              <img
                src={getAssetUrl('screenshots/24_Settings_Store_Configuration.png')}
                alt="ShoesPlace Store Settings & Local Backup Screen"
                style={{ width: '100%', display: 'block' }}
              />
            </div>
            <div style={{ textAlign: 'center', marginTop: '10px' }}>
              <span style={{ fontSize: '12.5px', color: 'var(--text-muted)' }}>
                Real Store Settings Screen — Local backup schedule & thermal printer configuration
              </span>
            </div>
          </div>

          <div className="feature-content">
            <h3 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.25 }}>
              Embedded SQLite speed. Zero cloud lag. Zero monthly hosting anxiety.
            </h3>
            <p className="feature-description">
              Your customer transaction data stays securely on your showroom computer. No slow page reloads during weekend rush hours, no vulnerability to cloud server crashes, and complete hardware security.
            </p>

            <div className="feature-list">
              <div className="feature-list-item">
                <div className="feature-list-icon"><ShieldCheck size={14} /></div>
                <div className="feature-list-text">
                  <strong>100% Offline-First Architecture:</strong> Better-sqlite3 engine writes to disk in sub-milliseconds, giving cashiers instantaneous response times.
                </div>
              </div>
              <div className="feature-list-item">
                <div className="feature-list-icon"><ShieldCheck size={14} /></div>
                <div className="feature-list-text">
                  <strong>Automated Local Database Backups:</strong> Creates automatic snapshots of your database on your chosen local hard drive or external USB storage.
                </div>
              </div>
              <div className="feature-list-item">
                <div className="feature-list-icon"><ShieldCheck size={14} /></div>
                <div className="feature-list-text">
                  <strong>One-Click System Restore:</strong> If your physical terminal needs replacing, install ShoesPlace and restore your latest backup file in 30 seconds.
                </div>
              </div>
              <div className="feature-list-item">
                <div className="feature-list-icon"><ShieldCheck size={14} /></div>
                <div className="feature-list-text">
                  <strong>Hardware-Locked Cryptographic Licensing:</strong> Offline Ed25519 license validation ensures smooth long-term operation without persistent internet handshakes.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
