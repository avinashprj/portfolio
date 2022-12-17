import type { NextComponentType, NextPageContext } from 'next';

import Link from 'next/link';
import { ProjectCard } from '../ProjectCard/ProjectCard';
import { projectsData } from './projectsData';

export const Projects: NextComponentType<NextPageContext, {}> = () => (
  <section className="my-16 px-3" id="projects">
    <p className="text-3xl font-bold dark:text-white">Featured Projects</p>
    {projectsData.map((singleProject) => (
      <ProjectCard {...singleProject} />
    ))}
  </section>
);
