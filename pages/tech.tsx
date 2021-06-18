import React from 'react'
import Head from 'next/head';
import { Flex, Heading, Text } from '@chakra-ui/react';
import TechShowcase from '../components/Technologies/TechShowcase';
import ToolShowcase from '../components/Tools/ToolShowcase';
import ScrollAnchor from '../components/ScrollAnchor/ScrollAnchor';

const tech = () => {

    const anc: string[] = ['#tools', '#tech'];

    return (
        <>
        <Head>
            <title>Techno|Portfolio</title>
        </Head>
        <Flex flexDirection='column'>
            <Flex id='tech' flexDirection='column'>
                <Heading as='h2' size='4xl' marginTop='100px' textAlign='center' width='100%'>
                    Technology 
                </Heading>
                <Text fontSize='sm' textAlign='center' marginTop='20px'>A brief showcase of technologies and tools I've worked with.</Text>
            </Flex>
            <TechShowcase />
            <ScrollAnchor jump={anc}/>
            <ToolShowcase />
        </Flex>
        </>
    )
}

export default tech;
