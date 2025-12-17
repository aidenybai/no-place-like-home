import Link from 'next/link';
import Image from 'next/image';
import signature from '@/public/sig.svg';

const posts: Record<
  string,
  {
    title: string;
    date: string;
    content: React.ReactNode;
  }
> = {
  'building-fast-software': {
    title: 'Building Fast Software',
    date: '2024-01-15',
    content: (
      <>
        <p>
          most developers focus on features. they add functionality, build new
          things, and ship constantly. but there's something more important than
          features: speed.
        </p>

        <p>
          when software is fast, it becomes accessible. it works on older
          devices, slower networks, and in places where technology isn't always
          reliable. speed isn't just a nice-to-have—it's a requirement for
          making technology truly available to everyone.
        </p>

        <p className="font-bold">performance as a feature</p>
        <p>
          i've always treated performance as a first-class feature. when i built{' '}
          <a
            href="https://github.com/aidenybai/million"
            className="underline decoration-neutral-500 underline-offset-[2.5px] hover:decoration-neutral-400"
          >
            Million.js
          </a>
          , the goal wasn't just to make react faster. it was to make react{' '}
          <em>accessible</em> to people who couldn't afford the latest hardware
          or fastest internet connection.
        </p>

        <p>
          the same principle applies to everything i build. whether it's a
          library, a tool, or a product, speed is never an afterthought. it's
          baked into the foundation.
        </p>

        <p className="font-bold">measuring what matters</p>
        <p>
          you can't improve what you don't measure. that's why i built{' '}
          <a
            href="https://github.com/aidenybai/react-scan"
            className="underline decoration-neutral-500 underline-offset-[2.5px] hover:decoration-neutral-400"
          >
            React Scan
          </a>
          —to give developers visibility into what's actually happening in their
          react applications. when you can see the performance bottlenecks, you
          can fix them.
        </p>

        <p>
          but measurement alone isn't enough. you need to care about the
          numbers. you need to make performance a priority, not just something
          you optimize at the end.
        </p>

        <p className="font-bold">the workflow</p>
        <p>
          here's how i approach building fast software: measure first, optimize
          continuously, and never accept "good enough" when it comes to
          performance. every feature should be fast by default, not fast after
          optimization.
        </p>

        <p>
          this isn't just about code. it's about mindset. it's about
          recognizing that speed is a feature, and treating it with the same
          importance as any other feature you ship.
        </p>
      </>
    ),
  },
  'the-future-of-frontend-tooling': {
    title: 'The Future of Frontend Tooling',
    date: '2024-01-10',
    content: (
      <>
        <p>
          right now, i'm building{' '}
          <a
            href="https://ami.dev"
            className="underline decoration-neutral-500 underline-offset-[2.5px] hover:decoration-neutral-400"
          >
            Ami
          </a>{' '}
          and{' '}
          <a
            href="https://react-grab.com"
            className="underline decoration-neutral-500 underline-offset-[2.5px] hover:decoration-neutral-400"
          >
            React Grab
          </a>
          . these are AI-powered coding agents designed specifically for
          frontend development. they're fast, they understand react, and they
          can help you build interfaces faster than ever before.
        </p>

        <p>
          but why focus on frontend? why not build general-purpose AI coding
          assistants?
        </p>

        <p className="font-bold">specialization matters</p>
        <p>
          general-purpose tools are good at many things, but great at none.
          when you specialize, you can optimize for specific workflows, common
          patterns, and the unique challenges of frontend development.
        </p>

        <p>
          frontend has its own set of constraints: component composition, state
          management, styling, accessibility, performance. a tool that
          understands these constraints deeply can be much more useful than one
          that treats frontend code like any other code.
        </p>

        <p className="font-bold">speed in tooling</p>
        <p>
          the same principle that applies to software applies to tooling: speed
          matters. a coding agent that takes 30 seconds to generate code isn't
          useful. it needs to be fast enough that it feels like an extension of
          your own thinking.
        </p>

        <p>
          that's why we're building these tools with performance as a core
          feature. not just the performance of the code they generate, but the
          performance of the tools themselves.
        </p>

        <p className="font-bold">what's next</p>
        <p>
          i think we're just scratching the surface of what's possible with
          AI-powered development tools. as these tools get faster and more
          specialized, they'll fundamentally change how we build software.
        </p>

        <p>
          the future isn't about replacing developers—it's about amplifying
          them. giving them tools that understand their workflow, anticipate
          their needs, and help them build faster.
        </p>
      </>
    ),
  },
  'why-i-dropped-out': {
    title: 'Why I Dropped Out',
    date: '2024-01-05',
    content: (
      <>
        <p>
          i went to university of washington in seattle for 3 months. then i
          dropped out to do{' '}
          <a
            href="https://x.com/aidenybai/status/1875789219815420079"
            className="underline decoration-neutral-500 underline-offset-[2.5px] hover:decoration-neutral-400"
          >
            YC
          </a>{' '}
          startups.
        </p>

        <p>
          this wasn't a decision i made lightly. but it was the right decision
          for me, and here's why.
        </p>

        <p className="font-bold">the opportunity cost</p>
        <p>
          university is expensive, not just in terms of money, but in terms of
          time. four years is a long time in technology. the landscape changes
          fast, and the best way to learn is by building.
        </p>

        <p>
          i had already built{' '}
          <a
            href="https://github.com/aidenybai/million"
            className="underline decoration-neutral-500 underline-offset-[2.5px] hover:decoration-neutral-400"
          >
            Million.js
          </a>{' '}
          when i was 16. i knew i could build things that mattered. the
          question wasn't whether i could learn in university—it was whether
          university was the best place for me to learn.
        </p>

        <p className="font-bold">learning by doing</p>
        <p>
          i've always learned best by building. when you're building real
          products, you face real problems. you learn to solve them, and that
          knowledge sticks with you in a way that theoretical learning never
          could.
        </p>

        <p>
          YC gave me the opportunity to build with other ambitious people, to
          learn from experienced founders, and to focus entirely on building
          something that matters.
        </p>

        <p className="font-bold">it's not for everyone</p>
        <p>
          dropping out isn't the right choice for everyone. university provides
          structure, community, and a different kind of learning. but for me,
          the opportunity to build full-time was more valuable than the
          opportunity to learn in a classroom.
        </p>

        <p>
          if you're considering a similar path, my advice is simple: know why
          you're doing it. have a plan. and be ready to work harder than you've
          ever worked before.
        </p>

        <p>
          for me, it was the right choice. i'm building things i care about,
          learning every day, and surrounded by people who push me to be better.
          that's what matters.
        </p>
      </>
    ),
  },
  'making-technology-accessible': {
    title: 'Making Technology Accessible',
    date: '2023-12-20',
    content: (
      <>
        <p>
          technology should be accessible to everyone. but accessibility isn't
          just about screen readers and keyboard navigation—it's about
          performance.
        </p>

        <p>
          when software is slow, it excludes people. people with older devices,
          slower internet connections, or limited data plans can't use it
          effectively. that's not accessibility—that's exclusion.
        </p>

        <p className="font-bold">performance as inclusion</p>
        <p>
          i've always believed that performance is a form of accessibility. when
          you make software fast, you make it available to more people. you
          remove barriers that prevent people from using technology.
        </p>

        <p>
          this is why i care so much about speed. it's not just about making
          things faster for the sake of it—it's about making technology
          available to everyone, regardless of their circumstances.
        </p>

        <p className="font-bold">the global perspective</p>
        <p>
          not everyone has access to the latest iPhone or gigabit internet. in
          many parts of the world, people are using older devices on slower
          networks. if we want technology to be truly global, we need to build
          for these constraints.
        </p>

        <p>
          that means optimizing bundle sizes, reducing network requests,
          minimizing JavaScript execution time, and thinking about performance
          from the start—not as an afterthought.
        </p>

        <p className="font-bold">building for everyone</p>
        <p>
          when i build software, i think about the person using a three-year-old
          phone on a 3G connection. if it works well for them, it'll work
          amazingly for everyone else.
        </p>

        <p>
          this isn't just good engineering—it's the right thing to do. everyone
          deserves access to great technology, and performance is how we make
          that happen.
        </p>

        <p>
          so the next time you're optimizing for performance, remember: you're
          not just making things faster. you're making technology more
          accessible. you're including people who would otherwise be excluded.
        </p>

        <p>that's worth caring about.</p>
      </>
    ),
  },
};

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({
    slug,
  }));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const post = posts[resolvedParams.slug];

  if (!post) {
    return (
      <main className="flex flex-col gap-2 max-w-[600px] px-10 py-10 leading-relaxed text-base">
        <h1 className="text-lg font-bold">Post not found</h1>
        <p>
          <Link
            href="/blog"
            className="underline decoration-neutral-500 underline-offset-[2.5px] hover:decoration-neutral-400"
          >
            ← Back to blog
          </Link>
        </p>
      </main>
    );
  }

  return (
    <main className="flex flex-col gap-2 max-w-[600px] px-10 py-10 leading-relaxed text-base">
      <p>
        <Link
          href="/blog"
          className="underline decoration-neutral-500 underline-offset-[2.5px] hover:decoration-neutral-400"
        >
          ← Back to blog
        </Link>
      </p>

      <h1 className="text-lg font-bold mt-4">{post.title}</h1>
      <p className="text-sm text-neutral-600">{post.date}</p>

      <div className="flex flex-col gap-2 mt-4">{post.content}</div>

      <div className="border-l border-neutral-900 pl-3 mt-8">
        <p>
          connect with me on{' '}
          <a
            href="https://x.com/aidenybai"
            className="underline decoration-neutral-500 underline-offset-[2.5px] hover:decoration-neutral-400"
          >
            twitter
          </a>
          ,{' '}
          <a
            href="https://github.com/aidenybai"
            className="underline decoration-neutral-500 underline-offset-[2.5px] hover:decoration-neutral-400"
          >
            github
          </a>
          ,{' '}
          <a
            href="https://www.linkedin.com/in/aidenybai/"
            className="underline decoration-neutral-500 underline-offset-[2.5px] hover:decoration-neutral-400"
          >
            linkedin
          </a>
          , or at{' '}
          <a
            href="mailto:aiden@million.dev"
            className="underline decoration-neutral-500 underline-offset-[2.5px] hover:decoration-neutral-400"
          >
            aiden@million.dev
          </a>
          !
        </p>
      </div>
      <p className="flex justify-start w-full mt-8">
        <Image src={signature} alt="Aiden Bai" className="w-48" />
      </p>
    </main>
  );
}
