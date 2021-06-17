export interface projectRepoType {
    id: string;
    name: string;
    createMonth: string,
    image: string;
    description: string;
}

export const projectRepos: projectRepoType[] = [
    {
        id: 'portfolioweb',
        name: 'Portfolio Website',
        createMonth: `June '21 -`,
        image: '',
        description: `You're here right now. I was learning NextJS so thought of making a website to showcase my own projects and achievements. This project is really close to me and I'll keep on learning as it grows.`
    },
    {
        id: 'pollsfest',
        name: 'Polls Fest',
        createMonth: `May '21 - June '21`,
        image: '',
        description: `This was the first project I made with my own idea using ReactJS. Anyone can create, like, vote on any opinion poll. I thought of it as a way to know others' choices on anything that comes to mind.`
    }
];