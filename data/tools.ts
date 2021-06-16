export interface toolType {
    id: string;
    name: string;
    link: string;
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
        description: 'Vim is a highly configurable text editor built to make creating and changing any kind of text very efficient.'
    }
]