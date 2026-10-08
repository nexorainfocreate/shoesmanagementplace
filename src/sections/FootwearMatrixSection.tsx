import React from 'react'
import { Layers, Tag, Palette, Check, ArrowRight, ZoomIn } from 'lucide-react'
import { getAssetUrl } from '../config'

interface FootwearMatrixProps {
  onOpenScreenshot: (id: string) => void
}

export const FootwearMatrixSection: React.FC<FootwearMatrixProps> = ({ onOpenScreenshot }) => {
  const hierarchyNodes = [
    { label: 'Brand', desc: 'Nike, Adidas, Puma, Woodland, Sparkx', bg: '#f8fafc' },
    { label: 'Article / Model', desc: 'Air Max 270, Ultraboost, Smash Pro', bg: '#f1f5f9' },
    { label: 'Category', desc: 'Sneakers, Formal, Casual, Sports, Boots', bg: '#f8fafc' },
    { label: 'Gender', desc: 'MEN, WOMEN, KIDS, UNISEX', bg: '#eff6ff' },
    { label: 'Size Run', desc: 'UK 6, 7, 8, 9, 10, 11 (or US / Euro)', bg: '#f8fafc' },
    { label: 'Color Variant', desc: 'Black, Triple White, Navy Blue, Tan', bg: '#f1f5f9' },
    { label: 'Auto-SKU & Barcode', desc: 'NIK-AIR270-BLK-9-101 • 890000000042', bg: '#dbeafe' }
  ]

  return (
    <section id="matrix" className="section section-subtle">
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '840px', marginBottom: '56px' }}>
          <span className="eyebrow">
            FOOTWEAR DATA ARCHITECTURE
          </span>
          <h2 className="section-title">
            Built around how shoes are actually sold.
          </h2>
          <p className="section-lead">
            Every brand, article, category, gender, size and color stays organized in one footwear-specific product structure. Say goodbye to messy generic product descriptions and mismatched shoe sizes.
          </p>
        </div>

        {/* Visual Footwear Hierarchy Flowchart */}
        <div
          className="matrix-hierarchy-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '12px',
            marginBottom: '48px',
            backgroundColor: '#ffffff',
            padding: '24px',
            borderRadius: '16px',
            border: '1px solid var(--border-subtle)',
            boxShadow: 'var(--shadow-subtle)'
          }}
        >
          {hierarchyNodes.map((node, i) => (
            <div
              key={i}
              style={{
                backgroundColor: node.bg,
                border: '1px solid var(--border-subtle)',
                borderRadius: '8px',
                padding: '14px 12px',
                display: 'flex',
                flexDirection: 'column',
                gap: '4px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--brand-primary)', fontFamily: 'var(--font-mono)' }}>
                  0{i + 1}
                </span>
                {i < hierarchyNodes.length - 1 && (
                  <ArrowRight size={12} color="var(--text-light)" />
                )}
              </div>
              <span style={{ fontSize: '13.5px', fontWeight: 700, color: 'var(--text-primary)' }}>
                {node.label}
              </span>
              <span style={{ fontSize: '11px', color: 'var(--text-muted)', lineHeight: 1.4 }}>
                {node.desc}
              </span>
            </div>
          ))}
        </div>

        {/* Two-Column Presentation showing real Catalog & Add Product Modal */}
        <div className="grid-2" style={{ gap: '36px' }}>
          {/* Card 1: Catalog */}
          <div
            className="matrix-card card-responsive"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              border: '1px solid var(--border-subtle)',
              padding: '24px',
              boxShadow: 'var(--shadow-subtle)'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span className="badge badge-blue">Catalog View</span>
                <button
                  onClick={() => onOpenScreenshot('products-catalog')}
                  style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', color: 'var(--brand-primary)', fontWeight: 600 }}
                >
                  <ZoomIn size={14} /> Inspect (1080p)
                </button>
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '6px' }}>
                Structured Multi-Variant Catalog
              </h3>
              <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                Filter instantly by Brand, Category, Gender, and active stock count. Separate retail MRP from wholesale purchase cost.
              </p>
            </div>

            <div
              className="product-frame"
              style={{ cursor: 'pointer' }}
              onClick={() => onOpenScreenshot('products-catalog')}
            >
              <img
                src={getAssetUrl('screenshots/06_Products_Catalog.png')}
                alt="ShoesPlace Footwear Product Catalog"
                style={{ width: '100%', display: 'block' }}
              />
            </div>
          </div>

          {/* Card 2: Add Product Modal */}
          <div
            className="matrix-card card-responsive"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              border: '1px solid var(--border-subtle)',
              padding: '24px',
              boxShadow: 'var(--shadow-subtle)'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span className="badge badge-emerald">Matrix Builder</span>
                <button
                  onClick={() => onOpenScreenshot('products-add')}
                  style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', color: 'var(--brand-primary)', fontWeight: 600 }}
                >
                  <ZoomIn size={14} /> Inspect (1080p)
                </button>
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '6px' }}>
                Automated Variant Matrix Creation
              </h3>
              <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                Select a size run (e.g. 6 to 10) and multiple colors: ShoesPlace automatically generates all variant SKUs and barcodes in one click.
              </p>
            </div>

            <div
              className="product-frame"
              style={{ cursor: 'pointer' }}
              onClick={() => onOpenScreenshot('products-add')}
            >
              <img
                src={getAssetUrl('screenshots/07_Products_Add_Modal.png')}
                alt="ShoesPlace Add Product Variant Matrix Modal"
                style={{ width: '100%', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
