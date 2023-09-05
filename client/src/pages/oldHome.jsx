import React from 'react'

const oldHome = () => {
  return (
    <>
      {/* Brands Logo Slider Auto Start */}
      <div className='bg-white py-5' >
        <h4 className='text-center text-sm' >BRANDS WE SELL</h4>
        <div className='relative mt-2' >
          <BrandsSlider />
        </div>
      </div>
      {/* Brands Logo Slider Auto End */}

      {/* What We Sell Section Start */}
      <div className='py-16 bg-b8' >
        <h4 className='text-center font-semibold text-4xl' >What We Sell</h4>
        <div className='grid grid-flow-col-dense justify-center space-x-10 px-10 mt-8' >
          <Wwsl img="wwsl1.webp" title="Scratch and Dent Appliances" />
          <Wwsl img="wwsl2.webp" title="Floor Model & Display Appliances" />
          <Wwsl img="wwsl3.webp" title="Open Box Appliances" />
          <Wwsl img="wwsl4.webp" title="Overstock Appliances" />
        </div>
        <p className="text-t1 font-semibold text-lg text-center mt-10" >We deliver customers deep discounts by liquidating thousands of appliances from big box retailers right here in Austin, Tx!</p>
      </div>
      {/* What We Sell Section End */}

      {/* Home Images Section Start */}
      <div className='flex' >
        <div className='relative' ><div className='absolute top-10 w-full' ><span className='flex justify-center w-100' ><img className=' w-9/12' src="ht1.webp" /></span></div><img src="h1.webp" /></div>
        <div className='relative' ><div className='absolute top-10 w-full' ><span className='flex justify-center w-100' ><img className=' w-9/12' src="ht2.webp" /></span></div><img src="h2.webp" /></div>
      </div>
      {/* Home Images Section End */}


      {/* Cosmatic Star Rating Section Start */}
      <div className='flex flex-col bg-b8 px-12 py-12' >
        {/* Heading Start  */}
        <div className='flex flex-col items-center' >
          <h4 className='font-semibold text-2xl' >Our Cosmetic Star Rating System</h4>
          <p className='text-center text-lg mt-2' >We rate our scratch and dent appliances by their cosmetic appearance (How they look). Appliances with lower cosmetic grades get Deeper Discounts! You pick your level of savings!</p>
        </div>
        {/* Heading End */}

        {/* Products Card Start */}
        <div className="grid grid-flow-col-dense justify-center space-x-10 mt-8 h-auto" >
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        {/* Products Card End */}

      </div>
      {/* Cosmatic Star Rating Section End */}

      {/* How It Works Section Start */}
      <HiwSection />
      {/* How It Works Section End */}

      {/* Austins Love Section Start */}
      <div className='relative' >
        <div className='absolute text-center items-center py-24 h-full w-full text-white z-20 text-4xl font-bold' ><p>Austin Loves Our Star Rating System Here's Why</p></div>
        <img src="austin_love.webp" />
      </div>
      {/* Austins Love Section End */}

      {/* 3D Card Sectiont Start  */}
      <div className='grid grid-cols-12 py-16 px-10' >
        <div className='col-start-1 col-end-6 flex flex-col space-y-5 ' >
          <div className='flex space-x-2' ><BsPiggyBank className='text-3xl' /><p className='text-sm' >We provide our Austin neighbors the best savings on  floor models , returns and scratch and dent appliances. </p></div>
          <div className='flex space-x-2' ><AiOutlineCheckCircle className='text-5xl' /><p className='text-sm' >Every appliance we sell is tested with our 100-point inspection process. We ensure every appliance functions the way it is supposed to and provide you the best discounts possible.</p></div>
          <div className='flex space-x-2' ><IoLocationOutline className='text-5xl' /><p className='text-sm' >Discover why our Austin neighbors trust us to provide great appliances at better savings. Lets find the perfect appliance for your needs at an unbeatable price by clicking below.</p></div>
          <a className='flex items-center border-[1px] border-b3 w-fit px-4 py-1 rounded-md text-b3 font-semibold' ><span className='text-sm' >Get Our Best Deals</span><BsArrowRightShort className='text-2xl' /></a>
        </div>
        <div className='col-start-7 col-end-13 relative flex justify-center items-center w-full' >
          <img src="3d1.webp" className='w-48 h-56' />
          <img src="3d2.webp" className='absolute -top-3 w-56 h-72' />
          <img src="3d3.webp" className='w-56 h-56' />
        </div>
      </div>
      {/* 3D Card Sectiont End  */}

      {/* Reviews Section Start */}
      <div className='flex flex-col justify-center px-5' >
        <h4 className='text-2xl font-bold' >Saving Austinites Money on Appliances Since 2015</h4>
        <ReviewSlider color="#F5F5F5" />
        <ReviewSlider color="#ff9b3e14" />

        <div className='flex justify-center' ><a className='flex items-center border-[1px] border-b3 w-fit px-4 py-1 rounded-md text-b3 font-semibold' ><span className='text-sm' >Shop Austin's Best Appliance Deals</span><BsArrowRightShort className='text-2xl' /></a></div>
      </div>
      {/* Reviews Section End */}

      {/* Stay In Loop Section Start */}
      <div className='flex flex-col mt-10' >
        <h4 className='text-2xl font-bold text-center' >Stay In The Loop</h4>
        <p className='text-sm text-center' >Keep up with our videos about appliances we sell, New stock at our outlet store, product reviews,  sales and much more!</p>

        <div className='mx-20 mt-10' >
          <img src="sitl.webp" />
          <div>
            <StayLoopSlider />
          </div>
          <div className='flex justify-center' ><a className='flex items-center border-[1px] border-b3 w-fit px-4 py-1 rounded-md text-b3 font-semibold' ><span className='text-sm' >View All Videos</span><BsArrowRightShort className='text-2xl' /></a></div>
        </div>

      </div>
      {/* Stay In Loop Section End */}

      {/* Shop Appliances Section Start */}
      <div className='flex flex-col py-10 bg-b8' >
        <h4 className='text-xl font-bold text-center' >Shop By Appliance Type</h4>
        <div className='grid grid-cols-3 grid-rows-2 gap-x-5 gap-y-5 px-5 mt-8' >
          <SProductCard cat="Refrigerators" />
          <SProductCard cat="Washer & Dryers" />
          <SProductCard cat="Ranges" />
          <SProductCard cat="Dishwashers" />
          <SProductCard cat="Microwaves" />
          <SProductCard cat="All Appliances" />
        </div>
        <div className='flex justify-center mt-5' ><a className='flex items-center border-[1px] border-b3 w-fit px-4 py-1 rounded-md text-b3 font-semibold' ><span className='text-sm' >View All Categories</span><BsArrowRightShort className='text-2xl' /></a></div>
      </div>
      {/* Shop Appliances Section End */}

      {/* Delivery Map Section Start */}
      <h4 className='font-bold text-center text-2xl mt-10' >Neu Local Delivery Area</h4>
      <div className='relative flex flex-col justify-center items-center py-10 w-full h-full' >
        <div className='absolute flex items-center space-x-2 bg-white shadow-xl px-5 py-2 rounded-lg' >
          <AiFillCheckCircle className='text-b12' />
          <p className='font-semibold' >Delivery Available 78626</p>
        </div>
        <div className='absolute bottom-10 flex items-center bg-transparent h-52 justify-center w-11/12' >
          <div className='flex justify-center h-fit items-center space-x-2 bg-white shadow-xl px-5 py-2 rounded-lg' >
            <AiFillCloseCircle className='text-red-500' />
            <p className='font-semibold' >Delivery Not Available  712356</p>
          </div>
        </div>
        <MapForm />
        {/* <MapApi/> */}
        <div className='bg-red-500 w-11/12 h-[490px] rounded-2xl' ></div>
      </div>
      {/* Delivery Map Section End */}

      {/* Comatic 5 Rating Products */}
      <div className='flex flex-col mx-10 py-10' >
        <div className='flex flex-col items-center' >
          <h4 className='text-2xl font-bold' >Shop By Cosmetic Rating</h4>
          <h4 className='text-lg font-bold' >Cosmetic Rating: <span className='font-normal' >5 Stars</span> </h4>
          <div className='flex mt-2 items-center' ><AiFillStar className='text-yellow-300 text-lg' /><AiFillStar className='text-yellow-300 text-lg' /><AiFillStar className='text-yellow-300 text-lg' /><AiFillStar className='text-yellow-300 text-lg' /><AiFillStar className='text-yellow-300 text-lg' /></div>
        </div>
        <CosmaticSlider />
        <div className='flex justify-center' ><a className='flex items-center border-[1px] border-b3 w-fit px-4 py-1 rounded-md text-b3 font-semibold' ><span className='text-sm' >Shop All 5 Star Cosmetic Rating Appliances</span><BsArrowRightShort className='text-2xl' /></a></div>
      </div>
      {/* Comatic 5 Rating Products */}

      {/* Comatic 4 Rating Products */}
      <div className='flex flex-col mx-10 py-10' >
        <div className='flex flex-col items-center' >
          <h4 className='text-2xl font-bold' >Shop By Cosmetic Rating</h4>
          <h4 className='text-lg font-bold' >Cosmetic Rating: <span className='font-normal' >4 Stars</span> </h4>
          <div className='flex mt-2 items-center' ><AiFillStar className='text-yellow-300 text-lg' /><AiFillStar className='text-yellow-300 text-lg' /><AiFillStar className='text-yellow-300 text-lg' /><AiFillStar className='text-yellow-300 text-lg' /></div>
        </div>
        <CosmaticSlider />
        <div className='flex justify-center' ><a className='flex items-center border-[1px] border-b3 w-fit px-4 py-1 rounded-md text-b3 font-semibold' ><span className='text-sm' >Shop All 4 Star Cosmetic Rating Appliances</span><BsArrowRightShort className='text-2xl' /></a></div>
      </div>
      {/* Comatic 4 Rating Products */}

      {/* Comatic 3 Rating Products */}
      <div className='flex flex-col mx-10 py-10' >
        <div className='flex flex-col items-center' >
          <h4 className='text-2xl font-bold' >Shop By Cosmetic Rating</h4>
          <h4 className='text-lg font-bold' >Cosmetic Rating: <span className='font-normal' >3 Stars</span> </h4>
          <div className='flex mt-2 items-center' ><AiFillStar className='text-yellow-300 text-lg' /><AiFillStar className='text-yellow-300 text-lg' /><AiFillStar className='text-yellow-300 text-lg' /></div>
        </div>
        <CosmaticSlider />
        <div className='flex justify-center' ><a className='flex items-center border-[1px] border-b3 w-fit px-4 py-1 rounded-md text-b3 font-semibold' ><span className='text-sm' >Shop All 3 Star Cosmetic Rating Appliances</span><BsArrowRightShort className='text-2xl' /></a></div>
      </div>
      {/* Comatic 3 Rating Products */}

      {/* Neu Tour Section Start */}
      <div id="tour" className='grid grid-cols-12 px-16 py-16' >
        <div className='col-start-1 col-end-6' >
          <img src="tour.webp" />
        </div>
        <div className='col-start-7 col-end-13' >
          <div className='bg-white w-full h-full px-10 flex flex-col space-y-3 justify-center' >
            <h4 className='text-2xl font-bold' >Tour Our Outlet Store</h4>
            <p>Neu Appliance's retail store is located smack dab in the middle of Austin, Tx. If you live nearby come check us out and meet the team or shop from the comfort of your own home online.</p>
            <a className='flex items-center border-[1px] border-b3 w-fit px-4 py-1 rounded-md text-b3 font-semibold' ><span className='text-sm' >Shop All 3 Star Cosmetic Rating Appliances</span><BsArrowRightShort className='text-2xl' /></a>
          </div>
        </div>
      </div>
      {/* Neu Tour Section End */}

      {/* Gallery Section Start */}
      <div className='flex flex-col bg-b3 py-12' >
        <div className='mx-20 ' >
          <img src="sitl.webp" />
          <div>
            <GallerySlider />
          </div>
        </div>
        <div className='flex justify-center' ><a className='flex items-center border-[1px] border-white w-fit px-4 py-1 rounded-md font-semibold text-white' ><span className='text-sm ' >View All Videos</span><BsArrowRightShort className='text-2xl' /></a></div>
      </div>
      {/* Gallery Section End */}

      {/* Satisfied Customer Section Start */}
      <div className='flex flex-col justify-center px-5 py-10' >
        <h4 className='text-2xl font-bold text-center' >Saving Austinites Money on Appliances Since 2015</h4>
        <ReviewExSlider color="#ff9b3e20" />
      </div>
      {/* Satisfied Customer Section End */}

      {/* NewsLetter Section Start */}
      <div id="news" className='flex justify-center items-center h-96' >
        <div className='grid grid-cols-12 justify-center items-center bg-b4 w-10/12 h-72 rounded-lg' >
          <div className='col-start-2 col-end-6 flex flex-col items-center justify-center' >
            <a className='bg-b3 px-5 py-2 text-xs w-fit rounded-2xl text-white' >STAY UPDATED</a>
            <h4 className='text-4xl font-bold' >Subscribe!</h4>
            <p className='font-normal text-sm text-center w-72' >Get updates on exclusive discounts, experiences and more.</p>
          </div>
          <div className='col-start-7 col-end-12 space-y-2' >
            <h4 className='font-bold text-sm' >Email</h4>
            <div className='flex space-x-5 items-center' ><input type="email" className='text-xs py-2 px-2 rounded-md w-72' placeholder='Enter Your Email!' /><a className='bg-b3 px-5 py-2 text-xs rounded-md w-max text-white' >Get Updates</a></div>
            <div className='flex items-center space-x-3 ' ><Checkbox color="gray" ripple={false} /><span className='text-sm' >Yes, sign me up!</span></div>
            <p className='text-xs w-72' >Sign up above to get updates delivered directly to your inbox. See our Privacy Policy.</p>
          </div>
        </div>
      </div>
      {/* NewsLetter Section Start */}
    </>
  )
}

export default oldHome