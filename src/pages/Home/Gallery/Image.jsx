/* eslint-disable react/prop-types */

const Image = ({ img }) => {
    return (
        <div className="relative w-full h-full overflow-hidden">
            <img className="w-full h-full object-cover transition-transform hover:scale-110 transition-duration-300 transition-timing-function-ease-in  " src={img} alt="" />
        </div>
    );
};

export default Image;