import React from 'react'
import { Box, Flex, Image, Heading, Badge, Text, Stack, Button } from '@chakra-ui/react'
import { projectRepoType } from '../../data/projectRepos'
import { VscGithubAlt } from 'react-icons/vsc'
import { repoType } from '../../pages/api/github';

interface projectProps {
    projectInfo: projectRepoType;
    repo: repoType;
}

const Project = ({ projectInfo, repo }: projectProps) => {
    return (
        <Flex marginBottom={20}> 
        <Box w={{base: '300px' ,md: '1000px'}} rounded='20px' overflow='hidden' boxShadow='xl' bg='#EDF2F7'>
            <Image 
                src={projectInfo.image} 
            />
            <Box p={5}>
                <Stack isInline align='center' justifyContent='space-between'>
                    <Heading as='h3' fontSize={{base: 'xl', md: '4xl'}}>{projectInfo.name}</Heading>
                    <Badge variant='solid' colorScheme='green' rounded='full' px={2} py={1} fontSize={{base: '10px',md: 'sm'}}>{repo.language}</Badge>
                </Stack>
                <Stack isInline align='baseline' my={2} justify='space-between'>
                    <Text isTruncated fontSize={{base: 'sm', md: 'md'}} fontWeight='semibold'>{projectInfo.createMonth}</Text>
                    <Text textAlign='end' fontSize={{base: '12px',md: 'sm'}} fontWeight='light'>Last Updated: {new Date(repo.pushed_at).toLocaleDateString()}</Text>
                </Stack>
                <Text fontSize={{base: 'sm', md: 'md'}} fontWeight='normal' my={2}>{projectInfo.description}</Text>
            </Box>
            <Box textAlign='center'>
                <Button 
                    as='a' 
                    href={repo.html_url}
                    position='inherit'
                    variant='outline' 
                    borderColor='#A0AEC0'
                    fontSize={{base: 'sm', md: 'md'}}
                    leftIcon={<VscGithubAlt />} 
                    mb={4}
                    _hover={{ bgColor: '#CBD5E0' }}
                >
                    View on Github
                </Button>
            </Box>
        </Box>
        </Flex>
    )
}

export default Project;
