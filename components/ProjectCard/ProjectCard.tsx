import type { NextComponentType, NextPageContext } from 'next';
import { BiLink } from 'react-icons/bi';
import Link from 'next/link';
import { ProjectDataTypes } from '../Projects/projectsData';
import Image from 'next/image';

export const ProjectCard: NextComponentType<
  NextPageContext,
  {},
  ProjectDataTypes
> = ({ liveLink, sourceLink, title, techStack, img }) => (
  <article className="group relative my-10">
    <div className="flex flex-col justify-center relative">
      <div className="flex flex-row peer absolute z-10 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] duration-150 transition-opacity opacity-0 group-hover:opacity-100 group-hover:blur-none ">
        <Link href={liveLink}>
          <a
            className="text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 flex justify-center items-center text-2xl  background-transparent font-bold uppercase outline-none focus:outline-none mr-4 mb-1 ease-linear transition-all duration-150"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="github-repo"
          >
            Live
          </a>
        </Link>
        <Link href={sourceLink}>
          <a
            className="text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 flex justify-center items-center text-2xl   background-transparent font-bold uppercase outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="github-repo"
          >
            Source
          </a>
        </Link>
      </div>
      <div className="peer-hover:blur-sm group hover:blur-sm transition-all duration-300 relative flex flex-col  space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xl md:max-w-3xl mx-auto border border-white bg-white">
        <div className="w-full bg-white grid place-items-center">
          <Image
            width={'900px'}
            height={'500px'}
            src={img}
            alt="tailwind logo"
            className="rounded-xl object-cover "
          />
        </div>
        <div className=" bg-white flex flex-col p-3">
          <div className="flex justify-between item-center" />
          <h3 className="font-black text-gray-800 md:text-3xl text-xl">
            {title}
          </h3>
          <p className="md:text-lg text-gray-500 text-base mt-2">
            <span className="text-m font-black text-gray-800 ">
              Tech Stack:
            </span>{' '}
            {techStack}
          </p>
        </div>
      </div>
    </div>
  </article>
);
