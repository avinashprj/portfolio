import { NextComponentType, NextPageContext } from 'next';

type LinkProps = {
  text: string;
  url: string;
};
export const TextLink: NextComponentType<NextPageContext, {}, LinkProps> = ({
  text,
  url,
}) => (
  <a
    href={url}
    className="hover:text-white  cursor-pointer rounded-md px-4 py-[0.30rem] text-xl duration-100 hover:bg-zinc-800"
  >
    {text}
  </a>
);
