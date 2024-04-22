import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/banner/Banner";
import './App.css'
import Skills from "./components/skills/Skills";
import About from "./components/about/About";
import Resume from "./components/resume/Resume";
import Work from "./components/work/Work";
import Layout from "./Layout";
export default function App() {
  return (

    <Layout>
      <Navbar />
      <Banner />
      <Skills />
      <About />
      <Resume />
      <Work />
    </Layout>
  );
}

