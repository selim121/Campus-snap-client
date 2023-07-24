import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { FiEdit } from 'react-icons/fi';
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";

const UserProfile = () => {

    const { data: currentUser = [], refetch } = useQuery(['currentUser'], async () => {
        const res = await fetch(`http://localhost:4000/allUsers/${user?.email}`);
        return res.json();
    })

    const { user } = useAuth();
    const [showModal, setShowModal] = useState(false);
    const { register, handleSubmit, reset } = useForm({
        values: {
            name: currentUser.name,
            email: currentUser.email,
            university: currentUser.university,
            address: currentUser.address
        }
    });

    const handleIdAndModal = () => {
        setShowModal(true);
    }

    const handleUpdate = data => {
        fetch(`http://localhost:4000/my-profile/update/${user?.email}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    console.log(data);
                    refetch();
                    reset();
                    setShowModal(false);
                }
            })
    }

    return (
        <div className="py-20 bg-gradient-to-r from-[#FFEEE0] to-[#F1E9F1]">
            <h1 className="uppercase text-4xl font-bold opacity-50 text-center">Student profile</h1>
            <div className="flex flex-col md:flex-row gap-8 items-center justify-center mt-8 bg-[#e800422d] w-full md:w-3/4 md:mx-auto py-8">
                <img className="rounded" src={currentUser?.photoURL} alt="profile image" />
                <div className="space-y-3">
                    <div>
                        <p className="uppercase font-semibold text-sm opacity-70">Name</p>
                        <h1 className="uppercase text-2xl font-semibold">{currentUser?.displayName}</h1>
                    </div>
                    <div>
                        <p className="uppercase font-semibold text-sm opacity-70">Email</p>
                        <h1 className="text-2xl font-semibold">{currentUser?.email}</h1>
                    </div>
                    <div>
                        <p className="uppercase font-semibold text-sm opacity-70">University name</p>
                        <h1 className="uppercase text-2xl font-semibold">{currentUser?.university}</h1>
                    </div>
                    <div>
                        <p className="uppercase font-semibold text-sm opacity-70">Address</p>
                        <h1 className="text-2xl font-semibold">{currentUser?.address}</h1>
                    </div>
                </div>
            </div>
            <div className="mt-8 flex justify-center">
                <button onClick={handleIdAndModal} className="flex items-center gap-2 bg-[#E80040] text-white px-4 py-2 rounded-md hover:bg-black">
                    <FiEdit />
                    Edit
                </button>
                {
                    showModal ? (
                        <>
                            <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                        <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                                            <h3 className="text-3xl font=semibold">Update your profile</h3>
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
                                            <form onSubmit={handleSubmit(handleUpdate)}>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    <div className="mb-4">
                                                        <label htmlFor="name" className="block mb-1">
                                                            Name
                                                        </label>
                                                        <input
                                                            type="text"
                                                            id="name"
                                                            className={`w-full px-4 py-2 border rounded-lg`}
                                                            placeholder="Enter your name"
                                                            {...register("name")}
                                                        />
                                                    </div>

                                                    <div className="mb-4">
                                                        <label htmlFor="email" className="block mb-1">
                                                            Email
                                                        </label>
                                                        <input
                                                            type="email"
                                                            id="email"
                                                            className={`w-full px-4 py-2 border rounded-lg`}
                                                            placeholder="Enter your email"
                                                            {...register("email")}
                                                        />
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                                                    <div className="mb-4">
                                                        <label htmlFor="university" className="block mb-1">
                                                            University
                                                        </label>
                                                        <input
                                                            type="text"
                                                            id="university"
                                                            className={`w-full px-4 py-2 border rounded-lg`}
                                                            placeholder="Enter university name"
                                                            {...register("university")}
                                                        />
                                                    </div>

                                                    <div className="mb-4">
                                                        <label htmlFor="address" className="block mb-1">
                                                            Address
                                                        </label>
                                                        <input
                                                            type="text"
                                                            id="address"
                                                            className={`w-full px-4 py-2 border rounded-lg`}
                                                            placeholder="Enter your address"
                                                            {...register("address")}
                                                        />
                                                    </div>

                                                </div>
                                                <hr />
                                                <div className="form-control mt-4">
                                                    <input className="bg-[#E80040] text-white px-4 py-3 rounded-md hover:bg-black cursor-pointer uppercase text-xl font-semibold tracking-widest" type="submit" value="Update" />
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
        </div>
    );
};

export default UserProfile;