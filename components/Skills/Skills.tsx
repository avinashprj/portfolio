import { BsArrowRightShort } from 'react-icons/bs';

export const Skills = () => (
  <section className="my-16 px-3" id="skills">
    <p className="text-3xl font-bold dark:text-white">Skills & Technologies</p>
    <div className="text-md my-8 flex flex-col font-medium md:text-xl custom:text-lg gap-y-4">
      <div className="border-b-[0.1px] border-gray-500 pb-3">
        <p className="text-foreground dark:text-white font-bold mb-2 flex items-center">
          <BsArrowRightShort size="30" className="text-gray-500" />
          Languages
        </p>
        <p className="text-sm dark:text-zinc-300 text-zinc-600 pl-7">
          Go, TypeScript, JavaScript, Python, SQL
        </p>
      </div>

      <div className="border-b-[0.1px] border-gray-500 pb-3">
        <p className="text-foreground dark:text-white font-bold mb-2 flex items-center">
          <BsArrowRightShort size="30" className="text-gray-500" />
          Frontend
        </p>
        <p className="text-sm dark:text-zinc-300 text-zinc-600 pl-7">
          React, Next.js (App/Pages), Zustand, Tailwind CSS, Shadcn UI, Radix UI, TanStack Query/Table, Styled Components, Redux Toolkit
        </p>
      </div>

      <div className="border-b-[0.1px] border-gray-500 pb-3">
        <p className="text-foreground dark:text-white font-bold mb-2 flex items-center">
          <BsArrowRightShort size="30" className="text-gray-500" />
          Backend & Distributed Systems
        </p>
        <p className="text-sm dark:text-zinc-300 text-zinc-600 pl-7">
          Node.js, Express, Goa (Go framework), Temporal (Distributed Workflows), sqlc, OpenAPI
        </p>
      </div>

      <div className="border-b-[0.1px] border-gray-500 pb-3">
        <p className="text-foreground dark:text-white font-bold mb-2 flex items-center">
          <BsArrowRightShort size="30" className="text-gray-500" />
          Cloud, Databases & DevOps
        </p>
        <p className="text-sm dark:text-zinc-300 text-zinc-600 pl-7">
          AWS (ECS, Lambda, SQS, SNS, S3, DynamoDB), SST (Serverless Stack), PostgreSQL, DynamoDB, ClickHouse, MongoDB, Docker, Turborepo, CI/CD, OpenNext
        </p>
      </div>

      <div className="pb-3">
        <p className="text-foreground dark:text-white font-bold mb-2 flex items-center">
          <BsArrowRightShort size="30" className="text-gray-500" />
          Testing, Tools & Monitoring
        </p>
        <p className="text-sm dark:text-zinc-300 text-zinc-600 pl-7">
          Playwright, Jest, React Testing Library, MSW, Storybook, Sentry, PostHog, Grafana, Figma, Git, Postman
        </p>
      </div>
    </div>
  </section>
);
