export type ProjectDataTypes = {
  liveLink: string;
  sourceLink: string;
  id: string;
  title: string;
  techStack: string;
  img: string;
};

export const projectsData: ProjectDataTypes[] = [
  {
    liveLink: 'https://nucleus-store.vercel.app',
    sourceLink: 'https://github.com/avinashprj/nucleus-store',
    id: 'nucleus-store',
    title: 'Nucleus-store',
    img: 'https://user-images.githubusercontent.com/76595361/178334525-1dbd44ca-2c52-4019-8700-4a7906e143ed.png',
    techStack: 'React, react-query, Vanilla CSS and Auth using JWT',
  },
  {
    liveLink: 'https://nucleus-tube.vercel.app',
    sourceLink: 'https://github.com/avinashprj/nucleus-tube',
    id: 'nucleus-tube',
    title: 'Nucleus-tube',
    img: 'https://user-images.githubusercontent.com/76595361/178335657-85452697-2523-46a1-b127-30f95802d136.png',
    techStack:
      'React, Redux-toolkit, RTK-query, Vanilla CSS and Auth using JWT',
  },
];
