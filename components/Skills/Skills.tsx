import { BsArrowRightShort } from 'react-icons/bs';

export const Skills = () => (
  <section className="my-16 px-3" id="skills">
    <p className="text-3xl font-bold text-white">Skills & Uses</p>
    <div className="text-md my-8 flex flex-col font-medium md:text-xl custom:text-lg">
      <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300">
        <BsArrowRightShort size="30" />
        <span className="text-white">React</span>
        &nbsp;as my Frontend Framework
      </p>

      <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300">
        <BsArrowRightShort size="30" />
        <span className="text-white">Typescript </span>
        &nbsp;as my main language
      </p>

      <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300">
        <BsArrowRightShort size="30" />
        <span className="text-white">Tailwind CSS </span>
        &nbsp;as my CSS framework
      </p>

      <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300">
        <BsArrowRightShort size="30" />
        <span className="text-white">Redux</span>
        &nbsp;as my State Management tool
      </p>
    </div>

    <p className="text-lg font-medium text-slate-300">
      ...more skills include <span className="text-white">javascript</span>,{' '}
      <span className="text-white">HTML5</span>,{' '}
      <span className="text-white">CSS3 </span>{' '}
    </p>
  </section>
);
