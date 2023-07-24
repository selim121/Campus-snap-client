import { useParams } from 'react-router-dom';
import { useQuery } from "@tanstack/react-query";

const AdmissionForm = () => {

    const id = useParams();
    
    const { data: college = [] } = useQuery(['colleges'], async () => {
        const res = await fetch(`http://localhost:4000/colleges/${id.id}`);
        return res.json();
    })
    console.log(college);
    
    return (
        <div>
            <div className="py-20 bg-gradient-to-r from-[#FFEEE0] to-[#F1E9F1]">
                <div className="hero h-96" style={{ backgroundImage: `url(${college?.collegeImage})` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content bg-[#090a05] bg-opacity-60 rounded-ss-full rounded-ee-full px-16">
                        <div className="max-w-md">
                            <h1 className="text-3xl font-bold bg-gradient-to-r from-[#ffffff] via-[#E80040] to-[#ffffff] text-transparent bg-clip-text">Admission To {college?.collegeName} </h1>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AdmissionForm;