"use client";
import { BsArrowDownRight } from "react-icons/bs";
import {motion} from "framer-motion";
import Link from "next/link";

const services = [
  {
    num: '01',
    title: 'Web Development & UI/UX Design',
    description:'Custom Website Design & DevelopmentResponsive Design, E-commerce Solutions,Content Management Systems (CMS), SEO Optimization Website Maintenance & Support, Web Performance Optimization, API Integration,UI/UX Design',
    href: ""
  },
  {
    num: '02',
    title: 'Backend Engineering',
    description:'design and maintain the server-side logic of web applications, ensuring they run smoothly and efficiently. I am responsible for building and managing databases, server scripting, and API integration, which facilitate seamless data exchange between the frontend and backend. My role involves optimizing server performance, ensuring security protocols are in place, and troubleshooting any issues that arise. I work closely with frontend developers to deliver a cohesive and reliable user experience. Additionally, I implement scalable solutions to handle increasing traffic and evolving application requirements.',
    href: ""
  },
  {
    num: '03',
    title: 'Frontend Engineering',
    description:' I create and maintain the user-facing aspects of web applications, ensuring a seamless and intuitive user experience. I develop responsive and interactive interfaces using HTML, CSS, and JavaScript, ensuring compatibility across various devices and browsers. My role involves collaborating with designers to implement visually appealing layouts and with backend engineers to integrate APIs and data services. I am responsible for optimizing application performance, enhancing accessibility, and debugging any frontend issues that arise. Additionally, I stay updated with the latest technologies and trends to continually improve the user interface and overall application functionality.',
    href: ""
  },
  {
    num: '04',
    title: 'Database Management and Api Integrations',
    description:'As a database management and API integration specialist, I oversee the organization, security, and efficiency of data storage systems. My responsibilities include designing and optimizing database structures, ensuring data integrity, and implementing backup and recovery strategies. I also handle the integration of APIs, enabling seamless communication and data exchange between different software systems. Additionally, I monitor API performance, troubleshoot integration issues, and ensure compliance with industry standards and regulations. My expertise lies in creating scalable and robust solutions that enable smooth data flow and support the needs of the applications and organizations I serve',
    href: ""
  }
]

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
        }}
        className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (<div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
              {/* top */}
              <div className="w-full flex justify-between items-center">
              <div className="text-5xl font-extrabold text-outline group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
              <Link href={service.href} className="w-[70px] h-[70px] rounded-full group-hover:bg-accent transition-all bg-white duration-500 flex justify-center items-center hover:-rotate-45">
                <BsArrowDownRight className="text-primary text-3xl"/>
              </Link>
              </div>
              {/* heading */}
              <h2 className="text-[42px] font-bold leadining-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
              {/* Description */}
              <p className="text-white/60">{service.description}</p>

              {/**border */}
              <div className="border-b border-white/20 w-full"></div>
            </div>);
          })}
        </motion.div>
        </div>
    </section>
  )
}

export default Services