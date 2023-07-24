import { Link } from 'react-router-dom';
import admissionImg from '../../images/admission.jpeg';
import { useQuery } from "@tanstack/react-query";

const Admission = () => {

    const { data: colleges = [] } = useQuery(['colleges'], async () => {
        const res = await fetch(`http://localhost:4000/colleges`);
        return res.json();
    })

    return (
        <>
            <div className="py-20 bg-gradient-to-r from-[#FFEEE0] to-[#F1E9F1]">
                <div className="hero h-96" style={{ backgroundImage: `url(${admissionImg})` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content bg-[#090a05] bg-opacity-60 rounded-ss-full rounded-ee-full px-16">
                        <div className="max-w-md">
                            <h1 className="text-3xl font-bold bg-gradient-to-r from-[#ffffff] via-[#E80040] to-[#ffffff] text-transparent bg-clip-text">Discover Your Dream College</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-12">
                <div className="text-center space-y-2 mb-8">
                    <h6 className="uppercase text-[#E80040]">College Category</h6>
                    <h3 className="text-3xl font-semibold">Your Path to Success Starts Here</h3>
                </div>
                {
                    colleges?.length > 0 ? (
                        colleges.map(college => <div key={college._id} className='mb-4 flex flex-row items-center justify-between px-2 md:px-8 py-3 bg-gradient-to-r from-[#FFEEE0] to-[#F1E9F1]'>
                        <h4>{college.collegeName}</h4>
                        <p className='text-[#E80040]'>{college.admissionDate}</p>
                        <Link to={`/admission-form/${college._id}`} className='border-b-2 border-[#000000] hover:text-[#E80040] hover:border-[#E80040]'>Get Admission</Link>
                    </div>)
                    ) : (
                        <p>No colleges available</p>
                    )
                }
            </div>
        </>
    );
};

export default Admission;