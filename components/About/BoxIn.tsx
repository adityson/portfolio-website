import React from 'react'
import { Box } from '@chakra-ui/react'

interface Props {
    children: React.ReactNode;
    childWidth: string;
}

const BoxIn = ({ children, childWidth }: Props) => {
    return (
        <Box 
            border='2px solid #63b3ed' 
            p={8} 
            borderRadius='20px' 
            maxW={childWidth} 
            my={5} 
            transition='all 0.2s ease'
            _hover={{transform: 'scale(1.2)'}}
        >
            {children}
        </Box>
    )
}

export default BoxIn
