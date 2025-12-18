import Image from 'next/image';
import Link from 'next/link';
import signature from '@/public/sig.webp';
import IconArrowTopRight from '@/components/icon-arrow-top-right';
import PastSection from '@/components/past-section';
import PolaroidStack from '@/components/polaroid-stack';
import AmiTooltip from '@/components/ami-tooltip';

export default function Home() {
  return (
    <main className="flex flex-col gap-2 max-w-[600px] p-5 pt-7 lg:p-10 leading-relaxed text-base">
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
          React Grab<AmiTooltip />
        </a>{' '}
        to make faster coding agents for UI.
      </p>

      <p>
        i care a great deal about{' '}
        <span className="shimmer font-medium">speed</span>. in order to allow
        anyone to access great technology, you need to make it fast. most of my
        work (old and new) revolves around this.
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

      <PastSection />

      <p>
        connect with me on{' '}
        <a
          href="https://x.com/aidenybai"
          className="underline decoration-stone-500 underline-offset-[2.5px] hover:decoration-stone-400"
        >
          X (twitter)
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

      <p>
        <Link
          href="/blog"
          className="underline decoration-stone-500 underline-offset-[2.5px] hover:decoration-stone-400"
        >
          writing →
        </Link>
      </p>

      <p className="flex justify-start w-full">
        <Image src={signature} alt="Aiden Bai" className="w-48" />
      </p>

      <PolaroidStack />
    </main>
  );
}
