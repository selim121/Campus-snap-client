import img1 from '../../../images/header/img1.webp';
import img2 from '../../../images/header/img2.png';
import p1 from '../../../images/profile-image/p1.png';
import Button from '../../Shared/Button/Button';

const Header = () => {
    return (
        <div className="bg-gradient-to-r from-[#FFEEE0] to-[#F1E9F1] py-20 grid grid-cols-1 md:grid-cols-2 gap-4 px-2">
            <div className="space-y-4">
                <p className="uppercase text-[#E80040]">Excellence in Education</p>
                <h1 className='text-6xl font-bold'>Start Better Learning Future From Here</h1>
                <p className='font-light border-l-2 border-[#E80040] ps-2'>Empower yourself with the knowledge and skills gained through our college! The key to your future!</p>
                <Button name={'Get Started Today'} />
            </div>
            <div className="">
                <div className="grid grid-cols-2">
                    <div className="bg-base-100 h-80 w-60 rounded">
                        <figure className="p-3">
                            <img src={img1} alt="Shoes" className="rounded" />
                        </figure>
                        <div className="px-3 pb-4">
                            <h2 className="card-title">Our Best Class</h2>
                            <p className='font-light text-xs'>If you want to grab knogledge what do you choose?</p>
                        </div>
                    </div>
                    <img className='h-80 w-60' src={img2} alt="" />
                </div>
                <div className="flex flex-row items-center justify-between gap-4 bg-base-100 p-3 mt-5">
                    <img src={p1} alt="" />
                    <div className="">
                        <h4>Programming Workshop</h4>
                        <p>Today at 6:00 am</p>
                    </div>
                    <Button name={'Join Now'} />
                </div>
            </div>
        </div>
    );
};

export default Header;
