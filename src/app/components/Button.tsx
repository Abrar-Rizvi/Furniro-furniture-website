// import gsap from "gsap";
// import { transform } from "next/dist/build/swc";
// import { useEffect } from "react";
interface Text {
    text: string;
}

export default function Button({text}: Text){
    // useEffect(() => {
    //   gsap.fromTo('button', {
    // //    scale: 0.25,
    //    opacity:0,
    //    y: -20

    //   },
    //   {
    //     // scale:1,
    //     y: 0,
    //     duration: 1,
    //     delay:1,
    //     opacity: 1
    //   }
    // )
    
     
    // }, [])
    
    return(
        <button className="px-3 py-2 bg-[green] text-white font-bold rounded hover:bg-[gray] 
        ">{text}</button>
    )
}