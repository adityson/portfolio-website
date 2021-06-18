export interface projectRepoType {
    id: string;
    name: string;
    createMonth: string,
    image?: string;
    description: string;
}

export const projectRepos: projectRepoType[] = [
    {
        id: 'portfolio-website',
        name: 'Portfolio Website',
        createMonth: `June '21 -`,
        description: `You're here right now. I was learning NextJS so thought of making a website to showcase my own projects and achievements. This project is really close to me and I'll keep on learning as it grows.`
    },
    {
        id: 'polls-fest',
        name: 'Polls Fest',
        createMonth: `May '21 - June '21`,
        image: `https://raw.githubusercontent.com/adityson/polls-fest/master/pollsfest.png`,
        description: `This was the first project I made with my own idea using ReactJS. Anyone can create, like, vote on any opinion poll. I thought of it as a way to know others' choices on anything that comes to mind.`
    }
];