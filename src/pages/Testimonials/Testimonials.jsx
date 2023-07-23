import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { FaQuoteLeft } from 'react-icons/fa';
import img1 from '../../images/profile-image/p1.png';
import img2 from '../../images/profile-image/p2.png';
import img3 from '../../images/profile-image/p3.png';
import testimonialImg from '../../images/testimonial.jpeg';

const Testimonials = () => {

    const [sliderRef] = useKeenSlider(
        {
            loop: true,
        },
        [
            (slider) => {
                let timeout
                let mouseOver = false
                function clearNextTimeout() {
                    clearTimeout(timeout)
                }
                function nextTimeout() {
                    clearTimeout(timeout)
                    if (mouseOver) return
                    timeout = setTimeout(() => {
                        slider.next()
                    }, 2000)
                }
                slider.on("created", () => {
                    slider.container.addEventListener("mouseover", () => {
                        mouseOver = true
                        clearNextTimeout()
                    })
                    slider.container.addEventListener("mouseout", () => {
                        mouseOver = false
                        nextTimeout()
                    })
                    nextTimeout()
                })
                slider.on("dragStarted", clearNextTimeout)
                slider.on("animationEnded", nextTimeout)
                slider.on("updated", nextTimeout)
            },
        ]
    )

    return (
        <div className="py-20">
            <div className="text-center space-y-2 mb-8">
                <h6 className="uppercase text-[#E80040]">Testimonial</h6>
                <h3 className="text-3xl font-semibold">What Our Student Says</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <img className="md:w-96" src={testimonialImg} alt="" />
                <div ref={sliderRef} className="keen-slider mt-5">
                    <div className="keen-slider__slide number-slide1">
                        <div className="flex flex-col px-3 space-y-12">
                            <FaQuoteLeft size={'30px'} color="#E80040" className="" />
                            <p className="text-justify">
                                &quot;I have been practicing martial arts for several years, and this website has become my go-to resource. It offers a wealth of information on various martial arts styles, techniques, and training tips.&quot;
                            </p>
                            <div className="flex flex-row items-center gap-4">
                                <img className="w-14" src={img1} />
                                <div className="">
                                    <h3 className="text-xl">Sabbir Al Noman</h3>
                                    <p className="text-xs text-[#E80040]">Student at Example College 1</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="keen-slider__slide number-slide1">
                        <div className="flex flex-col px-3 space-y-12">
                            <FaQuoteLeft size={'30px'} color="#E80040" className="" />
                            <p className="text-justify">
                                &quot;I have been practicing martial arts for several years, and this website has become my go-to resource. It offers a wealth of information on various martial arts styles, techniques, and training tips.&quot;
                            </p>
                            <div className="flex flex-row items-center gap-4">
                                <img className="w-14" src={img2} />
                                <div className="">
                                    <h3 className="text-xl">Sabbir Al Noman</h3>
                                    <p className="text-xs text-[#E80040]">Student at Example College 1</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="keen-slider__slide number-slide1">
                        <div className="flex flex-col px-3 space-y-12">
                            <FaQuoteLeft size={'30px'} color="#E80040" className="" />
                            <p className="text-justify">
                                &quot;I have been practicing martial arts for several years, and this website has become my go-to resource. It offers a wealth of information on various martial arts styles, techniques, and training tips.&quot;
                            </p>
                            <div className="flex flex-row items-center gap-4">
                                <img className="w-14" src={img3} />
                                <div className="">
                                    <h3 className="text-xl">Sabbir Al Noman</h3>
                                    <p className="text-xs text-[#E80040]">Student at Example College 1</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;