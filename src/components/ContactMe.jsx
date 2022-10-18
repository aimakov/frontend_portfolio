import React, { useRef, useState } from "react";
import { MdEmail, MdPhone, MdPlace } from "react-icons/md";
import emailjs from "emailjs-com";

const ContactMe = () => {
  const formRef = useRef();

  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  function sendEmail(e) {
    e.preventDefault(); //This is important, i'm not sure why, but the email won't send without it
    let check = true;
    Object.values(form).forEach((value) => (!value ? (check = false) : null));
    if (check) {
      emailjs
        .send(
          "service_bd7fonb",
          "template_qog32qh",
          // e.target,
          form,
          "Cl5l7TTJ5tAF6kKWA"
        )
        .then(
          (result) => {
            window.alert("Email sent"); //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
            // formRef.current.reset();
            setForm({
              from_name: "",
              from_email: "",
              message: "",
            });
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else window.alert("Form is not filled properly.");
  }

  return (
    <div
      id="ContactMe"
      className="w-10/12 mx-auto flex flex-col justify-center items-center py-20"
    >
      <h2 className="text-3xl font-bold mb-10">My Contacts</h2>
      <div className="flex flex-col justify-center items-center gap-10 md:w-8/12 max-w-[600px]">
        {/* <div className="grid grid-cols-3 gap-y-2 grid-rows-2 justify-center align-middle"> */}
        <div className="flex flex-col justify-start gap-2">
          <div className="w-full flex justify-start items-center gap-2">
            <MdEmail className=" text-xl" />
            <p className="flex justify-center items-center">
              nurbolat.aimakov@gmail.com
            </p>
          </div>
          <div className="w-full flex justify-start items-center gap-2">
            <MdPlace className=" text-xl" />
            <p className="flex justify-center items-center">
              Ulsan, South Korea
            </p>
          </div>
          <div className="w-full flex justify-start items-center gap-2">
            <MdPhone className=" text-xl" />
            <p className="flex justify-center items-center">+82 10 4277 1907</p>
          </div>
        </div>
        <form
          ref={formRef}
          id="contact"
          className="grid grid-cols-2 grid-rows-4 gap-2 h-[150px] w-full"
          onSubmit={sendEmail}
          t
        >
          <input
            type="text"
            name="from_name"
            className="bg-gray-200 rounded-tl-xl p-2"
            placeholder="name"
            value={form.from_name}
            onChange={(e) => setForm({ ...form, from_name: e.target.value })}
          />
          <input
            type="email"
            name="from_email"
            className="bg-gray-200 rounded-tr-xl p-2"
            placeholder="email"
            value={form.from_email}
            onChange={(e) => setForm({ ...form, from_email: e.target.value })}
          />
          <textarea
            type="text"
            name="message"
            className="bg-gray-200 col-span-2 row-span-3 rounded-b-xl resize-none p-2"
            placeholder="message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
        </form>
        <button
          type="submit"
          form="contact"
          className="bg-black hover:bg-black/60 transition text-white rounded-xl px-4 py-2"
        >
          Send Message
        </button>
      </div>
    </div>
  );
};

export default ContactMe;
