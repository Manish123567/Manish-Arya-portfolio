"use client";
import React from "react";
import { StickyScroll } from "../../component/ui/stickyscroll";

const content = [
  {
    title: "MDCSM (Master Diploma in Computer Application) Course          [Duration: 15 months]",
    description:
      "Over a 15-month period, I completed an MDCSM course where I gained proficiency in CorelDRAW and Photoshop, enhancing my graphic design skills. Additionally, I developed expertise in Microsoft Word and Excel, alongside acquiring knowledge in Tally and system management, equipping me with a comprehensive skill set for diverse professional environments.",
  },
  {
    title: "MCA Pursuit at IET Lucknow (2021-2023)",
    description:
      "In 2023, I graduated from the prestigious Institute of Engineering and Technology (IET) Lucknow with a Master's in Computer Applications (MCA), equipped with a solid foundation in computer science and technology.",
  },
  {
    title: "Frontend Developer Internship at Jykra Solution Pvt. Ltd., Lucknow (January 2023 - March 2023)",
    description:
      "During my MCA program, I undertook a transformative 3-month internship at Jykra Solution Pvt. Ltd., a prominent company based in Lucknow. Here, I immersed myself in the role of a frontend developer, actively contributing to various projects and gaining invaluable experience in web development. My time at Jykra Solutions provided me with hands-on exposure to industry practices and strengthened my technical skills.",
  },
  {
    title: "Full-time Role as Software Designer cum Frontend Developer at Nirihums (June 2023 - Present)",
    description:
      "Following my internship, in June 2023, I transitioned into a full-time position as a Software Designer cum Frontend Developer at Nirihums. Joining this dynamic team enabled me to further refine my expertise in frontend development while also contributing to the design and development of innovative software solutions. This role allowed me to leverage my academic knowledge and practical experience to drive impactful projects and continuously expand my skill set.",
  },
];
const images = [
  
    "/images/mdcsm1.png",
    "/images/iet.jpeg",
    "/images/frontend.jpeg",
    "/images/web.jpeg",
  
]




const StickyScrollRevealDemo=() =>{
  return (
    <div id='experience'>
    <div className="p-10 bg-black">
      <h1 className="text-2xl text-white  text-center">Timeline</h1>
      <StickyScroll content={content} images={images}/>
    </div>
    </div>
  );
}
export default StickyScrollRevealDemo; 