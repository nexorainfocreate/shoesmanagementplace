import React, { useState } from 'react'
import { FAQ_ITEMS } from '../data/features'
import { Plus, Minus, HelpCircle, Instagram } from 'lucide-react'
import { SITE_CONFIG } from '../config'

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <section id="faq" className="section">
      <div className="container container-narrow">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="section-title">
            Everything you need to know about ShoesPlace.
          </h2>
          <p className="section-lead" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            Direct, technical answers to common questions asked by footwear store owners, managers, and accountants.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx
            return (
              <div
                key={idx}
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid',
                  borderColor: isOpen ? 'var(--border-strong)' : 'var(--border-subtle)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  transition: 'border-color 150ms ease'
                }}
              >
                <button
                  onClick={() => toggle(idx)}
                  style={{
                    width: '100%',
                    padding: '20px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textAlign: 'left',
                    gap: '16px',
                    backgroundColor: isOpen ? '#f8fafc' : 'transparent',
                    cursor: 'pointer'
                  }}
                  aria-expanded={isOpen}
                >
                  <span style={{ fontSize: '15.5px', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.4 }}>
                    {item.question}
                  </span>
                  <div
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '6px',
                      backgroundColor: isOpen ? 'var(--bg-accent-subtle)' : 'var(--bg-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: isOpen ? 'var(--brand-primary)' : 'var(--text-muted)',
                      flexShrink: 0
                    }}
                  >
                    {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                  </div>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: '20px 24px 24px 24px',
                      borderTop: '1px solid var(--border-subtle)',
                      backgroundColor: '#ffffff'
                    }}
                  >
                    <p style={{ fontSize: '14.5px', color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0 }}>
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Still have questions banner */}
        <div
          style={{
            marginTop: '40px',
            padding: '24px',
            backgroundColor: 'var(--bg-subtle)',
            borderRadius: '12px',
            border: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px'
          }}
        >
          <div>
            <h4 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>
              Have a specific question about your store hardware or workflow?
            </h4>
            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', margin: 0 }}>
              Speak directly with our footwear retail specialists via Instagram DM.
            </p>
          </div>
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
        </div>
      </div>
    </section>
  )
}
