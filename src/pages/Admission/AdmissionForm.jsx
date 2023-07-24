import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useQuery } from "@tanstack/react-query";
import useAuth from '../../hooks/useAuth';
import { useForm } from "react-hook-form";

const AdmissionForm = () => {

    const { user } = useAuth();
    const id = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const { data: college = [] } = useQuery(['colleges'], async () => {
        const res = await fetch(`https://campus-snap-server.vercel.app/colleges/${id.id}`);
        return res.json();
    })

    const { data: currentUser = [], refetch } = useQuery(['currentUser'], async () => {
        const res = await fetch(`https://campus-snap-server.vercel.app/allUsers/${user?.email}`);
        return res.json();
    })

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        values: {
            name: currentUser.displayName,
            email: currentUser.email,
            university: college.collegeName,
            address: currentUser.address,
            photo: currentUser.photoURL
        }
    });
    const handleAdmission = data => {

        const { name, email, university, address, subject, phone, photo, birthDate } = data;
        const newData = { collegeId: college._id, collegeImage: college.collegeImage, name, userEmail: currentUser.email, email, university, address, subject, photo, phone, birthDate };

        fetch('https://campus-snap-server.vercel.app/admission', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    reset();
                    refetch();
                    navigate(from, { replace: true });
                }
            })
    }

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
            <div className="py-12 md:w-4/5 md:mx-auto">
                <form onSubmit={handleSubmit(handleAdmission)}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="mb-4">
                            <label htmlFor="name" className="block mb-1">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className={`w-full px-4 py-2 border rounded-lg ${errors.name ? "border-red-500" : ""
                                    }`}
                                placeholder="Enter your name"
                                {...register("name", { required: "name is required" })}
                            />
                            {errors.name && (
                                <p className="text-red-500">{errors.name.message}</p>
                            )}
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="block mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className={`w-full px-4 py-2 border rounded-lg ${errors.email ? "border-red-500" : ""
                                    }`}
                                placeholder="Enter your email"
                                {...register("email", { required: "Email is required" })}
                            />
                            {errors.email && (
                                <p className="text-red-500">{errors.email.message}</p>
                            )}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="mb-4">
                            <label htmlFor="university" className="block mb-1">
                                University
                            </label>
                            <input
                                type="text"
                                id="university"
                                className={`w-full px-4 py-2 border rounded-lg ${errors.university ? "border-red-500" : ""
                                    }`}
                                placeholder="Enter university name"
                                {...register("university", { required: "university name is required" })}
                            />
                            {errors.university && (
                                <p className="text-red-500">{errors.university.message}</p>
                            )}
                        </div>

                        <div className="mb-4">
                            <label htmlFor="address" className="block mb-1">
                                Address
                            </label>
                            <input
                                type="text"
                                id="address"
                                className={`w-full px-4 py-2 border rounded-lg ${errors.address ? "border-red-500" : ""
                                    }`}
                                placeholder="Enter your address"
                                {...register("address", { required: "Address is required" })}
                            />
                            {errors.address && (
                                <p className="text-red-500">{errors.address.message}</p>
                            )}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="mb-4">
                            <label htmlFor="subject" className="block mb-1">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                className={`w-full px-4 py-2 border rounded-lg ${errors.subject ? "border-red-500" : ""
                                    }`}
                                placeholder="Enter subject name"
                                {...register("subject", { required: "subject name is required" })}
                            />
                            {errors.subject && (
                                <p className="text-red-500">{errors.subject.message}</p>
                            )}
                        </div>

                        <div className="mb-4">
                            <label htmlFor="phone" className="block mb-1">
                                Phone
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                className={`w-full px-4 py-2 border rounded-lg ${errors.phone ? "border-red-500" : ""
                                    }`}
                                placeholder="Enter your phone"
                                {...register("phone", { required: "phone is required" })}
                            />
                            {errors.phone && (
                                <p className="text-red-500">{errors.phone.message}</p>
                            )}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="mb-4">
                            <label htmlFor="photo" className="block mb-1">
                                Photo URL
                            </label>
                            <input
                                type="text"
                                id="photo"
                                className={`w-full px-4 py-2 border rounded-lg ${errors.photo ? "border-red-500" : ""
                                    }`}
                                placeholder="Enter your photo url"
                                {...register("photo", { required: "photo url is required" })}
                            />
                            {errors.photo && (
                                <p className="text-red-500">{errors.photo.message}</p>
                            )}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="birthDate" className="block mb-1">
                                Birth date
                            </label>
                            <input
                                type="date"
                                id="birthDate"
                                className={`w-full px-4 py-2 border rounded-lg ${errors.birthDate ? "border-red-500" : ""
                                    }`}
                                placeholder="Enter your birthDate url"
                                {...register("birthDate", { required: "birthDate url is required" })}
                            />
                            {errors.birthDate && (
                                <p className="text-red-500">{errors.birthDate.message}</p>
                            )}
                        </div>
                    </div>

                    <div className="text-center">
                        <button className="uppercase px-4 py-2 rounded-md bg-[#E80040] text-white font-bold hover:bg-[#000000]" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AdmissionForm;