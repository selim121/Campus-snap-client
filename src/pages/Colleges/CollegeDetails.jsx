import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EventDetailsCard from "./EventDetailsCard";
import SportDetailsCard from "./SportDetailsCard";


const CollegeDetails = () => {

    const id = useParams();
    const [college, setCollege] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:4000/colleges/${id.id}`)
            .then(res => res.json())
            .then(data => setCollege(data))
    }, [id])


    const { collegeImage, collegeName, researchHistory, events, sports } = college;

    return (
        <>
            <div className="py-20 bg-gradient-to-r from-[#FFEEE0] to-[#F1E9F1]">
                <div className="hero h-96" style={{ backgroundImage: `url(${collegeImage})` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content bg-[#090a05] bg-opacity-60 rounded-ss-full rounded-ee-full px-16">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">{collegeName}</h1>
                            <p className="mb-5">{researchHistory}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-16">
                <div className="text-center space-y-2 mb-8">
                    <h6 className="uppercase text-[#E80040]">All Events</h6>
                    <h3 className="text-3xl font-semibold">Our Running Events</h3>
                </div>
                <div className="grid grid-cols-1 gap-4">
                    {events?.map((event) => (
                        <EventDetailsCard key={event.name} event={event} />
                    ))}
                </div>
                <div className="text-center space-y-2 my-8">
                    <h6 className="uppercase text-[#E80040]">All Sports</h6>
                    <h3 className="text-3xl font-semibold">Our Running Sports</h3>
                </div>
                <div className="grid grid-cols-1 gap-4">
                    {sports?.map((sport) => (
                        <SportDetailsCard key={sport.name} sport={sport} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default CollegeDetails;
