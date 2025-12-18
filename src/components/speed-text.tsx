'use client';

import { useState, useEffect, useRef } from 'react';

export default function SpeedText() {
  const [isHovering, setIsHovering] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [scale, setScale] = useState(1);
  const [hue, setHue] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isHovering) {
      intervalRef.current = setInterval(() => {
        setRotation((prev) => prev * 1.02 + 0.3);
        setScale((prev) => prev * 1.005);
        setHue((prev) => (prev + 2) % 360);
      }, 16);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      setRotation(0);
      setScale(1);
      setHue(0);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovering]);

  return (
    <span
      className="relative inline-block cursor-pointer"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <span className="shimmer font-medium">speed</span>
      {isHovering && (
        <span
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-50 inline-block w-16"
          style={{
            transform: `translate(-50%, -50%) rotate(${rotation}deg) scale(${scale})`,
          }}
        >
          <img src="/sonic.webp" alt="Sonic" className="w-full h-auto" style={{ filter: `hue-rotate(${hue}deg)` }} />
        </span>
      )}
    </span>
  );
}
