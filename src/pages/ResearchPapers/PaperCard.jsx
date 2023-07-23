/* eslint-disable react/prop-types */

const PaperCard = ({ paper }) => {
    return (
        <div key={paper.id} className="bg-white rounded-lg shadow-md p-4 flex flex-col md:flex-row gap-4">
            <img className="h-60 w-80" src={paper.image} alt="" />
            <div className="space-y-3">
                <h3 className="text-lg font-semibold mb-2">{paper.title}</h3>
                <p className="text-justify text-sm">
                    {paper.details}
                </p>
                <a
                    href={paper.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                >
                    Read Paper
                </a>
            </div>
        </div>
    );
};

export default PaperCard;