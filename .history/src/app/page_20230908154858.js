import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Product from '@/components/Product'
import Testimonial from '@/components/Testimonial'

export default function Home() {
  return (
    <>
      <Navbar theme="white" position="absolute"/>
      <Hero />
      <Product />
      <Testimonial />
      <Footer />
    </>
  )
}
