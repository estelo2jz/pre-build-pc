import React from "react";
import './styles/privacy.scss';

export default function Privacy() {
  return (
    <div className="privacy">
    <div className="privacy__container">
      <h1>Privacy Policy</h1>
      <p>Your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your personal information when you visit our website or use our services.</p>

      <section>
        <h2>1. Information We Collect</h2>
        <p>We may collect personal information such as your name, email address, shipping address, phone number, and payment details when you make a purchase or contact us.</p>
      </section>

      <section>
        <h2>2. How We Use Your Information</h2>
        <p>We use your information to process transactions, fulfill orders, send updates, respond to inquiries, and improve our services. We do not sell your information to third parties.</p>
      </section>

      <section>
        <h2>3. Cookies & Tracking</h2>
        <p>We use cookies to enhance user experience, analyze website traffic, and tailor marketing efforts. You can manage cookie preferences in your browser settings.</p>
      </section>

      <section>
        <h2>4. Data Security</h2>
        <p>We implement industry-standard security measures to protect your information. However, no online transmission or storage is 100% secure, and we cannot guarantee absolute security.</p>
      </section>

      <section>
        <h2>5. Third-Party Services</h2>
        <p>We may use third-party services such as payment processors and analytics tools. These providers have their own privacy policies governing their data use.</p>
      </section>

      <section>
        <h2>6. Children's Privacy</h2>
        <p>Our services are not intended for children under 13. We do not knowingly collect personal data from minors without parental consent.</p>
      </section>

      <section>
        <h2>7. Updates to This Policy</h2>
        <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.</p>
      </section>

      <section>
        <h2>8. Contact Us</h2>
        <p>If you have questions about this policy, please <a href="/contact">contact us</a>.</p>
      </section>

      <p className="privacy__footer">By using our website, you agree to this privacy policy.</p>
    </div>
  </div>
  );
}
