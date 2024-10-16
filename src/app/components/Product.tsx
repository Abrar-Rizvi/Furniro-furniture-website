import Image from "next/image";
import Link from "next/link";
export default function Product() {
  interface Item {
    text: string;
    src: string
}
const items: Item[] = [
    { text: "Bookshelf", src: "/bookshelf.jpg" },
    { text: "Coffe Table", src: "/coffe-table.jpg" },
    { text: "Sofa", src: "/sofa.jpg" },
    { text: "Wardrobe", src: "/wardrobe.jpg" },
]
  return (

    <div className="text-black text-center   flex flex-col items-center  w-full min-h-full py-14   mt-8  ">
    <h3 className=" group relative p-1 font-bold text-2xl  mb-6  md:max-w-[162px]  ">
      <span className="absolute bg-black inset-0  w-full h-0 bottom-0 left-0 group-hover:w-full group-hover:h-full   transition-all duration-300 "></span>
      <span className="relative group-hover:text-white transition-all duration-300">Our Products</span>
    </h3>
   
    {/* three cards div */}
    <div className="flex flex-col items-center w-full  space-y-4 px-12  md:flex md:flex-row md:flex-wrap md:justify-center md:items-center md:space-x-4 md:space-y-0">
        {items.map((item, index) => {
            return <div key={index} className=" group relative w-full shadow-lg rounded-lg  hover:scale-[1.10] transition-all duration-300 h-[300px] md:w-[20%] ">
                <Image className="w-full h-[80%] object-cover" src={item.src} width={500} height={500} alt="card-div" />
                <p className="font-semibold  mt-4">{item.text}</p>
                {/* Hover Effect */}
                <div  className="absolute left-0 top-0 w-0 h-full  flex flex-col justify-center  bg-black opacity-45 transition-all duration-300 group-hover:w-full">
                <button className="-left-0  bg-white text-black font-bold  px-6 py-1 rounded-sm opacity-0 transition-all duration-300 group-hover:opacity-100   group-hover:left-[25%]">Add to cart</button>
                <div className="space-x-2 space-y-1 -left-0  bg-black text-white font-bold opacity-0 transition-all duration-300 group-hover:opacity-100   group-hover:left-[25%]">
                 <Link href="#">share</Link>
                 <Link href="#">Compare</Link>
                 <Link href="#">Share</Link>
                </div>
                </div>
            </div>
        })}

    </div>
</div>
  );
}