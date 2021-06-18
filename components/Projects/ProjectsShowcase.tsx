import React from 'react'
import { Flex } from '@chakra-ui/react'
import Project from './Project'
import { projectRepos } from '../../data/projectRepos'

const ProjectsShowcase = () => {
    return (
        <Flex wrap='wrap' justify='space-around' padding='0 100px' marginTop={16}>
            {projectRepos.map((project) => (
                <Project key={project.id} projectInfo={project} />
            ))}
        </Flex>
    )
}

export default ProjectsShowcase;
