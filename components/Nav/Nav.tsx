import React from 'react'
import Link from 'next/link';
import { Flex, Heading } from '@chakra-ui/react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import LinkLi from './LinkLi';
import LinkIcon from './LinkIcon';

const Nav = () => {
    return (
        <Flex as='nav' position='fixed' align='center' wrap='wrap' w='100%' justifyContent='space-around' padding='10px 5%' bgColor='#38B2AC' color='white'>
            <Flex>
                <Link href='/#intro'>
                    <Heading 
                        as='h3'
                        size='lg'
                        padding='8px'
                        margin='0 20px'
                        borderRadius='15px'
                        transition='all 0.2s ease'
                        _hover={{bgColor: '#2C7A7B', cursor: 'pointer'}} 
                    > 
                        Aditya Soni 
                    </Heading>
                </Link>
            </Flex>
            <Flex justifyContent='space-between'>
                <LinkLi to='/projects' LinkText='Projects' />
                <LinkLi to='/tech#tech' LinkText='Technologies' />
            </Flex>
            <Flex>
                <LinkIcon to='https://github.com/adityson/'>
                    <AiFillGithub size='36px' />
                </LinkIcon>
                <LinkIcon to='https://linkedin.com/'>
                    <AiFillLinkedin size='36px' />
                </LinkIcon>
            </Flex>
        </Flex>
    )
}

export default Nav
