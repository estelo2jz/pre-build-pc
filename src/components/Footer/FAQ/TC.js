import React, { Component } from 'react'
import './styles/tc.scss';

export default class TC extends Component {
  render() {
    return (
      <div className="terms">
      <div className="terms__container">
        <h1>Terms & Conditions</h1>
        <p>Welcome to our Computer Shop. By accessing or using our website and services, you agree to be bound by the following terms and conditions:</p>

        <section>
          <h2>1. Product Information</h2>
          <p>We make every effort to display accurate product descriptions and images. However, we do not warrant that all information is current, complete, or error-free. Specifications are subject to change without notice.</p>
        </section>

        <section>
          <h2>2. Warranty & Returns</h2>
          <p>Most products come with a limited manufacturer warranty. Please review the warranty provided by each manufacturer. Returns are accepted within 14 days of purchase for unopened items. Opened or used items may be subject to a restocking fee.</p>
        </section>

        <section>
          <h2>3. Order Processing</h2>
          <p>Orders are typically processed within 1-3 business days. Shipping times may vary depending on your location. We are not responsible for shipping delays caused by carriers.</p>
        </section>

        <section>
          <h2>4. Pricing & Payment</h2>
          <p>All prices are listed in USD. We reserve the right to change prices at any time. Payment must be received in full before orders are shipped.</p>
        </section>

        <section>
          <h2>5. Limitation of Liability</h2>
          <p>We are not liable for any direct, indirect, incidental, or consequential damages that result from the use of or inability to use our products or services.</p>
        </section>

        <section>
          <h2>6. Privacy</h2>
          <p>We respect your privacy and handle your data in accordance with our <a href="/privacy-policy">Privacy Policy</a>. We do not sell your personal information to third parties.</p>
        </section>

        <section>
          <h2>7. Modifications</h2>
          <p>We reserve the right to update these terms at any time. Changes will be effective immediately upon posting on our website.</p>
        </section>

        <p className="terms__footer">By using our website, you agree to these terms. If you have any questions, feel free to contact us.</p>
      </div>
    </div>
    )
  }
}