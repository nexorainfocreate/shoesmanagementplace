# ShoesPlace — Marketing Website & Product Showcase

> **"The complete operating system for modern footwear stores."**  
> Specialized retail management, POS billing, shoe matrix inventory, customer Khata, supplier purchases, and AI festive forecasting.

A 100% static, production-ready SaaS marketing website built with **React**, **Vite**, and **TypeScript**, engineered for zero-dependency hosting on **GitHub Pages**.

---

## ⚡ Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build
```bash
npm run build
```
Builds the static application to the `dist/` directory.

### 4. Preview Production Build Locally
```bash
npm run preview
```

---

## 🚀 How to Deploy to GitHub Pages (Step-by-Step)

This repository is already configured with an automated GitHub Actions deployment workflow (`.github/workflows/deploy.yml`) that builds and deploys the site whenever you push to `main` or `master`.

### Step 1: Create a GitHub Repository
1. Log in to [GitHub](https://github.com).
2. Click **New Repository** (e.g., `shoesplace-website` or `shoesplace`).
3. Leave it empty (do not initialize with README or license).

### Step 2: Push Your Code
In your project directory, run:
```bash
git init
git add .
git commit -m "Initial commit: ShoesPlace marketing website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```

### Step 3: Enable GitHub Pages in Repository Settings
1. Go to your repository on GitHub.
2. Click **Settings** (top right tab).
3. In the left sidebar, click **Pages** (under the "Code and automation" section).
4. Under **Build and deployment** → **Source**, select:
   👉 **`GitHub Actions`** (instead of "Deploy from a branch").

### Step 4: Watch the Automatic Deployment
1. Click the **Actions** tab on your GitHub repository.
2. You will see the workflow **"Deploy ShoesPlace Marketing Website to GitHub Pages"** running automatically.
3. In approximately 1–2 minutes, the action will complete with a green checkmark (`✓`).

### Step 5: Open Your Live Website
Your website will be live at:
```
https://YOUR_USERNAME.github.io/YOUR_REPOSITORY/
```
*(If your repository is named `YOUR_USERNAME.github.io`, it will be live directly at `https://YOUR_USERNAME.github.io/`)*.

---

## 📁 Project Architecture & Local Assets

All assets and real application screenshots are bundled locally inside the repository with zero external CDN dependencies:

```
├── .github/
│   └── workflows/
│       └── deploy.yml            # Automated GitHub Pages CI/CD workflow
├── public/
│   ├── favicon.svg               # SVG shoe motif favicon
│   └── screenshots/              # 24 authentic 1080p application screenshots
│       ├── 01_Login_Screen.png
│       ├── 02_Dashboard_Command_Center.png
│       ├── 03_Point_of_Sale_POS.png
│       ├── 04_POS_With_Cart_Items.png
│       ├── 05_POS_Payment_Tender_Modal.png
│       ├── 06_Products_Catalog.png
│       ├── 07_Products_Add_Modal.png
│       ├── 08_Products_Barcode_Tag_Modal.png
│       ├── 09_Inventory_Stock_Overview.png
│       ├── 10_Inventory_Movements_Modal.png
│       ├── 11_AI_Restocking_Suggestions.png
│       ├── 12_Sales_Invoices_History.png
│       ├── 13_Sale_Detail_Drawer.png
│       ├── 14_Thermal_Receipt_Modal.png
│       ├── 15_Customers_Directory.png
│       ├── 16_Suppliers_Directory.png
│       ├── 17_Purchases_Orders.png
│       ├── 18_Purchases_Create_PO_Modal.png
│       ├── 19_Expenses_Tracker.png
│       ├── 20_Expenses_Add_Modal.png
│       ├── 21_Business_Analytics_Reports.png
│       ├── 22_Security_Audit_Logs.png
│       ├── 23_Users_Role_Management.png
│       └── 24_Settings_Store_Configuration.png
├── src/
│   ├── components/               # Navbar, Footer, Screenshot Lightbox Modal
│   ├── data/                     # Features matrix, 24 screenshots catalog, FAQ, pricing
│   ├── sections/                 # 20 modular page sections
│   ├── styles/
│   │   └── index.css             # Light editorial design system
│   ├── config.ts                 # Central contact endpoints & asset URL resolver
│   ├── App.tsx                   # Main page layout
│   └── main.tsx                  # Vite React entrypoint
├── index.html                    # SEO tags, OpenGraph metadata, title
├── package.json                  # Dependencies (React, Lucide icons, Vite)
├── tsconfig.json                 # TypeScript compiler configuration
└── vite.config.ts                # Relative base configuration for GitHub Pages
```

---

## 🛠️ How to Customize Contact Details

Open [`src/config.ts`](file:///c:/Users/patel/OneDrive/Desktop/yug/src/config.ts) to update phone numbers, WhatsApp links, and emails:

```typescript
export const SITE_CONFIG = {
  contactEmail: 'your-email@yourdomain.com',
  whatsappNumber: '+919876543210',
  whatsappDisplay: '+91 98765 43210',
  phoneNumber: '+919876543210',
  phoneDisplay: '+91 (0) 98765 43210',
  // ...
}
```

Re-run `npm run build` and push your changes to GitHub. The GitHub Action will automatically update the live site.

---

## 🔒 Security & Offline Resilience

* **Zero Backend Dependency:** Runs 100% in the client browser with zero server vulnerabilities.
* **Zero External CDNs:** Font stacks use native system typography; icons are bundled directly. The website continues to render even if external CDNs are unavailable.
* **Authentic UI:** Every screenshot displayed represents the actual ShoesPlace desktop software.
