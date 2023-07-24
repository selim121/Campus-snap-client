import { useEffect, useState } from "react";
import CollegeCard from "./CollegeCard";
import img from '../../images/admission.jpeg';

const Colleges = () => {

    const [colleges, setColleges] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/colleges')
            .then(res => res.json())
            .then(data => setColleges(data))
    }, [])

    return (
        <>
            <div className="py-20 bg-gradient-to-r from-[#FFEEE0] to-[#F1E9F1]">
                <div className="hero h-96" style={{ backgroundImage: `url(${img})` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content bg-[#090a05] bg-opacity-60 rounded-ss-full rounded-ee-full px-16">
                        <div className="max-w-md">
                            <h1 className="text-3xl font-bold bg-gradient-to-r from-[#ffffff] via-[#E80040] to-[#ffffff] text-transparent bg-clip-text">Discover Your Dream College</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-12">
                <div className="grid grid-cols-3 gap-4">
                    {colleges.map((college) => (
                        <CollegeCard key={college._id} college={college} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Colleges;