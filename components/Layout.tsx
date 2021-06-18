import React from 'react'
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';

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
        <Footer />
        </>
    )
}

export default Layout
