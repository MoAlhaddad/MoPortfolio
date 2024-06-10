"use client"

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from "react-icons/fa"
import {SiTailwindcss, SiNextdotjs} from "react-icons/si";

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
description: "lorem ahid hdishs hsiosodshs ",
items:[
  {
    company: "Qamar Labs",
    position: "Full Stack Developer",
    duration: "2023 - present"
  }
] 

}

const Resume = () => {
  return (
    <div>Resume Page</div>
  )
}

export default Resume