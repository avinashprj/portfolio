import type { NextComponentType } from 'next';
import { SetuLogo, ZezaLogo } from './ExperienceLogos';

export const Experience: NextComponentType = () => (
  <div className="my-16 px-3 font-sen" id="experience">
    <p className="text-3xl font-bold dark:text-white mb-8">Experience</p>

    {/* SDE I */}
    <div className="flex flex-wrap sm:flex-nowrap relative border-l border-l-gray-600 px-4 py-2 border-gray-400">
      <span className="w-2 h-2 bg-gray-600 -left-1 rounded-full absolute top-8" />
      <a
        href="https://setu.co"
        target="_blank"
        rel="noopener noreferrer"
        className="w-16 h-16 flex items-center justify-center shadow-none hover:shadow-none text-foreground flex-shrink-0"
        aria-label="Setu Logo"
      >
        <SetuLogo />
      </a>
      <div className="w-full ml-2 sm:ml-4 pb-8">
        <p className="my-0 text-foreground font-bold text-xl dark:text-white">
          Software Development Engineer I
        </p>
        <p className="my-0 text-lg font-bold">Setu (Pine Labs)</p>
        <p className="my-0 text-sm text-zinc-600 dark:text-zinc-300">
          Apr 2024 - Present
        </p>
        <ul className="list-disc list-outside ml-4 mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
          <li>
            Co-engineered a{' '}
            <span className="font-semibold text-foreground dark:text-gray-200">
              foreign remittance platform
            </span>{' '}
            (Go, Temporal, AWS SQS/SNS, PostgreSQL), slashing transaction TAT
            from <span className="font-semibold">2–3 days to 15 minutes</span>{' '}
            for partner <span className="font-semibold">CRED</span>.
          </li>
          <li>
            Architected a{' '}
            <span className="font-semibold text-foreground dark:text-gray-200">
              merchant reconciliation portal
            </span>{' '}
            from scratch (Next.js 14, Turborepo, Zustand), standardizing a
            component library that cut per-product frontend dev cycles by{' '}
            <span className="font-semibold">35%</span>.
          </li>
          <li>
            Automated{' '}
            <span className="font-semibold text-foreground dark:text-gray-200">
              BBPS Whitelabel
            </span>{' '}
            deployments by migrating legacy scripts to an{' '}
            <span className="font-semibold text-foreground dark:text-gray-200">
              SST
            </span>{' '}
            CI/CD workflow, eliminating{' '}
            <span className="font-semibold">
              100% of deployment-related production incidents
            </span>
            .
          </li>
          <li>
            Created a staging sandbox and validation pipeline for live DynamoDB
            updates, safeguarding production environments to slash onboarding
            support tickets by <span className="font-semibold">80%</span>.
          </li>
          <li>
            Integrated{' '}
            <span className="font-semibold text-foreground dark:text-gray-200">
              Lago's billing engine
            </span>{' '}
            with central KYC across Bridge/Collect, eliminating manual
            spreadsheets and enabling real-time, API-driven commercial tracking.
          </li>
          <li>
            Migrated legacy{' '}
            <span className="font-semibold text-foreground dark:text-gray-200">
              Bridge v1
            </span>{' '}
            React codebase to{' '}
            <span className="font-semibold text-foreground dark:text-gray-200">
              Bridge v2
            </span>
            , integrating the unified central KYC pipeline to achieve{' '}
            <span className="font-semibold">100% feature parity</span> with
            zero service disruptions.
          </li>
        </ul>
      </div>
    </div>

    {/* Setu Intern */}
    <div className="flex flex-wrap sm:flex-nowrap relative border-l border-l-gray-600 px-4 py-2 border-gray-400">
      <span className="w-2 h-2 bg-gray-600 -left-1 rounded-full absolute top-8" />
      <a
        href="https://setu.co"
        target="_blank"
        rel="noopener noreferrer"
        className="w-16 h-16 flex items-center justify-center shadow-none hover:shadow-none text-foreground flex-shrink-0"
        aria-label="Setu Logo"
      >
        <SetuLogo />
      </a>
      <div className="w-full ml-2 sm:ml-4 pb-8">
        <p className="my-0 text-foreground font-bold text-xl dark:text-white">
          Frontend Engineer Intern
        </p>
        <p className="my-0 text-lg font-bold">Setu (Pine Labs)</p>
        <p className="my-0 text-sm text-zinc-600 dark:text-zinc-300">
          Dec 2022 - Mar 2024
        </p>
        <ul className="list-disc list-outside ml-4 mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
          <li>
            Led frontend development for{' '}
            <span className="font-semibold text-foreground dark:text-gray-200">
              setu.co/pay
            </span>{' '}
            (Next.js), implementing the{' '}
            <span className="font-semibold">BBPS 1.1 multi-bill spec</span> to
            onboard enterprise clients ahead of Google Pay's timeline.
          </li>
          <li>
            Designed and built an AI-powered documentation search engine
            end-to-end (<span className="font-semibold">Go</span>,{' '}
            <span className="font-semibold">Next.js</span>), integrated live at{' '}
            <a
              href="https://docs.setu.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground dark:text-gray-200 underline font-semibold"
            >
              docs.setu.co
            </a>
            .
          </li>
          <li>
            Authored and published{' '}
            <a
              href="https://github.com/SetuHQ/company-bot"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground dark:text-gray-200 underline font-semibold"
            >
              CompanyBot
            </a>{' '}
            npm library, leveraging Markprompt for MDX-based AI semantic search
            in static developer docs.
          </li>
        </ul>
      </div>
    </div>

    {/* Zeza Intern */}
    <div className="flex flex-wrap sm:flex-nowrap relative border-l border-l-gray-600 px-4 py-2 border-gray-400">
      <span className="w-2 h-2 bg-gray-600 -left-1 rounded-full absolute top-8" />
      <a
        href="https://zeza.tech"
        target="_blank"
        rel="noopener noreferrer"
        className="w-16 h-16 flex items-center justify-center shadow-none hover:shadow-none text-foreground flex-shrink-0"
        aria-label="Zeza Logo"
      >
        <ZezaLogo />
      </a>
      <div className="w-full ml-2 sm:ml-4">
        <p className="my-0 text-foreground font-bold text-xl dark:text-white">
          Frontend Engineer Intern
        </p>
        <p className="my-0 text-lg font-bold">Zeza</p>
        <p className="my-0 text-sm text-zinc-600 dark:text-zinc-300">
          Aug 2022 - Nov 2022
        </p>
        <ul className="list-disc list-outside ml-4 mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
          <li>
            Engineered responsive dashboard modules using{' '}
            <span className="font-semibold text-foreground dark:text-gray-200">
              React
            </span>{' '}
            and{' '}
            <span className="font-semibold text-foreground dark:text-gray-200">
              Tailwind CSS
            </span>
            , resolving cross-browser rendering bottlenecks to boost page load
            speeds by <span className="font-semibold">15%</span>.
          </li>
          <li>
            Created and implemented POC for a folder structure feature.{' '}
            <a
              href="https://folder-structure-poc.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground dark:text-gray-200 text-blue-500 underline font-semibold"
            >
              Link
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);
