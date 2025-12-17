'use client';

import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { Tooltip } from '@base-ui-components/react/tooltip';

import capybara from '@/public/polaroids/capybara.webp';
import isabelle from '@/public/polaroids/isabelle.webp';
import japanPalace from '@/public/polaroids/japan-palace.webp';
import japanTrain from '@/public/polaroids/japan-train.webp';
import japanTunnel from '@/public/polaroids/japan-tunnel.webp';
import lowercase from '@/public/polaroids/lowercase.webp';
import pranav from '@/public/polaroids/pranav.webp';
import yosemite from '@/public/polaroids/yosemite.webp';

const polaroids: {
  src: StaticImageData;
  alt: string;
  rotation: number;
  offsetX: number;
  offsetY: number;
}[] = [
  { src: capybara, alt: 'capybara', rotation: -14, offsetX: 25, offsetY: 6 },
  { src: isabelle, alt: 'isabelle', rotation: 7, offsetX: 80, offsetY: -8 },
  { src: japanPalace, alt: 'japan palace', rotation: -5, offsetX: 130, offsetY: 4 },
  { src: japanTrain, alt: 'japan train', rotation: 11, offsetX: 185, offsetY: -6 },
  { src: japanTunnel, alt: 'japan tunnel', rotation: -9, offsetX: 240, offsetY: 10 },
  { src: lowercase, alt: 'lowercase', rotation: 6, offsetX: 290, offsetY: -4 },
  { src: pranav, alt: 'pranav', rotation: -12, offsetX: 345, offsetY: 8 },
  { src: yosemite, alt: 'yosemite', rotation: 4, offsetX: 395, offsetY: -2 },
];

export default function PolaroidStack() {
  const [hoveredPolaroid, setHoveredPolaroid] = useState<number | null>(null);

  return (
    <Tooltip.Provider delay={0}>
      <div className="mb-4 overflow-hidden">
        <div className="relative h-40 sm:h-56 w-[520px] pt-16 scale-[0.55] sm:scale-100 origin-top-left">
          {polaroids.map((polaroid, index) => (
            <Tooltip.Root key={index}>
              <Tooltip.Trigger
                className="absolute cursor-pointer transition-all duration-300 ease-out origin-bottom"
                style={{
                  left: polaroid.offsetX,
                  transform: `translateY(${
                    hoveredPolaroid === index ? -16 : polaroid.offsetY
                  }px) rotate(${
                    hoveredPolaroid === index ? 0 : polaroid.rotation
                  }deg) scale(${hoveredPolaroid === index ? 1.15 : 1})`,
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
      </div>
    </Tooltip.Provider>
  );
}
