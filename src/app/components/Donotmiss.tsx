import React from "react";
import Image from "next/image";

const Donotmiss = () => {
  return (
    <div className="w-full mx-auto">
      <div className="text-[25px] font-medium leading-[28px] pb-5">
        Don't Miss
      </div>
      <div className="w-full ">
        <img src="/image/Image (10).svg" className="w-full" />
      </div>
      <div className="w-full left-[168px]">
        <div className="flex justify-center items-center pt-5 font-medium text-[52px]">
          FLIGHT ESSENTIALS
        </div>
        <div className="flex justify-center items-center pt-5 text-[15px]">
          Your built-to-last, all-week wears—but with style only Jordan Brand
          can deliver.
        </div>
        <div className="flex justify-center items-center pt-5">
          <button className="w-[80.40px] h-[39px] rounded-full bg-black text-white">
            shop
          </button>
        </div>
      </div>
      {/* 2 div */}
      <div className="text-[25px] font-medium leading-[28px] pb-5">
        The Essentials
      </div>
      <div className="flex gap-4 w-full flex-col md:flex-row  sm:flex-col-2 mx-w-auto">
        <Image
          src={"/image/Frame (1).svg"}
          alt=" image 1"
          height={540}
          width={540}
        />
        <Image
          src={"/image/men,women/Image (11).svg"}
          alt="image 2"
          height={540}
          width={540}
        />
        <Image
          src={"/image/men,women/Frame (2).svg"}
          alt="image 3"
          height={540}
          width={540}
        />
      </div>
      <div className="w-full  ">
        <div className="left-[280px] flex justify-center items-center pt-36 gap-8 pb-36 ">
          {/* 1 */}
          <div className="w-[184px] space-y-6 ">
            <h1 className="font-bold text-[20px]">Icons</h1>
            <p>Air force 1</p>
            <p>Huarache</p>
            <p>Ari Max 90</p>
            <p>Air Max 95</p>
          </div>
          {/* 2 */}
          <div className="w-[184px] space-y-6 ">
            <h1 className="font-bold text-[20px]">Shoes</h1>
            <p>All Shoes</p>
            <p>Custom Shoes</p>
            <p>Jordan</p>
            <p>Running Shoes</p>
          </div>
          {/* 3 */}
          <div className="w-[184px] space-y-6 ">
            <h1 className="font-bold text-[20px]">Clothing</h1>
            <p>All Clothing</p>
            <p>Modest Wear</p>
            <p>Hoodies & pullovers</p>
            <p>Shirt & Tops</p>
          </div>
          {/* 4 */}
          <div className="w-[184px] space-y-6 ">
            <h1 className="font-bold text-[20px]">Kids'</h1>
            <p>Infant & Toddler Shoes</p>
            <p>Kids' Shoes</p>
            <p>kids' Jordan Shoes</p>
            <p>Kids' Basketball Shoes</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donotmiss;
