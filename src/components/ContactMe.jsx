import React, { useRef } from "react";
import { MdEmail, MdPhone, MdPlace } from "react-icons/md";
import emailjs from "emailjs-com";

const ContactMe = () => {
    const formRef = useRef();

    function sendEmail(e) {
        e.preventDefault(); //This is important, i'm not sure why, but the email won't send without it

        emailjs.sendForm("service_bd7fonb", "template_qog32qh", e.target, "Cl5l7TTJ5tAF6kKWA").then(
            (result) => {
                window.alert("Email sent"); //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
                formRef.current.reset();
            },
            (error) => {
                console.log(error.text);
            }
        );
    }

    return (
        <div id="ContactMe" className="flex flex-col justify-center items-center py-20">
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
                <form ref={formRef} id="contact" className="grid grid-cols-2 grid-rows-4 gap-2 h-[150px] w-full" onSubmit={sendEmail}>
                    <input type="text" name="from_name" className="bg-gray-200 rounded-tl-xl p-2" placeholder="name" />
                    <input type="email" name="from_email" className="bg-gray-200 rounded-tr-xl p-2" placeholder="email" />
                    <textarea type="text" name="message" className="bg-gray-200 col-span-2 row-span-3 rounded-b-xl resize-none p-2" placeholder="message" />
                </form>
                <button type="submit" form="contact" className="bg-black text-white rounded-xl px-4 py-2">
                    Send Message
                </button>
            </div>
        </div>
    );
};

export default ContactMe;
