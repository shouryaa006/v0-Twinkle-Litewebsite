import Header from "@/components/header"
import HeroSlider from "@/components/hero-slider"
import ProductCategories from "@/components/product-categories"
import AboutSection from "@/components/about-section"
import ProjectsSection from "@/components/projects-section"
import ProductsSection from "@/components/products-section"
import DownloadsSection from "@/components/downloads-section"
import ContactSection from "@/components/contact-section"

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <HeroSlider />
      <ProductCategories />
      <AboutSection />
      <ProjectsSection />
      <ProductsSection />
      <DownloadsSection />
      <ContactSection />
    </main>
  )
}
