import React from 'react';
import { border, Button } from '@chakra-ui/react'

interface Props {
   children: React.ReactNode; 
   to: string;
   borderRad: string;
}

const LinkIcon = ({ children, to, borderRad }: Props) => {
    return (
        <li style={{ listStyle: 'none', margin: '0 24px' }}>
            <Button 
                as='a' 
                href={to}
                borderRadius={borderRad}
                transition='all 0.4s ease'
                _hover={{ bgColor: '#2C7A7B', transform: 'scale(1.2)' }}
            >
                {children}
            </Button>
        </li> 
    )
}

export default LinkIcon;
