import AboutUs from "../../AboutUs/AboutUs";
import Colleges from "../../Colleges/Colleges";
import Gallery from "../../Gallery/Gallery";
import Header from "../Header/Header";

const Home = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <Header />
            <AboutUs />
            <Colleges />
            <Gallery />
        </div>
    );
};

export default Home;