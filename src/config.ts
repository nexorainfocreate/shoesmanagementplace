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

  // Contact Channels
  instagramUrl: 'https://www.instagram.com/vernixdigital/',
  instagramHandle: '@vernixdigital',
  demoUrl: '#contact',

  // Links
  links: {
    github: 'https://github.com/nexorainfocreate/shoesmanagementplace.git',
    instagramDirect: 'https://www.instagram.com/vernixdigital/'
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
