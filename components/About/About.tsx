import Image from 'next/image';
import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import type { NextComponentType } from 'next';

export const About: NextComponentType = () => (
  <section className="my-16 flex flex-row items-center justify-between px-3">
    <div>
      <h1 className="text-4xl font-bold dark:text-white">Avinash</h1>
      <p className="mt-1 text-lg">Fullstack Engineer</p>
      <p className="mt-4 text-zinc-600 dark:text-zinc-300">
        Full-stack Engineer building compliance-grade fintech at Setu (Pine Labs). Specialized in scaling Next.js interfaces, high-performance Go services, and serverless cloud architectures.
      </p>
      <a
        href="https://avinashprj.hashnode.dev"
        className="group mt-4 flex cursor-pointer flex-row items-center gap-1 text-xl text-zinc-500 dark:text-zinc-400 transition-all duration-150 hover:text-zinc-900 dark:hover:text-white active:scale-95 inline-block"
        target="_blank"
        rel="noopener noreferrer"
      >
        Read my Blog
        <AiOutlineArrowRight className="text-[1.1rem] duration-150 group-hover:ml-1 rounded-full" />
      </a>
      <a
        href="https://www.buymeacoffee.com/avinashprj"
        className="group mt-4 flex cursor-pointer flex-row items-center gap-1 text-xl text-zinc-500 dark:text-zinc-400 transition-all duration-150 hover:text-zinc-900 dark:hover:text-white active:scale-95 inline-block"
        target="_blank"
        rel="noopener noreferrer"
      >
        Love my work? Sponsor me!
        <AiOutlineArrowRight className="text-[1.1rem] duration-150 group-hover:ml-1 rounded-full" />
      </a>
    </div>
    <div className="hidden custom:block w-[200px] h-[200px] rounded-full overflow-hidden flex-shrink-0 border-2 border-zinc-200 dark:border-zinc-800 shadow-sm relative">
      <Image
        src="https://res.cloudinary.com/avinashprj/image/upload/v1706524463/IMG_0900_lgnuiz.jpg"
        width="200"
        height="200"
        className="object-cover"
        alt="avatar"
        priority
      />
    </div>
  </section>
);
