"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Globe } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    enquiryType: "",
    address: "",
    city: "",
    postcode: "",
    country: "",
    projectName: "",
    role: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Thank you for your enquiry. We will contact you soon!")
    setFormData({
      enquiryType: "",
      address: "",
      city: "",
      postcode: "",
      country: "",
      projectName: "",
      role: "",
      message: "",
    })
  }

  return (
    <section id="contact" className="w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Contact Us</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Left Column */}
          <div>
            {/* Map */}
            <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden mb-8 bg-muted">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.5893220347226!2d77.5!3d28.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDMwJzAwLjAiTiA3N8KwMzAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Company Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Twinkle Lite</h3>
                <p className="text-muted-foreground">Your Partner in Lighting Excellence</p>
              </div>

              {/* Locations */}
              <div>
                <h4 className="font-semibold text-foreground mb-3">Our Offices</h4>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Corporate Office</p>
                      <p className="text-sm text-muted-foreground">456 Industrial Park, New Delhi 110016</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Manufacturing Unit</p>
                      <p className="text-sm text-muted-foreground">123 Manufacturing Zone, Faridabad 121001</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Showroom</p>
                      <p className="text-sm text-muted-foreground">789 Commercial Plaza, Mumbai 400001</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 pt-4 border-t border-border">
                <div className="flex gap-3 items-start">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium text-foreground">+91 11 4567 8900</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium text-foreground">info@twinkleLite.com</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <Globe className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Website</p>
                    <p className="font-medium text-foreground">www.twinkleLite.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Enquiry Form */}
          <div className="bg-secondary rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Send Enquiry</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Type of Enquiry */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Type of Enquiry</label>
                <select
                  name="enquiryType"
                  value={formData.enquiryType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-md bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select an option</option>
                  <option value="product">Product Enquiry</option>
                  <option value="service">Service Support</option>
                  <option value="ordering">Ordering</option>
                  <option value="business">Business Opportunity</option>
                  <option value="career">Career</option>
                  <option value="other">Others</option>
                </select>
              </div>

              {/* Address */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Address</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full px-4 py-2 border border-border rounded-md bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
              </div>

              {/* City */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-md bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Postcode */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Postcode / ZIP</label>
                <input
                  type="text"
                  name="postcode"
                  value={formData.postcode}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-md bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Country */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Country</label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-md bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Project Name */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Project Name</label>
                <input
                  type="text"
                  name="projectName"
                  value={formData.projectName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-md bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Your Role */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Your Role in Project</label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-md bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select your role</option>
                  <option value="architect">Architect</option>
                  <option value="designer">Lighting Designer</option>
                  <option value="consultant">Electrical Consultant</option>
                  <option value="installer">Installer</option>
                  <option value="client">Client</option>
                  <option value="other">Others</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Your Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-border rounded-md bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground font-semibold py-3 rounded-md hover:bg-accent transition-colors"
              >
                Send Enquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
