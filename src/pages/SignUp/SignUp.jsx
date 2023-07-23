import login from "../../images/login.png";
import { AiFillGoogleCircle, AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const SignUp = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const { setLoading, createUser, updateUserProfile, signInWithGoogle } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const password = watch('password');

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };


    // user sign up
    const onSubmit = (data) => {
        console.log(data);
        const {name, email, photo, password, confirmPassword} = data;
        const newUser = {displayName: name, email, password, confirmPassword, photoURL:photo};
        console.log(newUser);
        fetch('http://localhost:4000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    navigate(from, { replace: true })
                }
            })

        createUser(data.email, data.password)
            .then(() => {
                updateUserProfile(data.name)
                    .then(() => {
                        navigate(from, { replace: true });
                    })
                    .catch(err => {
                        setLoading(false)
                        console.log(err.message)
                    })
            })
            .catch(err => {
                setLoading(false)
                console.log(err.message)
            })
    };

    // google sign in
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user)
                navigate(from, { replace: true })
            })
            .catch(err => {
                setLoading(false)
                console.log(err.message)
            })
    }

    return (
        <>
            <div className="py-20 bg-gradient-to-r from-[#FFEEE0] to-[#F1E9F1] grid grid-cols-1 md:grid-cols-2 items-center gap-4">
                <img src={login} alt="" />
                <div className="p-8 bg-white rounded-lg shadow-xl">
                    <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-[#FFFFFF] via-[#E80040] to-[#FFFFFF] text-transparent bg-clip-text" >Campus Snap</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
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
                                {errors.email && (
                                    <p className="text-red-500">{errors.email.message}</p>
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
                                <label htmlFor="password" className="block mb-1">
                                    Password
                                </label>

                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        id="password"
                                        className={`w-full px-4 py-2 border rounded-lg ${errors.password ? "border-red-500" : ""
                                            }`}
                                        placeholder="Enter your password"
                                        {...register("password",
                                            {
                                                required: "Password is required", maxLength: {
                                                    value: 6,
                                                    message: "Password must be less than 6 characters",
                                                }
                                            })}
                                    />
                                    <button
                                        type="button"
                                        onClick={togglePasswordVisibility}
                                        className="absolute top-2 right-2 focus:outline-none"
                                    >
                                        {showPassword ? <AiFillEye size={'25px'} /> : <AiFillEyeInvisible size={'25px'} />}
                                    </button>
                                </div>


                                {errors.password && (
                                    <p className="text-red-500">{errors.password.message}</p>
                                )}
                            </div>

                            <div className="mb-4">
                                <label htmlFor="confirmPassword" className="block mb-1">
                                    Confirm Password
                                </label>

                                <div className="relative">
                                    <input
                                        type={showConfirmPassword ? "text" : "password"}
                                        id="confirmPassword"
                                        className={`w-full px-4 py-2 border rounded-lg ${errors.password ? "border-red-500" : ""
                                            }`}
                                        placeholder="Enter your password"
                                        {...register("confirmPassword", {
                                            required: "Confirm Password is required", validate: (value) =>
                                                value === password || "Passwords do not match",
                                        })}
                                    />
                                    <button
                                        type="button"
                                        onClick={toggleConfirmPasswordVisibility}
                                        className="absolute top-2 right-2 focus:outline-none"
                                    >
                                        {showConfirmPassword ? <AiFillEye size={'25px'} /> : <AiFillEyeInvisible size={'25px'} />}
                                    </button>

                                    {errors.confirmPassword && (
                                        <p className="text-red-500">{errors.confirmPassword.message}</p>
                                    )}
                                </div>
                            </div>
                        </div>

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

                        <div className="text-center">
                            <button className="uppercase px-4 py-2 rounded-md bg-[#E80040] text-white font-bold hover:bg-[#000000]" type="submit">Register</button>
                        </div>
                    </form>
                    <div className="divider">OR</div>

                    <div className="flex items-center justify-center">
                        <button
                            className="flex items-center gap-2 px-4 py-2 bg-[#E80040] text-white font-bold hover:bg-[#000000] rounded-lg mr-4"
                            onClick={handleGoogleSignIn}
                        >
                            <AiFillGoogleCircle size={'20px'} />
                            Sign in with Google
                        </button>
                        {/* Add your Google sign-in button implementation here */}
                    </div>
                    <div className="pt-4 flex items-center justify-center">
                        <p>Already have an account? <Link to={'/sign-in'} className="text-[#E80040] hover:border-b-2 hover:border-[#000000]">Sign In</Link></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;


