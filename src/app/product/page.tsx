import React from 'react'
import Image from 'next/image'
import { PiShoppingCartBold } from 'react-icons/pi'
const Product = () => {
  return (
    <div className='w-full flex flex-col lg:flex-row '>
        
        <div className="mx-auto p-[88px]">
            <Image src={'/image/Rectangle.svg'} alt='shoes image' height={653} width={653}
            className="w-full max-w-[500px] h-auto"/>
        </div>
        <div className="w-[376px] space-y-5 m-[120px]">
            <h2 className='text-[48px] font-medium leading-tight'>Nike Air Force 1 
            PLT.AF.ORM</h2>
                <p className='text-[16px] leading-8'>Turn style on its head with this crafted take on the <br/>Air Jordan 1 Mid. Its &quot;inside out&quot;-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.</p>
                    <div className='text-[36px] leading-7 font-medium'>₹ 8 695.00</div>
                    <button className='bg-black rounded-full text-white w-[175px] h-[44px] flex items-center justify-center gap-3'>
                        <PiShoppingCartBold  className='size-6'/>
                      Add To Cart </button>
        </div>
    </div>
  )
};

 export default Product;
