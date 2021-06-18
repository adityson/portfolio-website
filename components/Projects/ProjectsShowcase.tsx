import React from 'react'
import { SimpleGrid } from '@chakra-ui/react'
import Project from './Project'
import { projectRepos } from '../../data/projectRepos'
import { repoType } from '../../pages/api/github';

interface props {
    reposAll: repoType[];
}

const ProjectsShowcase = ({ reposAll }: props) => {
    return (
        <SimpleGrid columns={1} marginTop={16} placeItems='center'>
            {projectRepos.map((project) => (
                <Project 
                    key={project.id} 
                    projectInfo={project} 
                    repo={reposAll.filter((r: repoType) => r.name === project.id)[0]}
                />
            ))}
        </SimpleGrid>
    )
}

export default ProjectsShowcase;
