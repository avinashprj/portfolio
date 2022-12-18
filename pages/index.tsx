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
    <Header />
    <main>
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
