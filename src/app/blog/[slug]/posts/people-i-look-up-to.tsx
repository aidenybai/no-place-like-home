import type { BlogPost } from '../page';

const linkClass =
  'underline decoration-neutral-500 underline-offset-[2.5px] hover:decoration-neutral-400';

const people = [
  { name: 'Theo Browne', href: 'https://x.com/theo' },
  { name: 'David Cramer', href: 'https://x.com/zeeg' },
  { name: 'John Pham', href: 'https://x.com/JohnPhamous' },
  { name: 'Ryan Carniato', href: 'https://x.com/RyanCarniato' },
  { name: 'Dax', href: 'https://x.com/thdxr' },
  { name: 'Jared Friedman', href: 'https://x.com/snowmaker' },
  { name: 'Andrej Karpathy', href: 'https://x.com/karpathy' },
  { name: 'Alistair Smith', href: 'https://x.com/alistaiir' },
  {
    name: 'Ange & Wilson',
    href: 'https://x.com/angehyc',
    secondHref: 'https://x.com/itswilsonhou',
  },
  { name: 'Scott Wu', href: 'https://x.com/ScottWu46' },
  { name: 'Dane Knecht', href: 'https://x.com/dok2001' },
  { name: 'Jarred Sumner', href: 'https://x.com/jarredsumner' },
  { name: 'Guillermo Rauch', href: 'https://x.com/rauchg' },
  { name: 'Amjad Masad', href: 'https://x.com/amasad' },
  { name: 'Sam Altman', href: 'https://x.com/sama' },
  { name: 'Vjeux (Christopher Chedeau)', href: 'https://x.com/Vjeux' },
  { name: 'Steve Ruiz', href: 'https://x.com/steveruizok' },
  { name: 'Sahil Lavingia', href: 'https://x.com/shl' },
  { name: 'Ben Vinegar', href: 'https://x.com/bentlegen' },
  { name: 'Jacob Jackson', href: 'https://x.com/jbfja' },
  { name: 'Aman Sanger', href: 'https://x.com/amanrsanger' },
  { name: 'Ryan Florence', href: 'https://x.com/ryanflorence' },
  { name: 'Tom Occhino', href: 'https://x.com/tomocchino' },
  { name: 'Jordan Walke', href: 'https://x.com/jordwalke' },
  { name: 'Evan You', href: 'https://x.com/youyuxi' },
  { name: 'Charlie Marsh', href: 'https://x.com/charliermarsh' },
  { name: 'shadcn', href: 'https://x.com/shadcn' },
  { name: 'Dominic Gannaway', href: 'https://x.com/trueadm' },
  { name: 'Tanner Linsley', href: 'https://x.com/tannerlinsley' },
  { name: 'Eric Zhang', href: 'https://x.com/ekzhang1' },
  { name: 'Zach Latta', href: 'https://x.com/zachlatta' },
  { name: 'George Hotz', href: 'https://x.com/realGeorgeHotz' },
  { name: 'Jeffrey Heer', href: 'https://x.com/jwheer' },
  { name: 'Matthew Conlen', href: 'https://x.com/mathisonian' },
  { name: 'Dominik Moritz', href: 'https://x.com/domoritz' },
  { name: 'Will Depue', href: 'https://x.com/willdepue' },
  { name: 'Anthony Fu', href: 'https://x.com/antfu7' },
  { name: 'Shu Ding', href: 'https://x.com/shuding' },
  { name: 'Linus Lee (thesephist)', href: 'https://x.com/thesephist' },
  { name: 'Anson Yu', href: 'https://x.com/ansonyuu' },
  { name: 'Jacky Zhao', href: 'https://x.com/_jzhao' },
  { name: 'Tom Preston-Werner', href: 'https://x.com/mojombo' },
  { name: 'Caleb Porzio', href: 'https://x.com/calebporzio' },
];

export const peopleILookUpTo: BlogPost = {
  title: 'People I look up to',
  date: '2025-12-17',
  description: 'A growing list of people who inspire me and whose work I admire.',
  content: (
    <>
      <p>
        this list is non-exhaustive, unordered, and ever growing. these are people who
        inspire me, whose work i admire, and who i've learned from.
      </p>

      <ul className="list-disc list-inside space-y-1 mt-4">
        {people.map((person) => (
          <li key={person.name}>
            {person.secondHref ? (
              <>
                <a href={person.href} className={linkClass}>
                  {person.name.split(' & ')[0]}
                </a>{' '}
                &{' '}
                <a href={person.secondHref} className={linkClass}>
                  {person.name.split(' & ')[1]}
                </a>
              </>
            ) : (
              <a href={person.href} className={linkClass}>
                {person.name}
              </a>
            )}
          </li>
        ))}
      </ul>
    </>
  ),
};



