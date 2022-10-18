import React, { useRef, useState } from "react";
import { MdEmail, MdPhone, MdPlace } from "react-icons/md";
import emailjs from "emailjs-com";

import { ReactComponent as Github } from "../svg/icons/github.svg";
import { ReactComponent as Instagram } from "../svg/icons/instagram.svg";
import { ReactComponent as Linkedin } from "../svg/icons/linkedin.svg";

import Alert from "./elements/Alert";

const ContactMe = () => {
  const formRef = useRef();

  const [fromName, setFromName] = useState("");
  const [fromEmail, setFromEmail] = useState("");
  const [message, setMessage] = useState("");

  const [showAlert, setShowAlert] = useState(false);
  const [boldText, setBoldText] = useState("");
  const [additionalText, setAdditionalText] = useState("");
  const [alertClassName, setAlertClassName] = useState("");

  function sendEmail(e) {
    e.preventDefault(); //This is important, i'm not sure why, but the email won't send without it

    if (fromName && fromEmail && message) {
      emailjs
        .send(
          "service_bd7fonb",
          "template_qog32qh",
          // e.target,
          { from_name: fromName, from_email: fromEmail, message: message },
          "Cl5l7TTJ5tAF6kKWA"
        )
        .then(
          () => {
            setShowAlert(true); //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
            setBoldText("Email sent!");
            setAdditionalText("Thank you for contacting me 😊");
            setAlertClassName(
              "bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
            );

            setFromName("");
            setFromEmail("");
            setMessage("");
          },
          () => {
            setShowAlert(true); //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
            setBoldText("Email not sent!");
            setAdditionalText(
              "Change a few things up and try submitting again."
            );
            setAlertClassName("dark:bg-red-200 dark:text-red-800");
          }
        );
    } else {
      setShowAlert(true); //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
      setBoldText("Email not sent!");
      setAdditionalText("Change a few things up and try submitting again.");
      setAlertClassName(
        "text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
      );
    }
  }

  return (
    <div
      id="ContactMe"
      className="w-10/12 mx-auto flex flex-col justify-center items-center py-20"
    >
      <h2 className="text-3xl font-bold mb-10">My Contacts</h2>
      <div className="flex flex-col justify-center items-center gap-10  xl:w-6/12 xl:max-w-[600px]">
        {/* <div className="grid grid-cols-3 gap-y-2 grid-rows-2 justify-center align-middle"> */}
        <div className="flex flex-col items-center xl:flex-row justify-around gap-6  w-full">
          <div className="flex flex-col justify-start gap-2 min-w-[240px] xl:min-w-0">
            <div className="w-full flex justify-start items-center gap-2">
              <a href="https://github.com/aimakov">
                <Github className="cursor-pointer w-5 h-5" />
              </a>
              <a
                href="https://github.com/aimakov"
                className="flex justify-center items-center"
              >
                github.com/aimakov
              </a>
            </div>
            <div className="w-full flex justify-start items-center gap-2">
              <a href="https://www.linkedin.com/in/aimakov">
                <Linkedin className="cursor-pointer w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/aimakov"
                className="flex justify-center items-center"
              >
                linkedin.com/in/aimakov
              </a>
            </div>
            <div className="w-full flex justify-start items-center gap-2">
              <a href="https://instagram.com/aimakov.dev">
                <Instagram className="cursor-pointer w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/aimakov.dev"
                className="flex justify-center items-center"
              >
                instagram.com/aimakov.dev
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-start gap-2 min-w-[240px]">
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
              <p className="flex justify-center items-center">
                +82 10 4277 1907
              </p>
            </div>
          </div>
        </div>

        <form
          ref={formRef}
          id="contact"
          className="grid grid-cols-2 grid-rows-4 gap-2 h-[150px] w-full"
          onSubmit={sendEmail}
        >
          <input
            type="text"
            name="from_name"
            className="bg-gray-200 rounded-tl-xl p-2"
            placeholder="name"
            value={fromName}
            onChange={(e) => setFromName(e.target.value)}
          />
          <input
            type="email"
            name="from_email"
            className="bg-gray-200 rounded-tr-xl p-2"
            placeholder="email"
            value={fromEmail}
            onChange={(e) => setFromEmail(e.target.value)}
          />
          <textarea
            type="text"
            name="message"
            className="bg-gray-200 col-span-2 row-span-3 rounded-b-xl resize-none p-2"
            placeholder="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
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
      {showAlert ? (
        <Alert
          boldText={boldText}
          additionalText={additionalText}
          alertClassName={alertClassName}
          setShowAlert={setShowAlert}
        />
      ) : null}
    </div>
  );
};

export default ContactMe;
