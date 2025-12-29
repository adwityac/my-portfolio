import cls from 'classnames';

import { frontend, backend, databaseCloud } from '@/data/skills';

interface SectionProps {
  title: string;
  items: { id: string; name: string; image: string }[];
}

const Section = ({ title, items }: SectionProps) => {
  return (
    <div>
      <div className="mb-2 text-xl font-extrabold text-white md:text-center">
        {title}
      </div>
      <div className="flex flex-wrap gap-4 md:items-center md:justify-center">
        {items.map((item) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={item.id}
            src={item.image}
            alt={item.name}
            loading="lazy"
            className="transform transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-xl"
          />
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="p-5">
        <div className="mb-10 text-center text-2xl font-bold text-orange-600 md:text-3xl">
          Skills
        </div>
        <div className="-my-6">
          <ul className="mt-2 list-inside list-disc">
            <li>
              My strong focus is on
              <span className="text-orange-600"> Python</span>,{' '}
              <span className="text-orange-600"> Golang</span> , and{' '}
              <span className="text-orange-600"> Redis</span>.
            </li>

            <li>
              I have hands-on experience with a broad range of technologies:
            </li>
          </ul>
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            <Section title="Frontend" items={frontend} />
            <Section title="Backend" items={backend} />
            <Section title="Database & OS" items={databaseCloud} />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Skills };
