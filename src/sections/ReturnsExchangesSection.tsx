import React from 'react'
import { RefreshCw, Calculator, ArrowRightLeft, Receipt, Check, ZoomIn } from 'lucide-react'
import { getAssetUrl } from '../config'

interface ReturnsExchangesProps {
  onOpenScreenshot: (id: string) => void
}

export const ReturnsExchangesSection: React.FC<ReturnsExchangesProps> = ({ onOpenScreenshot }) => {
  return (
    <section className="section">
      <div className="container">
        <div className="feature-split reverse">
          {/* Left Visual */}
          <div className="feature-visual">
            <div
              className="product-frame"
              style={{ cursor: 'pointer' }}
              onClick={() => onOpenScreenshot('sale-detail')}
              title="Click to view full 1080p screenshot"
            >
              <div className="product-frame-header">
                <div className="product-frame-dots">
                  <div className="product-frame-dot" />
                  <div className="product-frame-dot" />
                  <div className="product-frame-dot" />
                </div>
                <span className="product-frame-title">
                  Invoice Detail Drawer — Real-Time Returns & Size Exchange Actions
                </span>
                <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>1080p</span>
              </div>
              <img
                src={getAssetUrl('screenshots/13_Sale_Detail_Drawer.png')}
                alt="ShoesPlace Invoice Drawer and Size Exchange Screen"
                style={{ width: '100%', display: 'block' }}
              />
            </div>
            <div style={{ textAlign: 'center', marginTop: '10px' }}>
              <span style={{ fontSize: '12.5px', color: 'var(--text-muted)' }}>
                Real ShoesPlace Sale Details Drawer with Return and Exchange triggers
              </span>
            </div>
          </div>

          {/* Right Content */}
          <div className="feature-content">
            <span className="eyebrow">
              FRICTION-FREE COUNTER SERVICE
            </span>
            <h2 className="feature-headline">
              Exchanges shouldn't require a calculator.
            </h2>
            <p className="feature-description">
              Footwear retail experiences high return and size-swap rates. ShoesPlace replaces manual math and paper scratchpads with a dedicated exchange engine that handles price variances, tax recalculations, and bill reissuances automatically.
            </p>

            <div className="feature-list">
              <div className="feature-list-item">
                <div className="feature-list-icon"><ArrowRightLeft size={14} /></div>
                <div className="feature-list-text">
                  <strong>Instant Size & Color Swapping:</strong> Swap a UK 8 for a UK 9 in two clicks. The returned pair is immediately restored to sellable inventory.
                </div>
              </div>
              <div className="feature-list-item">
                <div className="feature-list-icon"><Calculator size={14} /></div>
                <div className="feature-list-text">
                  <strong>Automated Price Difference Calculation:</strong> When exchanging for a higher or lower-priced model, ShoesPlace calculates the exact balance due or refund owed.
                </div>
              </div>
              <div className="feature-list-item">
                <div className="feature-list-icon"><Receipt size={14} /></div>
                <div className="feature-list-text">
                  <strong>Instant Bill Reissuance:</strong> Prints an amended thermal exchange receipt and automatically sends the updated digital invoice over WhatsApp.
                </div>
              </div>
              <div className="feature-list-item">
                <div className="feature-list-icon"><RefreshCw size={14} /></div>
                <div className="feature-list-text">
                  <strong>Flexible Refund Allocation:</strong> Refund via Cash, UPI transfer, or credit to the customer’s store account (Khata).
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
