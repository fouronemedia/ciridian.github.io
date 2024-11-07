import Link from "next/link"

export default function Page() {
  return (
    <>
      <h2 className="mb-4">Privacy Policy</h2>
      <div className="row">
        <div className="col-12 col-lg-7">
          <div>
            <p className="font-weight-bold">1. Introduction</p>
            <p>We value your privacy and are committed to protecting your personal information. This Privacy Policy describes how we collect, use, and share your information when you use www.ciridian.com.</p>
          </div>
          <div>
            <p className="font-weight-bold">2. Information Collection</p>
            <p>We collect information you provide directly to us, such as your name, email address, and any messages you send us. We also collect data automatically through cookies and third-party analytics tools. </p>
          </div>
          <div>
            <p className="font-weight-bold">3. How We Use Information</p>
            <p>We use your information to improve our services, personalize your experience, and communicate with you about updates. We may also use your information for advertising purposes, with your consent.</p>
          </div>
          <div>
            <p className="font-weight-bold">4. Information</p>
            <p>Sharing We do not share your personal data with third parties except as necessary to provide our services (e.g., payment processors, analytics providers) and with your consent.</p>
          </div>
          <div>
            <p className="font-weight-bold">5. Data Security</p>
            <p>We use industry-standard security measures to protect your information, including encryption and secure servers.</p>
          </div>
          <div>
            <p className="font-weight-bold">6. Your Rights</p>
            <p>
              You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at <Link href="mailto:info@ciridian.com">info@ciridian.com</Link>.{" "}
            </p>
          </div>
          <div>
            <p className="font-weight-bold">7. Cookies</p>
            <p>Our website uses cookies to improve your experience. You can control cookie settings through your browser preferences.</p>
          </div>
          <div>
            <p className="font-weight-bold">8. Policy Changes</p>
            <p>We may update this policy occasionally and will notify you of any significant changes.</p>
          </div>
          <div>
            <p className="font-weight-bold">9. Contact Us</p> If you have questions about this policy, please contact us at info@ciridian.com.
          </div>
        </div>
      </div>
    </>
  )
}
