import type { NextComponentType } from 'next';
import { MdEmail } from 'react-icons/md';
import { GrLinkedinOption } from 'react-icons/gr';
import { AiOutlineGithub, AiOutlineTwitter, AiFillHeart } from 'react-icons/ai';
import Link from 'next/link';

export const Contact: NextComponentType = () => (
  <div className="mt-16 pb-16 px-3 font-sen" id="contact">
    <p className="text-3xl font-bold dark:text-white">Get in touch</p>

    <div className="mt-8 mb-6 flex flex-row justify-center gap-x-4">
      <Link href="https://github.com/avinashprj" passHref>
        <a
          className="rounded-lg dark:bg-zinc-800 p-2 text-2xl dark:text-white  dark:ring-zinc-300 ring-zinc-500 transition-all duration-150 hover:ring-2"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="github-profile"
        >
          <AiOutlineGithub />
        </a>
      </Link>
      <Link href="https://twitter.com/avinash_prj" passHref>
        <a
          className="rounded-lg dark:bg-zinc-800 p-2 text-2xl dark:text-white  dark:ring-zinc-300 ring-zinc-500 transition-all duration-150 hover:ring-2"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="twitter-profile"
        >
          <AiOutlineTwitter />
        </a>
      </Link>
      <Link href="https://linkedin.com/in/avinash-prajapati" passHref>
        <a
          className="rounded-lg dark:bg-zinc-800 p-2 text-2xl dark:text-white  dark:ring-zinc-300 ring-zinc-500 transition-all duration-150 hover:ring-2"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="github-repo"
        >
          <GrLinkedinOption />
        </a>
      </Link>
      <Link href="mailto:kr.avinashprajapati914@gmail.com" passHref>
        <a
          className="rounded-lg dark:bg-zinc-800 p-2 text-2xl dark:text-white  dark:ring-zinc-300 ring-zinc-500 transition-all duration-150 hover:ring-2"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="github-repo"
        >
          <MdEmail />
        </a>
      </Link>
    </div>
    <div className="flex flex-row justify-center items-center text-gray-400">
      made with <AiFillHeart className=" mx-1 text-red-500" /> and NextJS
    </div>
    <div className="flex flex-row justify-center text-gray-500">
      © {new Date().getFullYear()} Avinash Prajapati
    </div>
  </div>
);
