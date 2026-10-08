export interface FeatureCategory {
  id: string
  name: string
  headline: string
  description: string
  features: {
    name: string
    detail: string
    highlight?: boolean
  }[]
}

export const FEATURE_CATEGORIES: FeatureCategory[] = [
  {
    id: 'sell',
    name: 'SELL',
    headline: 'Point of Sale & Smart Checkout',
    description: 'Rapid billing engineered specifically for footwear checkout counters.',
    features: [
      { name: 'Ultra-Fast Keyboard & Barcode Billing', detail: 'F2 instant barcode focus and F8 tender shortcuts reduce checkout line delays to seconds.', highlight: true },
      { name: 'Multi-Tender Payments', detail: 'Accept Cash, Credit/Debit Cards, UPI Dynamic QR, or split across methods on a single invoice.' },
      { name: 'On-Screen & Receipt Dynamic UPI QR', detail: 'Generates instant amount-coded UPI QR codes for zero-contact customer mobile payments.', highlight: true },
      { name: 'Thermal Receipt Printing (ESC/POS)', detail: 'High-speed, silent 2-inch and 3-inch receipt printing with store branding and GST declarations.' },
      { name: 'WhatsApp Digital Invoicing', detail: 'Integrated automated WhatsApp service sends digital receipts directly to customer phones.', highlight: true },
      { name: 'Customer Shoe Size Memory', detail: 'Instantly surfaces past shoe sizes worn by the customer so cashiers don’t have to guess or re-ask.' }
    ]
  },
  {
    id: 'products',
    name: 'PRODUCTS',
    headline: 'Footwear-Specific Catalog & Barcoding',
    description: 'A data model structured around how shoes are actually manufactured, stocked, and sold.',
    features: [
      { name: 'Footwear Multi-Attribute Hierarchy', detail: 'Organize by Brand, Model/Article, Category (Sneakers, Formal, Sports), Gender, Size, and Color.', highlight: true },
      { name: 'Automated 12-Digit Barcode Generator', detail: 'Automatically generates unique, collision-free EAN/Code128 barcodes for every variant.' },
      { name: 'Thermal Shoe Box Label Printing', detail: 'Print crisp adhesive box tags with article name, color, size, barcode, and store MRP.' },
      { name: 'Bulk Excel Import (.xlsx)', detail: 'Import thousands of shoes and initial stock counts from supplier spreadsheets in minutes.', highlight: true },
      { name: 'Cost Price vs MRP Segregation', detail: 'Admin-only visibility masks wholesale purchase costs from cashiers on the shop floor.' }
    ]
  },
  {
    id: 'inventory',
    name: 'INVENTORY',
    headline: 'Real-Time Stock & Audit Movements',
    description: 'Eliminate missing pairs, track damaged shoes, and know your shelf status 24/7.',
    features: [
      { name: 'Real-Time Sellable vs Damaged Tracking', detail: 'Separate sellable shop floor stock from factory damages in quarantine.', highlight: true },
      { name: 'Visual Low-Stock & Reorder Alerts', detail: 'Dynamic color-coded badges flag fast-depleting sizes before stockouts occur.' },
      { name: 'Stock Receiving & Batch Logging', detail: 'Log incoming distributor deliveries tied to factory purchase order references.' },
      { name: 'Stock Adjustments & Shrinkage Reconciliation', detail: 'Audit count discrepancies with mandatory reason codes and user signatures.' },
      { name: 'Immutable Inventory Audit Ledger', detail: 'Chronological timeline recording every unit delta: Stock-In, Sale, Return, or Exchange.', highlight: true }
    ]
  },
  {
    id: 'customers',
    name: 'CUSTOMERS',
    headline: 'CRM, Footwear Size Memory & Khata',
    description: 'Cultivate loyal repeat shoppers and manage neighborhood store credit cleanly.',
    features: [
      { name: 'Customer Profiles & Lifetime Spend', detail: 'Track total visits, average ticket value, and contact numbers for VIP shoppers.' },
      { name: 'Shoe Size Memory Matrix', detail: 'Maintains size preferences across Men, Women, and Kids categories for family shoppers.', highlight: true },
      { name: 'Customer Khata / Store Credit Ledger', detail: 'Track outstanding balances, payment settlements, and partial payments with full audit logs.', highlight: true },
      { name: 'One-Click Size & Color Exchanges', detail: 'Perform shoe size swaps with automated price difference calculations and bill reissuance.' },
      { name: 'Partial & Full Returns Processing', detail: 'Refund to cash or store credit with inventory immediately restored to sellable status.' }
    ]
  },
  {
    id: 'procurement',
    name: 'PROCUREMENT',
    headline: 'Wholesale Suppliers & Purchase Orders',
    description: 'Manage factory relationships, purchase orders, and wholesale supplier balances.',
    features: [
      { name: 'Wholesale Supplier Directory', detail: 'Manage shoe manufacturers, distributors, factory contacts, and credit terms.' },
      { name: 'Purchase Order (PO) Management', detail: 'Create purchase orders with negotiated wholesale unit rates and delivery statuses.', highlight: true },
      { name: 'Accounts Payable Ledger', detail: 'Monitor total unpaid wholesale balances and record vendor bank or cheque settlements.' },
      { name: 'Supplier Link & Replenishment', detail: 'Seamlessly link catalog articles to supplier SKUs for friction-free repeat replenishment.' }
    ]
  },
  {
    id: 'finance',
    name: 'FINANCE',
    headline: 'Operating Expenses & Financial Reports',
    description: 'Understand true net profit by deducting store overheads from retail margins.',
    features: [
      { name: 'Store Overhead Expense Recorder', detail: 'Log rent, staff wages, electricity, packaging, tea/refreshments, and marketing costs.', highlight: true },
      { name: 'True Profit & Loss (P&L) Computation', detail: 'Gross Margin minus operating expenses gives accurate net store profitability.', highlight: true },
      { name: 'Inventory Valuation at Cost vs MRP', detail: 'Instantly view total asset capital locked in shelf stock versus potential retail revenue.' },
      { name: 'Sales Breakdown by Brand & Gender', detail: 'Understand which shoe brands and demographic segments generate your highest margins.' },
      { name: 'Accounting-Ready PDF & Excel Export', detail: 'Generate one-click tax compliance and audit summaries for your accountant.' }
    ]
  },
  {
    id: 'intelligence',
    name: 'INTELLIGENCE',
    headline: 'AI Festive Forecasting & Smart Restocking',
    description: 'Predictive retail analytics built around Indian and global footwear shopping seasons.',
    features: [
      { name: 'Festive Demand Surge Forecaster', detail: 'Forecasts footfall and volume spikes around Diwali, Eid, Christmas, Back-to-School, and Weddings.', highlight: true },
      { name: 'High-Velocity Style Identification', detail: 'Detects fast-selling shoe models and sizes early to trigger pre-emptive reorders.', highlight: true },
      { name: 'Slow-Moving Stock Aging Alerts', detail: 'Flags aging articles sitting idle on shelves so you can run markdown promotions before dead stock accumulates.' }
    ]
  },
  {
    id: 'security',
    name: 'SECURITY',
    headline: 'Role-Based Access & Tamper-Evident Logs',
    description: 'Keep your financial margins protected while empowering counter cashiers.',
    features: [
      { name: 'Role-Based Access Control (RBAC)', detail: 'Strict ADMIN vs SALES_PERSON permission profiles enforced at the core process layer.', highlight: true },
      { name: 'Wholesale Cost & Margin Masking', detail: 'Cashiers only see retail selling prices, never supplier purchase costs or gross margins.' },
      { name: 'Immutable Security Audit Trail', detail: 'Tamper-evident logs of cashier sign-ins, bill cancellations, manual discounts, and setting changes.', highlight: true },
      { name: 'Enforced Initial Password Setup', detail: 'Staff accounts are required to change passwords upon first login and after admin resets.' }
    ]
  },
  {
    id: 'reliability',
    name: 'RELIABILITY',
    headline: '100% Offline-First Desktop Performance',
    description: 'No cloud buffering, no internet downtime, zero delay on the checkout counter.',
    features: [
      { name: 'Zero-Latency Embedded SQLite Database', detail: 'Local desktop engine runs at near-instant native speeds with zero cloud delay.', highlight: true },
      { name: 'Continuous Operation Without Internet', detail: 'Keep scanning, selling, and managing stock even when internet cables are cut or wifi fails.', highlight: true },
      { name: 'Automatic Local Database Backups', detail: 'Scheduled background database snapshots with single-click restore capabilities.' },
      { name: 'Hardware-Locked Offline Licensing', detail: 'Cryptographic Ed25519 licensing operates securely offline tied to the store machine.' }
    ]
  }
]

