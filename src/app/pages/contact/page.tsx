"use client";
import React, {useRef} from "react";
import { BackgroundBeams } from "../../component/ui/backgroundbeam";
import emailjs from '@emailjs/browser'



const BackgroundBeamsDemo = () => {

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) {
      console.error("Form reference is not set");
      return;
    }
  
    emailjs
      .sendForm('service_ei1w1nr', 'template_zzzj7gc', form.current, 'zkIWCIueI6n_gO2l6'
      )
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div id='contact'>
    <div className="h-[40rem] w-full rounded-md bg-black relative flex flex-col items-center justify-center antialiased">
        
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Connect with me
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          If you're interested in collaborating on a project, have any
          questions, or just want to connect, I'd love to hear from you. Feel
          free to reach out through email or LinkedIn, and I'll get back to you
          as soon as possible. Looking forward to connecting and discussing
          potential opportunities!
        </p>
        <form  ref={form} onSubmit={sendEmail}>
        <input
        id="name"
        name="from_name"
          type="text"
          placeholder="full name"
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4 h-12 bg-neutral-950 placeholder:text-neutral-700 text-white p-2"
        />
         <input
         id="email"
         name="from_email"
          type="email"
          placeholder="email"
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4 h-12 bg-neutral-950 placeholder:text-neutral-700 text-white p-2"
        />
         <textarea
         id="message"
         name="message"
          placeholder="your message"
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4 h-24 bg-neutral-950 placeholder:text-neutral-700 text-white p-2"
        />
        <div className="pt-8">
          <button type="submit"  className=" w-auto sm:w-20 px-2 py-1 rounded items-center font-semibold text-md  text-white border-2          border-neutral-800 hover:bg-teal-700   bg-neutral-950">
            Send
          </button>
        </div>
        </form>
      </div>
     
      <BackgroundBeams />
    </div>
    </div>
  );
};

export default BackgroundBeamsDemo;
