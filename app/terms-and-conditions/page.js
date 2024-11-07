import Link from "next/link"

export default function Page() {
  return (
    <div>
      <h2 className="mb-4">Terms & Conditions</h2>
      <div className="row">
        <div className="col-12 col-lg-7">
          <div>
            <p className="font-weight-bold">1. Acceptance of Terms</p>
            <p>By accessing or using www.ciridian.com, you agree to these Terms and Conditions. If you do not agree, you must refrain from using the website.</p>
          </div>
          <div>
            <p className="font-weight-bold">2. User Responsibilities</p>
            <p>You agree to use www.ciridian.com responsibly and not for unlawful purposes. You must provide accurate information and refrain from violating the rights of others.</p>
          </div>
          <div>
            <p className="font-weight-bold">3. Account Information</p>
            <p>If creating an account, you agree to maintain its confidentiality and accept responsibility for activities under your account.</p>
          </div>
          <div>
            <p className="font-weight-bold">4. Intellectual Property</p>
            <p>All content on this site, including logos, text, and graphics, is owned by or licensed to us and protected by intellectual property laws. You may not use this content without permission.</p>
          </div>
          <div>
            <p className="font-weight-bold">5. Prohibited Activities</p>
            <p>You agree not to engage in activities that harm the site or its users, such as hacking, scraping, or posting offensive material.</p>
          </div>
          <div>
            <p className="font-weight-bold">6. Third-Party Links</p>
            <p>Our website may contain links to third-party sites. We are not responsible for the content or practices of these websites.</p>
          </div>
          <div>
            <p className="font-weight-bold">7. Disclaimer of Warranties</p>
            <p>www.ciridian.com is provided “as is” without warranties of any kind, express or implied. We make no guarantees regarding site availability, security, or accuracy.</p>
          </div>
          <div>
            <p className="font-weight-bold">8. Limitation of Liability</p>
            <p>We are not liable for any damages resulting from your use of this site, including direct, indirect, and consequential damages.</p>
          </div>
          <div>
            <p className="font-weight-bold">9. Termination</p>
            <p>We reserve the right to terminate access to www.ciridian.com for users who violate these terms.</p>
          </div>
          <div>
            <p className="font-weight-bold">10. Governing Law</p>
            <p>These terms are governed by the laws of Texas, USA</p>
          </div>
          <div>
            <p className="font-weight-bold">11. Changes to Terms</p>
            <p>We reserve the right to update these terms at any time. Continued use of the website indicates acceptance of any modifications.</p>
          </div>
          <div>
            <p className="font-weight-bold">12. Contact Us</p>
            <p>
              For questions regarding these Terms and Conditions, please contact us at <Link href="mailto:info@ciridian.com">info@ciridian.com</Link>.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
