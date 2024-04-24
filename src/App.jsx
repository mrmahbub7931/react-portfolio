import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
        </Route>
      </Routes>
    </BrowserRouter>

    // <Layout>
    //   <Navbar />
    //   <Banner />
    //   <Skills />
    //   <About />
    //   <Resume />
    //   <Work />
    // </Layout>
  );
}

