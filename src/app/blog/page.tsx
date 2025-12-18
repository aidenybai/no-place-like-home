import Link from 'next/link';
import IconArrowTopRight from '../../components/icon-arrow-top-right';

const posts = [
  {
    url: '/blog/21',
    title: 'Reflecting on 20',
    date: '2026-01-05',
    external: false,
  },
  {
    url: '/blog/people-i-look-up-to',
    title: 'People I look up to',
    date: '2025-12-17',
    external: false,
  },
  {
    url: 'https://www.react-grab.com/blog/bets',
    title: 'Some bets',
    date: '2025-11-29',
    external: true,
  },
  {
    url: 'https://www.react-grab.com/blog/intro',
    title: 'I made your coding agent 3× faster at frontend',
    date: '2025-11-24',
    external: true,
  },
  {
    url: 'https://old.million.dev/blog/virtual-dom',
    title: 'Virtual DOM: Back in Block',
    date: '2023-05-01',
    external: true,
  },
];

export default function Blog() {
  const postsByYear = posts.reduce((acc, post) => {
    const year = post.date.split('-')[0];
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(post);
    return acc;
  }, {} as Record<string, typeof posts>);

  const years = Object.keys(postsByYear).sort((a, b) => Number(b) - Number(a));
  years.forEach((year) => {
    postsByYear[year].sort((a, b) => b.date.localeCompare(a.date));
  });

  return (
    <main className="flex flex-col gap-2 max-w-[600px] px-10 py-10 leading-relaxed text-base">
      <p>
        <Link
          href="/"
          className="underline decoration-neutral-500 underline-offset-[2.5px] hover:decoration-neutral-400"
        >
          ← Back to home
        </Link>
      </p>

      <h1 className="text-lg font-semibold mt-4">Blog</h1>

      <div className="flex flex-col mt-6 gap-3">
        {years.map((year) => (
          <div key={year} className="flex flex-col gap-2">
            {postsByYear[year].map((post, index) => (
              <div
                key={post.url}
                className="flex items-center gap-4"
              >
                {index === 0 ? (
                  <span className="text-neutral-500 text-sm min-w-12">
                    {year}
                  </span>
                ) : (
                  <span className="text-neutral-500 text-sm min-w-12" />
                )}
                {post.external ? (
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-neutral-500 underline-offset-[2.5px] hover:decoration-neutral-400"
                  >
                    {post.title}
                    <IconArrowTopRight className="w-3 h-3 inline-block ml-1 align-baseline" />
                  </a>
                ) : (
                  <Link
                    href={post.url}
                    className="underline decoration-neutral-500 underline-offset-[2.5px] hover:decoration-neutral-400"
                  >
                    {post.title}
                  </Link>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </main>
  );
}

