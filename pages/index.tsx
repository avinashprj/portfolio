import type { NextPage } from 'next';
import { About, Header, Projects, Skills } from '../components';

const Home: NextPage = () => (
  <div className="px-2 sm:px-8 md:px-24 lg:px-48 xl:px-72">
    <Header />
    <main>
      <About />
      <Skills />
      <Projects />
    </main>
  </div>
);

export default Home;
