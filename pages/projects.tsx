import React from 'react'
import Head from 'next/head';
import { Flex, Heading, Text } from '@chakra-ui/react';
import ProjectsShowcase from '../components/Projects/ProjectsShowcase';

const projects = () => {
    return (
        <>
        <Head>
            <title>Projects|Portfolio</title>
        </Head>
        <Flex flexDirection='column'>
            <Flex flexDirection='column'>
                <Heading as='h2' size='4xl' marginTop='100px' textAlign='center' width='100%'>
                    My Projects
                </Heading>
                <Text fontSize='sm' textAlign='center' marginTop='20px'>A brief showcase of the projects I made.</Text>
            </Flex>
            <ProjectsShowcase />
        </Flex>
        </>
    )
}

export default projects;
