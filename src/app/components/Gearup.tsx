import { ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";
import Image from "next/image";

const Gearup = () => {
  return (
    <div className="w-full mx-auto h-full pb-[54px]">
      <div className="text-[25px] font-medium leading-[28px] pt-3">Gear up</div>
      <div className="mx-w-full m-6 md:flex justify-between flex-row">
        {/* men div */}
        <div className="w-1/2 ">
          {/* Aerrow */}
          <div className="flex gap-4 justify-end mr-[104px]">
            <div className="mt-3 ">Shop Men's</div>
            <div className="w-[46px] h-[46px] bg-neutral-100 rounded-full flex justify-center items-center cursor-pointer">
              <ArrowLeft className="text-black" />
            </div>
            <div className="w-[46px] h-[46px] bg-neutral-100 rounded-full flex justify-center items-center cursor-pointer">
              <ArrowRight className="text-black" />
            </div>
          </div>
          {/* card div */}
          <div className="flex flex-col md:flex-row gap-4">
            {/* 1 */}
            <div className="w-full md:w-1/2 p-2 ">
              <Image
                src={"/image/men,women/Image (6).svg"}
                alt="man imsge"
                height={300}
                width={300}
              />
              <div className="h-[48px] w-full pt-6 flex justify-between">
                <div className="text-[15px] font-semibold ">
                  Nike Dri-FIT Challenger
                  <br />
                  <span className="text-[#757575] text-sm">
                    Men's Short-Sleeve <br />
                    Running Top
                  </span>
                </div>
                <div className="text-sm font-semibold mr-[124px]">₹ 2 495</div>
              </div>
            </div>
            {/* 2 */}
            <div className="w-full md:w-1/2 p-2 ">
              <Image
                src={"/image/men,women/Image (7).svg"}
                alt="short imsge"
                height={300}
                width={300}
              />
              <div className="h-[48px] w-full pt-6 flex justify-between">
                <div className="text-[15px] font-semibold ">
                  Nike Air Max Pulse <br />
                  <span className="text-[#757575] text-sm">
                    Men's 18cm (approx.) 2-in-1
                    <br /> Versatile Shorts
                  </span>
                </div>
                <div className="text-sm font-semibold mr-[124px]">₹ 13 995</div>
              </div>
            </div>
          </div>
        </div>
        {/* women div */}
        <div className="w-1/2 mx-auto">
          {/* Aerrow */}
          <div className="flex gap-4 justify-end mr-[104px] ">
            <div className="mt-3 ">Shop Women's</div>
            <div className="w-[46px] bg-neutral-100 rounded-full flex justify-center items-center cursor-pointer">
              <ArrowLeft className="text-black" />
            </div>
            <div className="w-[46px] h-[46px] bg-neutral-100 rounded-full flex justify-center items-center cursor-pointer">
              <ArrowRight className="text-black" />
            </div>
          </div>
          {/* card div */}
          <div className="flex flex-wrap justify-center items-center md:justify-between ">
            {/* 1 */}
            <div className="w-full md:w-1/2 p-2 ">
              <Image
                src={"/image/men,women/Image (8).svg"}
                alt="women imsge"
                height={300}
                width={300}
              />
              <div className="h-[48px] w-full pt-6 flex justify-between ">
                <div className="text-[15px] font-semibold ">
                  Nike Dri-FIT ADV Run Division
                  <br />
                  <span className="text-[#757575] text-">
                    Women's Long-Sleeve
                    <br /> Running Top
                  </span>
                </div>
                <div className="text-sm font-semibold mr-[124px]">₹ 5 295</div>
              </div>
            </div>
            {/* 2 */}
            <div className="w-full  md:w-1/2 p-2 ">
              <Image
                src={"/image/men,women/Image (9).svg"}
                alt="short imsge"
                height={300}
                width={300}
              />
              <div className="h-[48px] w-full pt-6 flex justify-between">
                <div className="text-[15px] font-semibold ">
                  Nike Fast <br />
                  <span className="text-[#757575] text-">
                    Women's Mid-Rise 7/8 Running <br />
                    Leggings with Pockets
                  </span>
                </div>
                <div className="text-sm font-semibold mr-[124px]">₹ 3 795</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gearup;
