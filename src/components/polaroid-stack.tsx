'use client';

import { useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import { Tooltip } from '@base-ui-components/react/tooltip';

import ahhhh from '@/public/polaroids/AHHHH.webp';
import capybara from '@/public/polaroids/capybara.webp';
import citizen from '@/public/polaroids/citizen.webp';
import dolores from '@/public/polaroids/dolores.webp';
import iLoveMatcha from '@/public/polaroids/i-love-matcha.webp';
import isabelle from '@/public/polaroids/isabelle.webp';
import japanPalace from '@/public/polaroids/japan-palace.webp';
import japanTrain from '@/public/polaroids/japan-train.webp';
import japanTunnel from '@/public/polaroids/japan-tunnel.webp';
import koreanFood from '@/public/polaroids/korean-food.webp';
import lowercase from '@/public/polaroids/lowercase.webp';
import pranav from '@/public/polaroids/pranav.webp';
import yosemite from '@/public/polaroids/yosemite.webp';

const allPolaroids: {
  src: StaticImageData;
  alt: string;
  rotation: number;
  offsetY: number;
}[] = [
  { src: ahhhh, alt: 'ahhhh', rotation: -10, offsetY: 4 },
  { src: capybara, alt: 'capybara', rotation: 8, offsetY: -6 },
  { src: citizen, alt: 'citizen', rotation: -6, offsetY: 8 },
  { src: dolores, alt: 'dolores', rotation: 12, offsetY: -4 },
  { src: iLoveMatcha, alt: 'i love matcha', rotation: -8, offsetY: 6 },
  { src: isabelle, alt: 'isabelle', rotation: 5, offsetY: -8 },
  { src: japanPalace, alt: 'japan palace', rotation: -11, offsetY: 4 },
  { src: japanTrain, alt: 'japan train', rotation: 7, offsetY: -6 },
  { src: japanTunnel, alt: 'japan tunnel', rotation: -9, offsetY: 10 },
  { src: koreanFood, alt: 'korean food', rotation: 6, offsetY: -4 },
  { src: lowercase, alt: 'lowercase', rotation: -12, offsetY: 8 },
  { src: pranav, alt: 'pranav', rotation: 4, offsetY: -2 },
  { src: yosemite, alt: 'yosemite', rotation: -7, offsetY: 6 },
];

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function PolaroidStack() {
  const [hoveredPolaroid, setHoveredPolaroid] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [polaroids, setPolaroids] = useState<typeof allPolaroids | null>(null);
  const [animatedIn, setAnimatedIn] = useState(false);

  useEffect(() => {
    const shuffled = shuffleArray(allPolaroids);
    const mobile = window.innerWidth < 768;
    setIsMobile(mobile);
    setPolaroids(mobile ? shuffled.slice(0, 4) : shuffled.slice(0, 11));

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setAnimatedIn(true);
      });
    });

    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const spacing = isMobile ? 60 : 40;

  if (!polaroids) {
    return <div className="relative h-[160px] sm:h-[180px]" />;
  }

  return (
    <Tooltip.Provider delay={0}>
      <div className="relative h-[160px] sm:h-[180px]">
        {polaroids.map((polaroid, index) => (
          <Tooltip.Root key={polaroid.alt}>
            <Tooltip.Trigger
              className="absolute cursor-pointer transition-all duration-300 ease-out origin-center"
              style={{
                left: index * spacing,
                top: 0,
                transform: `translateY(${
                  hoveredPolaroid === index ? -16 : polaroid.offsetY
                }px) rotate(${
                  hoveredPolaroid === index ? 0 : polaroid.rotation
                }deg) scale(${!animatedIn ? 0.5 : hoveredPolaroid === index ? 1.15 : 1})`,
                zIndex: hoveredPolaroid === index ? 10 : index,
              }}
              onMouseEnter={() => setHoveredPolaroid(index)}
              onMouseLeave={() => setHoveredPolaroid(null)}
            >
              <div className="bg-white p-1.5 pb-4 shadow-md hover:shadow-xl transition-shadow duration-300 border border-stone-200">
                <Image
                  src={polaroid.src}
                  alt={polaroid.alt}
                  width={100}
                  height={120}
                  className="object-cover w-[100px] h-[120px]"
                />
              </div>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Positioner sideOffset={8}>
                <Tooltip.Popup className="bg-stone-800 text-white text-xs px-2 py-1 rounded shadow-lg">
                  {polaroid.alt}
                </Tooltip.Popup>
              </Tooltip.Positioner>
            </Tooltip.Portal>
          </Tooltip.Root>
        ))}
      </div>
    </Tooltip.Provider>
  );
}





