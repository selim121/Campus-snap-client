import AboutUs from "../../AboutUs/AboutUs";
import Colleges from "../../Colleges/Colleges";
import Gallery from "../../Gallery/Gallery";
import ResearchPapers from "../../ResearchPapers/ResearchPapers";
import Testimonials from "../../Testimonials/Testimonials";
import Header from "../Header/Header";

const Home = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <Header />
            <AboutUs />
            <Colleges />
            <Gallery />
            <ResearchPapers />
            <Testimonials />
        </div>
    );
};

export default Home;