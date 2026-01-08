"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: "/modern-outdoor-lighting-product.jpg",
      title: "Premium Outdoor Lighting",
    },
    {
      image: "/elegant-indoor-lighting-design.jpg",
      title: "Elegant Indoor Solutions",
    },
    {
      image: "/professional-pole-lighting-installation.jpg",
      title: "Professional Pole Lighting",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <section className="w-full relative">
      <div className="w-full h-96 md:h-screen overflow-hidden bg-muted">
        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`w-full h-full transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0 hidden"
            }`}
          >
            <div className="relative w-full h-full">
              <Image
                src={slide.image || "/placeholder.svg"}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>
          </div>
        ))}

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? "bg-primary w-8" : "bg-white/50 hover:bg-white"
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
