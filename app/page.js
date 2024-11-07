import Link from "next/link"
import Image from "next/image"
import logo from "../public/images/ciridian-logo.svg"
import ContactForm from "../components/ContactForm"

export default function Page() {
  return (
    <div>
      <section className="hero px-4 py-5 text-center vh-100 position-relative">
        <Image src={logo} className="logo img-fluid" alt="Welcome to Ciridian" />
      </section>
      <section className="welcome-section text-center">
        <h1>Welcome to Ciridian</h1>
        <p className="text-uppercase">Launching 2025</p>
      </section>
      <section className="contact-section">
        <h2 className="text-center py-3">Contact us</h2>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4 mx-auto">
            <ContactForm />
          </div>
          <div className="col-12 col-md-6 col-lg-4 visually-hidden">Extra Content Here</div>
        </div>
      </section>
    </div>
  )
}
