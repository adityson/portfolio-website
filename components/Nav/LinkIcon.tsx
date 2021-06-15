import React from 'react';
import { Button } from '@chakra-ui/react'

interface Props {
   children: React.ReactNode; 
   to: string;
}

const LinkIcon = ({ children, to }: Props) => {
    return (
        <li style={{ listStyle: 'none', margin: '0 24px' }}>
            <Button 
                as='a' 
                href={to}
                borderRadius='50px'
                bgColor='#38B2AC'
                transition='all 0.4s ease'
                _hover={{ bgColor: '#2C7A7B', transform: 'scale(1.2)' }}
            >
                {children}
            </Button>
        </li> 
    )
}

export default LinkIcon;
