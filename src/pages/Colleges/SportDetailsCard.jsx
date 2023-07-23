/* eslint-disable react/prop-types */

const SportDetailsCard = ({ sport }) => {


    return (
        <div className="bg-gradient-to-r from-[#FFEEE0] to-[#F1E9F1] py-6 px-4 flex flex-col md:flex-row md:items-center gap-8">
            <div className="space-y-3">
                <h4 className="text-2xl font-bold ">{sport?.name && sport.name}</h4>
                <p><span className="font-semibold">Type:</span> {sport?.type && sport.type}</p>
                <p><span className="font-semibold">Location:</span> {sport?.location && sport.location}</p>
                <p><span className="font-semibold">Date:</span> {sport?.date && sport.date}</p>
            </div>
            <div className="border-s-4 border-[#E80040]">
                <p className="ps-4 text-justify">{sport?.description && sport.description}</p>
            </div>
        </div>
    );
};

export default SportDetailsCard;