import React, { useState ,useEffect} from 'react'
import GallerySlider from '../components/GallerySlider'
import { BsArrowRightShort } from 'react-icons/bs'
import { getGalleryImages } from '../api/frontEnd'

const GallerySection = () => {
  const [media, setMedia] = useState([]);
  const [img, setImg] = useState('');

  const GetLoopMedia = async () => {
    const res = await getGalleryImages();
    console.log(res)
    if(res.status === 200){
        setMedia(res.data.gallery)
        setImg(res.data.gallery[0].imageUrl)
      }else{
        setMedia([])
      }
    }

    useEffect(() => {
     GetLoopMedia()
    }, [])

  return (
    <div className='flex flex-col bg-b3 py-10 lg:py-12 w-full 3xl:max-w-1680px px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto' >
      <div className=' lg:mt-10 xl:mt-10 mt-5' >
        {/* <img src='g8.png' className='xl:h-[565px] lg:h-[400px] h-52 w-full' /> */}
        {media.length > 0 ? <img src={img} className='xl:h-[565px] lg:h-[400px] h-52 w-full rounded-3xl' />:null}
        <div>
          <GallerySlider media={media} setImg={setImg} img={img} />
        </div>
      </div>
      <div className='flex justify-center py-5' ><a href='' className='flex items-center border-[1px] border-white w-fit px-4 xl:py-2 py-1 rounded-md font-semibold text-white' ><span className='text-sm xl:text-[16px]' >Shop Now</span><BsArrowRightShort className='text-2xl xl:text-3xl' /></a></div>
    </div>
  )
}

export default GallerySection