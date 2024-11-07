import Image from "next/image"
import logoBlack from "../../public/images/ciridian-logo-black.svg"
import Link from "next/link"

export const metadata = {
  title: "Ciridian.com - Privacy Policy",
  description: "Ciridian.com will be launching in 2025."
}

export default function PageLayout({ children }) {
  return (
    <>
      <header className="p-3">
        <h1 className="d-inline-block">
          <Link href="/">
            <Image src={logoBlack} alt="Ciridian - Home Page" className="img-fluid" />
          </Link>
        </h1>
      </header>
      <main className="content-page p-3">{children}</main>
      <Link href="/" className="back-home-btn btn btn-dark m-3 icon-link icon-link-hover">
        <i className="bi bi bi-chevron-double-left"></i>
        Back to Home
      </Link>
    </>
  )
}
