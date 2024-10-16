"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";



type NavigationT = {
    isNavOpen: boolean
}
export default function Navigation({isNavOpen}: NavigationT) {
    const pathName = usePathname();


    //defining type of array of object by interface
    interface navigationLinks {
        name: string;
        href: string;
    }

    // defining array of object
    const items: navigationLinks[] = [
        { name: "Home", href: "/" },
        { name: "Shop", href: "/shop" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ]
    return (
        <nav className=  {` md:block  md:mr-8  absolute top-[100%]   h-screen md:h-0 z-10 md:static bg-gray-900   ${isNavOpen ? 'translate-y-0 w-full' : ' -translate-x-full  '}  md:translate-x-0 md:translate-y-0  md:transform-none transition-transform duration-500 ease-in-out`}>
            <ul className="flex flex-col  md:flex w-64 md:w-auto md:flex-row  md:justify-between md:items-center gap-x-12 gap-y-8 font-bold ">
                {items.map((item) => {
                    return <li key={item.href} className="border-b border-gray-700 md:border-none">
                        <Link href={item.href}
                            className={`group relative text-2xl ${pathName === item.href ? "border-b border-black " : ""
                                } text-[#FE938C] hover:text-[#E2776F] md:text-emerald-700`}
                               
                        >
                            {item.name}
                            <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </li>
                })}
            </ul>
        </nav>
    )
}