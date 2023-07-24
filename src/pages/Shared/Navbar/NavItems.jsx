/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { AiOutlineMenu } from 'react-icons/ai'
import { useCallback, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import useAuth from '../../../hooks/useAuth';

const NavItems = ({ colleges, setFilteredColleges }) => {

    const { user, logOut } = useAuth();
    const [isOpen, setIsOpen] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");

    const toggleOpen = useCallback(() => {
        setIsOpen(value => !value)
    }, [])

    const handleToggle = () => {
        logOut();
        setIsOpen(false);
    }

    const handleSearch = () => {
        const filteredColleges = colleges.filter((college) =>
            college.collegeName.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredColleges(filteredColleges);
    };


    useEffect(() => {
        fetch(`http://localhost:4000/allUsers/${user?.email}`)
            .then(res => res.json())
            .then(data => setCurrentUser(data))
    }, [user?.email])

    useEffect(() => {
        if (searchQuery.trim() === '') {
            setFilteredColleges([]);
        } else {
            handleSearch();
        }
    }, [searchQuery]);


    return (
        <div className='relative me-5'>
            <div className='flex flex-row items-center gap-3'>
                <NavLink to="/" className="hidden md:block active-link hover:text-[#E80040] px-2.5 py-1.5" onClick={() => setIsOpen(false)}>
                    Home
                </NavLink>
                <NavLink to="/colleges" className="hidden md:block active-link hover:text-[#E80040] px-2.5 py-1.5" onClick={() => setIsOpen(false)}>
                    Colleges
                </NavLink>
                <NavLink to="/admission" className="hidden md:block active-link hover:text-[#E80040] px-2.5 py-1.5" onClick={() => setIsOpen(false)}>
                    Admission
                </NavLink>
                {
                    user?.email && <NavLink to="/my-colleges" className="hidden md:block active-link hover:text-[#E80040] px-2.5 py-1.5" onClick={() => setIsOpen(false)}>
                        My College
                    </NavLink>
                }

                <div className="flex flex-row items-center gap-3 rounded-full p-4 md:py-1 md:px-2 border-[1px] border-neutral-300">
                    <input
                        type="text"
                        placeholder="Search"
                        className="rounded-xl ps-3 w-36 hidden md:block"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <div
                        onClick={toggleOpen}
                        className='flex flex-row items-center gap-3 cursor-pointer hover:shadow-md transition'
                    >
                        <AiOutlineMenu />
                        <div className=''>
                            <h6 className='text-sm'>
                                {user && currentUser?.displayName
                                    ? currentUser.displayName : ''}
                            </h6>
                        </div>

                    </div>
                </div>

            </div>
            {
                isOpen && (
                    <div className='absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm'>
                        <div className='flex flex-col cursor-pointer'>
                            <input
                                type="text"
                                placeholder="Search"
                                className="block md:hidden rounded-xl ps-3 w-36"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />

                            {
                                user?.email && <Link
                                    onClick={() => setIsOpen(false)}
                                    to='/my-profile'
                                    className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                                >
                                    My Profile
                                </Link>
                            }
                            <Link
                                onClick={() => setIsOpen(false)}
                                to='/'
                                className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                            >
                                Home
                            </Link>
                            <Link
                                onClick={() => setIsOpen(false)}
                                to='/my-colleges'
                                className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                            >
                                Colleges
                            </Link>
                            <Link
                                onClick={() => setIsOpen(false)}
                                to='/admission'
                                className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                            >
                                Admission
                            </Link>

                            {
                                user?.email && <Link
                                    onClick={() => setIsOpen(false)}
                                    to='/dashboard/student-home'
                                    className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                                >
                                    My College
                                </Link>
                            }

                            {
                                user?.email ? <>
                                    <Link onClick={() => setIsOpen(false)} to={'/my-profile'} className='px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer'>My Profile</Link>
                                    <Link onClick={handleToggle} to={'/sign-in'} className='px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer'>Sign out</Link>
                                </>
                                    :
                                    <>
                                        <Link
                                            onClick={() => setIsOpen(false)}
                                            to='/sign-in'
                                            className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                                        >
                                            Sign in
                                        </Link>
                                        <Link
                                            onClick={() => setIsOpen(false)}
                                            to='/sign-up'
                                            className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                                        >
                                            Sign Up
                                        </Link>
                                    </>
                            }

                        </div>
                    </div>
                )
            }
        </div >
    )
}

export default NavItems;
