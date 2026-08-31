import { useState } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const helpLinks = [
    { name: "Payment Options", path: "#" },
    { name: "Returns", path: "#" },
    { name: "Privacy Policies", path: "#" },
  ];

  return (
    <footer className="w-full bg-white border-t border-[#000000]/10">
      {/* Main container with max-w-[1440px], py-[83px] on desktop / responsive on mobile, and justify-between */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-[100px] py-10 md:py-[83px] flex flex-col justify-between">
        {/* Top Div: Left brand info & Right columns (Links, Help, Newsletter) */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-8 pb-10 md:pb-[48px]">
          {/* Left Side: Brand & Address */}
          <div className="flex flex-col">
            <h2 className="text-[24px] font-bold text-black tracking-tight">
              Furniro.
            </h2>
            <p className="text-[#9F9F9F] text-sm sm:text-base leading-relaxed mt-6 md:mt-[86px] max-w-[285px]">
              400 University Drive Suite 200 Coral Gables,
              <br className="hidden sm:inline" /> FL 33134 USA
            </p>
          </div>

          {/* Right Side: Big container with Links, Help, and Newsletter */}
          <div className="flex flex-col md:flex-row justify-between gap-10 lg:gap-12 xl:gap-[72px] grow lg:max-w-[750px] xl:max-w-[780px]">
            {/* Left side of right container: Links & Help side-by-side with max-w-[352px] */}
            <div className="w-full max-w-[352px] flex justify-between gap-8">
              {/* Links Div */}
              <div className="flex flex-col">
                <span className="text-[#9F9F9F] font-medium text-sm md:text-base">
                  Links
                </span>
                <div className="mt-6 md:mt-[79px] flex flex-col gap-6 md:gap-[46px]">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      className="font-medium text-[#000000] text-sm md:text-base hover:text-amber-600 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Help Div (Cloned component with max-w-[352px] flex justify-between) */}
              <div className="flex flex-col">
                <span className="text-[#9F9F9F] font-medium text-sm md:text-base">
                  Help
                </span>
                <div className="mt-6 md:mt-[79px] flex flex-col gap-6 md:gap-[46px]">
                  {helpLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      className="font-medium text-[#000000] text-sm md:text-base hover:text-amber-600 transition-colors duration-200 whitespace-nowrap"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Newsletter Div */}
            <div className="flex flex-col">
              <span className="text-[#9F9F9F] font-medium text-sm md:text-base">
                Newsletter
              </span>
              <div className="mt-6 md:mt-[77px]">
                <form
                  onSubmit={handleSubscribe}
                  className="flex flex-wrap sm:flex-nowrap items-center gap-3 sm:gap-2 md:gap-3"
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Your Email Address"
                    aria-label="Enter Your Email Address"
                    className="border-b border-[#000000] pb-1 text-xs sm:text-sm text-black placeholder:text-[#9F9F9F] bg-transparent focus:outline-none w-full sm:w-[180px] md:w-[200px] transition-colors"
                  />
                  <button
                    type="submit"
                    className="border-b border-[#000000] pb-1 text-xs sm:text-sm font-semibold uppercase tracking-wider text-black hover:text-amber-600 hover:border-amber-600 transition-colors cursor-pointer shrink-0"
                  >
                    SUBSCRIBE
                  </button>
                </form>
                {subscribed && (
                  <p className="text-xs text-green-600 mt-2 font-medium">
                    Thank you for subscribing!
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Div: Copyright with top border 1px #D9D9D9 and height 59px */}
        <div className="border-t border-[#D9D9D9] h-[59px] flex items-center text-[#000000] text-xs sm:text-sm md:text-base">
          <p>2023 furino. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}