/* eslint-disable react/no-unescaped-entities */
import { useForm } from "react-hook-form";
import login from "../../images/login.png";
import { AiFillGoogleCircle, AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import useAuth from "../../hooks/useAuth";

const SignIn = () => {

    const [showPassword, setShowPassword] = useState(false);
    const { setLoading, signIn, signInWithGoogle, resetPassword } = useAuth();
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';
    const emailRef = useRef();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    // user sign in
    const onSubmit = (data) => {
        signIn(data.email, data.password)
            .then(() => {
                navigate(from, { replace: true });
            })
            .catch(err => {
                setLoading(false)
                console.log(err.message)
            })
    };

    // google sign in
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(() => {
                navigate(from, { replace: true });
            })
            .catch(err => {
                setLoading(false)
                console.log(err.message)
            })
    }

    const handleReset = () => {
        const email = emailRef.current.value

        resetPassword(email)
            .then(() => {
                setLoading(false)
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
                <div className="w-full p-8 bg-white rounded-lg shadow-xl">
                    <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-[#FFFFFF] via-[#E80040] to-[#FFFFFF] text-transparent bg-clip-text" >Campus Snap</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
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
                                    {...register("password", {
                                        required: "Password is required"
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
                        <div className="flex items-center justify-between mb-4">
                            <button onClick={handleReset} className="text-sm text-gray-600">
                                Forgotten password?
                            </button>
                            <button
                                type="submit"
                                className="uppercase px-4 py-2 rounded-md bg-[#E80040] text-white font-bold hover:bg-[#E10020]"
                            >
                                Sign In
                            </button>
                        </div>
                    </form>

                    <div className="divider">OR</div>

                    <div className="flex items-center justify-center">
                        <button
                            className="flex items-center gap-2 px-4 py-2 bg-[#E80040] text-white font-bold hover:bg-[#E10020] rounded-lg mr-4"
                            onClick={handleGoogleSignIn}
                        >
                            <AiFillGoogleCircle size={'20px'} />
                            Sign in with Google
                        </button>
                        {/* Add your Google sign-in button implementation here */}
                    </div>
                    <div className="pt-4 flex items-center justify-center">
                        <p>Don't have an account? <Link to={'/sign-up'} className="text-[#E80040]">Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignIn;
