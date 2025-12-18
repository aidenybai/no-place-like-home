'use client';

import { useState } from 'react';

export default function PastSection() {
  const [isPastOpen, setIsPastOpen] = useState(false);

  return (
    <>
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
            . i also was a part of <a className="underline decoration-stone-500 underline-offset-[2.5px] hover:decoration-stone-400" href="https://hackclub.com/">Hack Club</a>, where i found my home away from home.
          </p>

          <p>
            along the way, i've worked on (and shut down) on projects like{' '}
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
            . we grew to 400k+ users and millions of $ in revenue.
          </p>
        </div>
      )}
    </>
  );
}
