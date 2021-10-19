import React, { createContext, useState, useEffect } from "react";

import Good1 from "../../../assets/images/pc/good/good1.webp";
import Good2 from "../../../assets/images/pc/good/good2.webp";
import Good3 from "../../../assets/images/pc/good/good3.webp";
import Good4 from "../../../assets/images/pc/good/good4.webp";
import Good5 from "../../../assets/images/pc/good/good5.webp";

import Better1 from "../../../assets/images/pc/better/better1.webp";
import Better2 from "../../../assets/images/pc/better/better2.webp";
import Better3 from "../../../assets/images/pc/better/better3.webp";
import Better4 from "../../../assets/images/pc/better/better4.webp";
import Better5 from "../../../assets/images/pc/better/better5.png";
import Better6 from "../../../assets/images/pc/better/better6.png";
import Better7 from "../../../assets/images/pc/better/better7.webp";
import Better8 from "../../../assets/images/pc/better/better8.webp";

import Best1 from "../../../assets/images/pc/best/best1.webp";
import Best2 from "../../../assets/images/pc/best/best2.webp";
import Best3 from "../../../assets/images/pc/best/best3.webp";
import Best4 from "../../../assets/images/pc/best/best4.webp";
import Best5 from "../../../assets/images/pc/best/best5.webp";
import Best6 from "../../../assets/images/pc/best/best6.webp";
import Best7 from "../../../assets/images/pc/best/best7.webp";
import Best8 from "../../../assets/images/pc/best/best8.webp";

import GoodCPU from "../../../assets/images/pc/good/Ryzen5_63x.png";
import GoodGPU from "../../../assets/images/pc/good/GTX1650_63x.png";
import GoodRAM from "../../../assets/images/pc/good/RAM_63x.png";
import GoodMEMORY from "../../../assets/images/pc/good/M2_63x.png";
import GoodCPUCOOLER from "../../../assets/images/pc/good/Hyper212_63x.png";
import GoodFANS from "../../../assets/images/pc/good/4xFan_63x.png";
import GoodCASE from "../../../assets/images/pc/good/TD500CASE_63x.png";
import GoodPOWER from "../../../assets/images/pc/good/600WPSU_63x.png";
import GoodMOTHERBOARD from "../../../assets/images/pc/good/ASUSX570P_71db4b81-67e8-4b73-bb3d-bc2f85bb1b54_63x.png";
import GoodWIFI from "../../../assets/images/pc/good/WifiCard_63x.png";
import GoodWINDOWS from "../../../assets/images/pc/good/Windows10Home_63x.png";
import GoodWARRANTY from "../../../assets/images/pc/good/redux-logo_63x.png";

