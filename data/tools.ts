export interface toolType {
    id: string;
    name: string;
    link?: string;
    description: string;
}

export const tools: toolType[] = [
    {
        id: 'vscode',
        name: 'Visual Studio Code',
        link: `https://code.visualstudio.com/`,
        description: 'A lightweight code editor with plenty of plugins.'
    },
    {
        id: 'vim',
        name: 'Vim',
        link: `https://www.vim.org/`,
        description: 'Vim is a highly configurable text editor.'
    },
    {
        id: 'github',
        name: 'Github',
        link: `https://github.com/`,
        description: 'Offers the distributed version control functionality of Git'
    },
    {
        id: 'terminal',
        name: `Linux Terminal`,
        description: 'Text interface to the computer.'
    },
    {
        id: 'latex',
        name: 'Latex',
        link: `https://www.latex-project.org/`,
        description: 'High-quality typesetting system.'
    },
    {
        id: 'atom',
        name: 'Atom',
        link: `https://atom.io/`,
        description: 'Free and open-source text and source code editor.'
    },
    {
        id: 'discord',
        name: 'Discord',
        link: `https://discord.com/`,
        description: 'Easiest way to talk over voice, video, and text.'
    }
]