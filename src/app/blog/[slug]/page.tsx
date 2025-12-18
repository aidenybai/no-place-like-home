import Link from 'next/link';
import { post21 } from './posts/21';
import { peopleILookUpTo } from './posts/people-i-look-up-to';

const posts: Record<
  string,
  {
    title: string;
    date: string;
    content: React.ReactNode;
  }
> = {
  '21': post21,
  'people-i-look-up-to': peopleILookUpTo,
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
        <h1 className="text-lg font-semibold">Post not found</h1>
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

      <h1 className="text-lg font-semibold mt-4">{post.title}</h1>
      <p className="text-sm text-neutral-600">{post.date}</p>

      <div className="flex flex-col gap-2 mt-4">{post.content}</div>
    </main>
  );
}
