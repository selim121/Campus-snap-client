/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import NavItems from './NavItems';


const Navbar = ({ colleges, setFilteredColleges }) => {

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        if (window.scrollY > 0) {
            document.querySelector('nav').classList.add('bg-white');
            document.querySelector('nav').classList.remove('bg-navbar');
        } else {
            document.querySelector('nav').classList.add('bg-navbar');
        }
    };

    return (
        <nav className='fixed top-0 left-0 right-0 z-10 max-w-screen-xl mx-auto'>
            <div className='flex flex-row p-2 items-center justify-between gap-3 md:gap-0'>
                <p className='uppercase text-xl bg-gradient-to-r from-[#1b1313] via-[#E80040] to-[#1b1313] text-transparent bg-clip-text font-bold tracking-wider'>Campus Snap</p>
                <NavItems colleges={colleges} setFilteredColleges={setFilteredColleges} />
            </div>
        </nav>
    );
};

export default Navbar;