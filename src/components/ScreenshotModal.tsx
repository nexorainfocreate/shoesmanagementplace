import React, { useEffect } from 'react'
import { X, ExternalLink, ChevronLeft, ChevronRight, Check } from 'lucide-react'
import { SCREENSHOTS, ScreenshotItem } from '../data/screenshots'
import { getAssetUrl } from '../config'

interface ScreenshotModalProps {
  screenshotId: string | null
  onClose: () => void
  onSelect: (id: string) => void
}

export const ScreenshotModal: React.FC<ScreenshotModalProps> = ({
  screenshotId,
  onClose,
  onSelect
}) => {
  const currentItem = SCREENSHOTS.find((s) => s.id === screenshotId)
  const currentIndex = SCREENSHOTS.findIndex((s) => s.id === screenshotId)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight' && currentIndex < SCREENSHOTS.length - 1) {
        onSelect(SCREENSHOTS[currentIndex + 1].id)
      }
      if (e.key === 'ArrowLeft' && currentIndex > 0) {
        onSelect(SCREENSHOTS[currentIndex - 1].id)
      }
    }
    if (screenshotId) {
      window.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [screenshotId, currentIndex, onClose, onSelect])

  if (!currentItem) return null

  const hasPrev = currentIndex > 0
  const hasNext = currentIndex < SCREENSHOTS.length - 1

  return (
    <div
      className="modal-overlay"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 999,
        backgroundColor: 'rgba(15, 23, 42, 0.85)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px'
      }}
      onClick={onClose}
    >
      {/* Modal Dialog Card */}
      <div
        className="modal-card"
        style={{
          width: '100%',
          maxWidth: '1280px',
          maxHeight: '92vh',
          backgroundColor: '#ffffff',
          borderRadius: '16px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div
          className="modal-header"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '16px 24px',
            borderBottom: '1px solid var(--border-subtle)',
            backgroundColor: '#f8fafc'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', minWidth: 0 }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                fontWeight: 700,
                color: 'var(--brand-primary)',
                backgroundColor: 'var(--bg-accent-subtle)',
                padding: '3px 8px',
                borderRadius: '4px',
                border: '1px solid var(--brand-subtle)',
                flexShrink: 0
              }}
            >
              SCREEN {currentItem.number} OF {SCREENSHOTS.length}
            </span>
            <h3 className="modal-title-text" style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-primary)' }}>
              {currentItem.title}
            </h3>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
            <span className="modal-esc-hint" style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
              Press <kbd style={{ padding: '2px 5px', background: '#e2e8f0', borderRadius: '3px' }}>Esc</kbd> to close
            </span>
            <button
              onClick={onClose}
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-muted)',
                backgroundColor: '#ffffff'
              }}
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Image Stage with Next/Prev Controls */}
        <div
          className="modal-img-stage"
          style={{
            position: 'relative',
            backgroundColor: '#0f172a',
            overflow: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '12px'
          }}
        >
          <img
            src={getAssetUrl(currentItem.filename)}
            alt={currentItem.title}
            style={{
              maxWidth: '100%',
              maxHeight: '68vh',
              objectFit: 'contain',
              borderRadius: '8px',
              border: '1px solid rgba(255,255,255,0.1)'
            }}
          />

          {hasPrev && (
            <button
              onClick={() => onSelect(SCREENSHOTS[currentIndex - 1].id)}
              style={{
                position: 'absolute',
                left: '20px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                color: '#0f172a',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
              }}
              aria-label="Previous screenshot"
            >
              <ChevronLeft size={22} />
            </button>
          )}

          {hasNext && (
            <button
              onClick={() => onSelect(SCREENSHOTS[currentIndex + 1].id)}
              style={{
                position: 'absolute',
                right: '20px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                color: '#0f172a',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
              }}
              aria-label="Next screenshot"
            >
              <ChevronRight size={22} />
            </button>
          )}
        </div>

        {/* Footer Details */}
        <div
          className="modal-footer"
          style={{
            padding: '16px 24px',
            backgroundColor: '#ffffff',
            borderTop: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            maxHeight: '22vh',
            overflowY: 'auto'
          }}
        >
          <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', maxWidth: '650px', margin: 0 }}>
            {currentItem.caption}
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            {currentItem.highlights.map((h, i) => (
              <span
                key={i}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  fontSize: '11px',
                  fontWeight: 600,
                  backgroundColor: '#f1f5f9',
                  color: '#334155',
                  padding: '3px 8px',
                  borderRadius: '4px'
                }}
              >
                <Check size={11} color="#059669" />
                {h}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .modal-overlay {
            padding: 8px !important;
          }
          .modal-card {
            max-height: 96vh !important;
            border-radius: 12px !important;
          }
          .modal-header {
            padding: 10px 14px !important;
          }
          .modal-title-text {
            font-size: 13px !important;
            white-space: nowrap !important;
            overflow: hidden !important;
            text-overflow: ellipsis !important;
            max-width: 140px !important;
          }
          .modal-esc-hint {
            display: none !important;
          }
          .modal-footer {
            padding: 10px 14px !important;
            gap: 8px !important;
          }
        }
      `}</style>
    </div>
  )
}
