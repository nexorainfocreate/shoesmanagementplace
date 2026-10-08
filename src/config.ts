/**
 * Global Configuration for ShoesPlace Marketing Website
 * All contact endpoints and asset paths are centralized here for easy maintenance.
 * Zero external backend or third-party service dependencies required.
 */

export const SITE_CONFIG = {
  name: 'ShoesPlace',
  tagline: 'The complete operating system for modern footwear stores.',
  description:
    'From the first barcode scan to your end-of-day profit, ShoesPlace brings your entire footwear business into one powerful, offline-first system.',
  version: '0.2.2',

  // Contact Channels (configurable for GitHub Pages deployment)
  contactEmail: 'contact@shoesplace.com',
  whatsappNumber: '+919876543210',
  whatsappDisplay: '+91 98765 43210',
  whatsappMessage: encodeURIComponent(
    'Hello ShoesPlace team! I run a footwear store and would like to see a demo of ShoesPlace POS & Retail Suite.'
  ),
  phoneNumber: '+919876543210',
  phoneDisplay: '+91 (0) 98765 43210',
  demoUrl: '#contact',

  // Links
  links: {
    github: 'https://github.com',
    whatsappDirect: 'https://wa.me/919876543210?text=Hello%20ShoesPlace%20team!%20I%20would%20like%20to%20learn%20more%20about%20ShoesPlace.',
    emailDirect: 'mailto:contact@shoesplace.com?subject=ShoesPlace%20Footwear%20POS%20Inquiry'
  }
}

/**
 * Resolves local assets relative to Vite's configured base path.
 * Guarantees that images load cleanly on GitHub Pages whether served from root or a subpath.
 */
export function getAssetUrl(path: string): string {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  const base = ((import.meta as unknown as { env?: { BASE_URL?: string } }).env?.BASE_URL) || './'
  const normalizedBase = base.endsWith('/') ? base : `${base}/`
  return `${normalizedBase}${cleanPath}`
}
