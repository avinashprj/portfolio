import { BsArrowRightShort } from 'react-icons/bs';

export const Skills = () => (
  <section className="my-16 px-3" id="skills">
    <p className="text-3xl font-bold dark:text-white">Skills & Uses</p>
    <div className="text-md my-8 flex flex-col font-medium md:text-xl custom:text-lg">
      <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 dark:text-slate-300 text-slate-600">
        <BsArrowRightShort size="30" />
        <span className="dark:text-white font-bold">React</span>
        &nbsp;as my Frontend Framework
      </p>

      <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 dark:text-slate-300 text-slate-600">
        <BsArrowRightShort size="30" />
        <span className="dark:text-white font-bold">Typescript </span>
        &nbsp;as my main language
      </p>

      <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 dark:text-slate-300 text-slate-600">
        <BsArrowRightShort size="30" />
        <span className="dark:text-white font-bold">Tailwind CSS </span>
        &nbsp;as my CSS framework
      </p>

      <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 dark:text-slate-300 text-slate-600">
        <BsArrowRightShort size="30" />
        <span className="dark:text-white font-bold">Redux</span>
        &nbsp;as my State Management tool
      </p>
    </div>

    <p className="text-lg font-medium dark:text-slate-300 text-slate-600">
      ...more skills include{' '}
      <span className="dark:text-white text-slate-600 font-bold">
        javascript
      </span>
      , <span className="dark:text-white text-slate-600 font-bold">HTML5</span>,{' '}
      <span className="dark:text-white text-slate-600 font-bold">CSS3 </span>{' '}
    </p>
  </section>
);
