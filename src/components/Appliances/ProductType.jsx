import React from 'react'
import DropDown from './DropDown/DropDown'

const ProductSection = ({ productstype }) => {
    const CosRatingMenu = ({ menu }) => (
        <ul className='flex flex-col gap-3'>
            {menu.map((item, index) => (
                <li key={index}>
                    <a href={item.link} className='text-sm'>{item.title}</a>
                </li>
            ))}
        </ul>
    );
    return (
        <div className='lg:w-[320px] border border-gray-300 rounded-2xl px-6 pb-6 pt-2'>
            {productstype.map((product, index) => (
                <DropDown title={product.title} key={index}>
                    <CosRatingMenu menu={product.menu} />
                </DropDown>
            ))}
        </div>
    )
}

export default ProductSection