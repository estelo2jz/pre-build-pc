import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "./Data/DataProvider";
import Modal from "./components/Modal/Modal"; // Adjust path to your Modal component if needed

import "./styles/StartBuild.scss";

export default function StartBuild() {
  const navigate = useNavigate();
  const value = useContext(DataContext);
  const [cart, setCart] = value.cart || [[], () => {}];
  const [isOpen, setIsOpen] = useState(false);

  // Define steps and parts catalog (20 options per category)
  const steps = ["cpu", "motherboard", "ram", "gpu", "storage", "pccase", "psu"];
  const stepTitles = {
    cpu: "Choose Processor (CPU)",
    motherboard: "Choose Motherboard",
    ram: "Choose Memory (RAM)",
    gpu: "Choose Graphics Card (GPU)",
    storage: "Choose Storage (SSD)",
    pccase: "Choose PC Case",
    psu: "Choose Power Supply (PSU)",
  };

  const catalog = {
    cpu: [
      { id: "c1", name: "AMD Ryzen 3 4100", price: 89, image: "https://source.unsplash.com/featured/?cpu" },
      { id: "c2", name: "AMD Ryzen 5 5600X", price: 159, image: "https://source.unsplash.com/featured/?cpu" },
      { id: "c3", name: "AMD Ryzen 5 7600X", price: 229, image: "https://source.unsplash.com/featured/?cpu" },
      { id: "c4", name: "AMD Ryzen 7 5700X", price: 209, image: "https://source.unsplash.com/featured/?cpu" },
      { id: "c5", name: "AMD Ryzen 7 7700X", price: 299, image: "https://source.unsplash.com/featured/?cpu" },
      { id: "c6", name: "AMD Ryzen 7 7800X3D", price: 389, image: "https://source.unsplash.com/featured/?cpu" },
      { id: "c7", name: "AMD Ryzen 9 7900X", price: 429, image: "https://source.unsplash.com/featured/?cpu" },
      { id: "c8", name: "AMD Ryzen 9 7950X", price: 549, image: "https://source.unsplash.com/featured/?cpu" },
      { id: "c9", name: "AMD Ryzen 9 7950X3D", price: 649, image: "https://source.unsplash.com/featured/?cpu" },
      { id: "c10", name: "AMD Ryzen 5 9600X", price: 279, image: "https://source.unsplash.com/featured/?cpu" },
      { id: "c11", name: "Intel Core i3-12100F", price: 99, image: "https://source.unsplash.com/featured/?cpu" },
      { id: "c12", name: "Intel Core i5-12400F", price: 139, image: "https://source.unsplash.com/featured/?cpu" },
      { id: "c13", name: "Intel Core i5-13600K", price: 289, image: "https://source.unsplash.com/featured/?cpu" },
      { id: "c14", name: "Intel Core i5-14600KF", price: 279, image: "https://source.unsplash.com/featured/?cpu" },
      { id: "c15", name: "Intel Core i7-12700K", price: 249, image: "https://source.unsplash.com/featured/?cpu" },
      { id: "c16", name: "Intel Core i7-13700K", price: 379, image: "https://source.unsplash.com/featured/?cpu" },
      { id: "c17", name: "Intel Core i7-14700K", price: 409, image: "https://source.unsplash.com/featured/?cpu" },
      { id: "c18", name: "Intel Core i9-13900K", price: 519, image: "https://source.unsplash.com/featured/?cpu" },
      { id: "c19", name: "Intel Core i9-14900K", price: 569, image: "https://source.unsplash.com/featured/?cpu" },
      { id: "c20", name: "Intel Core i9-14900KS", price: 689, image: "https://source.unsplash.com/featured/?cpu" },
    ],
    motherboard: [
      { id: "m1", name: "ASUS Prime A620M-A WiFi", price: 129, image: "https://source.unsplash.com/featured/?motherboard" },
      { id: "m2", name: "MSI MAG B650 Tomahawk WiFi", price: 199, image: "https://source.unsplash.com/featured/?motherboard" },
      { id: "m3", name: "Gigabyte B650 AORUS ELITE AX", price: 219, image: "https://source.unsplash.com/featured/?motherboard" },
      { id: "m4", name: "ASUS TUF GAMING X670E-PLUS WIFI", price: 289, image: "https://source.unsplash.com/featured/?motherboard" },
      { id: "m5", name: "ASUS ROG Strix X670E-E Gaming WiFi", price: 349, image: "https://source.unsplash.com/featured/?motherboard" },
      { id: "m6", name: "MSI MPG X670E CARBON WIFI", price: 419, image: "https://source.unsplash.com/featured/?motherboard" },
      { id: "m7", name: "Gigabyte X670E AORUS MASTER", price: 469, image: "https://source.unsplash.com/featured/?motherboard" },
      { id: "m8", name: "ASUS ROG Crosshair X670E Hero", price: 619, image: "https://source.unsplash.com/featured/?motherboard" },
      { id: "m9", name: "ASRock B650E Steel Legend WiFi", price: 249, image: "https://source.unsplash.com/featured/?motherboard" },
      { id: "m10", name: "NZXT N7 B650E Matte White", price: 279, image: "https://source.unsplash.com/featured/?motherboard" },
      { id: "m11", name: "ASUS Prime H610M-E D4", price: 99, image: "https://source.unsplash.com/featured/?motherboard" },
      { id: "m12", name: "MSI PRO B760-P WIFI DDR4", price: 149, image: "https://source.unsplash.com/featured/?motherboard" },
      { id: "m13", name: "Gigabyte B760 AORUS ELITE AX", price: 179, image: "https://source.unsplash.com/featured/?motherboard" },
      { id: "m14", name: "ASUS TUF GAMING Z790-PLUS WIFI", price: 239, image: "https://source.unsplash.com/featured/?motherboard" },
      { id: "m15", name: "Gigabyte Z790 AORUS Elite AX", price: 239, image: "https://source.unsplash.com/featured/?motherboard" },
      { id: "m16", name: "MSI MPG Z790 EDGE WIFI", price: 319, image: "https://source.unsplash.com/featured/?motherboard" },
      { id: "m17", name: "ASUS ROG Strix Z790-E Gaming WiFi II", price: 449, image: "https://source.unsplash.com/featured/?motherboard" },
      { id: "m18", name: "Gigabyte Z790 AORUS MASTER", price: 489, image: "https://source.unsplash.com/featured/?motherboard" },
      { id: "m19", name: "NZXT N7 Z790 Matte Black", price: 299, image: "https://source.unsplash.com/featured/?motherboard" },
      { id: "m20", name: "ASUS ROG Maximus Z790 Hero", price: 599, image: "https://source.unsplash.com/featured/?motherboard" },
    ],
    ram: [
      { id: "r1", name: "Silicon Power Value 16GB DDR4 3200MHz", price: 39, image: "https://source.unsplash.com/featured/?ram" },
      { id: "r2", name: "Corsair Vengeance LPX 16GB DDR4 3600MHz", price: 45, image: "https://source.unsplash.com/featured/?ram" },
      { id: "r3", name: "G.Skill Ripjaws V 32GB (2x16GB) DDR4 3600MHz", price: 65, image: "https://source.unsplash.com/featured/?ram" },
      { id: "r4", name: "Corsair Vengeance RGB PRO 32GB DDR4 3600MHz", price: 79, image: "https://source.unsplash.com/featured/?ram" },
      { id: "r5", name: "Kingston Fury Beast 64GB (2x32GB) DDR4 3200MHz", price: 119, image: "https://source.unsplash.com/featured/?ram" },
      { id: "r6", name: "Crucial Basic 16GB DDR5 4800MHz", price: 55, image: "https://source.unsplash.com/featured/?ram" },
      { id: "r7", name: "Silicon Power Zenith RGB 32GB DDR5 5600MHz", price: 95, image: "https://source.unsplash.com/featured/?ram" },
      { id: "r8", name: "Corsair Vengeance RGB 32GB (2x16GB) DDR5 6000MHz", price: 115, image: "https://source.unsplash.com/featured/?ram" },
      { id: "r9", name: "G.Skill Flare X5 32GB DDR5 6000MHz CL30", price: 109, image: "https://source.unsplash.com/featured/?ram" },
      { id: "r10", name: "TeamGroup T-Force Delta RGB 32GB DDR5 6000MHz", price: 105, image: "https://source.unsplash.com/featured/?ram" },
      { id: "r11", name: "Kingston Fury Renegade RGB 32GB DDR5 6000MHz", price: 125, image: "https://source.unsplash.com/featured/?ram" },
      { id: "r12", name: "Corsair Dominator Titanium RGB 32GB DDR5 6000MHz", price: 169, image: "https://source.unsplash.com/featured/?ram" },
      { id: "r13", name: "G.Skill Trident Z5 RGB 32GB DDR5 6400MHz", price: 139, image: "https://source.unsplash.com/featured/?ram" },
      { id: "r14", name: "G.Skill Trident Z5 Royal Neo 32GB DDR5 6000MHz", price: 159, image: "https://source.unsplash.com/featured/?ram" },
      { id: "r15", name: "Corsair Vengeance RGB 64GB (2x32GB) DDR5 5600MHz", price: 189, image: "https://source.unsplash.com/featured/?ram" },
      { id: "r16", name: "G.Skill Trident Z5 RGB 64GB (2x32GB) DDR5 6000MHz", price: 219, image: "https://source.unsplash.com/featured/?ram" },
      { id: "r17", name: "Corsair Dominator Titanium 64GB DDR5 6000MHz", price: 249, image: "https://source.unsplash.com/featured/?ram" },
      { id: "r18", name: "Kingston Fury Beast 64GB DDR5 6000MHz", price: 199, image: "https://source.unsplash.com/featured/?ram" },
      { id: "r19", name: "TeamGroup T-Create Expert 64GB DDR5 6000MHz", price: 185, image: "https://source.unsplash.com/featured/?ram" },
      { id: "r20", name: "G.Skill Trident Z5 RGB 96GB (2x48GB) DDR5 6800MHz", price: 349, image: "https://source.unsplash.com/featured/?ram" },
    ],
    gpu: [
      { id: "g1", name: "AMD Radeon RX 6600 8GB", price: 199, image: "https://source.unsplash.com/featured/?gpu" },
      { id: "g2", name: "AMD Radeon RX 7600 8GB", price: 259, image: "https://source.unsplash.com/featured/?gpu" },
      { id: "g3", name: "AMD Radeon RX 6700 XT 12GB", price: 329, image: "https://source.unsplash.com/featured/?gpu" },
      { id: "g4", name: "AMD Radeon RX 7700 XT 12GB", price: 399, image: "https://source.unsplash.com/featured/?gpu" },
      { id: "g5", name: "AMD Radeon RX 7800 XT 16GB", price: 499, image: "https://source.unsplash.com/featured/?gpu" },
      { id: "g6", name: "AMD Radeon RX 7900 XT 20GB", price: 699, image: "https://source.unsplash.com/featured/?gpu" },
      { id: "g7", name: "AMD Radeon RX 7900 XTX 24GB", price: 929, image: "https://source.unsplash.com/featured/?gpu" },
      { id: "g8", name: "NVIDIA GeForce RTX 3060 12GB", price: 279, image: "https://source.unsplash.com/featured/?gpu" },
      { id: "g9", name: "NVIDIA GeForce RTX 4060 8GB", price: 299, image: "https://source.unsplash.com/featured/?gpu" },
      { id: "g10", name: "NVIDIA GeForce RTX 4060 Ti 8GB", price: 379, image: "https://source.unsplash.com/featured/?gpu" },
      { id: "g11", name: "NVIDIA GeForce RTX 4060 Ti 16GB", price: 449, image: "https://source.unsplash.com/featured/?gpu" },
      { id: "g12", name: "NVIDIA GeForce RTX 4070 12GB", price: 549, image: "https://source.unsplash.com/featured/?gpu" },
      { id: "g13", name: "NVIDIA GeForce RTX 4070 Super 12GB", price: 599, image: "https://source.unsplash.com/featured/?gpu" },
      { id: "g14", name: "NVIDIA GeForce RTX 4070 Ti 12GB", price: 699, image: "https://source.unsplash.com/featured/?gpu" },
      { id: "g15", name: "NVIDIA GeForce RTX 4070 Ti Super 16GB", price: 799, image: "https://source.unsplash.com/featured/?gpu" },
      { id: "g16", name: "NVIDIA GeForce RTX 4080 16GB", price: 949, image: "https://source.unsplash.com/featured/?gpu" },
      { id: "g17", name: "NVIDIA GeForce RTX 4080 Super 16GB", price: 999, image: "https://source.unsplash.com/featured/?gpu" },
      { id: "g18", name: "NVIDIA GeForce RTX 4090 24GB", price: 1799, image: "https://source.unsplash.com/featured/?gpu" },
      { id: "g19", name: "Intel Arc A750 8GB", price: 219, image: "https://source.unsplash.com/featured/?gpu" },
      { id: "g20", name: "Intel Arc A770 16GB", price: 289, image: "https://source.unsplash.com/featured/?gpu" },
    ],
    storage: [
      { id: "s1", name: "Kingston NV2 500GB NVMe M.2 SSD", price: 39, image: "https://source.unsplash.com/featured/?ssd" },
      { id: "s2", name: "Crucial P3 1TB NVMe M.2 SSD", price: 59, image: "https://source.unsplash.com/featured/?ssd" },
      { id: "s3", name: "Silicon Power UD90 1TB NVMe M.2 SSD", price: 62, image: "https://source.unsplash.com/featured/?ssd" },
      { id: "s4", name: "Western Digital WD Blue SN580 1TB SSD", price: 65, image: "https://source.unsplash.com/featured/?ssd" },
      { id: "s5", name: "Samsung 980 PRO 1TB NVMe M.2 SSD", price: 89, image: "https://source.unsplash.com/featured/?ssd" },
      { id: "s6", name: "Crucial T500 1TB Gen4 NVMe SSD", price: 84, image: "https://source.unsplash.com/featured/?ssd" },
      { id: "s7", name: "WD Black SN850X 1TB NVMe M.2 SSD", price: 89, image: "https://source.unsplash.com/featured/?ssd" },
      { id: "s8", name: "Samsung 990 PRO 1TB NVMe M.2 SSD", price: 109, image: "https://source.unsplash.com/featured/?ssd" },
      { id: "s9", name: "Crucial P3 Plus 2TB NVMe M.2 SSD", price: 109, image: "https://source.unsplash.com/featured/?ssd" },
      { id: "s10", name: "Silicon Power UD90 2TB NVMe M.2 SSD", price: 105, image: "https://source.unsplash.com/featured/?ssd" },
      { id: "s11", name: "TeamGroup MP44L 2TB NVMe M.2 SSD", price: 112, image: "https://source.unsplash.com/featured/?ssd" },
      { id: "s12", name: "Acer Predator GM700 2TB NVMe SSD", price: 129, image: "https://source.unsplash.com/featured/?ssd" },
      { id: "s13", name: "Crucial T500 2TB Gen4 NVMe SSD", price: 139, image: "https://source.unsplash.com/featured/?ssd" },
      { id: "s14", name: "WD Black SN850X 2TB NVMe M.2 SSD", price: 149, image: "https://source.unsplash.com/featured/?ssd" },
      { id: "s15", name: "Samsung 990 PRO 2TB NVMe M.2 SSD", price: 169, image: "https://source.unsplash.com/featured/?ssd" },
      { id: "s16", name: "Corsair MP700 PRO 2TB PCIe 5.0 NVMe SSD", price: 269, image: "https://source.unsplash.com/featured/?ssd" },
      { id: "s17", name: "Crucial T700 2TB PCIe 5.0 NVMe SSD", price: 279, image: "https://source.unsplash.com/featured/?ssd" },
      { id: "s18", name: "WD Black SN850X 4TB NVMe M.2 SSD", price: 309, image: "https://source.unsplash.com/featured/?ssd" },
      { id: "s19", name: "Samsung 990 PRO 4TB NVMe M.2 SSD", price: 349, image: "https://source.unsplash.com/featured/?ssd" },
      { id: "s20", name: "Crucial T700 4TB PCIe 5.0 NVMe SSD", price: 499, image: "https://source.unsplash.com/featured/?ssd" },
    ],
    pccase: [
      { id: "cs1", name: "Thermaltake Versa H18 Micro Case", price: 54, image: "https://source.unsplash.com/featured/?pccase" },
      { id: "cs2", name: "NZXT H5 Flow Compact ATX Mid-Tower", price: 94, image: "https://source.unsplash.com/featured/?pccase" },
      { id: "cs3", name: "Corsair 4000D Airflow Tempered Glass", price: 89, image: "https://source.unsplash.com/featured/?pccase" },
      { id: "cs4", name: "Fractal Design Pop Air RGB", price: 89, image: "https://source.unsplash.com/featured/?pccase" },
      { id: "cs5", name: "Phanteks Eclipse G360A High Airflow", price: 89, image: "https://source.unsplash.com/featured/?pccase" },
      { id: "cs6", name: "Montech AIR 903 MAX Mesh", price: 79, image: "https://source.unsplash.com/featured/?pccase" },
      { id: "cs7", name: "Lian Li Lancool 216 RGB Mid-Tower", price: 99, image: "https://source.unsplash.com/featured/?pccase" },
      { id: "cs8", name: "NZXT H6 Flow Dual-Chamber Airflow", price: 109, image: "https://source.unsplash.com/featured/?pccase" },
      { id: "cs9", name: "Corsair 5000D AIRFLOW Mid-Tower", price: 149, image: "https://source.unsplash.com/featured/?pccase" },
      { id: "cs10", name: "Fractal Design North Charcoal Black", price: 139, image: "https://source.unsplash.com/featured/?pccase" },
      { id: "cs11", name: "Lian Li O11 Dynamic EVO Glass", price: 149, image: "https://source.unsplash.com/featured/?pccase" },
      { id: "cs12", name: "Hyte Y60 Panoramic Tempered Glass", price: 199, image: "https://source.unsplash.com/featured/?pccase" },
      { id: "cs13", name: "Hyte Y70 Touch Infinite Glass Case", price: 379, image: "https://source.unsplash.com/featured/?pccase" },
      { id: "cs14", name: "NZXT H9 Flow Dual-Chamber ATX Case", price: 159, image: "https://source.unsplash.com/featured/?pccase" },
      { id: "cs15", name: "Corsair 6500X Dual Chamber Mid-Tower", price: 179, image: "https://source.unsplash.com/featured/?pccase" },
      { id: "cs16", name: "Fractal Design Torrent High Airflow", price: 189, image: "https://source.unsplash.com/featured/?pccase" },
      { id: "cs17", name: "Cooler Master MasterBox 500", price: 99, image: "https://source.unsplash.com/featured/?pccase" },
      { id: "cs18", name: "Be Quiet! Shadow Base 800 FX", price: 219, image: "https://source.unsplash.com/featured/?pccase" },
      { id: "cs19", name: "Lian Li O11 Vision Chrome", price: 139, image: "https://source.unsplash.com/featured/?pccase" },
      { id: "cs20", name: "Phanteks Enthoo Pro 2 Server/Workstation", price: 199, image: "https://source.unsplash.com/featured/?pccase" },
    ],
    psu: [
      { id: "p1", name: "Thermaltake Smart 500W 80+", price: 44, image: "https://source.unsplash.com/featured/?power-supply" },
      { id: "p2", name: "Corsair CX650M 650W 80+ Bronze Semi-Modular", price: 79, image: "https://source.unsplash.com/featured/?power-supply" },
      { id: "p3", name: "EVGA 600 W1 80+ White", price: 59, image: "https://source.unsplash.com/featured/?power-supply" },
      { id: "p4", name: "Thermaltake Toughpower GX2 600W 80+ Gold", price: 69, image: "https://source.unsplash.com/featured/?power-supply" },
      { id: "p5", name: "MSI MAG A650BN 650W 80+ Bronze", price: 69, image: "https://source.unsplash.com/featured/?power-supply" },
      { id: "p6", name: "Corsair RM650x 650W 80+ Gold Fully Modular", price: 99, image: "https://source.unsplash.com/featured/?power-supply" },
      { id: "p7", name: "Cooler Master MWE Gold 750 V2 Full Modular", price: 89, image: "https://source.unsplash.com/featured/?power-supply" },
      { id: "p8", name: "Corsair RM750e 750W 80+ Gold Low-Noise", price: 99, image: "https://source.unsplash.com/featured/?power-supply" },
      { id: "p9", name: "EVGA SuperNOVA 750 GT 80+ Gold", price: 109, image: "https://source.unsplash.com/featured/?power-supply" },
      { id: "p10", name: "Seasonic Focus GX-750 750W 80+ Gold", price: 119, image: "https://source.unsplash.com/featured/?power-supply" },
      { id: "p11", name: "Corsair RM850e 850W 80+ Gold Fully Modular", price: 119, image: "https://source.unsplash.com/featured/?power-supply" },
      { id: "p12", name: "Corsair RM850x Shift 850W 80+ Gold Modular", price: 139, image: "https://source.unsplash.com/featured/?power-supply" },
      { id: "p13", name: "MSI MPG A850G PCIE5 850W 80+ Gold", price: 129, image: "https://source.unsplash.com/featured/?power-supply" },
      { id: "p14", name: "be quiet! Pure Power 12 M 850W ATX 3.0", price: 134, image: "https://source.unsplash.com/featured/?power-supply" },
      { id: "p15", name: "Seasonic Focus GX-850 850W 80+ Gold", price: 139, image: "https://source.unsplash.com/featured/?power-supply" },
      { id: "p16", name: "Thermaltake Toughpower GF3 850W ATX 3.0", price: 129, image: "https://source.unsplash.com/featured/?power-supply" },
      { id: "p17", name: "Corsair RM1000e 1000W 80+ Gold Modular", price: 159, image: "https://source.unsplash.com/featured/?power-supply" },
      { id: "p18", name: "Seasonic Focus GX-1000 1000W 80+ Gold", price: 169, image: "https://source.unsplash.com/featured/?power-supply" },
      { id: "p19", name: "MSI MPG A1000G PCIE5 1000W 80+ Gold", price: 179, image: "https://source.unsplash.com/featured/?power-supply" },
      { id: "p20", name: "Corsair AX1600i 1600W 80+ Titanium Digital", price: 609, image: "https://source.unsplash.com/featured/?power-supply" },
    ],
  };

  const stepsKeys = Object.keys(catalog);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const currentCategoryKey = stepsKeys[currentStepIndex];

  // Store user selections
  const [selections, setSelections] = useState({
    cpu: null,
    motherboard: null,
    ram: null,
    gpu: null,
    storage: null,
    pccase: null,
    psu: null,
  });

  const handleSelectPart = (part) => {
    setSelections((prev) => ({
      ...prev,
      [currentCategoryKey]: part,
    }));
  };

  const handleNext = () => {
    if (currentStepIndex < stepsKeys.length - 1) {
      setCurrentStepIndex((prev) => prev + 1);
    } else {
      setCurrentStepIndex(stepsKeys.length); // Move to summary / review screen
    }
  };

  const handleBack = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1);
    }
  };

  const calculateTotal = () => {
    return Object.values(selections).reduce((acc, item) => acc + (item ? item.price : 0), 0);
  };

  const handleFinishBuild = () => {
    const totalPrice = calculateTotal();
    
    // Create a clean readable title listing all core parts
    const buildTitle = `Custom PC Rig [CPU: ${selections.cpu?.name || "N/A"} | GPU: ${selections.gpu?.name || "N/A"}]`;

    const customBuildItem = {
      _id: `custom-build-${Date.now()}`,
      title: buildTitle,
      price: totalPrice,
      images: [selections.gpu?.image || "https://source.unsplash.com/featured/?pc"],
      count: 1,
      selectedParts: selections,
    };

    setCart([...cart, customBuildItem]);
    setIsOpen(true);
  };

  const isCurrentStepSelected = selections[currentCategoryKey] !== null;
  const isReviewScreen = currentStepIndex === stepsKeys.length;

  return (
    <section className="start-build">
      <div className="start-build__container">
        
        {/* Header & Progress Tracker */}
        <div className="start-build__header">
          <h2>Custom PC Part Picker</h2>
          <p>Design your custom powerhouse from the ground up</p>
          
          {!isReviewScreen && (
            <div className="progress-bar">
              <span>Step {currentStepIndex + 1} of {stepsKeys.length}: <strong>{currentCategoryKey.toUpperCase()}</strong></span>
              <div className="progress-track">
                <div 
                  className="progress-fill" 
                  style={{ width: `${((currentStepIndex + 1) / stepsKeys.length) * 100}%` }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Main Wizard Area */}
        <div className="start-build__content">
          {!isReviewScreen ? (
            <div className="category-section">
              <h3 className="category-title">{stepTitles[currentCategoryKey] || `Select ${currentCategoryKey}`}</h3>
              
              <div className="parts-grid">
                {catalog[currentCategoryKey].map((part) => {
                  const isSelected = selections[currentCategoryKey]?.id === part.id;
                  return (
                    <div 
                      key={part.id} 
                      className={`part-card ${isSelected ? "selected" : ""}`}
                      onClick={() => handleSelectPart(part)}
                    >
                      <div className="part-img">
                        <img src={part.image} alt={part.name} />
                      </div>
                      <div className="part-info">
                        <h4>{part.name}</h4>
                        <span className="part-price">${part.price}</span>
                      </div>
                      <div className="select-badge">{isSelected ? "Selected" : "Select"}</div>
                    </div>
                  );
                })}
              </div>

              <div className="wizard-actions">
                <button 
                  className="btn btn--secondary" 
                  onClick={handleBack} 
                  disabled={currentStepIndex === 0}
                >
                  Back
                </button>
                <button 
                  className="btn btn--primary" 
                  onClick={handleNext}
                  disabled={!isCurrentStepSelected}
                >
                  {currentStepIndex === stepsKeys.length - 1 ? "Review Build" : "Next Component"}
                </button>
              </div>
            </div>
          ) : (
            /* Review & Finalize Screen */
            <div className="review-section">
              <h3>Review Your Custom Build</h3>
              <div className="review-grid">
                {Object.entries(selections).map(([key, part]) => (
                  <div key={key} className="review-item">
                    <span className="review-category">{key.toUpperCase()}</span>
                    <span className="review-name">{part ? part.name : "Not Selected"}</span>
                    <span className="review-price">{part ? `$${part.price}` : "$0"}</span>
                  </div>
                ))}
              </div>

              <div className="review-total-box">
                <span>Total Build Price</span>
                <span className="total-amount">${calculateTotal()}</span>
              </div>

              <div className="wizard-actions">
                <button className="btn btn--secondary" onClick={() => setCurrentStepIndex(stepsKeys.length - 1)}>
                  Modify Build
                </button>
                <button className="btn btn--primary" onClick={handleFinishBuild}>
                  Add Complete Rig to Cart
                </button>
              </div>
            </div>
          )}
        </div>

      </div>

      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </section>
  );
}