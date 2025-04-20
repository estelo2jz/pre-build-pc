import React from "react";
import './styles/refund.scss';

export default function Refund() {
  return (
<div className="refund">
      <div className="refund__container">
        <h1>Refund & Return Policy</h1>
        <p>We want you to be satisfied with your purchase. Please review our refund and return policy carefully before completing your order.</p>

        <section>
          <h2>1. Eligibility for Returns</h2>
          <p>You may return most new, unopened items within 14 days of delivery for a full refund. Items must be in their original condition and packaging.</p>
        </section>

        <section>
          <h2>2. Non-Returnable Items</h2>
          <p>Certain items such as software, digital downloads, customized PCs, and clearance products are non-refundable. Opened CPUs and motherboards may also be ineligible for return unless defective.</p>
        </section>

        <section>
          <h2>3. Restocking Fees</h2>
          <p>A 15% restocking fee may apply to opened items or returns that are not in original condition. Shipping charges are non-refundable.</p>
        </section>

        <section>
          <h2>4. Refund Process</h2>
          <p>Refunds will be issued to the original payment method within 5-10 business days after the return is received and inspected. We will notify you once your refund is processed.</p>
        </section>

        <section>
          <h2>5. Exchanges</h2>
          <p>If you receive a defective or damaged item, we will replace it at no additional cost. Contact us within 7 days of delivery to request an exchange.</p>
        </section>

        <section>
          <h2>6. Return Instructions</h2>
          <p>To initiate a return, please <a href="/contact">contact us</a> with your order number and reason for return. We will provide instructions and a return authorization if eligible.</p>
        </section>

        <p className="refund__footer">By purchasing from our store, you agree to the terms of this refund policy.</p>
      </div>
    </div>
  );
}
