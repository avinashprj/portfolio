import type { NextPage } from 'next';
import {
  About,
  Contact,
  Experience,
  Header,
  Projects,
  Skills,
} from '../components';

const Home: NextPage = () => (
  <div className="px-2 sm:px-8 md:px-24 lg:px-48 xl:px-72 bg-white dark:bg-zinc-900 dark:text-gray-200">
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:p-3 focus:bg-zinc-100 focus:dark:bg-zinc-800 focus:text-zinc-900 focus:dark:text-white focus:rounded-md focus:ring-2 focus:ring-zinc-500 focus:outline-none"
    >
      Skip to content
    </a>
    <Header />
    <main id="main-content" tabIndex={-1} className="outline-none">
      <About />
      <Skills />
      <Experience />
      <Projects />
    </main>
    <footer>
      <Contact />
    </footer>
  </div>
);

export default Home;
