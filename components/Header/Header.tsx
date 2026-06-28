import React, { useEffect, useState } from 'react';
import type { NextComponentType } from 'next';
import { VscGithubAlt } from 'react-icons/vsc';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
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
  const [menuOpen, setMenuOpen] = useState(false);

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

  // Lock body scroll when mobile menu drawer is active
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  return (
    <header className="relative">
      <nav className="py-4 sm:py-8 flex flex-row items-center justify-between mx-[0.5rem] sm:mx-0">
        {/* Logo / Brand Name */}
        <a
          href="#"
          className="font-jost text-xl font-bold tracking-tight text-zinc-900 dark:text-white transition-transform active:scale-95 inline-block md:hidden"
          aria-label="Avinash Portfolio Home"
        >
          Avinash
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex flex-row items-center gap-2">
          {headerLinks.map((linkItem) => (
            <li key={linkItem.id}>
              <TextLink text={linkItem.text} url={linkItem.url} />
            </li>
          ))}
        </ul>

        {/* Controls Container */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="rounded-lg dark:bg-zinc-800 p-2 text-2xl dark:text-white dark:ring-zinc-300 ring-zinc-500 transition-all duration-150 hover:ring-2 active:scale-90"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <MdOutlineDarkMode className="w-5 h-5" />
            ) : (
              <MdOutlineLightMode className="w-5 h-5" />
            )}
          </button>

          <a
            href="https://github.com/avinashprj"
            className="rounded-lg dark:bg-zinc-800 p-2 text-2xl dark:text-white dark:ring-zinc-300 ring-zinc-500 transition-all duration-150 hover:ring-2 active:scale-90"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View GitHub Profile"
          >
            <VscGithubAlt className="w-5 h-5" />
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden rounded-lg dark:bg-zinc-800 p-2 text-2xl dark:text-white dark:ring-zinc-300 ring-zinc-500 transition-all duration-150 hover:ring-2 z-50 relative active:scale-90"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? (
              <HiX className="w-5 h-5" />
            ) : (
              <HiMenuAlt4 className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-white/95 dark:bg-zinc-950/98 backdrop-blur-md md:hidden transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          menuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <ul className="flex flex-col items-center gap-8">
            {headerLinks.map((linkItem) => (
              <li key={linkItem.id}>
                <a
                  href={linkItem.url}
                  className="font-jost text-3xl font-bold text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-all duration-150 active:scale-95 inline-block"
                  onClick={() => setMenuOpen(false)}
                >
                  {linkItem.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};
