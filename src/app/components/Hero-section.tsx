"use client"
import Button from "./Button";
// import gsap from "gsap";
// import { useEffect } from "react";

export default function Herosection() {
    // useEffect(() => {
    //     gsap.fromTo('.text',
    //         {y: -20, opacity: 0}, {
    //         y:0,
    //         duration:1,
    //         delay:1,
    //         opacity:1,
    //     });
    // }, [])

    return (
        <div className="relative flex items-center w-full min-h-[calc(100vh-71px)] sm:min-h-[calc(100vh-71px)]  md:min-h-[calc(100vh-71px)]  bg-center bg-cover" style={{ backgroundImage: "url('/hero..jpg')" }}>
            <div className=" relative text-left  p-6  top-[50%]  rounded-sm  w-[70%] mx-auto md:w-[35%] md:h-[60%] md:absolute md:top-[20%] md:right-[15%]  bg-[#FE938C] ">
                <p className=" text  relative mb-3 md:text-2xl">New Arrival</p>
                <h1 className="mb-3 text font-bold text-4xl md:text-5xl text-[green]">Discover Our <br />
                    <span className="text-gray-700"> New Collection</span></h1>
                <p className="mb-3 text text-[20px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, nihil.</p>
                
                <Button text="BUY NOW" />
            </div>
        </div>
    )
}
