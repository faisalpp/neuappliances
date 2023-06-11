import React from 'react';
import Slider from 'react-slick';

const Test = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    dots: true,
                    arrows: true,
                    infinite: false,
                },
            },
        ],
    };

    return (
        <div className='p-20'>
            <Slider {...settings}>
                <div>
                    <img className='w-full' src="http://placekitten.com/g/400/200" alt='' />
                </div>
                <div>
                    <img className='w-full' src="http://placekitten.com/g/400/200" alt='' />
                </div>
                <div>
                    <img className='w-full' src="http://placekitten.com/g/400/200" alt='' />
                </div>
                <div>
                    <img className='w-full' src="http://placekitten.com/g/400/200" alt='' />
                </div>
                <div>
                    <img className='w-full' src="http://placekitten.com/g/400/200" alt='' />
                </div>
                <div>
                    <img className='w-full' src="http://placekitten.com/g/400/200" alt='' />
                </div>
            </Slider>
        </div>
    );
};

export default Test;