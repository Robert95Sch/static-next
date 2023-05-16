import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import { AnimatePresence } from 'framer-motion'

function Layout({ children }) {
    return (
        <div className="layout" >
            <Navbar />
                <AnimatePresence mode="wait" initial={false}> 
                    {children}
                </AnimatePresence>
            <Footer />
        </div>
    )
}

export default Layout