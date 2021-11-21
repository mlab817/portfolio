import './App.css';
import { Hero } from "./Hero";
import { Navbar } from "./Navbar";
import {About} from "./About";
import {Service} from "./Service";
import {Experience} from "./Experience";
import {Contact} from "./Contact";
import {Portfolio} from "./Portfolio";
import {Footer} from "./Footer";
import {Blog} from "./Blog";
import {BackToTop} from "./BackToTop";
import {Education} from "./Education";

function App() {
    return (
        <div id="main">
            <Navbar />
            <Hero />
            <About />
            <Service />
            <Experience />
            <Education />
            <Portfolio />
            <Contact />
            <Blog />
            <Footer />
            <BackToTop />
        </div>
    );
}

export default App;
