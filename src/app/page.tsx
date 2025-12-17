'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import signature from '@/public/sig.webp';
import IconArrowTopRight from '@/components/icon-arrow-top-right';

export default function Home() {
  const [isPastOpen, setIsPastOpen] = useState(false);
  return (
    <main className="flex flex-col gap-2 max-w-[600px] px-10 py-10 leading-relaxed text-base">
      <h1 className="text-lg font-semibold">Aiden Bai</h1>

      <p>
        right now, i'm building{' '}
        <a
          href="https://ami.dev"
          className="underline decoration-stone-500 underline-offset-[2.5px] hover:decoration-stone-400"
        >
          Ami
        </a>{' '}
        and{' '}
        <a
          href="https://react-grab.com"
          className="underline decoration-stone-500 underline-offset-[2.5px] hover:decoration-stone-400"
        >
          React Grab
        </a>{' '}
        to make faster coding agents for frontend development.
      </p>

      <p>
        i care a great deal about speed. in order to allow anyone to access
        great technology, you need to make it fast. most of my work (old and
        new) surrounds this.
      </p>

      <p>
        i created{' '}
        <a
          href="https://github.com/aidenybai/million"
          className="underline decoration-stone-500 underline-offset-[2.5px] hover:decoration-stone-400"
        >
          Million.js
        </a>{' '}
        when i was 16{' '}
        <a
          href="https://www.youtube.com/watch?v=VkezQMb1DHw"
          className="underline decoration-stone-500 underline-offset-[2.5px] hover:decoration-stone-400"
        >
          (Fireship video
          <IconArrowTopRight className="w-3 h-3 inline-block ml-1 align-baseline" />
          )
        </a>{' '}
        and later made{' '}
        <a
          href="https://github.com/aidenybai/react-scan"
          className="underline decoration-stone-500 underline-offset-[2.5px] hover:decoration-stone-400"
        >
          React Scan
        </a>
        . these projects have a combined total of 40k+ stars on github.
      </p>

      <button
        onClick={() => setIsPastOpen(!isPastOpen)}
        className="font-semibold text-left cursor-pointer transition-opacity bg-stone-100 hover:bg-stone-200 px-2 py-1 rounded-sm"
      >
        past {isPastOpen ? '▾' : '▸'}
      </button>
      {isPastOpen && (
        <div className="border-l border-stone-200 pl-3 flex flex-col gap-2">
          <p>
            i went to University of Washington in Seattle for 3 months. then i
            dropped out to do{' '}
            <a
              href="https://x.com/aidenybai/status/1875789219815420079"
              className="underline decoration-stone-500 underline-offset-[2.5px] hover:decoration-stone-400"
            >
              YC
            </a>
          </p>

          <p>
            in high school, i did science fair{' '}
            <a
              href="https://www.societyforscience.org/press-release/regeneron-isef-full-awards-2022/#:~:text=SOFT037"
              className="underline decoration-stone-500 underline-offset-[2.5px] hover:decoration-stone-400"
            >
              (ISEF &apos;22
            </a>
            ,{' '}
            <a
              href="https://www.societyforscience.org/press-release/2021-regeneron-isef-grand-awards/#:~:text=SOFT031"
              className="underline decoration-stone-500 underline-offset-[2.5px] hover:decoration-stone-400"
            >
              &apos;21)
            </a>{' '}
            and won some awards{' '}
            <a
              href="https://www.sigapp.org/sac/sac2023/#:~:text=Aiden%20Bai"
              className="underline decoration-stone-500 underline-offset-[2.5px] hover:decoration-stone-400"
            >
              (ACM SAC &apos;23 Best Paper)
            </a>
            .
          </p>

          <p>
            along the way, i've worked (and shut down) on projects
            like{' '}
            <a
              className="underline decoration-stone-500 underline-offset-[2.5px] hover:decoration-stone-400"
              href="https://x.com/aidenybai/status/1899840110449111416?s=20"
            >
              Same
            </a>{' '}
            and{' '}
            <a
              className="underline decoration-stone-500 underline-offset-[2.5px] hover:decoration-stone-400"
              href="https://www.youtube.com/watch?v=fcY9TthQnI4"
            >
              Million Lint
            </a>
            . we grew to 400k+ users + million of $ in run rate.
          </p>
        </div>
      )}

      <p>
        connect with me on{' '}
        <a
          href="https://x.com/aidenybai"
          className="underline decoration-stone-500 underline-offset-[2.5px] hover:decoration-stone-400"
        >
          x (twitter)
        </a>
        ,{' '}
        <a
          href="https://github.com/aidenybai"
          className="underline decoration-stone-500 underline-offset-[2.5px] hover:decoration-stone-400"
        >
          github
        </a>
        ,{' '}
        <a
          href="https://www.linkedin.com/in/aidenybai/"
          className="underline decoration-stone-500 underline-offset-[2.5px] hover:decoration-stone-400"
        >
          linkedin
        </a>
        , or at{' '}
        <a
          href="mailto:aiden@million.dev"
          className="underline decoration-stone-500 underline-offset-[2.5px] hover:decoration-stone-400"
        >
          aiden@million.dev
        </a>
        !
      </p>

      <p className="flex justify-start w-full mt-8">
        <Image src={signature} alt="Aiden Bai" className="w-48" />
      </p>
      <p>
        <Link
          href="/blog"
          className="underline decoration-stone-500 underline-offset-[2.5px] hover:decoration-stone-400"
        >
          writing →
        </Link>
      </p>
    </main>
  );
}
