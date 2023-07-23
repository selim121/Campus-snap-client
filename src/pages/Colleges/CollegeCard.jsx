/* eslint-disable react/prop-types */
import { useState } from "react";
import { GiArchiveResearch } from 'react-icons/gi'
import { BiRightArrowAlt } from 'react-icons/bi';
import { Link } from "react-router-dom";

const CollegeCard = ({college}) => {

    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(!isHovered);
    };

    const { _id, collegeImage, collegeName, admissionDate, researchHistory, rating, numberOfResearchPapers } = college;

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
                <p><span className="font-semibold">Rating:</span> {rating}</p>
                <p><span className="font-semibold">Number of Research Papers:</span> {numberOfResearchPapers}</p>
                <div className="flex justify-center">
                    <Link to={`/details/${_id}`} className="flex items-center gap-2 bg-[#E80040] text-white px-4 py-3 rounded-md hover:bg-black">Details <BiRightArrowAlt /></Link>
                </div>
            </div>
        </div>
    );
};

export default CollegeCard;