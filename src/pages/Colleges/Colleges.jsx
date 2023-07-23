import CollegeCard from "./CollegeCard";
import img1 from '../../images/header/img1.webp';

const Colleges = () => {

    const colleges = [
        {
            name: 'Example College 1',
            image: img1,
            admissionDates: 'July 2023',
            events: 'Annual Fest, Career Fair',
            researchHistory: 'Established in 1950',
            sports: 'Football, Basketball, Tennis',
        },
        {
            name: 'Example College 1',
            image: img1,
            admissionDates: 'July 2023',
            events: 'Annual Fest, Career Fair',
            researchHistory: 'Established in 1950',
            sports: 'Football, Basketball, Tennis',
        },
        {
            name: 'Example College 1',
            image: img1,
            admissionDates: 'July 2023',
            events: 'Annual Fest, Career Fair',
            researchHistory: 'Established in 1950',
            sports: 'Football, Basketball, Tennis',
        },
    ];


    return (
        <div className="bg-gradient-to-r from-[#FFEEE0] to-[#F1E9F1] py-20">
            <div className="text-center space-y-2 mb-8">
                <h6 className="uppercase text-[#E80040]">College Categories</h6>
                <h3 className="text-3xl font-semibold">Popular Colleges To Learn</h3>
            </div>
            <div className="grid grid-cols-3 gap-4">
                {colleges.map((college, index) => (
                    <CollegeCard key={index} college={college} />
                ))}
            </div>
        </div>
    );
};

export default Colleges;