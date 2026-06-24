'use strict';
'use client';

import { useEffect } from 'react';

export default function PWARegister() {
  useEffect(() => {
    if ('serviceWorker' in navigator && window.location.hostname !== 'localhost') {
      navigator.serviceWorker
        .register('/sw.js')
        .then((reg) => console.log('SW Registered perfectly!', reg.scope))
        .catch((err) => console.error('SW Registration failed:', err));
    }
  }, []);

  return null; // Componentul nu randează nimic vizual, doar rulează scriptul
}