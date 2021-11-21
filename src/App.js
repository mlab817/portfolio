import './App.css';
import { Hero } from "./Hero";
import { Navbar } from "./Navbar";
import {About} from "./About";
import {Service} from "./Service";
import {Experience} from "./Experience";
import {Price} from "./Price";
import {Contact} from "./Contact";
import {Portfolio} from "./Portfolio";
import {Footer} from "./Footer";
import {Blog} from "./Blog";
import {BackToTop} from "./BackToTop";

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Service />
            <Experience />
            <Price />
            <Portfolio />
            <Contact />
            <Blog />
            <Footer />
            <BackToTop />
        </>
    );
}

export default App;
