import React from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { RiCamera3Fill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className=" w-full  bg-black ">
      <div className="flex flex-col md:flex-row justify-between px-6 py-8">
          {/* 1 */}
          <div className="w-full md:w-[245px] space-y-5 text-white mb-6 md:mb-0">
            <p>Find A Store&apos;</p>
            <p>Become A Member</p>
            <p>Sign Up for Email</p>
            <p>Send Us Feedback</p>
            <p>Student Discounts</p>
          </div>
          {/* 2 */}
          <div className="w-full md:w-[245px] space-y-5 mb-6 md:mb-0 text-slate-400">
            <p className="text-white">Get Help</p>
            <p>Order Status</p>
            <p>Delivery</p>
            <p>Returns</p>
            <p>Payment Options</p>
            <p>Contact Us On Nike.com Inquiries</p>
            <p>Contact Us On All Other Inquiries</p>
          </div>
          {/* 3 */}
          <div className="w-full md:w-[245px] space-y-5 mb-6 md:mb-0 text-slate-400">
            <h1 className="text-white">About Nike&apos;</h1>
            <p>News</p>
            <p>Careers</p>
            <p>Investors</p>
            <p>Sustainability</p>
          </div>
  
        {/* icon div */}
        <div className="flex justify-center md:justify-end gap-5 pt-9 md:pt-0">
          <FaTwitter className="bg-slate-400 w-[30px] h-[30px] text-black rounded-full" />
          <FaFacebookF className="bg-slate-400 w-[30px] h-[30px] text-black rounded-full" />
          <TiSocialYoutubeCircular className="bg-slate-400 w-[30px] h-[30px] text-black rounded-full" />
          <RiCamera3Fill className="bg-slate-400 w-[30px] h-[30px] text-black rounded-full" />
        </div>
        </div>
        
      {/* copr right */}
      <div className="w-full flex flex-col md:flex-row justify-between px-6 pb-6">
        <div className="text-slate-400 flex gap-2 items-center mb-6 md:mb-0">
          <FaLocationDot className="text-white" />
          <span className="text-white">India</span>
          <p>© 2023 Nike, Inc. All Rights Reserved</p>
        </div>
        <div className="flex gap-6 text-slate-400 ">
          <Link href={"#"}>Guides</Link>
          <Link href={"#"}>Terms of Sale</Link>
          <Link href={"#"}>Terms of Use</Link>
          <Link href={"#"}>Nike Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;


