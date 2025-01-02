
'use client';
import { useState, useEffect, useRef } from 'react';
// import SkillBox from './skillbox';
import "./skills.css";


// };

import { InfiniteMovingCards } from "../../component/ui/movingcards";
// import Card from "./card"

const InfiniteMovingCardsDemo=()=> {
  return (
    <div>
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-black dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
    {/* <Card/> */}
    {/* <Project/> */}
    </div>
  );
}

const testimonials = [
  {
    imageUrl:
      "/images/css.png",
    // name: "Charles Dickens",
    // title: "A Tale of Two Cities",
  },
  {
    imageUrl:
      "/images/npm.png",
    // name: "William Shakespeare",
    // title: "Hamlet",
  },
  {
    imageUrl: "/images/react.png",
    // name: "Edgar Allan Poe",
    // title: "A Dream Within a Dream",
  },
  {
    imageUrl:
      "/images/framer.png",
    // name: "Jane Austen",
    // title: "Pride and Prejudice",
  },
  {
   imageUrl :
      "/images/sass.png",
    // name: "Herman Melville",
    // title: "Moby-Dick",
  },
  {
    imageUrl :
       "/images/typescript.png",
     // name: "Herman Melville",
     // title: "Moby-Dick",
   },
   {
    imageUrl :
       "/images/html.png",
     // name: "Herman Melville",
     // title: "Moby-Dick",
   },
   {
    imageUrl :
       "/images/c++.png",
     // name: "Herman Melville",
     // title: "Moby-Dick",
   },
   {
    imageUrl :
       "/images/mongodb.png",
     // name: "Herman Melville",
     // title: "Moby-Dick",
   },
   {
    imageUrl :
       "/images/tailwind.png",
     // name: "Herman Melville",
     // title: "Moby-Dick",
   },
   {
    imageUrl :
       "/images/javascript.png",
     // name: "Herman Melville",
     // title: "Moby-Dick",
   },
   {
    imageUrl :
       "/images/mysql.png",
     // name: "Herman Melville",
     // title: "Moby-Dick",
   },
  
];

// export default InfiniteMovingCardsDemo;













const Home = () => {
  return (
<>
    <InfiniteMovingCardsDemo/>
    <main className="grid w-full min-h-screen text-gray-100 bg-black place-content-center" id='skills'>
      {/* <SkillDisplay /> */}
      {/* <Skills/> */}
      {/* <Skills2/> */}
     {/* <Skills3/> */}
    
     <Skills4/>
     <Skills5/>
     <Skills6/>
    </main>
    </>
  );
};

export default Home;


















const Skills4
 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once visible
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div>
     <center>
<div id="SkillBox" ref={sectionRef}>
        <center><p className='text-white'>Frontend Skills</p></center>
        <img src="/images/front.png" alt="Skill - Pawan Mall" />
  <div  className="SkillBar">
    <div  id="Skill-HTML" className={`Skill-HTML ${isVisible ? "animate" : ""}`}> 
      <span className="Skill-Area ">HTML</span>
      <span className="PercentText ">90%</span>
    </div>
  </div>
  
  <div className="SkillBar">
    <div id="Skill-CSS" className={`Skill-CSS ${isVisible ? "animate" : ""}`}>
      <span className="Skill-Area ">CSS/CSS3</span>
      <span className="PercentText ">90%</span>
    </div>
  </div>

  <div className="SkillBar">
    <div id="Skill-jQuery" className={`Skill-jQuery ${isVisible ? "animate" : ""}`}>
      <span className="Skill-Area ">Javascript</span>
      <span className="PercentText ">70%</span>
    </div>
  </div>

  
  <div className="SkillBar">
    <div id="Skill-SQL" className={`Skill-SQL ${isVisible ? "animate" : ""}`}>
      <span className="Skill-Area ">TypeScript</span>
      <span className="PercentText ">70%</span>
    </div>
  </div>
  
  <div className="SkillBar">
    <div id="Skill-JS" className={`Skill-JS ${isVisible ? "animate" : ""}`}>
      <span className="Skill-Area ">React.js</span>
      <span className="PercentText ">80%</span>
    </div>
  </div>
  
  <div className="SkillBar">
    <div id="Skill-XML" className={`Skill-XML ${isVisible ? "animate" : ""}`}>
      <span className="Skill-Area ">Redux </span>
      <span className="PercentText ">60%</span>
    </div>
  </div>
  
    <div className="SkillBar">
    <div id="Skill-C" className={`Skill-C ${isVisible ? "animate" : ""}`}>
      <span className="Skill-Area ">Next.js</span>
      <span className="PercentText ">70%</span>
    </div>
  </div>
  
    <div className="SkillBar">
    <div id="Skill-JAVA" className={`Skill-JAVA ${isVisible ? "animate" : ""}`}>
      <span className="Skill-Area ">Bootstrap </span>
      <span className="PercentText ">85%</span>
    </div>
  </div>
  
    <div className="SkillBar">
    <div id="Skill-PHP" className={`Skill-PHP ${isVisible ? "animate" : ""}`}>
      <span className="Skill-Area ">Tailwind Css</span>
      <span className="PercentText ">90%</span>
    </div>
  </div>
  
  
    <div className="SkillBar">
    <div id="Skill-VBNET" className={`Skill-VBNET ${isVisible ? "animate" : ""}`}>
      <span className="Skill-Area ">Responsive Design</span>
      <span className="PercentText ">90%</span>
    </div>
  </div>
  
  

