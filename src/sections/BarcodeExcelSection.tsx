import React from 'react'
import { FileSpreadsheet, Barcode, Printer, ShieldAlert, Check, ZoomIn } from 'lucide-react'
import { getAssetUrl } from '../config'

interface BarcodeExcelProps {
  onOpenScreenshot: (id: string) => void
}

export const BarcodeExcelSection: React.FC<BarcodeExcelProps> = ({ onOpenScreenshot }) => {
  return (
    <section className="section">
      <div className="container">
        <div className="feature-split">
          {/* Left Text Content */}
          <div className="feature-content">
            <span className="eyebrow">
              ONBOARDING & PRODUCT LABELS
            </span>
            <h2 className="feature-headline">
              From supplier spreadsheet to sellable inventory in minutes.
            </h2>
            <p className="feature-description">
              Already have thousands of shoe styles in manufacturer Excel sheets? Upload your file, map sizes and colors, and ShoesPlace generates unique barcodes, structured SKUs, and shelf tags automatically.
            </p>

            {/* Prominent Excel Feature Box */}
            <div
              style={{
                backgroundColor: 'var(--bg-accent-subtle)',
                border: '1px solid var(--brand-subtle)',
                borderRadius: 'var(--radius-lg)',
                padding: '20px',
                display: 'flex',
                gap: '16px',
                alignItems: 'flex-start',
                marginTop: '8px'
              }}
            >
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  backgroundColor: '#ffffff',
                  border: '1px solid var(--brand-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--brand-primary)',
                  flexShrink: 0
                }}
              >
                <FileSpreadsheet size={20} />
              </div>
              <div>
                <h4 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>
                  Bulk Excel (.xlsx) Import Engine
                </h4>
                <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  Supports distributor spreadsheets directly. Ingest wholesale cost, selling MRP, category, brand, and size variations without tedious manual data entry.
                </p>
              </div>
            </div>

            <div className="feature-list">
              <div className="feature-list-item">
                <div className="feature-list-icon"><Check size={14} /></div>
                <div className="feature-list-text">
                  <strong>Automated 12-Digit Barcodes:</strong> Generates standardized, clash-free barcodes compatible with any standard USB/Bluetooth scanner.
                </div>
              </div>
              <div className="feature-list-item">
                <div className="feature-list-icon"><Check size={14} /></div>
                <div className="feature-list-text">
                  <strong>Shoe Box Thermal Tag Formatting:</strong> Print crisp adhesive tags with brand, article name, color swatch, size number, and MRP.
                </div>
              </div>
              <div className="feature-list-item">
                <div className="feature-list-icon"><Check size={14} /></div>
                <div className="feature-list-text">
                  <strong>Wholesale Cost Masking:</strong> Factory purchase rates are strictly locked behind Admin privileges, ensuring counter staff only view retail MRP.
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual Frame */}
          <div className="feature-visual">
            <div
              className="product-frame"
              style={{ cursor: 'pointer' }}
              onClick={() => onOpenScreenshot('barcode-tag')}
              title="Click to inspect 1080p screenshot"
            >
              <div className="product-frame-header">
                <div className="product-frame-dots">
                  <div className="product-frame-dot" />
                  <div className="product-frame-dot" />
                  <div className="product-frame-dot" />
                </div>
                <span className="product-frame-title">
                  Thermal Barcode Tag Generator & Print Preview
                </span>
                <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                  1080p
                </span>
              </div>
              <img
                src={getAssetUrl('screenshots/08_Products_Barcode_Tag_Modal.png')}
                alt="ShoesPlace Barcode Tag Generation Modal"
                style={{ width: '100%', display: 'block' }}
              />
            </div>
            <div style={{ textAlign: 'center', marginTop: '10px' }}>
              <span style={{ fontSize: '12.5px', color: 'var(--text-muted)' }}>
                Real ShoesPlace Thermal Box Tag Generator & Preview Dialog
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
