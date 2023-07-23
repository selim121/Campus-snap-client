/* eslint-disable react/prop-types */
import { BiRightArrowAlt } from 'react-icons/bi'

const Button = ({name}) => {
    return (
        <button className='flex items-center gap-2 bg-[#E80040] text-white px-4 py-3 rounded-md hover:bg-black'>{name} <BiRightArrowAlt /></button>
    );
};

export default Button;