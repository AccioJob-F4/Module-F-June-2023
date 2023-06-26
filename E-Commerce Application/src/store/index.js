import { createStore } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";

import { rootReducer } from "./reducer";

export const initialState = {
  cart: [],
  originalList: [
    {
      id: "ADKF27DMC",
      name: "Apple iPhone 13 128 GB, Green",
      price: "INR 79,000",
      availableQuantity: 10,
      imgSrc:
        "https://www.reliancedigital.in/medias/Apple-iPhone-13-Smartphones-492849504-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMzAzNzZ8aW1hZ2UvanBlZ3xpbWFnZXMvaDljL2gzZS85ODgwMzYyODc2OTU4LmpwZ3w5NmU2Yjg0MDUyOGZmZGIxZDIxNzQzZmJkMmYxNDBiNTJiYWI5MGQzMGUwOTZkNmEwYWRmMWNjNTY1MzVmNmJm",
      desc: {
        warranty: "1 Year manufacturer warranty",
        keyFeatures: [
          "15.4 cm (6.1‑inch) Super Retina XDR OLED Display",
          "5G Enabled Phone, A15 Bionic Chip",
          "Dual 12 MP Camera System: Ultra Wide and Wide Cameras",
          "Rated IP68 Splash, Water and Dust Resistant",
        ],
      },
    },
    {
      id: "ADKF27DBC",
      name: "Sony PS5 DualSense Wireless Controller",
      price: "INR 5,990",
      availableQuantity: 0,
      imgSrc:
        "https://www.reliancedigital.in/medias/Sony-CFI-ZCT1WRU-Gaming-Accessories-491936182-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMzY3NDV8aW1hZ2UvanBlZ3xpbWFnZXMvaDBkL2hjNi85NDU0MDEyOTg5NDcwLmpwZ3wzZjZiYmQ1ZTM2Mjk1N2MyNTU4ZDhhMmRhODc4MjIyMzJjZGYyMTBkMzU3YTdmMTFkYmQzZWFkMGMwYWFjNjM0",
      desc: {
        warranty: "",
        keyFeatures: [
          "Feel Your In-Game Actions and Environment Simulated Through Haptic Feedback",
          "Experience Varying Force and Tension at Your Fingertips with Adaptive Triggers",
          "Chat Online Through the Built-In Microphone",
          "Connect a Headset Directly via the 3.5 mm Jack",
        ],
      },
    },
    {
      id: "ADKF27DFC",
      name: "Apple MME73HN/A 3rd Generation Airpods with Mic and Wireless Charging Case, White",
      price: "INR 18,599",
      availableQuantity: 1,
      imgSrc:
        "https://www.reliancedigital.in/medias/Apple-Airpods-492571632-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w3MjQxMHxpbWFnZS9qcGVnfGltYWdlcy9oYmYvaDA5Lzk4MjU2MDg3OTQxNDIuanBnfGE5Y2VjOGMwZjA5MjMyNzQxZDYxNGE2MzA0M2E5YjcwOGUwMzRiZmM0NWRhNjQyOTJmZGJiMjU0ZjFmY2IyYWI",
      desc: {
        warranty: "1 Year manufacturer warranty",
        keyFeatures: [
          "Sweat and water resistant (IPX4)",
          "H1 headphone chip",
          "Custom high dynamic range amplifier",
          "Custom high-excursion Apple driver",
        ],
      },
    },
    {
      id: "ADKF2HOLA",
      name: "Apple Watch Series 7 Cellular - 45 mm Green Aluminum Case with Clover Sport Band",
      price: "INR 53,900",
      availableQuantity: 2,
      imgSrc:
        "https://www.reliancedigital.in/medias/Apple-Series-7-Smart-Watches-491998504-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNjI4NDh8aW1hZ2UvanBlZ3xpbWFnZXMvaGJhL2g3YS85NjQ5NDYyODM3Mjc4LmpwZ3xmNTMwODhlZDVmNGFiZDMzM2JmZTkyMmI2YTA0NDM1NTVmZmMxMWNhZGU1MmI3MWI5N2EyYTkxMjg3MDIwMzI4",
      desc: {
        warranty: "1 Year manufacturer warranty",
        keyFeatures: [
          "Always-On Retina LTPO OLED display, 1,000 nits",
          "LTE and UMTS Connectivity, International emergency calling",
          "Fall Detection, water resistant 50 metres",
          "Dust resistant (IP6X), Most crack-resistant front crystal",
        ],
      },
    },
    {
      id: "ADKF21HGI",
      name: "Apple iPad Pro 3rd Gen 2021 27.96 cm (11 inch) Wi-Fi + Cellular Tablet 8 GB RAM, 128 GB, Space Grey, MHW53HN/A",
      price: "INR 82,499",
      availableQuantity: 5,
      imgSrc:
        "https://www.reliancedigital.in/medias/iPad-Pro-3rd-Gen-11-Cellular-128GB-Space-Grey-2021-MHW53HN-A-Tablet-491996612-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxODYyMzN8aW1hZ2UvanBlZ3xpbWFnZXMvaGQ2L2g3Mi85NTQyMzI5NTY1MjE0LmpwZ3xlZTRlY2Y4Y2U0OWZiMzI1MDY1ZTMzNjY2MjBhY2IwOGE2NzRkOWFmZmE5YzVjNmJmMzM0ODI4ZDc1ZjA1Mjg3",
      desc: {
        warranty: "1 Year manufacturer warranty",
        keyFeatures: [
          "Operating System Type: iOS",
          "Size: 27.94 cm (11 inch)",
          "RAM: 8 GB",
          "Internal Storage: 128 GB",
        ],
      },
    },
  ],
};

export const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools()
);