export interface PricingPlan {
  name: string
  tagline: string
  priceMonthly: string
  priceAnnual: string
  period: string
  highlighted?: boolean
  badge?: string
  features: string[]
  ctaText: string
  ctaNote: string
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Store Starter',
    tagline: 'Ideal for independent footwear shops seeking fast billing and accurate inventory.',
    priceMonthly: '₹1,199',
    priceAnnual: '₹999',
    period: 'per month',
    features: [
      'Single-terminal desktop installation',
      'High-speed POS billing with barcode scanner support',
      'Footwear multi-attribute catalog (Sizes, Colors, Brands)',
      'Real-time inventory & low-stock alerts',
      'Dynamic UPI QR code generation on bill',
      '2-inch & 3-inch ESC/POS thermal receipt printing',
      'Customer size memory & contact directory',
      '100% offline-first reliability (no internet needed to bill)',
      'Automatic daily local database backup'
    ],
    ctaText: 'Get Started with Starter',
    ctaNote: 'One-time setup assistance included'
  },
  {
    name: 'Retail Professional',
    tagline: 'The complete operating system for high-volume stores and growing retail owners.',
    priceMonthly: '₹1,999',
    priceAnnual: '₹1,699',
    period: 'per month',
    highlighted: true,
    badge: 'MOST POPULAR',
    features: [
      'Everything in Store Starter, plus:',
      'Multi-user RBAC (Admin & Cashier permission profiles)',
      'Automated WhatsApp digital bill sending',
      'Customer Khata / Store Credit (Udhar) ledger',
      'Supplier directory, purchase orders & accounts payable',
      'Operational store expense tracking & true Net P&L',
      'AI Festive Forecast (Diwali, Eid, Wedding demand projections)',
      'Smart restocking recommendations & slow-stock alerts',
      'Bulk Excel (.xlsx) product & inventory import',
      'Tamper-evident security audit trail',
      'Priority phone & WhatsApp retail support'
    ],
    ctaText: 'Get Started with Professional',
    ctaNote: 'Full catalog onboarding assistance'
  },
  {
    name: 'Multi-Store / Enterprise',
    tagline: 'For footwear showroom chains, distributors, and multi-counter retail setups.',
    priceMonthly: 'Custom',
    priceAnnual: 'Custom',
    period: 'tailored setup',
    features: [
      'Everything in Professional, plus:',
      'Multiple checkout counters & synchronized terminals',
      'Multi-branch inventory transfers & centralized catalog',
      'Custom thermal receipt templates & multi-printer routing',
      'Supplier Link wholesale purchasing integration',
      'Custom tax compliance & accounting exports',
      'Dedicated retail account manager',
      'On-site hardware setup & staff training session'
    ],
    ctaText: 'Contact for Enterprise',
    ctaNote: 'Custom quote based on store count'
  }
]

