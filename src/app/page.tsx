import { data } from '@/data';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-3xl px-8 py-16 md:px-16">
        <header className="mb-12 space-y-5">
          <h1 className="text-2xl font-black">aiden bai</h1>
          <p className="text-lg">
            i'm building <a href="https://same.new" className="underline hover:bg-gray-100">Same</a> to
            allow anyone to build fullstack web apps by prompting.
          </p>
          <p className="text-lg">
            if you want to work with me, check out our{' '}
            <a href="https://same.inc" className="underline hover:bg-gray-100">about us</a>.
          </p>
          <p className="text-lg">
            my background is in growing developer tools. previously,
            i created{' '}
            <a href="https://github.com/aidenybai/million" className="underline hover:bg-gray-100">
              Million.js
            </a>{' '}
            when i was 16{' '}
            <a href="https://www.youtube.com/watch?v=VkezQMb1DHw" className="underline hover:bg-gray-100">
              (video)
            </a>{' '}
            and later made{' '}
            <a href="https://github.com/aidenybai/react-scan" className="underline hover:bg-gray-100">
              React Scan
            </a>
            . these projects have a combined total of 40k+ stars on
            github.
          </p>
          <p className="text-lg">
            connect with me on{' '}
            <a href="https://x.com/aidenybai" className="underline hover:bg-gray-100">twitter</a>,{' '}
            <a href="https://github.com/aidenybai" className="underline hover:bg-gray-100">github</a>,{' '}
            <a href="https://www.linkedin.com/in/aidenybai/" className="underline hover:bg-gray-100">
              linkedin
            </a>
            , or at{' '}
            <a href="mailto:aiden@million.dev" className="underline hover:bg-gray-100">aiden@million.dev</a>!
          </p>
        </header>

        <section className="mb-12 space-y-8">
          <h2 className="italic text-gray-400">Projects</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {data.projects.map(({ name, description, link }) => (
              <div key={name}>
                <p className="font-mono font-medium">
                  <a href={link} className="underline hover:bg-gray-100">{name}</a>
                </p>
                <p className="mt-2">{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12 space-y-8">
          <h2 className="italic text-gray-400">Work</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {data.work.map(({ name, description, link }) => (
              <div key={name}>
                <p className="font-mono font-medium">
                  <a href={link} className="underline hover:bg-gray-100">{name}</a>
                </p>
                <p className="mt-2">{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="italic text-gray-400">Awards</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {data.awards.map(({ name, description, link }) => (
              <div key={name}>
                <p className="font-mono font-medium">
                  <a href={link} className="underline hover:bg-gray-100">{name}</a>
                </p>
                <p className="mt-2">{description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
