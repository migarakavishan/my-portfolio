import React from "react";

export const Contact = () => {
  return (
    <div
      name="contact"
      className="bg-gradient-to-t from-black to-gray-800 w-full text-white h-full"
    >
      <div className="max-w-screen-lg mx-auto text-white p-4">
        <div className="pb-8">
          <p className="text-6xl font-bold flex justify-center">Contact</p>
          <p className="text-2xl mt-20 text-gray-400">Submit the from below to get in touch</p>
        </div>

        <div className="flex justify-center items-center">
          <form action="https://getform.io/f/d637f13c-73e3-4e0d-8132-a9ce6ed51172" method="POST" className="flex flex-col w-3/4 md:w-1/2 sm:w-1/2">
            <input type="text" name="name" placeholder="Enter your name" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none my-4"/>

            <input type="text" name="email" placeholder="Enter your email"  className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none " />

            <textarea
              name="message"
              placeholder="Enter your message" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none my-4"
            ></textarea>

            <div className="flex justify-center">
            <button className="text-white font-semibold w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-700 to-blue-900 cursor-pointer">Send Message</button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};
