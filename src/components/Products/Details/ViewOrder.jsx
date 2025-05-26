import React from "react";
import "./styles/ViewOrder.scss";

export default function ViewOrder() {
  // Dummy order data (replace with props or actual state later)
  const order = {
    orderId: "ORD-582439",
    date: "May 26, 2025",
    customer: {
      name: "James Smith",
      email: "james.smith@example.com",
      address: "123 Main St, Chicago, IL 60601",
    },
    items: [
      {
        name: "Gaming PC - Ryzen 7 / RTX 4070",
        quantity: 1,
        price: 1499,
        image: "https://source.unsplash.com/featured/?pc",
      },
      {
        name: "RGB Mechanical Keyboard",
        quantity: 1,
        price: 99,
        image: "https://source.unsplash.com/featured/?keyboard",
      },
    ],
    total: 1598,
  };

  return (
    <section className="view-order">
      <div className="view-order__container">
        <h2>Thank you for your purchase!</h2>
        <p className="view-order__subtitle">
          Your order has been placed successfully. Here's your order summary:
        </p>

        <div className="view-order__grid">
          {/* Order Summary */}
          <div className="view-order__card order-summary">
            <h3>Order Summary</h3>
            <p><strong>Order ID:</strong> {order.orderId}</p>
            <p><strong>Order Date:</strong> {order.date}</p>
            <p><strong>Total:</strong> ${order.total.toFixed(2)}</p>
          </div>

          {/* Shipping Info */}
          <div className="view-order__card shipping-info">
            <h3>Shipping Information</h3>
            <p><strong>Name:</strong> {order.customer.name}</p>
            <p><strong>Email:</strong> {order.customer.email}</p>
            <p><strong>Address:</strong> {order.customer.address}</p>
          </div>

          {/* Products */}
          <div className="view-order__card products">
            <h3>Items Purchased</h3>
            {order.items.map((item, index) => (
              <div className="product-item" key={index}>
                <img src={item.image} alt={item.name} />
                <div>
                  <p><strong>{item.name}</strong></p>
                  <p>Qty: {item.quantity}</p>
                  <p>${item.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
