import Button from '../../Shared/Button/Button';
import img1 from '../../../images/about-us/img1.jpeg'
import img2 from '../../../images/about-us/img2.jpeg'


const AboutUs = () => {
    return (
        <div className='py-12 grid grid-cols-1 md:grid-cols-2 items-center md:gap-8'>
            <div className="">
                <img className='w-11/12' src={img1} alt="" />
                <div className="flex justify-end -mt-52">
                <img src={img2} alt="" />
                </div>
            </div>
            <div className="space-y-6">
                <h6 className='uppercase text-[#E80040] font-bold'>About Us</h6>
                <h3 className='text-3xl font-semibold'>Creating A Community Of Life Long Learners</h3>
                <p className="font-light">
                    We are offering lots of college where those become increasingly popular in recent years.
                </p>
                <Button name={'Know About Us'}/>
            </div>
        </div>
    );
};

export default AboutUs;