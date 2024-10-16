"use client"

import Image from "next/image"
import Navigation from "./Navigation"
import { useState } from "react"




export default function Header() {
    const [isNavOpen, setNavOpen] = useState(false);

    const clickHandle = () => {
        setNavOpen(!isNavOpen)
        // console.log(!isNavOpen)
    }
    return (
        <header className=" relative w-full h-[71px]  bg-[#FFFFFF]  flex justify-between items-center">
            {/* logo */}
            <div className="min-w-48 h-14 flex justify-center items-center gap-x-1  ">
                <Image className="w-7 h-7  object-cover" src="/transp-logo.jpg" alt="logo" width={500} height={500} />
                <p className="font-extrabold text-2xl">Furniro</p>
            </div>
            {/* Navigation Bar */}
            <Navigation  isNavOpen={isNavOpen}/>

            {/* hamburgerButton */}
            <button
        onClick={clickHandle}
        className="lg:hidden flex items-center"
      >
        <div className="w-9 h-14 cursor-pointer flex flex-col items-center justify-center">
          <div
            className={`w-[50%] h-[2px] bg-[#202426] rounded-sm transition-all duration-300 origin-left translate-y-[0.45rem] ${
                isNavOpen ? "rotate-[-45deg]" : ""
            }`}
          ></div>
          <div
            className={`w-[50%] h-[2px] bg-[#202426] rounded-md transition-all duration-300 origin-center ${
                isNavOpen ? "hidden" : ""
            }`}
          ></div>
          <div
            className={`w-[50%] h-[2px] bg-[#202426] rounded-md transition-all duration-300 origin-left -translate-y-[0.45rem] ${
              isNavOpen ? "rotate-[45deg]" : ""
            }`}
          ></div>
        </div>
      </button>






        </header>
    )
}