import Image from "next/image";
import Header from "./components/modules/Header";
import Footer from "./components/modules/Footer";

export default function Home() {
  return (
    <div className="max-w-[1400px] mx-auto ">
      <main className="bg-slate-300 w-full h-[100dvh] overflow-x-hidden ">
        <Header />
        {/* section 1 */}
        <section className="w-full  flex items-stretch justify-between lg:items-end gap-10 lg:flex-col-reverse lg:justify-end lg:gap-5">
          {/* text */}
          <div className="flex flex-col items-start justify-center lg:items-center ms-[7.5rem] xl:ms-[5rem] w-1/2 lg:w-full lg:text-center ">
            <p className="text-[40px] md:text-[30px] leading-10 font-bold text-[#1B1C57]">
              Find Your Ideal Fabric for the Perfect Outfit at
              <span className="ps-2 outline-text">Dornika!</span>
            </p>
            <p className="text-base text-[#626687] mt-6 md:px-2">
              Everything you need to buy high-quality, stylish fabrics is right
              here at Darnika
            </p>
            <div className="flex items-center relative w-[31rem] sm:w-[90%]  h-[3.5rem] mt-8">
              <input
                type="text"
                title="input"
                className="w-full h-full border border-[#E0E3EB] rounded-3xl ps-5 sm:placeholder:text-xs"
                placeholder="What are you looking for?"
              />
              <button className="bg-[#10B981] text-white px-4 py-3 absolute end-1 rounded-[1.3rem] flex items-center gap-1 ">
                <span>Search</span>
                <Image
                  src={"/icons/arrow-bottom.svg"}
                  width={18}
                  height={18}
                  alt="arrow bottom"
                  className="rotate-[270deg]"
                />
              </button>
            </div>
          </div>
          <div className="w-1/2 md:w-[90%] h-[90dvh] md:h-[20rem]">
            <Image
              src={"/images/1.jpg"}
              width={200}
              height={200}
              alt="product img"
              className=" w-full h-full rounded-bl-[80px]"
            />
          </div>
        </section>
        {/* section 6 */}
        <section className="w-full h-[19.5rem] px-[7.5rem] md:px-6 my-[7.5rem] ">
          <div className="w-full h-full flex items-center justify-center bg-subscribeCard bg-center bg-cover overflow-hidden rounded-3xl">
            <div className="flex flex-col items-center w-[95%]">
              <p className="text-[32px] md:text-xl font-semibold text-center text-[#1B1C57] ">
                Subscribe For More Info
                <br />
                and update from Hounter
              </p>
              <div className="flex items-center relative w-[31rem] sm:w-[98%] h-[3.5rem] mt-8">
                <input
                  type="text"
                  title="input"
                  className="w-full h-full border border-[#E0E3EB] rounded-3xl ps-16 sm:placeholder:text-xs"
                  placeholder="Your email here"
                />
                <button className="bg-[#10B981] text-white px-4 py-3 absolute end-1 rounded-[1.3rem] flex items-center gap-1 sm:-bottom-14 ">
                  <span className="text-sm">Subsribe Now</span>
                </button>
                <Image
                  src={"/icons/letter.svg"}
                  width={24}
                  height={24}
                  alt="letter icon"
                  className="absolute start-6"
                />
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
}
