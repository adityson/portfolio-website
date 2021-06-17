import React from 'react'
import { Flex, Heading, Text, SimpleGrid } from '@chakra-ui/react';
import ToolSingle from './ToolSingle';
import { tools } from '../../data/tools';

const ToolShowcase = () => {
    return (
        <Flex flexDirection='column' marginBottom='220px'>
            <Flex flexDirection='column' marginBottom={8}>
                <Heading as='h3' size='2xl' marginTop='100px' textAlign='center' width='100%'>
                    Tools
                </Heading>
                <Text fontSize='sm' textAlign='center' marginTop='10px'>Tools that I find useful.</Text>
            </Flex>
            <SimpleGrid columns={2} mx={12} placeItems='center'>
                {tools.map((tool) => (
                    <ToolSingle key={tool.id} toolInfo={tool} />
                ))}
            </SimpleGrid>
        </Flex>
    )
}

export default ToolShowcase;
