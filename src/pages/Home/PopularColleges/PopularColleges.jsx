import { useEffect, useState } from "react";
import PopularCollegeCard from "./PopularCollegeCard";
// import { useQuery } from '@tanstack/react-query';

const PopularColleges = () => {

    // const { data: colleges = [] } = useQuery({
    //     queryKey: ['colleges'],
    //     queryFn: async () => {
    //         const res = await fetch('http://localhost:4000/colleges');
    //         return res.data;
    //     }
    // })

    const [popularColleges, setPopularColleges] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:4000/colleges/rating/4.5')
        .then(res => res.json())
        .then(data => setPopularColleges(data))
    }, [])


    return (
        <div className="bg-gradient-to-r from-[#FFEEE0] to-[#F1E9F1] py-20">
            <div className="text-center space-y-2 mb-8">
                <h6 className="uppercase text-[#E80040]">College Categories</h6>
                <h3 className="text-3xl font-semibold">Popular Colleges To Learn</h3>
            </div>
            <div className="grid grid-cols-3 gap-4">
            {popularColleges?.map((popularCollege) => (
                    <PopularCollegeCard key={popularCollege._id} popularCollege={popularCollege} />
                ))}
            </div>
        </div>
    );
};

export default PopularColleges;