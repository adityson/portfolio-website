import React from 'react'
import { Flex, Text, Tooltip, Image, Link as CLink } from '@chakra-ui/react';

const Footer = () => {
    return (
        <Flex justifyContent='center' bgColor='cyan.100'>
            <Text display='flex' alignSelf='center' fontSize='lg' py={3}> 
                Built with: 
                <Tooltip label='NextJS' fontSize='sm'>
                    <CLink isExternal alignSelf='center' href='https://nextjs.org/'>
                        <Image mx={1} my='auto' boxSize='22px' src='/static/images/nextjs-logo.svg' />
                    </CLink>
                </Tooltip>
                |
                <Tooltip label='Typescript' fontSize='sm'>
                    <CLink isExternal alignSelf='center' href='https://www.typescriptlang.org/'>
                        <Image mx={1} my='auto' boxSize='22px' src='/static/images/ts-logo.svg' />
                    </CLink>
                </Tooltip>
            </Text>
        </Flex>
    )
}

export default Footer;