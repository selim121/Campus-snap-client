import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { FaQuoteLeft } from 'react-icons/fa';
import testimonialImg from '../../../images/testimonial.jpeg';
import { useQuery } from "@tanstack/react-query";

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

    const { data: feedbacks = [] } = useQuery(['feedbacks'], async () => {
        const res = await fetch('http://localhost:4000/feedback');
        return res.json();
    })

    return (
        <div className="py-20">
            <div className="text-center space-y-2 mb-8">
                <h6 className="uppercase text-[#E80040]">Testimonial</h6>
                <h3 className="text-3xl font-semibold">What Our Student Says</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <img className="md:w-96" src={testimonialImg} alt="" />
                <div ref={sliderRef} className="keen-slider mt-5">
                    {
                        feedbacks?.map(feedback => <div key={feedback._id} className="keen-slider__slide number-slide1">
                            <div className="flex flex-col px-3 space-y-12">
                                <FaQuoteLeft size={'30px'} color="#E80040" className="" />
                                <p className="text-justify">
                                    &quot;{feedback.feedbackMessage}&quot;
                                </p>
                                <p className="text-warning">Rating: {feedback.rating} Star</p>
                                <div className="flex flex-row items-center gap-4">
                                    <img className="w-14 h-14 rounded-full" src={feedback.photo} />
                                    <div className="">
                                        <h3 className="text-xl">{feedback.name}</h3>
                                        <p className="text-xs text-[#E80040]">Student at {feedback.university}</p>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Testimonials;

