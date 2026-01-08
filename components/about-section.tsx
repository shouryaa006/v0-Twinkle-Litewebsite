import Image from "next/image"

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">About Twinkle Lite</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-foreground">Our Story</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Founded in 1998, Twinkle Lite has been at the forefront of India's lighting industry, delivering
              innovative and sustainable lighting solutions for over two decades.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With a commitment to quality and excellence, we have become a trusted partner for architects, engineers,
              and businesses across India, providing comprehensive lighting solutions for residential, commercial, and
              industrial projects.
            </p>
          </div>

          <div className="relative h-80 md:h-full min-h-96 rounded-lg overflow-hidden">
            <Image
              src="/modern-manufacturing-facility-lighting.jpg"
              alt="Manufacturing facility"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Video Section */}
        <div className="bg-muted rounded-lg overflow-hidden">
          <div className="relative w-full h-96 md:h-[500px]">
            <Image
              src="/company-video-thumbnail-professional-lighting.jpg"
              alt="Company video"
              fill
              className="object-cover"
            />
            <button className="absolute inset-0 flex items-center justify-center hover:bg-black/40 transition-colors group">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center group-hover:bg-accent transition-colors">
                <span className="text-primary-foreground ml-1">▶</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
