import React from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineArrowRight } from "react-icons/ai"

const ProductsTypeCard = ({ productstype }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>
            {productstype.map((product, index) => (
                <div key={index}>
                    <div className='rounded-3xl border border-gray-300 p-7 relative overflow-hidden group maxmd:max-w-[330px] maxmd:mx-auto'>
                        <div className='absolute top-0 left-0 right-0 bottom-0 bg-b3/50 flex items-center justify-center scale-0 opacity-0 pointer-events-none group-hover:scale-100 group-hover:opacity-100 group-hover:pointer-events-auto duration-300'>
                            <Link to={product.applianceslink} className='duration-300 inline-flex items-center gap-2 hover:gap-3 px-5 py-2 rounded-lg bg-b7 text-white'>View All Appliances<AiOutlineArrowRight className="text-base" /></Link>
                        </div>
                        <div className='h-80 xl:h-96 flex justify-center items-center'>
                            <img src={product.productimage} className='object-contain' alt="" />
                        </div>
                        <div className='flex flex-col mt-6 gap-[10px] items-center text-center'>
                            <h3 className='font-bold text-lg 3xl:text-[20px]'>{product.productname}</h3>
                            <p className='font-semibold text-gray-400 text-xs'>{product.productappliances} Appliances</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProductsTypeCard