import React from 'react'
import Nav from './Nav/Nav';

interface LayoutProps {
   children: React.ReactNode; 
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
        <Nav />
        <div>
           {children}
        </div>
        </>
    )
}

export default Layout
