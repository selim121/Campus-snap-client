import { useEffect, useState } from "react";
import CollegeCard from "./CollegeCard";

const Colleges = () => {

    const [colleges, setColleges] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:4000/colleges')
        .then(res => res.json())
        .then(data => setColleges(data))
    }, [])

    return (
        <div className="py-20 bg-gradient-to-r from-[#FFEEE0] to-[#F1E9F1]">
            <div className="grid grid-cols-3 gap-4">
                {colleges.map((college) => (
                    <CollegeCard key={college._id} college={college} />
                ))}
            </div>
        </div>
    );
};

export default Colleges;