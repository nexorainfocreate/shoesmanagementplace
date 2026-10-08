import React from 'react'
import { Sparkles, Calendar, TrendingUp, AlertOctagon, Check, ArrowUpRight, ZoomIn } from 'lucide-react'
import { getAssetUrl } from '../config'

interface AiIntelligenceProps {
  onOpenScreenshot: (id: string) => void
}

export const AiIntelligenceSection: React.FC<AiIntelligenceProps> = ({ onOpenScreenshot }) => {
  return (
    <section id="ai-insights" className="section" style={{ backgroundColor: '#fafafa' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '840px', marginBottom: '56px' }}>
          <span className="eyebrow eyebrow-badge">
            <Sparkles size={13} />
            SMARTER INVENTORY & DEMAND FORECASTING
          </span>
          <h2 className="section-title">
            Know what to stock before you run out.
          </h2>
          <p className="section-lead">
            ShoesPlace analyzes sales velocity, seasonal shopping patterns, and size-specific turnover rates to help footwear store owners place smarter distributor orders before festive rushes begin.
          </p>
        </div>

        {/* 3 Core Analytical Pillars */}
        <div className="grid-3" style={{ marginBottom: '48px' }}>
          <div className="spec-box" style={{ backgroundColor: '#ffffff' }}>
            <div className="spec-box-header">
              <div className="spec-box-icon" style={{ backgroundColor: '#eff6ff', color: 'var(--brand-primary)' }}>
                <Calendar size={18} />
              </div>
              <h3 className="spec-box-title">Festive Forecast Engine</h3>
            </div>
            <p className="spec-box-desc">
              Projects customer demand surges around key retail shopping seasons: <strong>Diwali, Eid, Christmas, Back-to-School, and Wedding Season</strong>. Tells you when to ramp up inventory 4 weeks in advance.
            </p>
          </div>

          <div className="spec-box" style={{ backgroundColor: '#ffffff' }}>
            <div className="spec-box-header">
              <div className="spec-box-icon" style={{ backgroundColor: '#ecfdf5', color: '#047857' }}>
                <TrendingUp size={18} />
              </div>
              <h3 className="spec-box-title">High-Velocity Size Restocking</h3>
            </div>
            <p className="spec-box-desc">
              In footwear, selling out of UK sizes 7, 8, or 9 halts sales even if smaller and larger sizes remain on shelf. Identifies fast-depleting sweet spots before costly stockouts occur.
            </p>
          </div>

          <div className="spec-box" style={{ backgroundColor: '#ffffff' }}>
            <div className="spec-box-header">
              <div className="spec-box-icon" style={{ backgroundColor: '#fffbeb', color: '#b45309' }}>
                <AlertOctagon size={18} />
              </div>
              <h3 className="spec-box-title">Aging & Dead Stock Alerts</h3>
            </div>
            <p className="spec-box-desc">
              Flags shoe models that have sat unsold for over 45 to 90 days. Retailers can immediately trigger targeted counter discounts or bundle promotions before working capital gets permanently trapped.
            </p>
          </div>
        </div>

        {/* Real Screenshot Showcase */}
        <div
          className="product-frame"
          style={{ cursor: 'pointer' }}
          onClick={() => onOpenScreenshot('ai-suggestions')}
          title="Click to view full 1080p screenshot"
        >
          <div className="product-frame-header">
            <div className="product-frame-dots">
              <div className="product-frame-dot" />
              <div className="product-frame-dot" />
              <div className="product-frame-dot" />
            </div>
            <span className="product-frame-title">
              ShoesPlace Suggestions & Festive Demand Forecasting Screen
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '11px', color: 'var(--text-muted)' }}>
              <ZoomIn size={12} />
              <span>Click to inspect (1080p)</span>
            </div>
          </div>
          <img
            src={getAssetUrl('screenshots/11_AI_Restocking_Suggestions.png')}
            alt="ShoesPlace AI Suggestions and Festive Demand Forecasting"
            style={{ width: '100%', display: 'block' }}
          />
        </div>

        <div style={{ textAlign: 'center', marginTop: '14px' }}>
          <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
            Real algorithm output showing seasonal festival volume trends, projected demand, and automated restocking suggestions
          </span>
        </div>
      </div>
    </section>
  )
}
