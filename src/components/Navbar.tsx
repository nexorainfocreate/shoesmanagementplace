import React, { useState, useEffect } from 'react'
import { Menu, X, ArrowUpRight, Instagram } from 'lucide-react'
import { SITE_CONFIG, getAssetUrl } from '../config'

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'var(--bg-page)',
          backdropFilter: isScrolled ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(12px)' : 'none',
          borderBottom: isScrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
          transition: 'all 200ms cubic-bezier(0.22, 1, 0.36, 1)'
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
          {/* Brand Logo */}
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img
              src={getAssetUrl('logo.jpg')}
              alt="ShoesPlace Logo"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '8px',
                objectFit: 'cover',
                boxShadow: '0 2px 6px rgba(0,0,0,0.12)'
              }}
            />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '18px', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text-primary)', lineHeight: 1.1 }}>
                ShoesPlace
              </span>
              <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.08em', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                Retail OS
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '28px'
            }}
            className="desktop-nav"
          >
            <a href="#product" style={{ fontSize: '13.5px', fontWeight: 600, color: 'var(--text-secondary)' }}>
              Product
            </a>
            <a href="#matrix" style={{ fontSize: '13.5px', fontWeight: 600, color: 'var(--text-secondary)' }}>
              Shoe Matrix
            </a>
            <a href="#features" style={{ fontSize: '13.5px', fontWeight: 600, color: 'var(--text-secondary)' }}>
              Features
            </a>
            <a href="#ai-insights" style={{ fontSize: '13.5px', fontWeight: 600, color: 'var(--text-secondary)' }}>
              AI Insights
            </a>
            <a href="#gallery" style={{ fontSize: '13.5px', fontWeight: 600, color: 'var(--text-secondary)' }}>
              Gallery
            </a>
            <a href="#pricing" style={{ fontSize: '13.5px', fontWeight: 600, color: 'var(--text-secondary)' }}>
              Pricing
            </a>
            <a href="#faq" style={{ fontSize: '13.5px', fontWeight: 600, color: 'var(--text-secondary)' }}>
              FAQ
            </a>
          </nav>

          {/* Right Action Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }} className="desktop-actions">
            <a
              href={SITE_CONFIG.links.instagramDirect}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
              style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
            >
              <Instagram size={14} color="#e1306c" />
              <span>DM on Instagram</span>
            </a>
            <a
              href="#contact"
              className="btn btn-primary btn-sm"
              style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
            >
              <span>Get Started</span>
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'none',
              padding: '8px',
              borderRadius: '6px',
              color: 'var(--text-primary)',
              border: '1px solid var(--border-subtle)'
            }}
            className="mobile-toggle"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '72px',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: '#ffffff',
            zIndex: 99,
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            borderTop: '1px solid var(--border-subtle)'
          }}
        >
          <a
            href="#product"
            onClick={() => setMobileMenuOpen(false)}
            style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text-primary)' }}
          >
            Product Overview
          </a>
          <a
            href="#matrix"
            onClick={() => setMobileMenuOpen(false)}
            style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text-primary)' }}
          >
            Footwear Matrix
          </a>
          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text-primary)' }}
          >
            Features
          </a>
          <a
            href="#ai-insights"
            onClick={() => setMobileMenuOpen(false)}
            style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text-primary)' }}
          >
            AI Festive Insights
          </a>
          <a
            href="#gallery"
            onClick={() => setMobileMenuOpen(false)}
            style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text-primary)' }}
          >
            Screenshot Gallery (24 Screens)
          </a>
          <a
            href="#pricing"
            onClick={() => setMobileMenuOpen(false)}
            style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text-primary)' }}
          >
            Pricing
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text-primary)' }}
          >
            FAQ
          </a>
          <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <a
              href={SITE_CONFIG.links.instagramDirect}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
            >
              <Instagram size={16} color="#e1306c" />
              <span>DM on Instagram (@vernixdigital)</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn btn-primary"
              style={{ width: '100%' }}
            >
              <span>Get Started</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav, .desktop-actions {
            display: none !important;
          }
          .mobile-toggle {
            display: flex !important;
          }
        }
      `}</style>
    </>
  )
}
