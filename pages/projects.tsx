import React from 'react'
import Head from 'next/head';
import { Flex, Heading, Text } from '@chakra-ui/react';
import ProjectsShowcase from '../components/Projects/ProjectsShowcase';
import { repoType } from './api/github';

interface projectProps {
    repos: repoType[];
}

const projects = ({ repos }: projectProps) => {
    return (
        <>
        <Head>
            <title>Projects|Portfolio</title>
        </Head>
        <Flex flexDirection='column'>
            <Flex flexDirection='column'>
                <Heading as='h2' fontSize={{base:'5xl', md: '7xl'}} marginTop='100px' textAlign='center' width='100%'>
                    My Projects
                </Heading>
                <Text fontSize='sm' textAlign='center' marginTop='20px'>A brief showcase of the projects I made.</Text>
            </Flex>
            <ProjectsShowcase reposAll={repos} />
        </Flex>
        </>
    )
}

export async function getStaticProps() {
    const URL = process.env.NODE_ENV === 'production' ? `https://adityasoni.vercel.app` : `http://localhost:3000`;
    const response = await fetch(`${URL}/api/github`);
    const { repos } = await response.json();
    
    return { props: { repos, revalidate: 600 }};
}

export default projects;
