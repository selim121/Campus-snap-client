/* eslint-disable react/prop-types */
import { useState } from "react";
import { GiArchiveResearch } from 'react-icons/gi'
import Button from "../Shared/Button/Button";

const CollegeCard = ({ college }) => {

    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(!isHovered);
    };

    const { image, name, admissionDates, researchHistory, events, sports } = college;

    return (
        <div
            className={`relative h-full bg-white rounded-lg shadow-md hover:border-b-2 hover:border-blue-500 transition duration-500 ${isHovered ? 'transform translate-y-[-10px]' : ''
                }`}
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
        >
            <figure className="p-3">
                <img src={image} alt="Shoes" className="rounded" />
            </figure>
            <p className="absolute top-0 left-5 mt-4 text-xs text-[#000000] bg-warning px-2 py-1 rounded-md">Last date of admission: {admissionDates}</p>
            <div className="px-3 pb-4 space-y-2">
                <div className="flex flex-row items-center gap-4 text-xs">
                    <GiArchiveResearch color="#E80040" />
                    <p>{researchHistory}</p>
                </div>
                <h2 className="card-title">{name}</h2>
                <p><span className="font-semibold">Events:</span> {events}</p>
                <p><span className="font-semibold">Sports:</span> {sports}</p>
                <div className="flex justify-center">
                    <Button name={'Details'} />
                </div>
            </div>
        </div>
    );
};

export default CollegeCard;