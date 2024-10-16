import Link from "next/link";
import Image from "next/image";

type Footertype = {
  heading: string;
  links: { name: string; href: string }[];
  h2: string;
  info: string;
}
export default function Footer({ heading, links, h2, info }: Footertype) {


  return (
    // main div 
    <div className=" bg-gradient-to-r from-[#ffe7e7] via-[#ffcccc] to-[#ff9999] text-[#333333] p-12 flex flex-col items-center space-y-1  ">

      {/* this div for imgage */}
      <div className="w-[250px] h-[250px] rounded-full md:w-[200px] md:h-[200px]">
        <Image src="/footer_logo2.png" width={200} height={200} alt="footer logo"
          className="w-full h-full object-cover rounded-full"
        />
      </div>

      {/* This div controls all section to be horizental and vertical */}
      <div className="flex flex-col space-y-20 md:space-y-0 items-center  md:flex md:flex-row md:justify-evenly  shadow-lg w-full ">
        {/* section-one */}
        <div className="flex flex-col items-center  p-4  ">
          <div className="">
            <h2 className="group relative text-3xl text-center hover:text-[#ff6666] ">{heading}</h2>
            <ul className="text-center font-bold">
              {links.map((link, idx) => {
                return <li key={idx} className=" py-1 ">
                  <Link href={link.href}
                  className="border-b border-black hover:text-[#ff6666]"
                  >{link.name}</Link>
                </li>
              })}

            </ul>
          </div>



        </div>
        {/* section-two */}
        <div className="flex flex-col justify-center  w-[250px] ">
          <input type="text" placeholder="E-Mail Address" 
          className="w-full mb-4 px-2 py-2 rounded-sm  border-none  focus:outline-none"
          />
          <button className="w-full px-4 py-1 rounded-sm bg-[#2e8b57] text-[#ffffff] hover:bg-[#276746]">Subscribe Me!</button>
        </div>
        {/* section-three */}
        <div className="flex flex-col items-center   p-4">
          <h2 className="text-3xl mb-4 hover:text-[#ff6666]">{h2}</h2>
          <p className="hover:text-[#ff6666] text-[20px]">{info}</p>
        </div>
      </div>

    </div>
  );
}