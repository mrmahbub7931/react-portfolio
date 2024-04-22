import React from 'react'
import Footer from './components/footer/Footer'
import Navbar from './components/Navbar/Navbar'

export default function Layout({ children }) {
    return (
        <div class="overflow-x-hidden">
            <Navbar />
            {children}
            <Footer />
        </div >
    )
}
