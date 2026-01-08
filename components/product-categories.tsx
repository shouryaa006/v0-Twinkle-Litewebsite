"use client"

import Image from "next/image"

const categories = [
  {
    title: "Outdoor",
    image: "/outdoor-street-lighting-products.jpg",
  },
  {
    title: "Indoor",
    image: "/modern-indoor-ceiling-lights.jpg",
  },
  {
    title: "Poles",
    image: "/professional-lighting-poles-structure.jpg",
  },
]

export default function ProductCategories() {
  return (
    <section className="w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Our Product Categories</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {categories.map((category) => (
            <div
              key={category.title}
              className="hover-glow group relative overflow-hidden rounded-lg bg-card shadow-md transition-all duration-300"
            >
              <div className="relative h-64 md:h-72 overflow-hidden bg-muted">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6 bg-card">
                <h3 className="text-xl md:text-2xl font-semibold text-foreground text-center">{category.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
