import React, { useState } from 'react'
import { SCREENSHOTS, GALLERY_CATEGORIES, ScreenshotItem } from '../data/screenshots'
import { getAssetUrl } from '../config'
import { ZoomIn, Eye, Sparkles } from 'lucide-react'

interface GallerySectionProps {
  onOpenScreenshot: (id: string) => void
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenScreenshot }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all')

  const filteredScreenshots =
    activeCategory === 'all'
      ? SCREENSHOTS
      : SCREENSHOTS.filter((s) => s.category === activeCategory)

  return (
    <section id="gallery" className="section">
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '820px', marginBottom: '40px' }}>
          <span className="eyebrow eyebrow-badge">
            <Sparkles size={13} />
            AUTHENTIC PRODUCT SHOWCASE
          </span>
          <h2 className="section-title">
            Explore all 24 screens of ShoesPlace.
          </h2>
          <p className="section-lead">
            No mockups. No conceptual illustrations. These are authentic 1080p screenshots captured directly from the live ShoesPlace desktop application. Click any screen to inspect every feature in full detail.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div
          className="mobile-scroll-x"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            overflowX: 'auto',
            paddingBottom: '16px',
            marginBottom: '36px',
            borderBottom: '1px solid var(--border-subtle)'
          }}
        >
          {GALLERY_CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              style={{
                padding: '8px 16px',
                borderRadius: '6px',
                fontSize: '13px',
                fontWeight: 600,
                whiteSpace: 'nowrap',
                backgroundColor: activeCategory === cat.key ? 'var(--text-primary)' : 'var(--bg-subtle)',
                color: activeCategory === cat.key ? '#ffffff' : 'var(--text-secondary)',
                border: '1px solid',
                borderColor: activeCategory === cat.key ? 'var(--text-primary)' : 'var(--border-subtle)',
                transition: 'all 150ms ease'
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Responsive Grid of Screenshots */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))',
            gap: '20px'
          }}
        >
          {filteredScreenshots.map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenScreenshot(item.id)}
              style={{
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-subtle)',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 200ms ease'
              }}
              className="gallery-card"
            >
              {/* Header Badge */}
              <div
                style={{
                  padding: '10px 14px',
                  backgroundColor: '#f8fafc',
                  borderBottom: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '10.5px',
                      fontWeight: 800,
                      color: 'var(--brand-primary)',
                      backgroundColor: 'var(--bg-accent-subtle)',
                      padding: '2px 6px',
                      borderRadius: '3px'
                    }}
                  >
                    #{item.number}
                  </span>
                  <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-primary)' }}>
                    {item.title}
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '11px', color: 'var(--brand-primary)', fontWeight: 600 }}>
                  <ZoomIn size={12} />
                  <span>Zoom</span>
                </div>
              </div>

              {/* Image Thumbnail */}
              <div style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#0f172a' }}>
                <img
                  src={getAssetUrl(item.filename)}
                  alt={item.title}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '210px',
                    objectFit: 'cover',
                    objectPosition: 'top',
                    display: 'block',
                    transition: 'transform 300ms ease'
                  }}
                  className="gallery-thumb"
                />
              </div>

              {/* Caption & Highlights */}
              <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
                <p style={{ fontSize: '12.5px', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  {item.caption}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: 'auto' }}>
                  {item.highlights.slice(0, 3).map((h, i) => (
                    <span
                      key={i}
                      style={{
                        fontSize: '10.5px',
                        fontWeight: 600,
                        backgroundColor: 'var(--bg-subtle)',
                        color: 'var(--text-muted)',
                        padding: '2px 6px',
                        borderRadius: '4px',
                        border: '1px solid var(--border-subtle)'
                      }}
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .gallery-card:hover {
          border-color: var(--border-hover) !important;
          box-shadow: var(--shadow-card) !important;
          transform: translateY(-2px);
        }
        .gallery-card:hover .gallery-thumb {
          transform: scale(1.02);
        }
        @media (max-width: 600px) {
          .gallery-card {
            min-width: 100% !important;
          }
        }
      `}</style>
    </section>
  )
}
