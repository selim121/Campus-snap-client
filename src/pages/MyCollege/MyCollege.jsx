import { useQuery } from "@tanstack/react-query";
import useAuth from '../../hooks/useAuth';
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";


const MyCollege = () => {

    const { user } = useAuth();
    const [showModal, setShowModal] = useState(false);
    const [collegeId, setCollegeId] = useState('');
    const { handleSubmit, reset, control,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const { data: enrolledColleges = [] } = useQuery(['enrolledColleges'], async () => {
        const res = await fetch(`http://localhost:4000/admission/${user?.email}`);
        return res.json();
    })

    const { data: currentUser = [], refetch } = useQuery(['currentUser'], async () => {
        const res = await fetch(`http://localhost:4000/allUsers/${user?.email}`);
        return res.json();
    })

    const handleIdAndModal = (id) => {
        setCollegeId(id);
        setShowModal(true);
    }

    const handleFeedback = (data) => {
        fetch(`http://localhost:4000/colleges/${collegeId}`)
            .then(res => res.json())
            .then(college => {
                const { feedbackMessage, rating } = data;
                const newData = { name: currentUser.displayName, photo: currentUser.photoURL, university: college.collegeName, feedbackMessage, rating };
                fetch('http://localhost:4000/feedback', {
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
                            navigate(from, { replace: true })
                        }
                    })
            })

    }

    return (
        <div className="py-20 bg-gradient-to-r from-[#FFEEE0] to-[#F1E9F1]">
            <div className="mt-12 py-12 bg-white">
                <div className="text-center space-y-2">
                    <h6 className="uppercase text-[#E80040]">Enrolled Colleges</h6>
                    <h3 className="text-3xl font-semibold">Your Path to Success Starts Here</h3>
                </div>
                <div className="grid grid-cols-1 gap-4 mt-8">
                    {
                        enrolledColleges.map(enrolledCollege => <div key={enrolledCollege._id} className="bg-gradient-to-r from-[#FFEEE0] to-[#F1E9F1] rounded-lg shadow-md p-4 mx-4 flex flex-col md:flex-row gap-4">
                            <img className="h-60 w-80" src={enrolledCollege.collegeImage} alt="" />
                            <div className="space-y-2">
                                <h3 className="text-lg font-semibold mb-2">{enrolledCollege.university}</h3>
                                <p className="text-justify text-sm">
                                    <span className="font-semibold">Subject:</span> {enrolledCollege.subject}
                                </p>
                                <p className="text-justify text-sm">
                                    <span className="font-semibold">Student Address:</span> {enrolledCollege.address}
                                </p>
                                <p className="text-justify text-sm">
                                    <span className="font-semibold">Student Email:</span> {enrolledCollege.email}
                                </p>
                                <p className="text-justify text-sm">
                                    <span className="font-semibold">Student Name:</span> {enrolledCollege.name}
                                </p>
                                <p className="text-justify text-sm">
                                    <span className="font-semibold">Phone Number:</span> {enrolledCollege.phone}
                                </p>
                                <p className="text-justify text-sm">
                                    <span className="font-semibold">Birth Date:</span> {enrolledCollege.birthDate}
                                </p>
                                <button onClick={() => handleIdAndModal(enrolledCollege.collegeId)} className="flex items-center gap-2 bg-[#E80040] text-white px-4 py-2 rounded-md hover:bg-black">

                                    Feedback
                                </button>
                                {
                                    showModal ? (
                                        <>
                                            <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                                                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                                        <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                                                            <h3 className="text-3xl font=semibold">Give your feedback</h3>
                                                            <button
                                                                className="bg-transparent border-0 text-black float-right"
                                                                onClick={() => setShowModal(false)}
                                                            >
                                                                <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                                                                    x
                                                                </span>
                                                            </button>
                                                        </div>
                                                        <div className="relative p-6 flex-auto">
                                                            <form onSubmit={handleSubmit(handleFeedback)}>
                                                                <div className="mb-4">
                                                                    <label htmlFor="feedbackMessage">Feedback Message:</label>
                                                                    <Controller
                                                                        name="feedbackMessage"
                                                                        control={control}
                                                                        defaultValue=""
                                                                        rules={{ required: 'Feedback message is required' }}
                                                                        render={({ field }) => (
                                                                            <textarea
                                                                                {...field}
                                                                                id="feedbackMessage"
                                                                                rows={5}
                                                                                style={{ width: '100%', border: '1px solid gray' }}
                                                                            />
                                                                        )}
                                                                    />
                                                                    {errors.feedbackMessage && (
                                                                        <p>{errors.feedbackMessage.message}</p>
                                                                    )}
                                                                </div>
                                                                <div className="mb-4">
                                                                    <label>Rating:</label>
                                                                    <Controller
                                                                        name="rating"
                                                                        control={control}
                                                                        defaultValue="0"
                                                                        rules={{ required: 'Please select a rating' }}
                                                                        render={({ field }) => (
                                                                            <div>
                                                                                {[1, 2, 3, 4, 5].map((value) => (
                                                                                    <label key={value} className="me-3">
                                                                                        <input
                                                                                            className="me-1"
                                                                                            type="radio"
                                                                                            value={String(value)}
                                                                                            onChange={(e) => field.onChange(e.target.value)}
                                                                                            checked={field.value === String(value)}
                                                                                        />
                                                                                        {value}
                                                                                    </label>
                                                                                ))}
                                                                            </div>
                                                                        )}
                                                                    />
                                                                    {errors.rating && <p>{errors.rating.message}</p>}
                                                                </div>
                                                                <hr />
                                                                <div className="form-control mt-4">
                                                                    <input className="bg-[#E80040] text-white px-4 py-3 rounded-md hover:bg-black cursor-pointer uppercase text-xl font-semibold tracking-widest" type="submit" value="Submit" />
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    ) : null
                                }
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>

    );
};

export default MyCollege;