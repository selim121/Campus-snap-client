import { AiFillFacebook, AiFillLinkedin, AiFillGithub, AiFillTwitterSquare } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import footerImg from '../../../images/footer/footer.png';

const Footer = () => {

    const getCurrentYear = () => {
        return new Date().getFullYear();
    };
    const currentYear = getCurrentYear();

    return (
        <div>
            <div className="hero bg-cover" style={{backgroundImage: `url(${footerImg})`}}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content flex flex-col py-8">
                    <div className="flex flex-col md:flex-row items-center gap-4 text-white border-b space-x-9 pb-6">
                        <div className="md:py-12 space-y-2">
                            <h1 className="uppercase text-xl bg-gradient-to-r from-[#FFFFFF] via-[#E80040] to-[#FFFFFF] text-transparent bg-clip-text font-bold tracking-wider pb-6">Campus Snap</h1>
                            <p>10/7, Shekhertek, Adabor, Dhaka - 1207</p>
                            <p>+8801773407976</p>
                            <p>selimhossain.sh1@gmail.com</p>
                        </div>
                        <div className="flex flex-col border-l ps-4 space-y-2 uppercase">
                            <Link href={'#about'}>About</Link>
                            <Link href={'#blogs'}>Blogs</Link>
                            <Link href={'#contact'}>contact</Link>
                            <Link href={'#gallery'}>Gallery</Link>
                            <Link href={'#admission'}>Admission</Link>
                        </div>
                        <div className="uppercase border-l ps-4 space-y-2">
                            <p>Follow us</p>
                            <div className="grid grid-cols-2">
                                <AiFillFacebook size={35} />
                                <AiFillLinkedin size={35} />
                                <AiFillGithub size={35} />
                                <AiFillTwitterSquare size={35} />
                            </div>
                            <div className="join text-black">
                                <input className="input input-bordered join-item" placeholder="Email" />
                                <button className="btn bg-[#E80040] join-item rounded-r-full text-white">Subscribe</button>
                            </div>
                        </div>
                    </div>
                    <p className="font-light text-white text-sm py-6">Copyright <span>&copy; {currentYear} Selim. All Right Reserved</span></p>
                </div>
            </div>
        </div>
    );
};

export default Footer;