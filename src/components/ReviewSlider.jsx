import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiFillStar } from 'react-icons/ai'
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

const ReviewSlider = ({ color, clientreviews, icon }) => {
    console.log(clientreviews);
    const settings = {
        dots: false,
        infinite: false,
        arrows: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 1670,
                settings: {
                    slidesToShow: 3,
                },
            },
        ],
    };

    const PrevButton = ({ onClick }) => (
        <button onClick={onClick} className='hidden sm:block prev-button absolute top-0 -left-3 z-40 h-full pointer-events-none'>
            <div className='flex bg-black/30 hover:bg-cyan-500 cursor-pointer px-2 py-2 rounded-full text-white group pointer-events-auto'>
                <BsArrowLeftShort className='text-xl' />
            </div>
        </button>
    );

    const NextButton = ({ onClick }) => (
        <button onClick={onClick} className='hidden sm:block next-button absolute top-0 -right-3 z-40 h-full pointer-events-none'>
            <div className='flex bg-black/30 hover:bg-cyan-500 cursor-pointer px-2 py-2 rounded-full text-white group pointer-events-auto'>
                <BsArrowRightShort className='text-xl' />
            </div>
        </button>
    );
    // console.log(color)
    return (
        <div>
            <Slider {...settings} prevArrow={<PrevButton />} nextArrow={<NextButton />} className='relative'>
                {clientreviews.map((clientreview, index) => (
                    <div key={index}>
                        <div style={{ backgroundColor: color }} className="flex flex-col shadow-sm px-5 py-3 rounded-xl xl:h-[170px] sm:mx-2">
                            <div className="flex mt-2">
                                <AiFillStar className={`text-b7 text-sm ${clientreview.review === 1 || clientreview.review === 2 || clientreview.review === 3 || clientreview.review === 4 ? 'text-b7' : 'text-gray-300'}`} />
                                <AiFillStar className={`text-b7 text-sm ${clientreview.review === 2 || clientreview.review === 3 || clientreview.review === 4 ? 'text-b7' : 'text-gray-300'}`} />
                                <AiFillStar className={`text-b7 text-sm ${clientreview.review === 3 || clientreview.review === 4 ? 'text-b7' : 'text-gray-300'}`} />
                                <AiFillStar className={`text-b7 text-sm ${clientreview.review === 4 ? 'text-b7' : 'text-gray-300'}`} />
                            </div>
                            <p className="text-sm font-semibold mt-1">{clientreview.content}</p>
                            <a href='' className="text-sm text-b6 mt-2">Read More</a>
                            <div className="flex items-center">
                                <h5 className="text-sm mt-2 w-10/12">{clientreview.author}</h5>
                                <img src={icon} className="h-5 w-10 mt-4" alt="Icon" />
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div >
    );
};

export default ReviewSlider;
