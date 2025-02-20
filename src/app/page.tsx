import Image from "next/image";
import Header from "./components/modules/Header";
import Footer from "./components/modules/Footer";

export default function Home() {
  return (
    <div className="max-w-[1400px] mx-auto ">
      <main className="bg-slate-300 w-full h-[100dvh] overflow-x-hidden ">
        <Header />
        {/* section 1 */}
        <section className="w-full flex items-stretch justify-between lg:items-end gap-10 lg:flex-col-reverse lg:justify-end lg:gap-5">
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
        {/* section 5 */}
        <section className="w-full flex flex-col items-center my-[7rem]">
          <div className="flex flex-col items-center">
            <div className="border border-orange-primary w-[32px]"></div>
            <p className="text-orange-primary">
              See tips and trick from our partnership
            </p>
            <p className="text-[32px] text-center font-bold text-[#1B1C57]">
              Find out more about <br /> selling and buying homes
            </p>
            <button className="bg-[#10B981] text-white px-4 py-3 rounded-[1.3rem] flex items-center gap-1 mt-5">
              <span>More Artikel</span>
            </button>
          </div>
          <div className="flex items-center gap-16 w-full px-[7.5rem]">
            <div className="w-1/2 flex flex-col gap-10">
              {/* card */}
              <div className="w-full h-[9.25rem] flex items-center gap-8">
                <Image
                  src={"/images/products/HP8721-AZ.webp"}
                  width={200}
                  height={150}
                  alt="globe icon"
                  className="w-[12.5rem] h-[9rem] rounded-2xl"
                />
                <div className="flex flex-col gap-3">
                  <div className="w-full flex items-center gap-4">
                    <Image
                      src={"/images/products/HP8721-AZ.webp"}
                      width={32}
                      height={32}
                      alt="globe icon"
                      className="w-[2rem] h-[2rem] rounded-full"
                    />
                    <p className="text-sm text-[#3C4563]">Dianne Russell</p>
                  </div>
                  <p className="text-lg">
                    The things we need to check when we want to buy a house
                  </p>
                  <div className="flex items-center gap-3">
                    <Image
                      src={"/icons/clock.svg"}
                      width={24}
                      height={24}
                      alt="globe icon"
                      className="w-[1.5rem] h-[1.5rem]"
                    />
                    <p>4 min read | 25 Apr 2021</p>
                  </div>
                </div>
              </div>
            </div>
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
