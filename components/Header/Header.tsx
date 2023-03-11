import React, { useEffect, useState } from 'react';
import type { NextComponentType } from 'next';
import Link from 'next/link';
import { VscGithubAlt } from 'react-icons/vsc';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { TextLink } from '../TextLinks/TextLinks';
import { headerLinks } from './header.linksData';

export const Header: NextComponentType = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (
      typeof window !== 'undefined' &&
      localStorage.getItem('theme') === 'light'
    ) {
      document.documentElement.classList.remove('dark');
      return 'light';
    } else return 'dark';
  });
  const toggleTheme = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      setTheme('light');
    } else {
      document.documentElement.classList.add('dark');
      setTheme('dark');
    }
  };
  useEffect(() => {
    if (theme === 'light') {
      localStorage.setItem('theme', 'light');
    } else {
      localStorage.setItem('theme', 'dark');
    }
  }, [theme]);

  return (
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
        <div className="flex gap-3">
          <button
            type="button"
            className="rounded-lg dark:bg-zinc-800 p-2 text-2xl dark:text-white dark:ring-zinc-300 ring-zinc-500 transition-all duration-150 hover:ring-2"
            onClick={toggleTheme}
            aria-label="theme-toggle"
          >
            {theme === 'dark' ? (
              <MdOutlineDarkMode className="w-5 h-5 " />
            ) : (
              <MdOutlineLightMode className="w-5 h-5 " />
            )}
          </button>
          <Link href="https://github.com/avinashprj" passHref>
            <a
              className="rounded-lg dark:bg-zinc-800 p-2 text-2xl dark:text-white  dark:ring-zinc-300 ring-zinc-500 transition-all duration-150 hover:ring-2"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="github-repo"
            >
              <VscGithubAlt />
            </a>
          </Link>
        </div>
      </nav>
    </header>
  );
};
