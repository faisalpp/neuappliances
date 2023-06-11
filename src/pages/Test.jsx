import React from 'react';
import Slider from 'react-slick';

const Test = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // responsive: [
        //     {
        //         breakpoint: 600,
        //         settings: {
        //             slidesToShow: 3,
        //             slidesToScroll: 1,
        //         },
        //     },
        //     {
        //         breakpoint: 1000,
        //         settings: {
        //             slidesToShow: 3,
        //             slidesToScroll: 1,
        //             dots: true,
        //             arrows: true,
        //             infinite: false,
        //         },
        //     },
        // ],
    };

    return (
        <Slider {...settings}>
            <div>
                <img src="p1.png" alt="dummy 1" />
            </div>
            <div>
                <img src="p1.png" alt="dummy 2" />
            </div>
        </Slider>
    );
};

export default Test;