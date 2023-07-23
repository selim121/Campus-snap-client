/* eslint-disable react/prop-types */
import { useState } from "react";
import { GiArchiveResearch } from 'react-icons/gi'
import Button from "../../Shared/Button/Button";

const PopularCollegeCard = ({ popularCollege }) => {

    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(!isHovered);
    };

    const { collegeImage, collegeName, admissionDate, researchHistory, events, sports } = popularCollege;

    return (
        <div
            className={`relative h-full bg-white rounded-lg shadow-md hover:border-b-2 hover:border-blue-500 transition duration-500 ${isHovered ? 'transform translate-y-[-10px]' : ''
                }`}
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
        >
            <figure className="p-3">
                <img src={collegeImage} alt="College Image" className="rounded h-60" />
            </figure>
            <p className="absolute top-0 left-5 mt-4 text-xs text-[#000000] bg-warning px-2 py-1 rounded-md">Last date of admission: {admissionDate}</p>
            <div className="px-3 pb-4 space-y-2">
                <div className="flex flex-row items-center gap-4 text-xs">
                    <GiArchiveResearch color="#E80040" />
                    <p>{researchHistory}</p>
                </div>
                <h2 className="card-title">{collegeName}</h2>
                <div className="flex flex-row items-center justify-around">
                    <div className="flex flex-col">
                        <span className="font-semibold text-[#E80040] border-b-2">Events</span>
                        <div>
                            {
                                events?.map(event => <p key={event.name} className="text-sm">{event.name}</p>)
                            }
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-semibold text-[#E80040] border-b-2">Sports</span>
                        <div>
                            {
                                sports?.map(sport => <p key={sport.name} className="text-sm">{sport.name}</p>)
                            }
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <Button name={'Details'} />
                </div>
            </div>
        </div>
    );
};

export default PopularCollegeCard;