import React from 'react'
import Banner from '../components/banner/Banner';
import Skills from "../components/skills/Skills";
import About from "../components/about/About";
import Resume from "../components/resume/Resume";
import Work from "../components/work/Work";
export default function Home() {
    return (
        <>
            <Banner />
            <Skills />
            <About />
            <Resume />
            <Work />
        </>
    )
}
