import React from 'react'
import { Flex, Image, Heading } from '@chakra-ui/react';
import TechSingle from './TechSingle';
import { frontTechnos, backTechnos } from '../../data/technoAll';

const TechShowcase = () => {
    return (
        <Flex wrap='wrap' padding='0 100px' marginTop={16} justifyContent='space-around'>
            <Flex flexDirection='column' alignItems='center' w='400px'>
                <Image boxSize='200px' my={2} src='/static/images/frontend.png' />
                <Heading as='h3' size='xl' my={2}>
                    Front-End
                </Heading>
                <Flex flexDirection='column'>
                    {frontTechnos.map((techno) => (
                        <TechSingle key={techno.id} techInfo={techno} />
                    ))}
                </Flex>
            </Flex>
            <Flex flexDirection='column' alignItems='center' w='400px'>
                <Image h='200px' my={2} src='/static/images/backend.png' />
                <Heading as='h3' size='xl' my={2}>
                    Back-End
                </Heading>
                <Flex flexDirection='column'>
                    {backTechnos.map((techno) => (
                        <TechSingle key={techno.id} techInfo={techno} />
                    ))}
                </Flex>
            </Flex>
        </Flex>
    )
}

export default TechShowcase;
