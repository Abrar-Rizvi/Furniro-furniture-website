"use client"
import Image from "next/image";
// import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function Card() {
    // useEffect(() => {
    //     // animation to h3 of browse image
    //     gsap.fromTo('.h3text',
    //         { y: -20, opacity: 0 }, {
    //         y: 0,
    //         duration: 1,
    //         delay: 1,
    //         opacity: 1,
    //         scrollTrigger: {
    //             trigger: '.main .h3text',
    //             scroller: 'body',
    //             // markers: true,
    //             // start:'top 50%',

    //         }
    //     });

    //     //Animation to cards
    //     gsap.fromTo('.cards', {
    //         // opacity: 0, 
    //         scale:0,
    //         rotate: 360,
    //         y: 0,
    //          },
    //         {
    //             // opacity: 1,
    //             scale: 1,
               
    //             // y: 0,
    //             duration: 0.5,
               
    //             scrollTrigger: {
    //                 trigger: '.cards',
    //                 scroller: 'body',
    //                 // markers: true,
    //                 start: 'top 80%',
    //                 end: 'top 50%',
    //                 // scrub: 1

    //             }
    //         }
    //     )}, [])
           


       

          

    interface Item {
        text: string;
        src: string
    }
    const items: Item[] = [
        { text: "Dining", src: "/dining.jpg" },
        { text: "Living", src: "/living.jpg" },
        { text: "Bedroom", src: "/bedroom.jpg" },
    ]
    return (
        <div className=" main text-black text-center flex flex-col items-center w-full min-h-full py-14  mt-10  md:w-[90%] md:mx-auto">
            <h3 className=" h3text group relative p-1 font-bold text-2xl text-center md:max-w-[300px]   ">
                <span className="absolute w-full inset-0  bottom-0 h-0 group-hover:w-full group-hover:h-full bg-black transition-all duration-300 group-hover:h-full:"></span>
                <span className="relative group-hover:text-white transition-all duration-300">Browse The Range</span>
            </h3>
            <p className="mb-6  ">Modern furniture enhances home comfort.

            </p>
            {/* three cards div */}
            <div className=" map overflow-hidden flex flex-col items-center w-full  space-y-4 px-12  md:flex md:flex-row md:flex-wrap md:justify-center md:items-center md:space-x-3 md:space-y-0">
                {items.map((item, index) => {
                    // one div will be displayed 3x
                    return <div key={index} className=" relative cards w-full h-[300px] md:w-[25%]  shadow-lg rounded-lg hover:scale-[1.10] transition-all duration-300 ">
                        <Image className="w-full h-[80%] object-cover" src={item.src} width={500} height={500} alt="card-div" />
                        <p className="font-semibold  mt-4">{item.text}</p>

                    </div>
                })}

            </div>
        </div>
    )
}