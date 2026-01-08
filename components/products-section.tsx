import Image from "next/image"

const products = [
  {
    name: "LED Flood Light Pro",
    image: "/professional-led-flood-light.jpg",
  },
  {
    name: "Smart Street Light System",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Indoor Panel Lights",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Decorative Pendant Series",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Garden Spike Lights",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "High Mast Towers",
    image: "/placeholder.svg?height=300&width=400",
  },
]

export default function ProductsSection() {
  return (
    <section id="products" className="w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Our Products</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.name}
              className="group relative overflow-hidden rounded-lg bg-card shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative h-64 bg-muted overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4 bg-card">
                <p className="text-foreground font-semibold text-center">{product.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
