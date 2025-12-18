import Image from 'next/image';
import plane from '@/public/plane.webp';
import type { BlogPost } from '../page';

export const post21: BlogPost = {
  title: 'Goodbye 20',
  date: '2026-01-05',
  description:
    'Reflections on turning 21, identity beyond age, and growing into yourself.',
  ogImage: '/plane.webp',
  content: (
    <>
      <p>
        i'm writing this as i'm coming back from an event at my old high school.
        being back there felt strange. teachers who once felt like authority
        figures now feel like peers. it made me realize something i've been
        circling around for a while: most adults are just big kids, and people
        change very slowly on the inside, even when they look or act different
        on the outside.
      </p>

      <p>
        for most of my life, my age has been deeply tied to my identity. when i
        started my company with{' '}
        <a
          href="https://www.youtube.com/watch?v=VkezQMb1DHw"
          className="underline decoration-stone-500 underline-offset-[2.5px] hover:decoration-stone-400"
        >
          fireship
        </a>
        , when i built{' '}
        <a
          href="https://github.com/aidenybai/million"
          className="underline decoration-stone-500 underline-offset-[2.5px] hover:decoration-stone-400"
        >
          million.js
        </a>{' '}
        at 16, when i dropped out, i was always "the young person who did X." my
        age was part of the pitch, part of the brand, part of how i understood
        myself.
      </p>

      <p>
        i've strayed away from that in the last few years. but it still feels
        surreal to be 21.
      </p>

      <p>
        21 is supposed to be the age where you're in college, drinking legally,
        finding jobs. i'm doing none of those things in the traditional sense.
        i'm not walking across a stage to get a degree. i'm not celebrating by
        going to bars with friends from my dorm.
      </p>

      <p>
        and i think that's okay. i used to feel like i was missing out on
        something, like there was a version of my life where i did things the
        "normal" way and it was better. but i don't think that way anymore. the
        path i'm on gave me lessons and dreams i wouldn't trade for the world.
      </p>

      <p>
        <span className="font-medium">what i'm doing now:</span> i get to code
        all day, and i fucking love it. teenage me could never have imagined
        that. i write a lot more now. i carry a notebook everywhere. i read
        occasionally, but when i do, i read voraciously, and it changes how i
        think. i'm more grateful for those who choose to love me, because i
        understand now how rare that is.
      </p>

      <p>
        i find joy in tackling hard problems of all sorts. dare i say i'm...
        stronger? i do things even when they suck. i'm more okay with conflict
        now. i can set boundaries with people who don't respect me. i embrace tougher conversations.
      </p>

      <p>
        i still suck at giving gifts. and texting. and i probably need to sleep more. those are on my list for 21.
      </p>

      <p>
        i used to have this deep existential fear of dying and growing up. it's
        still there, somewhere, but it's quieter now. maybe because i've
        accepted that growing up isn't about becoming someone else, it's about
        becoming more yourself.
      </p>

      <p>
        it's surreal to look back just one year ago and see how much of a
        different person i was. i hope that keeps happening. i hope to be
        someone who changes a lot. i'm grateful for the people who supported me,
        the places that shaped me, and the things that pushed me to be different
        than i was before.
      </p>

      <Image src={plane} alt="View from PDX to SFO" />

      <p>pdx → sfo. here's to another year!</p>
    </>
  ),
};
