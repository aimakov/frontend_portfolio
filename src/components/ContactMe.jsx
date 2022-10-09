import React from "react";
import { MdEmail, MdPhone, MdPlace } from "react-icons/md";

const ContactMe = () => {
    return (
        <div className="flex flex-col justify-center items-center py-20">
            <h2 className="text-3xl font-bold mb-16">Contact Me</h2>
            <div className="flex flex-col justify-center items-center gap-10">
                <div className="grid grid-cols-3 gap-y-2 grid-rows-2 justify-center align-middle">
                    <div className="w-full flex justify-center items-center text-2xl">
                        <MdEmail />
                    </div>
                    <div className="w-full flex justify-center items-center text-2xl">
                        <MdPlace />
                    </div>
                    <div className="w-full flex justify-center items-center text-2xl">
                        <MdPhone />
                    </div>

                    <p className="flex justify-center items-center">nurbolat.aimakov@gmail.com</p>
                    <p className="flex justify-center items-center">Ulsan, South Korea</p>
                    <p className="flex justify-center items-center">+82 10 4277 1907</p>
                </div>
                <form className="grid grid-cols-2 grid-rows-4 gap-2 h-[150px] w-full">
                    <input className="bg-gray-200 rounded-tl-xl p-2" placeholder="name" />
                    <input className="bg-gray-200 rounded-tr-xl p-2" placeholder="email" />
                    <textarea className="bg-gray-200 col-span-2 row-span-3 rounded-b-xl resize-none p-2" placeholder="message" />
                </form>
                <button className="bg-black text-white rounded-xl px-4 py-2">Send Message</button>
            </div>
        </div>
    );
};

export default ContactMe;
