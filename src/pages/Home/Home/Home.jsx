import AboutUs from "../AboutUs/AboutUs";
import Gallery from "../Gallery/Gallery";
import ResearchPapers from "../ResearchPapers/ResearchPapers";
import Testimonials from "../Testimonials/Testimonials";
import Header from "../Header/Header";
import PopularColleges from "../PopularColleges/PopularColleges";

const Home = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <Header />
            <AboutUs />
            <PopularColleges />
            <Gallery />
            <ResearchPapers />
            <Testimonials />
        </div>
    );
};

export default Home;