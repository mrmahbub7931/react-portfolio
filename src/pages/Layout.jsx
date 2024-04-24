import { Outlet, Link } from "react-router-dom";
import Footer from '../components/footer/Footer'
import Navbar from '../components/Navbar/Navbar'

export default function Layout({ children }) {
    return (
        <div className="overflow-x-hidden">
            <Navbar />
            <Outlet />
            <Footer />
        </div >
    )
}
