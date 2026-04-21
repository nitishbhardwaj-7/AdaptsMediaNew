"use client";

import Image from "next/image";
import Link from "next/link";

const NavLogo = () => (
  <div className="relative w-[60px] h-[40px]">
    <Image
      alt="Company Logo"
      src="/images/navlogo.png"
      fill
      priority
      sizes="(max-width: 768px) 45px, 60px"
      className="object-contain"
    />
  </div>
);

const Navbar = () => {
  const menuBarClass = "block w-[22px] h-[2px] bg-white rounded-[2px]";

  return (
    // Added px-4 to ensure it never touches the screen edges even when zoomed
    <header className="fixed top-0 left-0 w-full z-[1000] py-5 px-4 md:px-16 pointer-events-none">
      <nav 
        aria-label="Main Navigation"
        // Added pointer-events-auto so the buttons actually work
        // mx-auto handles the centering within the 100% width header
        className="max-w-[1600px] w-full mx-auto flex items-center justify-between bg-transparent pointer-events-auto"
      >
       
        <Link href="/" aria-label="Home" className="flex no-underline">
          <NavLogo />
        </Link>

        <div className="flex items-center gap-4 md:gap-[28px]">
          <button 
            type="button"
            className="flex items-center gap-2 bg-[#3b6ef5] text-white border-none rounded-full 
                       px-4 py-2 md:px-5 md:py-[10px] 
                       text-[16px] md:text-[20px] font-medium tracking-[0.01em] 
                       cursor-pointer transition-transform duration-200 ease-in-out hover:scale-105"
          >
            <span>Start a Project</span>
            <Image
              alt="" 
              src="/images/clock.png"
              width={20}
              height={20}
              className="w-4 h-4 md:w-5 md:h-5"
            />
          </button>

          <button 
            type="button"
            aria-label="Open Menu"
            className="w-10 h-10 md:w-12 md:h-12 bg-[#f5a623] border-none rounded-full 
                       flex flex-col items-center justify-center gap-1 cursor-pointer 
                       transition-transform duration-300 [transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)] 
                       hover:rotate-90"
          >
            <span className={menuBarClass} />
            <span className={menuBarClass} />
            <span className={menuBarClass} />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;