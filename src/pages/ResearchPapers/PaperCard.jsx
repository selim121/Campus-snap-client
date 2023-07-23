/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { BiRightArrowAlt } from 'react-icons/bi';

const PaperCard = ({ paper }) => {
    return (
        <div key={paper.id} className="bg-white rounded-lg shadow-md p-4 flex flex-col md:flex-row gap-4">
            <img className="h-60 w-80" src={paper.image} alt="" />
            <div className="space-y-3">
                <h3 className="text-lg font-semibold mb-2">{paper.title}</h3>
                <p className="text-justify text-sm">
                    {paper.details}
                </p>
                <div>
                    <Link
                        to={paper.link}
                        target="_blank"
                        className="flex items-center gap-2 bg-[#E80040] text-white px-4 py-3 rounded-md hover:bg-black hover:underline w-40"
                    >
                        Read Paper
                        <BiRightArrowAlt />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PaperCard;