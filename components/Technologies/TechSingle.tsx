import React from 'react'
import { Badge } from '@chakra-ui/react';
import { technoType } from '../../data/technoAll';

interface techProps {
    techInfo: technoType;
}

const TechSingle = ({ techInfo }: techProps) => {
    return (
        <Badge 
            as='a' href={techInfo.link} 
            rounded='full' variant='outline' 
            w='250px' py={2} my={1} 
            fontSize='md' textAlign='center'
            _hover={{ bgColor: '#3182ce', color: '#F7FAFC' }}
        >
            {techInfo.name}
        </Badge>
    )
}

export default TechSingle;
