import React, { useState } from "react";
import "./GetMyRate.scss";

export default function GetMyRate() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    amount: "10000", // Default starting value for instant calculator feedback
    term: "36",      // Default term in months (3 years)
    purpose: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // 🧮 Live Loan Calculation Formula
  // Assumes a standard estimated annual interest rate of 8.5% (approx. 0.00708 monthly)
  const calculateMonthlyPayment = () => {
    const principal = parseFloat(formData.amount);
    const months = parseInt(formData.term, 10);
    const annualInterestRate = 0.085; 
    const monthlyInterestRate = annualInterestRate / 12;

    if (!principal || principal <= 0 || !months) return 0;

    const payment =
      (principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, months)) /
      (Math.pow(1 + monthlyInterestRate, months) - 1);

    return payment.toFixed(2);
  };

  const monthlyPayment = calculateMonthlyPayment();
  const totalEstimatedPayment = (monthlyPayment * parseInt(formData.term || 0, 10)).toFixed(2);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Rate request submitted successfully for $${formData.amount}! Estimated monthly payment: $${monthlyPayment}`);
    // You can integrate your API call here
  };

  return (
    <section className="get-rate">
      <div className="get-rate__container">
        <h2>Get My Rate</h2>
        <p>Calculate your estimated monthly payments instantly with zero impact on your credit score.</p>

        {/* 📊 Live Calculator Summary Display Box */}
        <div className="get-rate__summary">
          <div className="get-rate__summary-card">
            <span>Estimated Monthly Payment</span>
            <h3>${monthlyPayment > 0 ? Number(monthlyPayment).toLocaleString() : "0.00"}</h3>
            <p>Based on an estimated 8.5% APR* over {formData.term} months</p>
          </div>
          <div className="get-rate__summary-breakdown">
            <p>Total Loan Amount: <span>${formData.amount ? Number(formData.amount).toLocaleString() : "0"}</span></p>
            <p>Total Estimated Cost: <span>${monthlyPayment > 0 ? Number(totalEstimatedPayment).toLocaleString() : "0.00"}</span></p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="get-rate__form">
          {/* <div className="get-rate__field">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              placeholder="John Doe"
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
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div> */}

          <div className="get-rate__field">
            <label htmlFor="amount">Loan Amount ($)</label>
            <input
              type="number"
              name="amount"
              id="amount"
              min="500"
              max="100000"
              step="100"
              value={formData.amount}
              onChange={handleChange}
              required
            />
          </div>

          <div className="get-rate__field">
            <label htmlFor="term">Repayment Term (Months)</label>
            <select
              name="term"
              id="term"
              value={formData.term}
              onChange={handleChange}
              required
            >
              <option value="12">12 Months (1 Year)</option>
              <option value="24">24 Months (2 Years)</option>
              <option value="36">36 Months (3 Years)</option>
              <option value="48">48 Months (4 Years)</option>
              <option value="60">60 Months (5 Years)</option>
            </select>
          </div>

          {/* <div className="get-rate__field">
            <label htmlFor="purpose">Loan Purpose</label>
            <select
              name="purpose"
              id="purpose"
              value={formData.purpose}
              onChange={handleChange}
              required
            >
              <option value="">Select purpose</option>
              <option value="personal">Personal Use</option>
              <option value="business">Business Build / Tech</option>
              <option value="auto">Auto Purchase</option>
              <option value="home">Home Improvement</option>
            </select>
          </div> */}

          {/* <button type="submit" className="get-rate__submit">
            Check My Official Rate
          </button> */}
        </form>
      </div>
    </section>
  );
}