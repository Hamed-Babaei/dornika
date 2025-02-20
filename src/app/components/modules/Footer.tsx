import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col px-[7.5rem] md:px-10 mt-10 ">
      <div className="w-full flex items-start lg:flex-col">
        <div className="w-1/2 lg:w-full flex flex-col">
          <div className="flex items-center gap-2">
            <Image
              src={"/icons/dornika.svg"}
              width={45}
              height={30}
              alt="globe icon"
              className="w-12 h-8"
            />
            <span className="font-bold">Dornika</span>
          </div>
          <p className="text-[#626687] text-sm mt-5 max-w-[20rem] sm:max-w-full text-justify">
            We provide information about properties such as houses, villas and
            apartments to help people find their dream home
          </p>
          <div className="flex items-center gap-6 mt-6">
            <Image
              src={"/icons/facebook.svg"}
              width={35}
              height={35}
              alt="facebook icon"
              className="w-[2.188rem] h-[2.188rem]"
            />
            <Image
              src={"/icons/twitter.svg"}
              width={35}
              height={35}
              alt="twitter icon"
              className="w-[2.188rem] h-[2.188rem]"
            />
            <Image
              src={"/icons/instagram.svg"}
              width={35}
              height={35}
              alt="instagram icon"
              className="w-[2.188rem] h-[2.188rem]"
            />
          </div>
        </div>
        <div className="w-1/2 flex items-start gap-20 lg:gap-5 lg:flex-col">
          <div className="flex flex-col w-1/3 lg:w-full">
            <p className="font-bold mt-6">Products</p>
            <p className="text-[#626687] text-sm mt-4">House</p>
            <p className="text-[#626687] text-sm mt-4">Apartment</p>
            <p className="text-[#626687] text-sm mt-4">Villa</p>
          </div>
          <div className="flex flex-col w-1/3 lg:w-full">
            <p className="font-bold mt-6">Article</p>
            <p className="text-[#626687] text-sm mt-4">New Article </p>
            <p className="text-[#626687] text-sm mt-4">Popular Article</p>
            <p className="text-[#626687] text-sm mt-4">Most Read</p>
            <p className="text-[#626687] text-sm mt-4">Tips & Tricks</p>
          </div>
          <div className="flex flex-col w-1/3 lg:w-full">
            <p className="font-bold mt-6">Contact</p>
            <p className="text-[#626687] text-sm mt-4">
              2464 Royal Ln. Mesa, New Jersey 45463
            </p>
            <p className="text-[#626687] text-sm mt-4">(671) 555-0110</p>
            <p className="text-[#626687] text-sm mt-4">info@hounter.com</p>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center gap-2 my-5 ">
        <Image
          src={"/icons/sorayya.svg"}
          width={36}
          height={21}
          alt="sorayya logo"
        />
        <span className="sorayya-line bg-clip-text">
          Developed by
          <Link href={"http://sorayya.co.com"} className="font-bold">
            Soraya
          </Link>
          Company
        </span>
      </div>
    </footer>
  );
}
