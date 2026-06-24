"use client";

import { useEffect } from "react";

export default function PWARegister() {
  useEffect(() => {
    // Only run in the browser and only if the browser supports Service Workers
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then((reg) => console.log("Service Worker active on scope:", reg.scope))
        .catch((err) => console.error("Service Worker registration failed:", err));
    }
  }, []);

  return null;
}