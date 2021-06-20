import React from 'react'
import { Flex, Image, Box, Text, Heading } from '@chakra-ui/react'
import { toolType } from '../../data/tools'

interface toolProps {
    toolInfo: toolType;
}

const ToolSingle = ({ toolInfo }: toolProps) => {
    return (
        <Flex as='a' href={toolInfo.link} my={3}>
            <Flex _hover={{ border: '2px solid #76E4F7' }} p={3} borderRadius='12px' boxShadow='md' w={{base: '300px', md: '500px'}} border='2px solid transparent' alignItems='center'>
                <Box boxSize='60px' bg='gray.200' p='8px' borderRadius='12px' alignItems='center'>
                    <Image src={toolInfo.id==='tmux' ? `/static/images/toolImg/${toolInfo.id}.svg` : `/static/images/toolImg/${toolInfo.id}.png`} />
                </Box>
                <Flex flexDirection='column' mx={4} py={2}>
                    <Heading as='h5' size='sm' marginBottom={1}>
                        {toolInfo.name}
                    </Heading>
                    <Text fontSize='sm'>{toolInfo.description}</Text>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default ToolSingle;
