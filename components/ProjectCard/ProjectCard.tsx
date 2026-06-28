import type { NextComponentType, NextPageContext } from 'next';
import { BiLink } from 'react-icons/bi';
import { ProjectDataTypes } from '../Projects/projectsData';
import Image from 'next/image';

export const ProjectCard: NextComponentType<
  NextPageContext,
  {},
  ProjectDataTypes
> = ({ liveLink, sourceLink, title, techStack, img }) => (
  <article className="my-10">
    <div className="flex flex-col space-y-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 p-4 max-w-xl md:max-w-3xl mx-auto transition-all duration-200 hover:border-zinc-300 dark:hover:border-zinc-700 shadow-sm">
      {/* Image Section */}
      <div className="w-full overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-950 grid place-items-center">
        <Image
          width={900}
          height={500}
          src={img}
          alt={title}
          className="object-cover transition-transform duration-300 hover:scale-[1.01]"
        />
      </div>

      {/* Info Section */}
      <div className="flex flex-col p-1">
        <h3 className="font-bold text-zinc-900 dark:text-white md:text-2xl text-xl font-sen">
          {title}
        </h3>
        <p className="md:text-base text-zinc-700 dark:text-zinc-300 text-sm mt-2 font-sen">
          <span className="font-bold text-zinc-800 dark:text-zinc-200">
            Tech Stack:
          </span>{' '}
          {techStack}
        </p>

        {/* Action Links */}
        <div className="flex flex-row items-center gap-6 mt-4 text-sm font-medium">
          <a
            href={liveLink}
            className="text-zinc-900 dark:text-white hover:underline flex items-center gap-1 font-jost transition-all duration-150 active:scale-95"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View Live Demo for ${title}`}
          >
            Live Demo <BiLink className="text-[1.1rem]" />
          </a>
          <a
            href={sourceLink}
            className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:underline flex items-center gap-1 font-jost transition-all duration-150 active:scale-95"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View Source Code for ${title}`}
          >
            Source Code <BiLink className="text-[1.1rem]" />
          </a>
        </div>
      </div>
    </div>
  </article>
);
