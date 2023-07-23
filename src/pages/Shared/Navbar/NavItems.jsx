import { AiOutlineMenu } from 'react-icons/ai'
import emptyProfile from '../../../images/empty-profile.jpeg';
import { useCallback, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const NavItems = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = useCallback(() => {
        setIsOpen(value => !value)
    }, [])

    const handleToggle = () => {
        setIsOpen(false);
    }

    return (
        <div className='relative me-5'>
            <div className='flex flex-row items-center gap-3'>
                <NavLink to="/" className="hidden md:block active-link hover:text-[#E80040] px-2.5 py-1.5" onClick={() => setIsOpen(false)}>
                    Home
                </NavLink>
                <NavLink to="/colleges" className="hidden md:block active-link hover:text-[#E80040] px-2.5 py-1.5" onClick={() => setIsOpen(false)}>
                    Colleges
                </NavLink>
                <NavLink to="/classes" className="hidden md:block active-link hover:text-[#E80040] px-2.5 py-1.5" onClick={() => setIsOpen(false)}>
                    Admission
                </NavLink>
                <NavLink to="/classes" className="hidden md:block active-link hover:text-[#E80040] px-2.5 py-1.5" onClick={() => setIsOpen(false)}>
                    My College
                </NavLink>

                <div className="flex flex-row items-center gap-3 rounded-full p-4 md:py-1 md:px-2 border-[1px] border-neutral-200">
                    <input type="text" placeholder="Search" className="rounded-xl ps-3 hidden md:block" />
                    <div
                        onClick={toggleOpen}
                        className='flex flex-row items-center gap-3 cursor-pointer hover:shadow-md transition'
                    >
                        <AiOutlineMenu />
                        <div className=''>
                            <img
                                className='rounded-full'
                                src={emptyProfile}
                                alt='profile'
                                height='30'
                                width='30'
                            />
                        </div>
                    </div>
                </div>

            </div>
            {
                isOpen && (
                    <div className='absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm'>
                        <div className='flex flex-col cursor-pointer'>
                            <input type="text" placeholder="Search" className="rounded-xl ps-3 my-3 mx-2 md:hidden block" />
                            <Link
                                onClick={() => setIsOpen(false)}
                                to='/'
                                className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                            >
                                Home
                            </Link>
                            <Link
                                onClick={() => setIsOpen(false)}
                                to='/colleges'
                                className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                            >
                                Colleges
                            </Link>
                            <Link
                                onClick={() => setIsOpen(false)}
                                to='/classes'
                                className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                            >
                                Admission
                            </Link>

                            <Link
                                onClick={() => setIsOpen(false)}
                                to='/dashboard/student-home'
                                className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                            >
                                My College
                            </Link>

                            <Link onClick={handleToggle} to={'/sign-in'} className='px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer'>Sign In</Link>

                        </div>
                    </div>
                )
            }
        </div >
    )
}

export default NavItems;