export interface FaqItem {
  question: string
  answer: string
  category: 'general' | 'features' | 'technical' | 'pricing'
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    category: 'general',
    question: 'What is ShoesPlace and how is it different from a generic retail POS?',
    answer:
      'ShoesPlace is a specialized retail operating system designed exclusively around footwear retail workflows. Unlike generic POS systems that treat shoes like grocery items, ShoesPlace natively understands the multi-attribute footwear structure: Brand, Article/Model, Category, Gender (Men, Women, Kids), Size run (UK/US/Euro), and Color. It also handles shoe size memory for customers, one-click size exchanges, shoe box barcode label generation, supplier purchase orders, store expenses, and AI seasonal demand forecasting.'
  },
  {
    category: 'features',
    question: 'Does ShoesPlace work 100% offline without an active internet connection?',
    answer:
      'Yes. ShoesPlace is built with an offline-first architecture powered by an embedded local SQLite engine. Your checkout counter will never freeze, buffer, or halt because of internet outages or poor Wi-Fi. You can scan barcodes, bill customers, print thermal receipts, and adjust inventory completely offline.'
  },
  {
    category: 'features',
    question: 'Can I import my existing shoe inventory from an Excel spreadsheet?',
    answer:
      'Yes! Bulk Excel Import (.xlsx) is built right into the platform. If you have hundreds or thousands of products from suppliers or previous systems, you can import them all in minutes, with automatic SKU and barcode generation across all size and color variants.'
  },
  {
    category: 'features',
    question: 'How does Customer Size Memory work?',
    answer:
      'When you enter a customer’s phone number during billing, ShoesPlace automatically remembers what shoe sizes they bought across Men’s, Women’s, and Kids’ footwear. When they visit your shop again, the counter cashier immediately knows their preferred size, speeding up service and delighting the customer.'
  },
  {
    category: 'features',
    question: 'How does the dynamic UPI QR code work on receipts?',
    answer:
      'During checkout, ShoesPlace automatically generates a dynamic UPI payment QR code encoded with your store VPA and the exact invoice total. It displays on your screen and prints cleanly at the bottom of your thermal receipt. Customers simply scan with Google Pay, PhonePe, Paytm, or any UPI app to pay the exact amount with zero manual entry errors.'
  },
  {
    category: 'features',
    question: 'Can I send bills to customers directly via WhatsApp?',
    answer:
      'Yes. ShoesPlace includes an integrated WhatsApp delivery engine. When a transaction completes, a digital PDF bill is automatically formatted and sent straight to the customer’s WhatsApp number, saving paper costs while keeping your store branding in their pocket.'
  },
  {
    category: 'features',
    question: 'How do footwear exchanges and returns work?',
    answer:
      'ShoesPlace provides dedicated Return and Exchange modals. If a customer returns a pair to swap for a different size or color with a price variance, ShoesPlace automatically calculates the price difference, updates inventory in real time, and issues an amended receipt without needing a manual calculator.'
  },
  {
    category: 'technical',
    question: 'What hardware (printers and scanners) is supported?',
    answer:
      'ShoesPlace supports standard USB and Bluetooth barcode scanners (plug-and-play keyboard wedge mode) and standard ESC/POS thermal printers (both 2-inch / 58mm and 3-inch / 80mm widths). It also supports thermal barcode sticker printers for printing shoe box tags.'
  },
  {
    category: 'technical',
    question: 'How does role-based security protect my business?',
    answer:
      'ShoesPlace enforces strict role profiles: ADMIN and SALES_PERSON (Cashier). Cashiers on the shop floor can scan, bill, accept payments, and search products, but wholesale purchase costs, gross margins, supplier debt, and sensitive financial reports are hidden from them. All critical actions like manual discounts and bill cancellations are permanently logged in the tamper-evident security audit trail.'
  },
  {
    category: 'technical',
    question: 'How are my database and business records backed up?',
    answer:
      'ShoesPlace performs automated local database snapshots on a regular schedule to your designated backup folder. In the event of a computer crash or hardware replacement, you can restore your entire database with a single click.'
  }
]
