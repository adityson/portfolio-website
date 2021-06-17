import React from 'react'
import { Box, Image, Heading, Badge, Text, Stack, Button } from '@chakra-ui/react'
import { projectRepoType } from '../../data/projectRepos'
import { VscGithubAlt } from 'react-icons/vsc'

interface projectProps {
    projectInfo: projectRepoType;
}

const Project = ({ projectInfo }: projectProps) => {
    return (
        <Box w='500px' rounded='20px' overflow='hidden' boxShadow='xl' bg='#EDF2F7'>
            <Image 
                src='/static/images/pfweb.jpg' 
            />
            <Box p={5}>
                <Heading as='h3' size='lg'>{projectInfo.name}</Heading>
                <Stack isInline align='baseline' my={2} justify='space-between'>
                    <Text fontSize='md' fontWeight='semibold'>{projectInfo.createMonth}</Text>
                    <Badge variant='solid' rounded='full' px={2} fontSize='sm'>Typescript</Badge>
                </Stack>
                <Text fontSize='md' fontWeight='normal' my={2}>{projectInfo.description}</Text>
            </Box>
            <Box textAlign='center'>
                <Button 
                    as='a' 
                    href='https://github.com/'
                    variant='outline' 
                    borderColor='#A0AEC0'
                    leftIcon={<VscGithubAlt />} 
                    mb={4}
                    _hover={{ bgColor: '#CBD5E0' }}
                >
                    View on Github
                </Button>
            </Box>
        </Box>
    )
}

export default Project;
