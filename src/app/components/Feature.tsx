import React from "react";
import Image from "next/image";

const Feature = () => {
  return (
    <div className="w-full p-4">
      <div className="max-w-full mx-auto">
        <div className="text-[23px] font-medium leading-[28px] pt-3">
          Featured
        </div>
        <Image src="/image/shoes/Image (5).svg" alt="full screen image" width={1700} height={700} />
        <div className="w-full pt-6">
          <div className="font-medium  text-[24px] md:text-[54px] flex items-center justify-center">
            STEP INTO WHAT FEELS GOOD
          </div>
          <div className="flex justify-center items-center text-[15px] leading-6">
            Cause everyone should know the feeling of running in that perfect
            pair.
          </div>
          <div className="flex justify-center items-center pt-4">
            <button className="w-[152px] h-[39px] bg-black rounded-full text-white ">
              Find Your Shoe{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
