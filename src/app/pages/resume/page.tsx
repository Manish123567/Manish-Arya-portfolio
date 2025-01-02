"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../../component/ui/lamp";




const LampDemo=()=> {

  const onButtonClick = () => {
    const pdfUrl = "/Manish_AryaCV.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Manish Arya CV.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    <div id="resume">
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
        Download <br /><br/><button className="bg-gradient-to-br from-sky-500 to-neutral-800 text-gray-400 p-2 rounded-lg " onClick={onButtonClick}>Resume</button>
      </motion.h1>
    </LampContainer>
    </div>
  );
}

export default LampDemo;