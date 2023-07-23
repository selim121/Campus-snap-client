import img1 from '../../images/gallery/1.avif';
import img2 from '../../images/gallery/2.webp';
import img3 from '../../images/gallery/3.jpeg';
import img4 from '../../images/gallery/4.jpeg';
import img5 from '../../images/gallery/5.jpeg';
import img6 from '../../images/gallery/6.webp';
import img7 from '../../images/gallery/7.webp';
import img8 from '../../images/gallery/8.jpeg';
import img9 from '../../images/gallery/9.jpeg';
import img10 from '../../images/gallery/10.webp';
import img11 from '../../images/gallery/11.jpeg';
import img12 from '../../images/gallery/12.webp';
import img13 from '../../images/gallery/13.webp';
import Image from './image';

const Gallery = () => {
    return (
        <div className="py-20">
            <div className="text-center space-y-2 mb-8">
                <h6 className="uppercase text-[#E80040]">College Gallery</h6>
                <h3 className="text-3xl font-semibold">Graduate Students Celebration</h3>
            </div>
            <div className="grid grid-cols-1 gap-2">
                <div className="grid grid-cols-2 gap-2">
                    <div className="grid grid-cols-2 gap-2">
                        <Image img={img1} />
                        <Image img={img2} />
                        <Image img={img3} />
                        <Image img={img4} />
                    </div>
                    <Image img={img5} />
                </div>
                <div className="grid grid-cols-3 gap-2">
                    <Image img={img11} />
                    <Image img={img12} />
                    <Image img={img13} />
                </div>
                <div className="grid grid-cols-2 gap-2">
                    <Image img={img6} />
                    <div className="grid grid-cols-2 gap-2">
                        <Image img={img7} />
                        <Image img={img8} />
                        <Image img={img9} />
                        <Image img={img10} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;