import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import "./global.scss"
import Link from "next/link"

export const metadata = {
  title: "Welcome to Ciridian.com",
  description: "Ciridian.com will be launching in 2025."
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/jdi8zwe.css"></link>
      </head>
      <body>
        {children}
        <footer className="bg-black text-center p-3">
          <div className="text-white my-3">&copy; 2024 Ciridian, Inc. All Rights Reserved.</div>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <span className="text-white mx-3"> | </span>
          <Link href="/terms-and-conditions">Terms &amp; Conditions</Link>
        </footer>
      </body>
    </html>
  )
}
