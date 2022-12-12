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
    liveLink: 'https://nucleus-book.vercel.app',
    sourceLink: 'https://github.com/avinashprj/nucleus-book',
    id: 'nucleus-book',
    title: 'Nucleus-book',
    img: 'https://res.cloudinary.com/avinashprj/image/upload/v1670864890/Screenshot_2022-12-12_223737_r9fcsn.png',
    techStack: 'React, Redux-toolkit, Vanilla CSS and Auth using JWT',
  },
  {
    liveLink: 'https://nucleus-store.vercel.app',
    sourceLink: 'https://github.com/avinashprj/nucleus-store',
    id: 'nucleus-store',
    title: 'Nucleus-store',
    img: 'https://res.cloudinary.com/avinashprj/image/upload/v1659633209/nucleusStore_hfxtut.png',
    techStack: 'React, react-query, Vanilla CSS and Auth using JWT',
  },
  {
    liveLink: 'https://nucleus-tube.vercel.app',
    sourceLink: 'https://github.com/avinashprj/nucleus-tube',
    id: 'nucleus-tube',
    title: 'Nucleus-tube',
    img: 'https://res.cloudinary.com/avinashprj/image/upload/v1659633204/nucleusTube_ochiam.png',
    techStack:
      'React, Redux-toolkit, RTK-query, Vanilla CSS and Auth using JWT',
  },
];
