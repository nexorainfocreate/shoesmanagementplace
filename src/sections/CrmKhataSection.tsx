import React from 'react'
import { Users, Footprints, CreditCard, History, Check, ZoomIn } from 'lucide-react'
import { getAssetUrl } from '../config'

interface CrmKhataProps {
  onOpenScreenshot: (id: string) => void
}

export const CrmKhataSection: React.FC<CrmKhataProps> = ({ onOpenScreenshot }) => {
  return (
    <section id="crm" className="section section-subtle">
      <div className="container">
        <div className="feature-split">
          {/* Left Content */}
          <div className="feature-content">
            <span className="eyebrow">
              CUSTOMER RETENTION & STORE CREDIT
            </span>
            <h2 className="feature-headline">
              Remember every customer. Not just every sale.
            </h2>
            <p className="feature-description">
              Turn one-time buyers into returning loyalists. ShoesPlace automatically pairs mobile numbers with historical shoe sizes, lifetime spending totals, and flexible neighborhood store credit (Khata / Udhar).
            </p>

            <div className="feature-list">
              <div className="feature-list-item">
                <div className="feature-list-icon"><Footprints size={14} /></div>
                <div className="feature-list-text">
                  <strong>Shoe-Size Memory:</strong> When Mrs. Sharma walks into the showroom, typing her phone number immediately tells your staff her UK size and her family members’ sizes.
                </div>
              </div>
              <div className="feature-list-item">
                <div className="feature-list-icon"><CreditCard size={14} /></div>
                <div className="feature-list-text">
                  <strong>Customer Khata (Store Credit / Udhar):</strong> Manage trusted regular customer balances cleanly. Record partial payments with receipt settlement notes and zero confusion.
                </div>
              </div>
              <div className="feature-list-item">
                <div className="feature-list-icon"><History size={14} /></div>
                <div className="feature-list-text">
                  <strong>Lifetime Spend & Visit Frequency:</strong> Identify high-value VIP buyers and frequent shoppers to reward them with targeted store discounts.
                </div>
              </div>
              <div className="feature-list-item">
                <div className="feature-list-icon"><Check size={14} /></div>
                <div className="feature-list-text">
                  <strong>Slide-Out Transaction History:</strong> View every pair of shoes the customer has ever purchased, returned, or exchanged in a chronological timeline.
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="feature-visual">
            <div
              className="product-frame"
              style={{ cursor: 'pointer' }}
              onClick={() => onOpenScreenshot('customers-directory')}
              title="Click to view full 1080p screenshot"
            >
              <div className="product-frame-header">
                <div className="product-frame-dots">
                  <div className="product-frame-dot" />
                  <div className="product-frame-dot" />
                  <div className="product-frame-dot" />
                </div>
                <span className="product-frame-title">
                  Customer Directory, Purchase History & Khata Balances
                </span>
                <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>1080p</span>
              </div>
              <img
                src={getAssetUrl('screenshots/15_Customers_Directory.png')}
                alt="ShoesPlace Customer Directory and CRM Screen"
                style={{ width: '100%', display: 'block' }}
              />
            </div>
            <div style={{ textAlign: 'center', marginTop: '10px' }}>
              <span style={{ fontSize: '12.5px', color: 'var(--text-muted)' }}>
                Real Customer Directory with Contact Numbers, Total Spend, and Credit Balances
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
