import React, { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { ScreenshotModal } from './components/ScreenshotModal'

// Sections
import { Hero } from './sections/Hero'
import { ValueProp } from './sections/ValueProp'
import { PosSection } from './sections/PosSection'
import { FootwearMatrixSection } from './sections/FootwearMatrixSection'
import { BarcodeExcelSection } from './sections/BarcodeExcelSection'
import { InventorySection } from './sections/InventorySection'
import { ReturnsExchangesSection } from './sections/ReturnsExchangesSection'
import { CrmKhataSection } from './sections/CrmKhataSection'
import { ProcurementSection } from './sections/ProcurementSection'
import { ExpenseSection } from './sections/ExpenseSection'
import { AiIntelligenceSection } from './sections/AiIntelligenceSection'
import { BusinessIntelligenceSection } from './sections/BusinessIntelligenceSection'
import { SecuritySection } from './sections/SecuritySection'
import { OfflineFirstSection } from './sections/OfflineFirstSection'
import { HardwareEcosystemSection } from './sections/HardwareEcosystemSection'
import { FeatureMatrixSection } from './sections/FeatureMatrixSection'
import { HowItWorksSection } from './sections/HowItWorksSection'
import { WhoIsItForSection } from './sections/WhoIsItForSection'
import { GallerySection } from './sections/GallerySection'
import { PricingSection } from './sections/PricingSection'
import { FaqSection } from './sections/FaqSection'
import { FinalCtaSection } from './sections/FinalCtaSection'

export const App: React.FC = () => {
  const [activeModalId, setActiveModalId] = useState<string | null>(null)

  const handleOpenScreenshot = (id: string) => {
    setActiveModalId(id)
  }

  const handleCloseModal = () => {
    setActiveModalId(null)
  }

  return (
    <div className="site-wrapper" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Page Flow */}
      <main style={{ flex: 1 }}>
        <Hero onOpenScreenshot={handleOpenScreenshot} />
        <ValueProp />
        <PosSection onOpenScreenshot={handleOpenScreenshot} />
        <FootwearMatrixSection onOpenScreenshot={handleOpenScreenshot} />
        <BarcodeExcelSection onOpenScreenshot={handleOpenScreenshot} />
        <InventorySection onOpenScreenshot={handleOpenScreenshot} />
        <ReturnsExchangesSection onOpenScreenshot={handleOpenScreenshot} />
        <CrmKhataSection onOpenScreenshot={handleOpenScreenshot} />
        <ProcurementSection onOpenScreenshot={handleOpenScreenshot} />
        <ExpenseSection onOpenScreenshot={handleOpenScreenshot} />
        <AiIntelligenceSection onOpenScreenshot={handleOpenScreenshot} />
        <BusinessIntelligenceSection onOpenScreenshot={handleOpenScreenshot} />
        <SecuritySection onOpenScreenshot={handleOpenScreenshot} />
        <OfflineFirstSection onOpenScreenshot={handleOpenScreenshot} />
        <HardwareEcosystemSection />
        <FeatureMatrixSection />
        <HowItWorksSection />
        <WhoIsItForSection />
        <GallerySection onOpenScreenshot={handleOpenScreenshot} />
        <PricingSection />
        <FaqSection />
        <FinalCtaSection onOpenScreenshot={handleOpenScreenshot} />
      </main>

      {/* Editorial Footer */}
      <Footer />

      {/* Full-Screen 1080p Screenshot Lightbox Inspector */}
      <ScreenshotModal
        screenshotId={activeModalId}
        onClose={handleCloseModal}
        onSelect={(id) => setActiveModalId(id)}
      />
    </div>
  )
}
export default App
