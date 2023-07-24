import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";
import { useEffect, useState } from "react";
import Colleges from "../pages/Colleges/Colleges";

const Main = () => {
    const [colleges, setColleges] = useState([]);
    const [filteredColleges, setFilteredColleges] = useState([]);

    useEffect(() => {
        fetch("https://campus-snap-server.vercel.app/colleges")
            .then((res) => res.json())
            .then((data) => setColleges(data));
    }, []);

    return (
        <div>
            <Navbar colleges={colleges} setFilteredColleges={setFilteredColleges} />
            {filteredColleges.length > 0 ? (
                <Colleges colleges={filteredColleges} />
            ) : (
                <Outlet />
            )}
            <ScrollRestoration />
            <Footer />
        </div>

    );
};

export default Main;