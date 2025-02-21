import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <header className="w-full fixed top-10 start-5 end-5 z-50 max-w-[1400px] mx-auto">
      <div className="flex items-center justify-between">
        {/* end div */}
        <div className="flex items-center gap-2">
          <Image
            src={"/icons/dornika.svg"}
            width={45}
            height={30}
            alt="globe icon"
            className="w-12 h-8"
          />
          <Image
            src={"/icons/dornika-t.svg"}
            width={28}
            height={25}
            alt="globe icon"
            className="w-12 h-8"
          />
        </div>
        {/* start div */}
        <div className="flex items-center justify-between gap-14">
          <div className="flex items-center gap-10">
            <button
              className=" px-4 py-2 rounded-3xl bg-white/10 text-white font-bold flex items-center justify-center gap-2"
              title="drop down"
            >
              <span>About Us</span>
            </button>
            <button
              className=" px-4 py-2 rounded-3xl bg-white/10 text-white font-bold flex items-center justify-center gap-2"
              title="drop down"
            >
              <span>Articles</span>
            </button>

            <button
              className=" px-4 py-2 rounded-3xl bg-white/10 text-white font-bold flex items-center justify-center gap-2"
              title="drop down"
            >
              <span>Products</span>
              <Image
                src={"/icons/arrow-bottom.svg"}
                width={18}
                height={18}
                alt="arrow bottom"
                className=""
              />
            </button>
          </div>
          <div className="flex items-center justify-center gap-6">
            <button className="px-6 py-3 bg-[#D1FAE5] text-[#047857] text-sm rounded-3xl font-bold">
              Sign Up!
            </button>
            <Image
              src={"/icons/globe.svg"}
              width={25}
              height={25}
              alt="globe icon"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
