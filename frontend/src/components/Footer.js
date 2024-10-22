import React, { useState } from "react";
import axios from "axios";

const Footer = () => {
  const [dataState, setDataState] = useState("hidden");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div className="text-center mb-12">
      <h1 className="text-2xl font-bold mb-2">Let's Connect</h1>
      <p className="text-sm font-medium text-gray-400">
        I'm excited to connect with others via email (aqibnengroo5@gmail.com)
        and Linkedin to chat about projects and ideas. I am open to hearing
        about potential opportunities.
      </p>
      <button
        className="bg-white text-black px-3 py-1 mt-2 rounded-md font-medium "
        onClick={(e) => {
          setDataState("block");
        }}
      >
        Get in touch!
      </button>

      <div className={`overlay ${dataState}`}>
        <div
          role="dialog"
          className="bg-zinc-900 p-2 mx-auto rounded-md fixed sm:top-[30%] sm:left-[50%] sm:transform sm:-translate-x-1/2"
        >
          <div className="w-full text-right ">
            <button
              onClick={(e) => {
                setDataState("hidden");
              }}
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
              >
                <path
                  d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          <h1 className="text-sm sm:text-xl font-semibold">Contact Form</h1>
          <p className="text-xs sm:text-sm font-medium text-gray-400 mb-4">
            Fill out this form to send me a message. I'll get back to you as
            soon as possible.
          </p>

          <form>
            <div>
              <label className="inline-block text-left w-full m sm:ml-1 mb-2 font-medium text-sm sm:text-md">
                Name
              </label>
              <input
                value={name}
                type="text"
                placeholder="Your Name"
                className="inline-block w-full bg-transparent border border-gray-400 rounded-md py-1 px-1 sm:px-2"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="my-4">
              <label className="inline-block text-left w-full m sm:ml-1 mb-2 font-medium text-sm sm:text-md">
                Email
              </label>
              <input
                value={email}
                type="email"
                placeholder="Your email"
                className="inline-block w-full bg-transparent border border-gray-400 rounded-md py-1 sm:px-2"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div>
              <label className="inline-block text-left w-full m sm:ml-1 mb-2 font-medium text-sm sm:text-md">
                Message
              </label>
              <input
                value={message}
                type="text"
                placeholder="Your message"
                className="inline-block w-full bg-transparent border border-gray-400 rounded-md py-1 sm:px-2"
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              />
            </div>
            <button
              className="bg-white text-zinc-900 font-medium px-3 py-1 mt-2 rounded-md"
              type="submit"
              onClick={async (e) => {
                e.preventDefault();
                try {
                  await axios.post("http://localhost:4000/", {
                    name,
                    email,
                    message,
                  });
                  alert("Message sent");
                  setName("");
                  setEmail("");
                  setMessage("");
                } catch (err) {
                  alert("something went wrong");
                }
              }}
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
