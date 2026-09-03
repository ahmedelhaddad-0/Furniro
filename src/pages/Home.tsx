export default function Home() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative w-full bg-[url('/Home/hero%20banner.webp')] bg-cover bg-center bg-no-repeat min-h-125 sm:min-h-150 md:min-h-179 flex items-center py-10 md:py-0">
        {/* Main 1440px Centered Container */}
        <div className="w-full max-w-360 mx-auto flex justify-center md:justify-end items-center px-4 sm:px-6 md:px-0">
          {/* Right Container */}
          <div className="mx-4 bg-[#FFF3E3] rounded-2.5 max-w-160.75 w-full shadow-sm">
            {/* Div with padding (scales smoothly down to 320px, 40px on desktop) */}
            <div className="p-6 sm:p-8 md:p-10 flex flex-col items-start">
              {/* Top Text: New Arrival */}
              <span className="font-semibold text-xs sm:text-sm md:text-base tracking-[2px] sm:tracking-[3px] text-[#333333] uppercase">
                New Arrival
              </span>

              {/* Header: Discover Our New Collection */}
              <h1 className="text-7 sm:text-9.5 md:text-13 font-bold font-poppins text-[#B88E2F] leading-tight md:leading-16.25 mt-1 mb-3 md:mb-4">
                Discover Our New Collection
              </h1>

              {/* Description paragraph */}
              <p className="text-3.5 sm:text-4 md:text-4.5 font-medium text-[#333333] leading-relaxed mb-6 sm:mb-8 md:mb-11.5">
                Lorem ipsum dolor sit, consectetur adipiscing elit, Ut elite
                tellus, luctus nec ullamcorper mattis.
              </p>

              {/* Buy Now Button */}
              <button
                type="button"
                className="bg-[#B88E2F] text-white font-bold text-sm md:text-base uppercase px-8 py-3.5 sm:px-12 sm:py-5 md:px-18 md:py-6.25 hover:bg-[#a67e26] transition-colors duration-200 cursor-pointer"
              >
                BUY NOW
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
