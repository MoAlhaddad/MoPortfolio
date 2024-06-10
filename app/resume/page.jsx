"use client"

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from "react-icons/fa"
import {SiTailwindcss, SiNextdotjs} from "react-icons/si";
import {   TabsList, TabsTrigger,Tabs, TabsContent} from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import  {motion} from "framer-motion";

const about = {
  title: 'About me',
  description: "As a skilled FullStack Next.js developer, I excel in seamlessly bridging frontend and backend development, leveraging the power of Next.js for efficient and performant web applications. With a strong foundation in React.js and Node.js, I proficiently architect and implement robust solutions, leveraging Next.js's capabilities for server-side rendering and API routes. My expertise extends to API integration, where I seamlessly connect with third-party services, ensuring smooth communication and data exchange. Additionally, I demonstrate proficiency in database management, adeptly designing and optimizing database schemas while leveraging technologies such as MongoDB, PostgreSQL, or MySQL. Through my comprehensive skill set, I consistently deliver dynamic and scalable applications tailored to meet diverse project requirements.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Mohamad Alhaddad"
    },
    {
      fieldName: "Phone",
      fieldValue: "702 849 3627"
    },
    {
      fieldName: "Experience",
      fieldValue: "3+ Years"
    },
    {
      fieldName: "Nationality",
      fieldValue: "American"
    },
    {
      fieldName: "email",
      fieldValue: "mohamadalhaddad25@gmail.com"
    },
    {
      fieldName: "Languages",
      fieldValue: "English,Spanish,Arabic"
    },
  ]
}

//experience data
const experience = {
icon: "/assets/resume/badge.svg",
title: "My experience",
description: "As a seasoned full-stack Next.js developer, I bring a blend of hands-on experience from both internship roles and freelance engagements. My journey commenced with an immersive stint at a dynamic tech startup, where I immersed myself in the fast-paced world of modern web development.During my tenure, I honed my skills in Next.js, mastering its capabilities to craft efficient, high-performance web applications. From architecting robust back-end solutions to crafting pixel-perfect front-end interfaces, I've traversed the entire development spectrum, ensuring seamless user experiences across devices and platforms.My internship equipped me not only with technical prowess but also with a keen understanding of agile methodologies and collaborative workflows. I thrive in environments that foster innovation and encourage cross-functional collaboration, seamlessly integrating with diverse teams to drive projects from conception to deployment.Building upon this foundation, I ventured into the realm of freelance with Qamar Labs, where I embraced the opportunity to tackle a myriad of challenges across various domains. Working with Qamar Labs afforded me the flexibility to explore cutting-edge technologies and experiment with novel solutions, further enriching my repertoire as a Next.js specialist.",
items:[
  {
    company: "Qamar Labs",
    position: "Full Stack Developer",
    duration: "2023 - present"
  },
  {
    company: "Spawnn Gaming",
    position:"Fullstack Dev Intern",
    duration: "09/2022-03/2023"
  }
] 

}
//education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description: "I am a SpringBoard coding bootcamp graduate and current college student pursuing an Associate of Arts degree in Computer Science. With a GPA of 3.6, I've demonstrated a strong academic commitment to my studies. The bootcamp provided me with practical, hands-on experience in software development, while my college education has deepened my understanding of theoretical concepts. I approach my education with a spirit of curiosity and rigor, constantly seeking out opportunities for growth and enrichment. By blending practical skills with theoretical knowledge, I am poised to excel in the field of computer science and make meaningful contributions to the tech community.",
  items:[
    {
      institution: "Indian River State College",
      degree: "A.A in Engineering",
      duration: "June 2023 -  Decemeber 2024"
    },
    {
      institution: "SpringBoard Software Engineering Institution",
      degree:"Certified Software Engineer",
      duration: "06/2021-06/2022"
    }
  ] 
  
  };

  //Skills data
  const skills = {
    title: "My Skills",
    skillList:[
      {
        icon: <FaHtml5/>,
        name: "Html 5"
      },
      {
        icon: <FaCss3/>,
        name: "CSS 3"
      },
      {
        icon: <FaJs/>,
        name: "Javascript"
      },
      {
        icon: <FaNodeJs/>,
        name: "NodeJS"
      },
      {
        icon: <FaReact/>,
        name: "ReactJS"
      },
      {
        icon: <SiNextdotjs/>,
        name: "NextJS"
      },
      {
        icon: <SiTailwindcss/>,
        name: "TailwindCSS"
      },
      {
        icon: <FaFigma/>,
        name: "Figma"
      },
    ],
    description: " Next.js, React.js ,HTML5 ,CSS3 / SASS , JavaScript (ES6+),TypeScript,Responsive Design,Tailwind CSS,Material-UI   "
  };

const Resume = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity: 1, transition: {delay:2.4, duration:0.4, ease: 'easeIn'},
  }}
    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx:auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">
              Experience
            </TabsTrigger>
            <TabsTrigger value="education">
              Education
            </TabsTrigger>
            <TabsTrigger value="skills">
              Skills
            </TabsTrigger>
            <TabsTrigger value="about">
              About Me
            </TabsTrigger>
          </TabsList>

          {/**Content */}
          <div className="min-h-[70vh] w-full">
            {/**Expierence */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold"> {experience.title}               </h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul>
                    {experience.items.map((item, index) => {
                      return( <li>
                        <span>{item.duration}</span>
                        <h3>{item.position}</h3>
                        {/**dot */}
                        <span>   
                        </span>
                        <p>{item.company}</p>
                      </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
              Experience
            </TabsContent>
              {/**EDUCATION */}
              <TabsContent value="education" className="w-full">
              Education
            </TabsContent>
              {/**Skills */}
              <TabsContent value="skills" className="w-full">
              Skills
            </TabsContent>
              {/**About */}
              <TabsContent value="about" className="w-full">
              About
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume