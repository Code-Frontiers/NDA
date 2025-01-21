import React from "react"
import ProductCard from "../../Components/products/ProductCard"

import gallery_1 from "../../assets/gallery-1.jpg"
import gallery_2 from "../../assets/gallery-2.jpg"
import gallery_3 from "../../assets/gallery-3.jpg"
import gallery_4 from "../../assets/gallery-4.jpg"
import gallery_5 from "../../assets/gallery-5.jpg"
import gallery_6 from "../../assets/gallery-6.jpg"
import gallery_7 from "../../assets/gallery-7.jpeg"

const productData = [
  {
    id: 1,
    name: "Single Part Dispensing",
    description: "High-precision single part dispensing solutions.",
    link: "/products/single-part-dispensing",
    image: gallery_1,
  },
  {
    id: 2,
    name: "Two Part Dispensing",
    description: "Efficient two-part dispensing systems for industrial needs.",
    link: "/products/two-part-dispensing",
    image: gallery_2,
  },
  {
    id: 3,
    name: "Dispensing Robots",
    description: "Advanced robots for automated dispensing.",
    link: "/products/dispensing-robots",
    image: gallery_3,
  },
  {
    id: 4,
    name: "Piston Pumps",
    description: "Durable piston pumps for fluid handling.",
    link: "/products/piston-pumps",
    image: gallery_4,
  },
  {
    id: 5,
    name: "Industrial Automations",
    description: "Innovative automation solutions for industries.",
    link: "/products/industrial-automations",
    image: gallery_5,
  },
  {
    id: 6,
    name: "Pressurized Fluid Tanks",
    description: "Reliable pressurized tanks for fluid storage.",
    link: "/products/pressurized-fluid-tanks",
    image: gallery_6,
  },
  {
    id: 7,
    name: "Pidilite Industrial Bonding",
    description: "High-strength adhesives for industrial applications.",
    link: "/products/pidilite-industrial-bonding",
    image: gallery_7,
  },
]

const Products = () => {
  return (
    <main className="products-page">
      <header className="products-header">
        <h1>Our Products</h1>
        <p>Explore our wide range of high-quality industrial solutions.</p>
      </header>
      <section className="products-grid">
        {productData.map((product, index) => (
          <ProductCard key={index} index={index} product={product} />
        ))}
      </section>
    </main>
  )
}

export default Products