</div>
</center> 
    </div>
  )
}







const Skills5
 = () => {

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once visible
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);


  return (
    <div>
     <center>
<div id="SkillBox" ref={sectionRef}>
        <center><p className='text-white'>Backend Skills</p></center>
        <img src="/images/back.png" alt="Skill - Pawan Mall"/>
        
  <div className="SkillBar">
    <div id="Skill-Mongo" className={`Skill-Mongo ${isVisible ? "animate" : ""}`}> 
      <span className="Skill-Area ">MongoDb</span>
      <span className="PercentText ">70%</span>
    </div>
  </div>

  <div className="SkillBar">
    <div id="Skill-Sql" className={`Skill-Sql ${isVisible ? "animate" : ""}`}>
      <span className="Skill-Area ">SQL </span>
      <span className="PercentText ">70%</span>
    </div>
  </div>
  
  <div className="SkillBar">
    <div id="Skill-Node" className={`Skill-Node ${isVisible ? "animate" : ""}`}>
      <span className="Skill-Area ">Node.js</span>
      <span className="PercentText ">70%</span>
    </div>
  </div>

  <div className="SkillBar">
    <div id="Skill-Express" className={`Skill-Express ${isVisible ? "animate" : ""}`}>
      <span className="Skill-Area ">Express.js</span>
      <span className="PercentText ">70%</span>
    </div>
  </div>
  
  <div className="SkillBar">
    <div id="Skill-Restful" className={`Skill-Restful ${isVisible ? "animate" : ""}`}>
      <span className="Skill-Area ">RESTful APIs</span>
      <span className="PercentText ">75%</span>
    </div>
  </div>
  
  <div className="SkillBar">
    <div id="Skill-Authenticate" className={`Skill-Authenticate ${isVisible ? "animate" : ""}`}>
      <span className="Skill-Area ">Authentication & Authorization </span>
      <span className="PercentText ">70%</span>
    </div>
  </div>
  
    <div className="SkillBar">
    <div id="Skill-Database" className={`Skill-Database ${isVisible ? "animate" : ""}`}>
      <span className="Skill-Area ">Database Management</span>
      <span className="PercentText ">70%</span>
    </div>
  </div>
  
   
  
    

</div>
</center> 
    </div>
  )
}























const Skills6 = () => {
  const graphRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (graphRef.current) {
      observer.observe(graphRef.current);
    }

    return () => {
      if (graphRef.current) {
        observer.unobserve(graphRef.current);
      }
    };
  }, []);
  
  return (
    <div >
    <div  id="SkillBox">
        <center><p className='text-white text-center'>Designing Skills</p>
        <img src="/images/design.png" alt="Skill - Pawan Mall" className='lg:w-60 h-auto w-16' /></center>
      <div className="base lg:pl-[8rem] pl-8" ref={graphRef}>
    
<section className="model-1 sect">
  <div  className={`model-1 graph ${isVisible ? "animate" : ""}`}>Photoshop</div><span data-tooltip="70%" className="tooltip">Photoshop 70%</span>
</section>
<section className="model-2 sect">
  <div className={`model-2 graph ${isVisible ? "animate" : ""}`}>CorelDraw</div><span data-tooltip="60%" className="tooltip">CorelDraw 75%</span>
</section>
  
{/* <section className="model-3 sect">
  <div className="multi-graph">javaScript
    <div data-name="jQuery" className="graph jQuery"> </div>
    <div data-name="javaScript" className="graph javaScript"></div>
    
  </div>
</section> */}
  <section className="model-4 sect">
  <div className={`model-4 graph ${isVisible ? "animate" : ""}`}>Inkscape</div><span data-tooltip="70%" className="tooltip">Inkscape 60%</span>
</section>
</div>
    </div>
    </div>
  )
}





