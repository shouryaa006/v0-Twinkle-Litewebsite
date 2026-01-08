import Image from "next/image"

const projects = [
  {
    name: "Metropolitan Plaza Lighting",
    image: "/modern-plaza-lighting-installation.jpg",
  },
  {
    name: "Residential Complex Project",
    image: "/residential-building-lighting-design.jpg",
  },
  {
    name: "Highway Illumination System",
    image: "/highway-street-lighting-project.jpg",
  },
  {
    name: "Commercial Mall Integration",
    image: "/shopping-mall-interior-lighting.jpg",
  },
  {
    name: "Industrial Facility Lights",
    image: "/industrial-warehouse-lighting.jpg",
  },
  {
    name: "Garden Landscape Lighting",
    image: "/outdoor-garden-landscape-lighting.jpg",
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Our Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group relative overflow-hidden rounded-lg bg-card shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative h-64 bg-muted overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4 bg-card">
                <p className="text-foreground font-semibold text-center">{project.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