import Keyboard from "../../../assets/images/pc/good/KEYBOARD-MOUSE_200x.png";
import MouseNormal from "../../../assets/images/pc/good/mouse-normal_200x.png";
import MouseLarge from "../../../assets/images/pc/good/mouse-lage_200x.png";
import Headset from "../../../assets/images/pc/good/REDUXHeadsetRGB_200x.png";
import HeadsetStand from "../../../assets/images/pc/good/REDUXHeadset-AND-STANDRGB_200x.png";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [products, setProducts] = useState([
    {
      _id: "1",
      title: "GOOD",
      images: [Good1, Good2, Good3, Good4, Good5],
      essentials: [Keyboard, MouseNormal, MouseLarge, Headset, HeadsetStand],
      description:
        "A great starting point for those getting into a gaming PC. This well-balanced PC is designed to provide excellent performance to explore all the perks of PC gaming without a large budget.",
      content:
        "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      price: 1322,
      "componentsCosts": "1,247",
      "buildFee": "75",
      "monthly": "42.66",
      "totalPrice": "1,322",
      count: 1,
      cpu: [
        { CPUimg: GoodCPU },
        { CPUname: "AMD RYZEN 5 5600X 6-CORE" },
        { CPUprice: "$299" },
      ],
      gpu: [
        { GPUimg: GoodGPU },
        { GPUname: "NVIDIA GEFORCE GTX 1650 4GB" },
        { GPUprice: "$309" },
      ],
      ram: [
        { RAMimg: GoodRAM },
        { RAMname: "16GB DDR4 DUAL CHANNEL" },
        { RAMprice: "$85" },
      ],
      memory: [
        { MEMORYimg: GoodMEMORY },
        { MEMORYname: "500GB NVME M.2" },
        { MEMORYprice: "$74" },
      ],
      cpuCooler: [
        { CPUCOOLERimg: GoodCPUCOOLER },
        { CPUCOOLERname: "COOLER MASTER HYPER 212 EVO" },
        { CPUCOOLERprice: "$35" },
      ],
      fans: [
        { FANSimg: GoodFANS },
        { FANSname: "FREE 4X CM MASTERFANS RGB ($72 VALUE)" },
        { FANSprice: "$0" },
      ],
      pcCase: [
        { CASEimg: GoodCASE },
        { CASEname: "COOLER MASTER TD500 RGB" },
        { CASEprice: "$99" },
      ],
      power: [
        { POWERimg: GoodPOWER },
        { POWERname: "600W ATX 80 PLUS GOLD" },
        { POWERprice: "$79" },
      ],
      motherboard: [
        { MOTHERBOARDimg: GoodMOTHERBOARD },
        { MOTHERBOARDname: "B550 CHIPSET | AMD" },
        { MOTHERBOARDprice: "$129" },
      ],
      wifi: [
        { WIFIimg: GoodWIFI },
        { WIFIname: "WIRELESS 802.11AC" },
        { WIFIprice: "$29" },
      ],
      windows: [
        { WINDOWSimg: GoodWINDOWS },
        { WINDOWSname: "WINDOWS 10 HOME + USB RECOVERY" },
        { WINDOWSprice: "$109" },
      ],
      warranty: [
        { WARRANTYimg: GoodWARRANTY },
        { WARRANTYname: "BUILD + SETUP + TESTING + WARRANTY" },
        { WARRANTYprice: "$75" },
      ],
    },
    {
      _id: "2",
      title: "BETTER",
      images: [
        Better1,
        Better2,
        Better3,
        Better4,
        Better5,
        Better6,
        Better7,
        Better8,
      ],
      description:
        "For gamers who demand higher frame rates to gain a competitive edge over their opponents. This is the perfect gaming computer for enhanced game visuals, higher resolutions, and streaming.",
      content:
        "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      price: 1637,
      count: 1,
            cpu: [
        { CPUimg: GoodCPU },
        { CPUname: "AMD RYZEN 5 5600X 6-CORE" },
        { CPUprice: "299" },
      ],
      gpu: [
        { GPUimg: GoodGPU },
        { GPUname: "NVIDIA GEFORCE GTX 1650 4GB" },
        { GPUprice: "309" },
      ],
      ram: [
        { RAMimg: GoodRAM },
        { RAMname: "16GB DDR4 DUAL CHANNEL" },
        { RAMprice: "85" },
      ],
      memory: [
        { MEMORYimg: GoodMEMORY },
        { MEMORYname: "500GB NVME M.2" },
        { MEMORYprice: "74" },
      ],
      cpuCooler: [
        { CPUCOOLERimg: GoodCPUCOOLER },
        { CPUCOOLERname: "COOLER MASTER HYPER 212 EVO" },
        { CPUCOOLERprice: "35" },
      ],
      fans: [
        { FANSimg: GoodFANS },
        { FANSname: "FREE 4X CM MASTERFANS RGB ($72 VALUE)" },
        { FANSprice: "0" },
      ],
      pcCase: [
        { CASEimg: GoodCASE },
        { CASEname: "COOLER MASTER TD500 RGB" },
        { CASEprice: "99" },
      ],
      power: [
        { POWERimg: GoodPOWER },
        { POWERname: "600W ATX 80 PLUS GOLD" },
        { POWERprice: "79" },
      ],
      motherboard: [
        { MOTHERBOARDimg: GoodMOTHERBOARD },
        { MOTHERBOARDname: "B550 CHIPSET | AMD" },
        { MOTHERBOARDprice: "129" },
      ],
      wifi: [
        { WIFIimg: GoodWIFI },
        { WIFIname: "WIRELESS 802.11AC" },
        { WIFIprice: "29" },
      ],
      windows: [
        { WINDOWSimg: GoodWINDOWS },
        { WINDOWSname: "WINDOWS 10 HOME + USB RECOVERY" },
        { WINDOWSprice: "109" },
      ],
      warranty: [
        { WARRANTYimg: GoodWARRANTY },
        { WARRANTYname: "BUILD + SETUP + TESTING + WARRANTY" },
        { WARRANTYprice: "75" },
      ],
    },
    {
      _id: "3",
      title: "BEST",
      images: [Best1, Best2, Best3, Best4, Best5, Best6, Best7, Best8],
      description:
        "For those who bury the accelerator and never let off. This is a no-compromise gaming PC equipped with only the best for top-tier performance. Experience ultra detail at high frame rates.",
      content:
        "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      price: 2733,
      count: 1,
            cpu: [
        { CPUimg: GoodCPU },
        { CPUname: "AMD RYZEN 5 5600X 6-CORE" },
        { CPUprice: "299" },
      ],
      gpu: [
        { GPUimg: GoodGPU },
        { GPUname: "NVIDIA GEFORCE GTX 1650 4GB" },
        { GPUprice: "309" },
      ],
      ram: [
        { RAMimg: GoodRAM },
        { RAMname: "16GB DDR4 DUAL CHANNEL" },
        { RAMprice: "85" },
      ],
      memory: [
        { MEMORYimg: GoodMEMORY },
        { MEMORYname: "500GB NVME M.2" },
        { MEMORYprice: "74" },
      ],
      cpuCooler: [
        { CPUCOOLERimg: GoodCPUCOOLER },
        { CPUCOOLERname: "COOLER MASTER HYPER 212 EVO" },
        { CPUCOOLERprice: "35" },
      ],
      fans: [
        { FANSimg: GoodFANS },
        { FANSname: "FREE 4X CM MASTERFANS RGB ($72 VALUE)" },
        { FANSprice: "0" },
      ],
      pcCase: [
        { CASEimg: GoodCASE },
        { CASEname: "COOLER MASTER TD500 RGB" },
        { CASEprice: "99" },
      ],
      power: [
        { POWERimg: GoodPOWER },
        { POWERname: "600W ATX 80 PLUS GOLD" },
        { POWERprice: "79" },
      ],
      motherboard: [
        { MOTHERBOARDimg: GoodMOTHERBOARD },
        { MOTHERBOARDname: "B550 CHIPSET | AMD" },
        { MOTHERBOARDprice: "129" },
      ],
      wifi: [
        { WIFIimg: GoodWIFI },
        { WIFIname: "WIRELESS 802.11AC" },
        { WIFIprice: "29" },
      ],
      windows: [
        { WINDOWSimg: GoodWINDOWS },
        { WINDOWSname: "WINDOWS 10 HOME + USB RECOVERY" },
        { WINDOWSprice: "109" },
      ],
      warranty: [
        { WARRANTYimg: GoodWARRANTY },
        { WARRANTYname: "BUILD + SETUP + TESTING + WARRANTY" },
        { WARRANTYprice: "75" },
      ],
    },
  ]);

  const [cart, setCart] = useState([]);

  const addCart = (id) => {
    const check = cart.every((item) => {
      return item._id !== id;
    });
    if (check) {
      const data = products.filter((product) => {
        return product._id === id;
      });
      setCart([...cart, ...data]);
    } else {
      // alert("The product has been added to cart.")
    }
  };

  useEffect(() => {
    const dataCart = JSON.parse(localStorage.getItem("dataCart"));
    if (dataCart) setCart(dataCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("dataCart", JSON.stringify(cart));
  }, [cart]);

  const value = {
    products: [products, setProducts],
    cart: [cart, setCart],
    addCart: addCart,
  };

  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};
