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
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"></link>
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet"></link>
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
