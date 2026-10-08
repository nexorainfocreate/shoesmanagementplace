import React, { useState } from 'react'
import { ReceiptText, DollarSign, PieChart, TrendingDown, Check, ZoomIn } from 'lucide-react'
import { getAssetUrl } from '../config'

interface ExpenseSectionProps {
  onOpenScreenshot: (id: string) => void
}

export const ExpenseSection: React.FC<ExpenseSectionProps> = ({ onOpenScreenshot }) => {
  const [activeView, setActiveView] = useState<'tracker' | 'add'>('tracker')

  return (
    <section id="expenses" className="section section-subtle">
      <div className="container">
        <div className="feature-split">
          {/* Left Content */}
          <div className="feature-content">
            <span className="eyebrow">
              STORE OVERHEADS & NET PROFIT
            </span>
            <h2 className="feature-headline">
              Know your real profit — not just your sales.
            </h2>
            <p className="feature-description">
              A high daily sales figure doesn't mean your shop is profitable if rent, salaries, and electricity aren't factored in. ShoesPlace tracks operational outflows alongside counter margins so you know your actual bottom line every day.
            </p>

            {/* Core Profit Formula Callout */}
            <div
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid var(--border-subtle)',
                borderRadius: '12px',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                boxShadow: 'var(--shadow-subtle)'
              }}
            >
              <span style={{ fontSize: '11px', fontWeight: 800, color: 'var(--brand-primary)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                The True Retail Profit Equation
              </span>
              <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>
                Gross Retail Margin − Store Overheads = Real Profitability
              </div>
              <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                Track rent, wages, electricity, packaging, tea/refreshments, and marketing in one unified ledger.
              </span>
            </div>

            <div className="feature-list">
              <div className="feature-list-item">
                <div className="feature-list-icon"><Check size={14} /></div>
                <div className="feature-list-text">
                  <strong>Categorized Expense Buckets:</strong> Organize rent, staff salaries, electricity bills, packaging boxes, and daily tea into clear expense categories.
                </div>
              </div>
              <div className="feature-list-item">
                <div className="feature-list-icon"><Check size={14} /></div>
                <div className="feature-list-text">
                  <strong>Cash Till vs Online Outflows:</strong> Track whether a payment was disbursed from the physical cash drawer or the store bank account to ensure till balances stay accurate.
                </div>
              </div>
              <div className="feature-list-item">
                <div className="feature-list-icon"><Check size={14} /></div>
                <div className="feature-list-text">
                  <strong>Automatic P&L Integration:</strong> Outflows flow directly into your month-end Profit & Loss statement with zero spreadsheet exporting needed.
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual Frame */}
          <div className="feature-visual">
            <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
              <button
                onClick={() => setActiveView('tracker')}
                className={`btn btn-sm ${activeView === 'tracker' ? 'btn-primary' : 'btn-secondary'}`}
              >
                1. Operational Expenses Ledger
              </button>
              <button
                onClick={() => setActiveView('add')}
                className={`btn btn-sm ${activeView === 'add' ? 'btn-primary' : 'btn-secondary'}`}
              >
                2. Record Expense Modal
              </button>
            </div>

            <div
              className="product-frame"
              style={{ cursor: 'pointer' }}
              onClick={() => onOpenScreenshot(activeView === 'tracker' ? 'expenses-tracker' : 'expenses-add')}
              title="Click to view full 1080p screenshot"
            >
              <div className="product-frame-header">
                <div className="product-frame-dots">
                  <div className="product-frame-dot" />
                  <div className="product-frame-dot" />
                  <div className="product-frame-dot" />
                </div>
                <span className="product-frame-title">
                  {activeView === 'tracker' ? 'ShoesPlace Store Expenses Ledger' : 'Record New Expense Modal'}
                </span>
                <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>1080p</span>
              </div>
              <img
                src={getAssetUrl(
                  activeView === 'tracker'
                    ? 'screenshots/19_Expenses_Tracker.png'
                    : 'screenshots/20_Expenses_Add_Modal.png'
                )}
                alt="ShoesPlace Store Expense Management Screen"
                style={{ width: '100%', display: 'block' }}
              />
            </div>
            <div style={{ textAlign: 'center', marginTop: '10px' }}>
              <span style={{ fontSize: '12.5px', color: 'var(--text-muted)' }}>
                Real Store Overhead Expense Screen — Click to inspect in 1080p
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
