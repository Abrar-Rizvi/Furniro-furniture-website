import Image from "next/image"
export default function Contactform() {
    return (
        // container
        <div className="w-full md:w-[35%] p-5 mx-auto border border-black rounded-sm mb-20 mt-20
         bg-gradient-to-r from-[#ffe7e7] via-[#ffcccc] to-[#ff9999] text-[#333333]
        ">
                <h3 className="text-center text-4xl font-semibold">Contact Form</h3>
                <form className="flex flex-col space-y-6  p-5">
                    <input type="text" placeholder="NAME"
                        className=" focus:outline-none h-[40px] px-3 rounded-sm border border-black"
                    />
                    <input type="email" placeholder="EMAIL"
                        className="focus:outline-none h-[40px] px-3 rounded-sm border border-black"
                    />
                    <input type="contact" placeholder="CONTACT"
                        className="focus:outline-none h-[40px] px-3 rounded-sm border border-black"
                    />

                    <input type="button" value="Submit"
                        className="bg-black text-white rounded-sm h-[30px]"
                    />
                </form>
            </div>
    )
}