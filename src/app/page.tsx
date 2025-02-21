import Image from "next/image";
import Header from "./components/modules/Header";
import Footer from "./components/modules/Footer";
import TripleCarousel from "./components/templates/TripleCarousel";

export default function Home() {
  return (
    <main className="w-full h-[100dvh] overflow-x-hidden ">
      <Header />

      {/* section 1 */}
      <section className="w-full flex items-stretch justify-between lg:items-end gap-10 lg:flex-col-reverse lg:justify-end lg:gap-5 max-w-[1550px] mx-auto">
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
        <div className="w-1/2 md:w-[90%] h-[65dvh] md:h-[20rem]">
          <Image
            src={"/images/1.jpg"}
            width={200}
            height={200}
            alt="product img"
            className=" w-full h-full rounded-bl-[80px]"
          />
        </div>
      </section>
      {/* section 3 */}
      <section className="w-full flex items-center my-[7rem] max-w-[1400px] mx-auto h-[460px] gap-12 px-[7.5rem] md:px-6 lg:flex-col lg:mb-[30rem]">
        <div className="w-1/2 lg:w-full flex flex-col items-start gap-2">
          <div className="flex items-center gap-2 -translate-x-[40px]">
            <div className="border border-orange-primary w-[32px]"></div>
            <p className="text-orange-primary">Contact Darnika</p>
          </div>
          <p className="text-[32px] font-bold text-[#1B1C57]">
            Got a Question? We’re Here to Help!
          </p>
          <p className="text-base text-text-secondary">
            If you need more information about our products or personalized
            recommendations, our team of experts is ready to assist you. Whether
            you’re looking for a specific pattern, curious about fabric quality,
            or want guidance on choosing the right material, don’t hesitate to
            get in touch.
          </p>
          <hr className="w-full border border-[#F0F3FD] mt-14" />
          <div className="flex items-start justify-between mt-6">
            <div className="w-full flex items-center gap-4">
              <Image
                src={"/images/products/HP8721-AZ.webp"}
                width={56}
                height={56}
                alt="globe icon"
                className="w-[3.5rem] h-[3.5rem] rounded-full"
              />
              <div className="flex flex-col">
                <p>Sara Karimi</p>
                <p className="text-sm text-[#3C4563]">Customer Support</p>
              </div>
            </div>
            <button className="bg-[#10B981] text-white px-3 py-3 rounded-[1.3rem] flex items-center gap-1 w-[15rem]">
              <Image
                src={"/icons/phone.svg"}
                width={24}
                height={24}
                alt="globe icon"
                className="w-[1.5rem] h-[1.5rem] rounded-full "
              />
              <span>035-91001110</span>
            </button>
          </div>
        </div>
        <div className="w-1/2 lg:w-full h-full relative">
          <div className="flex flex-col p-10 pe-0 pb-0 ">
            <video
              controls
              src="/videos/test.mp4"
              poster="/images/products/HP8721-AZ.webp"
              className="h-[400px] w-full rounded-2xl"
            ></video>
          </div>
          <div className="flex items-end gap-2 absolute -bottom-5">
            <Image
              src={"/images/products/HP8721-AZ.webp"}
              width={96}
              height={80}
              alt="video"
              className="w-[18.5rem] h-[10.5rem] rounded-2xl"
            />
            <Image
              src={"/images/products/HP8721-AZ.webp"}
              width={96}
              height={80}
              alt="video"
              className="w-24 h-20 rounded-2xl"
            />
            <Image
              src={"/images/products/HP8721-AZ.webp"}
              width={96}
              height={80}
              alt="video"
              className="w-24 h-20 rounded-2xl"
            />
          </div>
        </div>
      </section>
      {/* section 4 */}
      <section className="w-full flex flex-col items-center my-[7rem] ">
        <div className="flex flex-col items-center">
          <div className="border border-orange-primary w-[32px]"></div>
          <p className="text-orange-primary">See Our Review</p>
          <p className="text-[32px] text-center font-bold text-[#1B1C57]">
            What Our User SWhat Our Customers Sayay About Us
          </p>
        </div>
        <div className="flex items-stretch gap-16 w-full mt-[3rem] lg:flex-col-reverse">
          <div className="w-full h-[31.563rem]">
            <TripleCarousel />
          </div>
          {/* card */}
          {/* <div className="w-[46.25rem] lg:w-full h-[31.563rem] bg-slate-200 rounded-3xl relative">
              <Image
                src={"/images/products/HP8721-AZ.webp"}
                width={200}
                height={150}
                alt="globe icon"
                className="w-full h-[80%] rounded-2xl"
              />
              <div className="mx-16 lg:mx-12 md:!mx-4 absolute bottom-6">
                <div className="flex flex-col bg-white rounded-2xl p-8 md:p-4 comment-card-shadow">
                  <p className="text-text-primary text-xl font-semibold">
                    Best! I got the house I wanted through Hounter
                  </p>
                  <p className="text-text-secondary text-sm mt-4">
                    Darnika made it so easy to find the perfect fabric for my
                    new dress. Great quality and fast delivery!
                  </p>
                  <div className="w-full flex items-center justify-between mt-6">
                    <div className="flex items-center gap-6 md:gap-2">
                      <Image
                        src={"/images/products/HP8721-AZ.webp"}
                        width={40}
                        height={40}
                        alt="globe icon"
                        className="w-[2.5rem] h-[2.5rem] rounded-full"
                      />
                      <div className="flex flex-col gap-1">
                        <p>Dianne Russell</p>
                        <p className="text-text-secondary">Manager Director</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Image
                        src={"/icons/star.svg"}
                        width={28}
                        height={28}
                        alt="globe icon"
                        className="w-[2rem] h-[2rem] rounded-full"
                      />
                      <p className="text-xl font-bold text-text-primary">4.6</p>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
        </div>
      </section>
      {/* section 5 */}
      <section className="w-full flex flex-col items-center my-[7rem] max-w-[1400px] mx-auto">
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
        <div className="flex items-stretch gap-16 w-full px-[7.5rem] md:px-6 mt-10 lg:flex-col-reverse">
          <div className="w-1/2 lg:w-full flex flex-col gap-10 lg:mt-[18rem]">
            {/* card */}
            <div className="w-full h-[9.25rem] flex items-center gap-8 md:gap-4">
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
                <p className="text-lg lg:line-clamp-2">
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
            {/* card 2 */}

            <div className="w-full h-[9.25rem] flex items-center gap-8 md:gap-4">
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
                <p className="text-lg lg:line-clamp-2">
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
            {/* card 3 */}

            <div className="w-full h-[9.25rem] flex items-center gap-8 md:gap-4">
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
                <p className="text-lg lg:line-clamp-2">
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
          <div className="w-1/2 lg:w-full h-full">
            <div className="w-full h-[9.25rem] flex flex-col items-center gap-6">
              <Image
                src={"/images/products/HP8721-AZ.webp"}
                width={200}
                height={150}
                alt="globe icon"
                className="w-full h-[17.5rem] rounded-2xl"
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
                  12 Things to know before buying a house
                </p>
                <p className="text-sm text-[#626687] lg:line-clamp-2">
                  Want to buy a house but are unsure about what we should know,
                  here I will try to explain what we should know and check when
                  we want to buy a house
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
      <section className="w-full h-[19.5rem] px-[7.5rem] md:px-6 my-[7.5rem] max-w-[1400px] mx-auto">
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
  );
}
