import React, { useState } from "react";
import "./GetMyRate.scss";

export default function GetMyRate() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    amount: "",
    purpose: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Rate request submitted!");
    // you can integrate API call here
  };

  return (
    <section className="get-rate">
      <div className="get-rate__container">
        <h2>Get My Rate</h2>
        <p>Find out what you qualify for in seconds with no impact on your credit score.</p>

        <form onSubmit={handleSubmit} className="get-rate__form">
          <div className="get-rate__field">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="get-rate__field">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="get-rate__field">
            <label htmlFor="amount">Loan Amount ($)</label>
            <input
              type="number"
              name="amount"
              id="amount"
              value={formData.amount}
              onChange={handleChange}
              required
            />
          </div>

          <div className="get-rate__field">
            <label htmlFor="purpose">Purpose</label>
            <select
              name="purpose"
              id="purpose"
              value={formData.purpose}
              onChange={handleChange}
              required
            >
              <option value="">Select purpose</option>
              <option value="personal">Personal Use</option>
              <option value="business">Business</option>
              <option value="auto">Auto Purchase</option>
              <option value="home">Home Improvement</option>
            </select>
          </div>

          <button type="submit" className="get-rate__submit">
            Check My Rate
          </button>
        </form>
      </div>
    </section>
  );
}
