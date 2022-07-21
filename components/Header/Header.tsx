import React from 'react';
import type { NextComponentType } from 'next';
import Link from 'next/link';
import { VscGithubAlt } from 'react-icons/vsc';
import { TextLink } from '../TextLinks/TextLinks';
import { headerLinks } from './header.linksData';

export const Header: NextComponentType = () => (
  <header>
    <nav className="py-4 sm:py-8 flex flex-row items-center justify-between mx-[0.5rem] sm:mx-0">
      <h1 className="sm:hidden">Avinash</h1>
      <ul className="hidden sm:flex">
        {headerLinks.map((linkItem) => (
          <li key={linkItem.id}>
            <TextLink text={linkItem.text} url={linkItem.url} />
          </li>
        ))}
      </ul>
      <Link href="https://github.com/avinashprj" passHref>
        <a
          className="rounded-lg bg-zinc-800 p-2 text-2xl text-white ring-zinc-300 transition-all duration-150 hover:ring-2  "
          target="_blank"
          rel="noopener noreferrer"
          aria-label="github-repo"
        >
          <VscGithubAlt />
        </a>
      </Link>
    </nav>
  </header>
);
