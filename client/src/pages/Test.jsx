import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

const Test = () => {
  
  const slider1Ref = useRef(null);
  const slider2Ref = useRef(null);
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  useEffect(() => {
    setNav1(slider1Ref.current);
    setNav2(slider2Ref.current);
  }, []);

  const settings = {
    dots: false,
    arrows: false,
  };

  const settings2 = {
    loop: true,
    infinite: true,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 4000,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1670,
        settings: {
          slidesToShow: 6,
        },
      },
    ],
  };

  const PrevButton = ({ onClick }) => (
    <button onClick={onClick} className='hidden sm:block prev-button absolute top-0 -left-10 z-40 h-full pointer-events-none'>
      <div className='flex carousel__prev bg-black/30 hover:bg-cyan-500 cursor-pointer px-2 py-2 rounded-full text-white group pointer-events-auto'>
        <BsArrowLeftShort className='text-xl' />
      </div></button>);

const NextButton = ({ onClick }) => (
  <button onClick={onClick} className='hidden sm:block next-button absolute top-0 -right-10 z-40 h-full pointer-events-none'>
    <div className='flex carousel__next bg-black/30 hover:bg-cyan-500 cursor-pointer px-2 py-2 rounded-full text-white group pointer-events-auto'>
      <BsArrowRightShort className='text-xl' />
    </div>
  </button>
);
  
  return (
    <div className="w-[90%] mx-auto">
    <Slider className="w-full" {...settings} ref={slider1Ref} asNavFor={nav2}>
      <div className="w-full">
        <iframe src="https://youtube.com/embed/0K0Nx1nG3x4" className="h-[480px] object-cover w-full rounded-2xl" title="W3Schools Free Online Web Tutorials"></iframe>
      </div>
      <div className="w-full px-2">
        <iframe src="https://youtube.com/embed/0K0Nx1nG3x4" className="h-[480px] object-cover w-full rounded-2xl" title="W3Schools Free Online Web Tutorials"></iframe>
      </div>
      <div className="w-full px-2">
        <iframe src="https://youtube.com/embed/0K0Nx1nG3x4" className="h-[480px] object-cover w-full rounded-2xl" title="W3Schools Free Online Web Tutorials"></iframe>
      </div>
      <div className="w-full px-2">
        <iframe src="https://youtube.com/embed/0K0Nx1nG3x4" className="h-[480px] object-cover w-full rounded-2xl" title="W3Schools Free Online Web Tutorials"></iframe>
      </div>
      <div className="w-full px-2">
        <iframe src="https://youtube.com/embed/0K0Nx1nG3x4" className="h-[480px] object-cover w-full rounded-2xl" title="W3Schools Free Online Web Tutorials"></iframe>
      </div>
      <div className="w-full px-2">
        <iframe src="https://youtube.com/embed/0K0Nx1nG3x4" className="h-[480px] object-cover w-full rounded-2xl" title="W3Schools Free Online Web Tutorials"></iframe>
      </div>
    </Slider>
    <Slider {...settings2} className="loop-slider maxmd:pb-10 mt-8 relative" prevArrow={<PrevButton />} nextArrow={<NextButton />} asNavFor={nav1} ref={slider2Ref} swipeToSlide={true} focusOnSelect={true} >
      <div className="px-1">
        <img alt="thumbnail" title="thumbnail" src="https://img.youtube.com/vi/OzCAGd4YVbI/mqdefault.jpg" className="h-full w-full rounded-2xl"></img>
      </div>
      <div className="px-1">
        <img alt="thumbnail" title="thumbnail" src="https://img.youtube.com/vi/OzCAGd4YVbI/mqdefault.jpg" className="h-full w-full rounded-2xl"></img>
      </div>
      <div className="px-1">
        <img alt="thumbnail" title="thumbnail" src="https://img.youtube.com/vi/OzCAGd4YVbI/mqdefault.jpg" className="h-full w-full rounded-2xl"></img>
      </div>
      <div className="px-1">
        <img alt="thumbnail" title="thumbnail" src="https://img.youtube.com/vi/OzCAGd4YVbI/mqdefault.jpg" className="h-full w-full rounded-2xl"></img>
      </div>
      <div className="px-1">
        <img alt="thumbnail" title="thumbnail" src="https://img.youtube.com/vi/OzCAGd4YVbI/mqdefault.jpg" className="h-full w-full rounded-2xl"></img>
      </div>
      <div className="px-1">
        <img alt="thumbnail" title="thumbnail" src="https://img.youtube.com/vi/OzCAGd4YVbI/mqdefault.jpg" className="h-full w-full rounded-2xl"></img>
      </div>
      <div className="px-1">
        <img alt="thumbnail" title="thumbnail" src="https://img.youtube.com/vi/OzCAGd4YVbI/mqdefault.jpg" className="h-full w-full rounded-2xl"></img>
      </div>
      <div className="px-1">
        <img alt="thumbnail" title="thumbnail" src="https://img.youtube.com/vi/OzCAGd4YVbI/mqdefault.jpg" className="h-full w-full rounded-2xl"></img>
      </div>
    </Slider>
  </div>
  )
}

export default Test