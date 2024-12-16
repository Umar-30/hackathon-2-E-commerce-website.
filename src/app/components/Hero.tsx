import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full">
      <div className="max-w-full mx-auto ">
        <Image src="/image/Image.shoe.svg" alt="full screen image" width={1700} height={700} />
      </div>
      {/* image bottom  */}
      <div className="w-full h-[229px] mx-auto">
        <div className="flex justify-center items-center text-[16px] leading-6 mt-8 ">
          First Look
        </div>
        <div className="flex justify-center items-center font-semibold text-[56px] mx-auto">
          Nike Air Max Pulse
        </div>

        <p className=" font-Helvetica Neue w-[511px] mx-auto mt-4 leading-6 text-[15px]  flex justify-center items-center">
          Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
          Pulse —designed to push you past your limits and help you go to the
          max.
        </p>

        <div className="flex gap-6 justify-center items-center">
          <button className="bg-black h-[39px] w-[110px] text-white rounded-3xl mt-6">
            Notify Me
          </button>
          <button className="bg-black h-[39px] w-[139px] text-white rounded-3xl mt-6">
            Shop Air Max
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
