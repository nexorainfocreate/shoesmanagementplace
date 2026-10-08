export interface ScreenshotItem {
  id: string
  number: string
  title: string
  category: 'pos' | 'products' | 'inventory' | 'sales' | 'procurement' | 'analytics' | 'system'
  filename: string
  caption: string
  highlights: string[]
}

export const SCREENSHOTS: ScreenshotItem[] = [
  {
    id: 'login',
    number: '01',
    title: 'Hardware-Encrypted Login Terminal',
    category: 'system',
    filename: 'screenshots/01_Login_Screen.png',
    caption: 'Secure, offline-first authentication screen with encrypted local terminal session and store branding.',
    highlights: ['Offline Authentication', 'Role-Based Session Guard', 'Hardware ID Binding']
  },
  {
    id: 'dashboard',
    number: '02',
    title: 'Executive Store Command Center',
    category: 'analytics',
    filename: 'screenshots/02_Dashboard_Command_Center.png',
    caption: 'Real-time overview displaying Today’s Net Sales, pairs sold, MTD revenue, receivables, and festive forecasts.',
    highlights: ['Live Sales Metrics', 'Customer Receivables', 'Festive Forecast Snapshot', 'Trend Visualizations']
  },
  {
    id: 'pos-clean',
    number: '03',
    title: 'Point of Sale (Clean Checkout State)',
    category: 'pos',
    filename: 'screenshots/03_Point_of_Sale_POS.png',
    caption: 'Ultra-fast counter interface equipped with barcode hotkeys (F2 scanner, F8 tender), catalog search, and customer memory.',
    highlights: ['Instant Barcode Input', 'Keyboard-Driven Speed', 'Customer Lookup', 'Category Browser']
  },
  {
    id: 'pos-cart',
    number: '04',
    title: 'Active POS Cart & Real-Time Calculation',
    category: 'pos',
    filename: 'screenshots/04_POS_With_Cart_Items.png',
    caption: 'Multi-item footwear transaction showing precise line item sizes, colors, GST breakdown, and total paise calculations.',
    highlights: ['Exact Shoe Sizes & Colors', 'Automatic Tax Breakdown', 'Subtotal & Discounts', 'One-Click Checkout']
  },
  {
    id: 'pos-tender',
    number: '05',
    title: 'Multi-Tender Payment & Dynamic UPI QR',
    category: 'pos',
    filename: 'screenshots/05_POS_Payment_Tender_Modal.png',
    caption: 'Flexible tender dialog supporting Cash, Credit/Debit Cards, Split Payment, and instantaneous Dynamic UPI QR codes.',
    highlights: ['Dynamic UPI QR Generation', 'Split Cash & Card Tender', 'Store Credit / Khata Debit', 'Payment Change Calculator']
  },
  {
    id: 'products-catalog',
    number: '06',
    title: 'Footwear Multi-Variant Catalog',
    category: 'products',
    filename: 'screenshots/06_Products_Catalog.png',
    caption: 'Catalog table organized by Brand, Article, Category, Gender (Men/Women/Kids), Sizes, and MRP with search and filter bars.',
    highlights: ['Footwear Hierarchy', 'Brand & Article Filtering', 'Selling vs Purchase Cost', 'Variant Count Badges']
  },
  {
    id: 'products-add',
    number: '07',
    title: 'Product Creation & Variant Matrix Builder',
    category: 'products',
    filename: 'screenshots/07_Products_Add_Modal.png',
    caption: 'Comprehensive footwear creation modal generating automatic structured SKUs across full size runs and color palettes.',
    highlights: ['Automated SKU Generation', 'Size Run Multiplier', 'Color Palette Swatches', 'Purchase Cost vs MRP']
  },
  {
    id: 'barcode-tag',
    number: '08',
    title: 'Thermal Barcode Tag Generator',
    category: 'products',
    filename: 'screenshots/08_Products_Barcode_Tag_Modal.png',
    caption: 'Direct box label printer formatting with standard 12-digit barcodes, article description, size, color, and store pricing.',
    highlights: ['12-Digit EAN/Code128 Barcodes', 'Shoe Box Tag Formatting', 'Batch Label Printing', 'Store Branding Header']
  },
  {
    id: 'inventory-stock',
    number: '09',
    title: 'Real-Time Stock & Reorder Thresholds',
    category: 'inventory',
    filename: 'screenshots/09_Inventory_Stock_Overview.png',
    caption: 'Per-variant inventory ledger monitoring sellable pairs on the shop floor versus damaged pairs in quarantine.',
    highlights: ['Sellable vs Damaged Pairs', 'Visual Low-Stock Indicators', 'Reorder Level Thresholds', 'Quick Quantity Adjustments']
  },
  {
    id: 'inventory-movements',
    number: '10',
    title: 'Immutable Stock Movement Audit Trail',
    category: 'inventory',
    filename: 'screenshots/10_Inventory_Movements_Modal.png',
    caption: 'Chronological inventory movement drawer tracing every single pair from supplier delivery to customer sale and return.',
    highlights: ['Stock-In Batch History', 'Sales Deductions', 'Damaged Quarantine Log', 'User & Timestamp Ledger']
  },
  {
    id: 'ai-suggestions',
    number: '11',
    title: 'AI Festive Forecast & Restocking Engine',
    category: 'analytics',
    filename: 'screenshots/11_AI_Restocking_Suggestions.png',
    caption: 'Predictive intelligence projecting seasonal demand spikes (Diwali, Eid, Weddings) and highlighting high-velocity sizes.',
    highlights: ['Festive Demand Projections', 'High-Velocity Fast Movers', 'Slow-Stock Clearance Alerts', 'Smart Reorder Suggestions']
  },
  {
    id: 'sales-history',
    number: '12',
    title: 'Sales Ledger & Invoice History',
    category: 'sales',
    filename: 'screenshots/12_Sales_Invoices_History.png',
    caption: 'Historical invoice database with date range filters, customer search, cashier IDs, and reprint bill capabilities.',
    highlights: ['Invoice Number Tracking', 'Cashier Audit Information', 'Payment Method Tags', 'Reprint & WhatsApp Trigger']
  },
  {
    id: 'sale-detail',
    number: '13',
    title: 'Detailed Transaction Drawer & Returns',
    category: 'sales',
    filename: 'screenshots/13_Sale_Detail_Drawer.png',
    caption: 'Complete breakdown of a customer’s bill with individual shoe articles, tender distribution, and return/exchange triggers.',
    highlights: ['Line-Item Article Breakdown', 'Payment Tender Audit', 'Direct WhatsApp Share', 'One-Click Size Exchange']
  },
  {
    id: 'receipt-modal',
    number: '14',
    title: 'Thermal Bill & WhatsApp Digital Receipt',
    category: 'pos',
    filename: 'screenshots/14_Thermal_Receipt_Modal.png',
    caption: 'High-contrast ESC/POS formatted thermal receipt preview complete with business declaration, itemization, and UPI payment QR.',
    highlights: ['2-Inch / 3-Inch ESC/POS Format', 'Integrated Dynamic UPI QR', 'Tax Composition Declaration', 'Instant Silent Print']
  },
  {
    id: 'customers-directory',
    number: '15',
    title: 'Customer Directory, Size Memory & Khata',
    category: 'sales',
    filename: 'screenshots/15_Customers_Directory.png',
    caption: 'Customer relationship manager remembering phone numbers, total visits, lifetime retail spend, and outstanding credit balances.',
    highlights: ['Customer Footwear Size Memory', 'Khata / Store Credit Balance', 'Lifetime Spend Tracking', 'Settle Payment Modal']
  },
  {
    id: 'suppliers-directory',
    number: '16',
    title: 'Wholesale Supplier Directory & Payables',
    category: 'procurement',
    filename: 'screenshots/16_Suppliers_Directory.png',
    caption: 'Manufacturer and distributor directory storing contact channels, factory addresses, and pending procurement balances.',
    highlights: ['Vendor Contact Directory', 'Pending Accounts Payable', 'Supplier Payment History', 'Direct Order Linking']
  },
  {
    id: 'purchases-orders',
    number: '17',
    title: 'Purchase Orders & Stock Receiving',
    category: 'procurement',
    filename: 'screenshots/17_Purchases_Orders.png',
    caption: 'Procurement ledger tracking purchase orders, wholesale invoices, delivery dates, and receiving status.',
    highlights: ['Factory Invoices', 'Delivery Verification', 'Cost Paired to Variants', 'Status Lifecycle Tracking']
  },
  {
    id: 'purchases-create',
    number: '18',
    title: 'Create Purchase Order Workflow',
    category: 'procurement',
    filename: 'screenshots/18_Purchases_Create_PO_Modal.png',
    caption: 'Wholesale ordering interface where shop owners build manufacturer purchase orders at negotiated unit costs.',
    highlights: ['Supplier Selection', 'Wholesale Unit Rate Setting', 'Multi-Article Batch Entry', 'Automated Stock-In Linking']
  },
  {
    id: 'expenses-tracker',
    number: '19',
    title: 'Store Overhead & Operational Expense Tracker',
    category: 'procurement',
    filename: 'screenshots/19_Expenses_Tracker.png',
    caption: 'Dedicated operating expense recorder tracking shop rent, staff wages, electricity, packaging, and tea expenses.',
    highlights: ['Categorized Overhead Outflows', 'Payment Method Breakdown', 'Date Filtering', 'True Net Profit Calculation']
  },
  {
    id: 'expenses-add',
    number: '20',
    title: 'Record Operational Expense Modal',
    category: 'procurement',
    filename: 'screenshots/20_Expenses_Add_Modal.png',
    caption: 'Quick modal for cashiers and store owners to log operational retail payouts with receipts and categorized tags.',
    highlights: ['Category Dropdowns', 'Cash vs Online Tagging', 'Notes & Beneficiary Tracking', 'Instant Ledger Update']
  },
  {
    id: 'reports-analytics',
    number: '21',
    title: 'Financial Intelligence & P&L Reporting',
    category: 'analytics',
    filename: 'screenshots/21_Business_Analytics_Reports.png',
    caption: 'Comprehensive reporting center computing true Gross Margin, Net P&L, Inventory Valuation at cost vs MRP, and PDF exports.',
    highlights: ['Gross Margin & Net Profit', 'Inventory Valuation at Cost', 'Sales by Category & Gender', 'One-Click PDF/Excel Export']
  },
  {
    id: 'audit-logs',
    number: '22',
    title: 'Tamper-Evident Security Audit Logs',
    category: 'system',
    filename: 'screenshots/22_Security_Audit_Logs.png',
    caption: 'Immutable audit trail capturing cashier logins, price overrides, discount approvals, cancellations, and master data edits.',
    highlights: ['Staff Accountability Trail', 'Price Change Records', 'Discount & Void Auditing', 'Immutable Local Log']
  },
  {
    id: 'users-roles',
    number: '23',
    title: 'Role-Based Access Control (RBAC)',
    category: 'system',
    filename: 'screenshots/23_Users_Role_Management.png',
    caption: 'Strict privilege segregation preventing cashiers from viewing supplier wholesale costs, gross profits, or deleting records.',
    highlights: ['ADMIN vs SALES_PERSON Roles', 'Enforced Password Security', 'Cost Price Visibility Masking', 'Multi-Terminal Cashier IDs']
  },
  {
    id: 'settings-store',
    number: '24',
    title: 'Store Branding, Printer & Local Backup Setup',
    category: 'system',
    filename: 'screenshots/24_Settings_Store_Configuration.png',
    caption: 'Store profile management controlling thermal printer ESC/POS widths, UPI VPA keys, and automated local database backups.',
    highlights: ['Thermal Printer Configuration', 'Store GST & VPA Settings', 'Automatic Scheduled Backups', 'One-Click Database Restore']
  }
]

export const GALLERY_CATEGORIES = [
  { key: 'all', label: 'All Screens (24)' },
  { key: 'pos', label: 'POS & Billing' },
  { key: 'products', label: 'Footwear Catalog & Barcode' },
  { key: 'inventory', label: 'Inventory & Stock' },
  { key: 'sales', label: 'Sales & Customer CRM' },
  { key: 'procurement', label: 'Procurement & Expenses' },
  { key: 'analytics', label: 'AI & Business Reports' },
  { key: 'system', label: 'Security & Settings' }
]
