'use client';

import { useState } from 'react';

export default function SpeedText() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <span
      className="relative inline-block cursor-pointer"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <span className="shimmer font-medium">speed</span>
      {isHovering && (
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-50 inline-block w-16">
          <img src="/sonic.webp" alt="Sonic" className="w-full h-auto sonic-shimmer" />
        </span>
      )}
    </span>
  );
}
