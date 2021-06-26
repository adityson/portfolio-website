export interface technoType {
  id: string;
  name: string;
  link?: string;
}

export const backTechnos: technoType[] = [
  {
    id: "express",
    name: "Express.js",
    link: `https://expressjs.com/`,
  },
  {
    id: "mongo",
    name: "MongoDB",
    link: `https://www.mongodb.com/`,
  },
];

export const frontTechnos: technoType[] = [
  {
    id: "react",
    name: "React",
    link: `https://reactjs.org/`,
  },
  {
    id: "next",
    name: "Next.js",
    link: `https://nextjs.org/`,
  },
  {
    id: "boot",
    name: "Bootstrap v5.0",
    link: `https://getbootstrap.com/docs/5.0/getting-started/introduction/`,
  },
  {
    id: "matui",
    name: "Material-UI",
    link: `https://material-ui.com/`,
  },
  {
    id: "chakraui",
    name: "Chakra-UI",
    link: `https://chakra-ui.com/`,
  },
];
