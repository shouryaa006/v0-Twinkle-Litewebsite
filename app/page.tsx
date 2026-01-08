import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Products from "@/components/Products";
import Downloads from "@/components/Downloads";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="w-full flex flex-col">

      <section className="w-full">
        <Hero />
      </section>

      <section className="w-full">
        <Categories />
      </section>

      <section className="w-full">
        <About />
      </section>

      <section className="w-full">
        <Projects />
      </section>

      <section className="w-full">
        <Products />
      </section>

      <section className="w-full">
        <Downloads />
      </section>

      <section className="w-full">
        <Contact />
      </section>

    </main>
  );
}
