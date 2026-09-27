import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "./Data/DataProvider";
import Modal from "./components/Modal/Modal" // Adjust path to your Modal component if needed

import "./styles/Customize.scss";

export default function Customize() {
  const { id } = useParams();
  const value = useContext(DataContext);
  const [products] = value.products || [[]];
  const [cart, setCart] = value.cart; // Directly access cart state and setter

  // Modal visibility state
  const [isOpen, setIsOpen] = useState(false);

  // Find the selected base PC product from context
  const baseProduct = products.find((p) => p._id === id) || {
    _id: id || "custom-pc-1",
    title: "Custom Gaming Rig",
    price: 1499,
    images: ["https://source.unsplash.com/featured/?pc"],
  };

  // Available upgrade part categories and options
  const upgradeOptions = {
    cpu: [
      { name: "AMD Ryzen 5 7600X", price: 0 },
      { name: "AMD Ryzen 7 7800X3D", price: 150 },
      { name: "Intel Core i9-14900K", price: 320 },
    ],
    gpu: [
      { name: "NVIDIA RTX 4070 12GB", price: 0 },
      { name: "NVIDIA RTX 4070 Ti Super", price: 200 },
      { name: "NVIDIA RTX 4080 Super", price: 550 },
    ],
    ram: [
      { name: "16GB DDR5 5600MHz", price: 0 },
      { name: "32GB DDR5 6000MHz RGB", price: 90 },
      { name: "64GB DDR5 6000MHz RGB", price: 220 },
    ],
    storage: [
      { name: "1TB NVMe M.2 SSD", price: 0 },
      { name: "2TB NVMe M.2 Gen4 SSD", price: 110 },
      { name: "4TB NVMe M.2 High-Speed SSD", price: 280 },
    ],
  };

  // State to track user selections
  const [selectedParts, setSelectedParts] = useState({
    cpu: upgradeOptions.cpu[0],
    gpu: upgradeOptions.gpu[0],
    ram: upgradeOptions.ram[0],
    storage: upgradeOptions.storage[0],
  });

  const handleSelectPart = (category, part) => {
    setSelectedParts((prev) => ({
      ...prev,
      [category]: part,
    }));
  };

  // Calculate total price dynamically
  const calculateTotal = () => {
    const base = baseProduct.price || 1499;
    const upgrades = Object.values(selectedParts).reduce((acc, curr) => acc + curr.price, 0);
    return base + upgrades;
  };

  const handleAddToCart = () => {
    const finalPrice = calculateTotal();
    
    // Create a descriptive title including customized parts so it displays nicely in the cart
    const customTitle = `${baseProduct.title} [CPU: ${selectedParts.cpu.name} | GPU: ${selectedParts.gpu.name} | RAM: ${selectedParts.ram.name} | SSD: ${selectedParts.storage.name}]`;

    // Construct the customized product object matching your cart structure
    const customRigItem = {
      ...baseProduct,
      _id: `${baseProduct._id}-${Date.now()}`, // Unique cart ID for this specific customized configuration
      title: customTitle,
      price: finalPrice, // Final updated price with upgrades
      count: 1,
    };

    // Append to cart state properly using setCart
    setCart([...cart, customRigItem]);

    // Open your success modal
    setIsOpen(true);
  };

  return (
    <section className="customize">
      <div className="customize__container">
        
        {/* Header */}
        <div className="customize__header">
          <h2>Customize Your Rig</h2>
          <p className="customize__subtitle">
            Configure hardware components for <strong>{baseProduct.title}</strong>
          </p>
        </div>

        <div className="customize__layout">
          
          {/* Options Selection Area */}
          <div className="customize__options-grid">
            
            {/* CPU Selection */}
            <div className="customize__card">
              <h3>Processor (CPU)</h3>
              <div className="customize__chips">
                {upgradeOptions.cpu.map((part, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`chip ${selectedParts.cpu.name === part.name ? "active" : ""}`}
                    onClick={() => handleSelectPart("cpu", part)}
                  >
                    <span>{part.name}</span>
                    <span className="chip-price">+{part.price === 0 ? "Included" : `$${part.price}`}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* GPU Selection */}
            <div className="customize__card">
              <h3>Graphics Card (GPU)</h3>
              <div className="customize__chips">
                {upgradeOptions.gpu.map((part, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`chip ${selectedParts.gpu.name === part.name ? "active" : ""}`}
                    onClick={() => handleSelectPart("gpu", part)}
                  >
                    <span>{part.name}</span>
                    <span className="chip-price">+{part.price === 0 ? "Included" : `$${part.price}`}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* RAM Selection */}
            <div className="customize__card">
              <h3>Memory (RAM)</h3>
              <div className="customize__chips">
                {upgradeOptions.ram.map((part, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`chip ${selectedParts.ram.name === part.name ? "active" : ""}`}
                    onClick={() => handleSelectPart("ram", part)}
                  >
                    <span>{part.name}</span>
                    <span className="chip-price">+{part.price === 0 ? "Included" : `$${part.price}`}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Storage Selection */}
            <div className="customize__card">
              <h3>Storage (SSD)</h3>
              <div className="customize__chips">
                {upgradeOptions.storage.map((part, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`chip ${selectedParts.storage.name === part.name ? "active" : ""}`}
                    onClick={() => handleSelectPart("storage", part)}
                  >
                    <span>{part.name}</span>
                    <span className="chip-price">+{part.price === 0 ? "Included" : `$${part.price}`}</span>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Sticky Summary Sidebar */}
          <div className="customize__summary-sidebar">
            <div className="summary-card">
              <h3>Configuration Summary</h3>
              <div className="summary-item">
                <span>Base PC</span>
                <strong>${baseProduct.price || 1499}</strong>
              </div>
              <div className="summary-item">
                <span>CPU: {selectedParts.cpu.name}</span>
                <strong>{selectedParts.cpu.price === 0 ? "$0" : `+$${selectedParts.cpu.price}`}</strong>
              </div>
              <div className="summary-item">
                <span>GPU: {selectedParts.gpu.name}</span>
                <strong>{selectedParts.gpu.price === 0 ? "$0" : `+$${selectedParts.gpu.price}`}</strong>
              </div>
              <div className="summary-item">
                <span>RAM: {selectedParts.ram.name}</span>
                <strong>{selectedParts.ram.price === 0 ? "$0" : `+$${selectedParts.ram.price}`}</strong>
              </div>
              <div className="summary-item">
                <span>Storage: {selectedParts.storage.name}</span>
                <strong>{selectedParts.storage.price === 0 ? "$0" : `+$${selectedParts.storage.price}`}</strong>
              </div>

              <div className="summary-total">
                <span>Total Price</span>
                <span className="total-amount">${calculateTotal().toFixed(2)}</span>
              </div>

              <button type="button" className="btn btn--primary" onClick={handleAddToCart}>
                Add Custom Rig to Cart
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Glassmorphic Success Modal */}
      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </section>
  );
}