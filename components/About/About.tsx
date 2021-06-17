import React from 'react'
import { Flex, Heading, Text, Box } from '@chakra-ui/react';
import BoxIn from './BoxIn';

const About = () => {
    return (
        <Flex flexDirection='column' alignItems='center' marginBottom='100px' mx='40px'>
            <Heading as='h3' size='2xl' marginBottom='36px' color='#065666'>About Me</Heading>
            <Flex flexDirection='column' alignItems='center'>
                <BoxIn childWidth='900px'>
                    <Text fontSize='lg'> 
                        I'm a pre-final year undergrad student studying Computer Science and Engineering at NIT Silchar, India.
                        I'm on the journey to explore the diverse field that Computer Science is. I love Web Development, trying out technologies,
                        and building various features. This site is one of my projects I've put my heart into.
                    </Text>
                </BoxIn>
                <BoxIn childWidth='750px'>
                    <Text fontSize='lg'> 
                        Problem Solving using Data Structures and Algorithms fascinates me so I regularly keep up with that too, 
                        and I'm enthusiastic to dive deep to learn more.
                    </Text>
                </BoxIn>
                <BoxIn childWidth='600px'>
                    <Text fontSize='lg'> 
                        My interests include playing Tennis and Badminton, and learning Japanese (currently elementary level).
                    </Text>
                </BoxIn>
            </Flex>
        </Flex>
    )
}

export default About;
