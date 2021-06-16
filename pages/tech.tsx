import React from 'react'
import Head from 'next/head';
import { Flex, Heading, Text } from '@chakra-ui/react';
import TechShowcase from '../components/Technologies/TechShowcase';

const tech = () => {
    return (
        <>
        <Head>
            <title>Techno|Portfolio</title>
        </Head>
        <Flex flexDirection='column'>
            <Flex flexDirection='column'>
                <Heading as='h2' size='3xl' marginTop='100px' textAlign='center' width='100%'>
                    Technology 
                </Heading>
                <Text fontSize='sm' textAlign='center' marginTop='20px'>A brief showcase of technologies and tools I've worked with.</Text>
            </Flex>
            <TechShowcase />
        </Flex>
        </>
    )
}

export default tech;
