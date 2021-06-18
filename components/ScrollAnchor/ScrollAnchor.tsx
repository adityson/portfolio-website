import React from 'react'
import { Box } from '@chakra-ui/react'
import { FiArrowDownCircle, FiArrowUpCircle } from 'react-icons/fi'
import { useState } from 'react'

interface Props {
    jump: string[];
}

const ScrollAnchor = ({ jump }: Props) => {

    const [scrollDir, setScrollDir] = useState(false);

    const scrollHandler = () => {
        setScrollDir((dir) => !dir);
    }

    return (
        <Box 
            as='a' 
            href={scrollDir ? jump[0]:jump[1]} 
            onClick={scrollHandler} 
            position='fixed' 
            bottom={14} 
            right={4}
        >
            {scrollDir ? <FiArrowUpCircle size='36px' /> : <FiArrowDownCircle size='36px' />}
        </Box>
    )
}

export default ScrollAnchor;
