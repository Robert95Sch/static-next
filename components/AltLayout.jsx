import AltNavbar from "./AltNavbar.jsx";
import Footer from "./Footer.jsx";
import { AnimatePresence } from 'framer-motion'

function AltLayout({ children }) {
    return (
        <div className="layout" >
            <AltNavbar />
                <AnimatePresence mode="wait" initial={false}> 
                    {children}
                </AnimatePresence>
            <Footer />
        </div>
    )
}

export default AltLayout