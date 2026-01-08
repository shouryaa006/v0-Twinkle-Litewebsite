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
    <main className="flex flex-col w-full">

      <section id="hero">
        <Hero />
      </section>

      <section id="categories">
        <Categories />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="products">
        <Products />
      </section>

      <section id="downloads">
        <Downloads />
      </section>

      <section id="contact">
        <Contact />
      </section>

    </main>
  );
}

