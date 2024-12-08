import React from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Shoes = () => {
  return (
    <div className="w-full mx-auto">
      <div className="h-[52px] max-w-full flex justify-between  p-4 mb-6">
        <div className="text-[25px]">Best of Air Max</div>
        <div>
          {/* Aerrow div */}
          <div className="flex gap-4">
            <div className="mt-3 ">Shop</div>
            <div className="w-[46px] h-[46px] bg-neutral-100 rounded-full flex justify-center items-center cursor-pointer">
              <ArrowLeft className="text-black" />
            </div>
            <div className="w-[46px] h-[46px] bg-neutral-100 rounded-full flex justify-center items-center cursor-pointer">
              <ArrowRight className="text-black" />
            </div>
          </div>
        </div>
      </div>
      {/* card div */}
      <div className=" container max-w-7xl mx-auto w-full ">
        <div className="flex flex-wrap justify-center items-center md:justify-between">
          {/* 1 */}
          <div className="w-full  md:w-1/3 p-2 ">
            <Image
              src={"/image/shoes/Image (1).svg"}
              alt="shoes imsge"
              height={441}
              width={441}
            />
            <div className="h-[48px] w-full pt-6 flex justify-between">
              <div className="text-[15px] font-semibold ">
                Nike Air Max Pulse <br />
                <span className="text-[#757575] text-">Men's Shoes</span>
              </div>
              <div className="text-sm font-semibold">₹ 13 995</div>
            </div>
          </div>
          {/* 2 */}
          <div className="w-full md:w-1/3 p-2">
            <Image
              src={"/image/shoes/Image (2).svg"}
              alt="shoes imsge"
              height={441}
              width={441}
            />
            <div className="h-[48px] w-full pt-6 flex justify-between">
              <div className="text-[15px] font-semibold  ">
                Nike Air Max Pulse <br />
                <span className="text-[#757575] text-">Men's Shoes</span>
              </div>
              <div className="text-sm font-semibold">₹ 13 995</div>
            </div>
          </div>
          {/* 3 */}
          <div className="w-full md:w-1/3 p-2">
            <Image
              src={"/image/shoes/Image (3).svg"}
              alt="shoes imsge"
              height={441}
              width={441}
            />
            <div className="h-[48px] w-full pt-6 flex justify-between">
              <div className="text-[15px] font-semibold  ">
                Nike Air Max 97 SE
                <br />
                <span className="text-[#757575] text-">Men's Shoes</span>
              </div>
              <div className="text-sm font-semibold">₹ 16 995</div>
            </div>
          </div>
        </div>
        {/* end */}
      </div>
    </div>
  );
};

export default Shoes;
