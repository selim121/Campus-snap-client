/* eslint-disable react/prop-types */

const EventDetailsCard = ({ event }) => {


    return (
        <div className="bg-gradient-to-r from-[#FFEEE0] to-[#F1E9F1] py-6 px-4 flex flex-col md:flex-row md:items-center gap-8">
            <div className="space-y-3">
                <h4 className="text-2xl font-bold ">{event?.name && event.name}</h4>
                <p><span className="font-semibold">Type:</span> {event?.type && event.type}</p>
                <p><span className="font-semibold">Location:</span> {event?.location && event.location}</p>
                <p><span className="font-semibold">Date:</span> {event?.date && event.date}</p>
            </div>
            <div className="border-s-4 border-[#E80040]">
                <p className="ps-4 text-justify">{event?.description && event.description}</p>
            </div>
        </div>
    );
};

export default EventDetailsCard;