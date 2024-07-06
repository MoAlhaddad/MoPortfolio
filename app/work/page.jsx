"use client";
import {motion} from "framer-motion";
import React, {useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import {BsArrowUpRight, BsGithub} from "react-icons/bs";
import WorkSliderBtns from "@/components/ui/WorkSliderBtns";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";

const projects = [

  {
    num: '01',
    category: 'FullStack',
    title: 'Ai Content Generator App',
    description: "Introducing my Fullstack Next.js AI Content Creator app! This innovative solution leverages Next.js for fast web applications, Drizzle Database for efficient data management, Gemini API for AI-driven content generation, TailwindCSS for responsive design, and Clerk for secure authentication. Generate high-quality content effortlessly, enjoy a seamless cross-device experience, and manage users securely. Perfect for marketers, bloggers, and business owners. Create engaging content with ease!",
    stack: [{name: "NextJs"}, {name: "Drizzle Database"}, {name: "Clerk Authentication"}, {name: "Typescript"}, {name: "Gemini API"}, {name: "Tailwind CSS"}, {name: "ShadCN"}],
    image: '/assets/work/Aicontentgen.png',
    live: 'https://ai-content-app-demo.vercel.app/',
    github: 'https://github.com/MoAlhaddad/AI-ContentAppDemo'

  },
  {
    num: '02',
    category: 'Frontend',
    title: 'Youtube Clone',
    description: "This YouTube Clone application, built with React and utilizing the YouTube API, offers users a seamless video streaming experience. The app mimics core YouTube functionalities, allowing users to search for videos, view detailed information, and watch their favorite content directly within the app. It features a responsive and intuitive interface, complete with video recommendations, trending videos, and user comments. Designed to provide a familiar yet unique experience, this clone app ensures users can enjoy and discover videos with ease.",
    stack: [{name: "Html 5"}, {name: "Css"}, {name: "React"}, {name: "Javascript"}],
    image: '/assets/work/youtube.png',
    live: 'https://fabulous-centaur-517a91.netlify.app/',
    github: 'https://github.com/MoAlhaddad/StealthYoutubeclone'
  },
  {
    num: '03',
    category: 'Frontend',
    title: 'React Excerise App ',
    description: "This React fitness application leverages the ExerciseDB API to provide users with a comprehensive and dynamic platform for their workout needs. The app allows users to explore a wide range of exercises, complete with detailed descriptions and visual demonstrations of each exercise motion. Users can search for specific exercises, filter by muscle groups or equipment, and save their favorite routines. With a clean, user-friendly interface, the app ensures an engaging and efficient fitness experience for users of all levels",
    stack: [{name: "Html 5"}, {name: "Css"}, {name: "React"}, {name: "Javascript"}, {name: "Framer Motion"}, {name: "Material UI"}],
    image: '/assets/work/fitnessapp.png',
    live: 'https://moexcerise.netlify.app/',
    github: 'https://github.com/MoAlhaddad/Stealth-fitness-app'
  },
  {
    num: '04',
    category: 'Frontend',
    title: 'Old Nextjs Portifolio Website ',
    description: "This portfolio website, developed with Next.js, showcases your projects and skills in a professional and visually appealing manner. Featuring a clean and modern design, the site includes sections for your bio, work experience, projects, and contact information. Each project is detailed with descriptions, technologies used, and links to live demos or repositories. The site leverages Next.js's server-side rendering for fast loading times and improved SEO, ensuring an optimal user experience for visitors. Perfect for highlighting your expertise and attracting potential clients or employers.",
    stack: [{name: "Html 5"}, {name: "Css"}, {name: "NextJS"}, {name: "Javascript"}, {name: "Framer Motion"}, {name: "Material UI"}],
    image: '/assets/work/oldportifolio.png',
    live: '',
    github: 'https://github.com/MoAlhaddad/next-portfolio'
  },
{
    num: '05',
    category: 'FullStack',
    title: 'Capstone JobSearch Application',
    description:"This job search application, developed as a capstone project using the MERN stack, utilizes the Adzuna API to collect and retrieve comprehensive job data, including historical data, full job details, and standardized job titles. On the frontend, React and antd are employed for styling and formatting, while Redux manages the application's state. Axios handles asynchronous HTTP requests, and react-router-dom with Toastify enhance navigation and user feedback.The backend features robust user authentication using bcrypt and jsonwebtoken, and Mongoose is used for managing the job data in a MongoDB database. Postman was instrumental in testing the API routes and performing CRUD operations. The application allows users to create accounts, log in, search for jobs, filter results, and save jobs for future reference, offering a seamless and secure job search experience.",
    stack:[
      { name: "Adzuna API" },
      { name: "Postman" },
      { name: "MongoDB" },
      { name: "React" },
      { name: "Redux" },
      { name: "Axios" },
      { name: "bcrypt" },
      { name: "jsonwebtoken" },
      { name: "Mongoose" }
    ],
    image:   '/assets/work/jobsearch.png',
    live:    '' ,
    github: 'https://github.com/MoAlhaddad/Capstonetoo'

},
{
  num: '06',
  category: 'FullStack',
  title: 'Capstone WineSearch Application',
  description: "This FullStack Wine Search application, built with React, provides users with an intuitive platform to search and filter wines. Leveraging the power of the React Table library, the app offers advanced sorting, filtering, and pagination features to enhance the user experience. Material-UI is used for the design and layout, ensuring a clean and responsive interface. The application integrates various wine APIs to fetch comprehensive wine data and uses optional chaining for safer data handling. Additionally, SQLTabs is utilized for database management, making the backend robust and efficient. This project demonstrates the effective use of modern web technologies to create a seamless and engaging wine search experience.",
  stack:  [
    { name: "React" },
    { name: "React Table" },
    { name: "Material-UI" },
    { name: "Optional Chaining" },
    { name: "Wine APIs" },
    { name: "SQL" }
  ] ,
  image:  '/assets/work/wineapp.png',
  live: '',
  github: 'https://github.com/MoAlhaddad/capstone_winedown'
},
];




const Work = () => {

  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    /*get current slide index */
    const currentIndex = swiper.activeIndex;
    //update project based on currentSlide index
    setProject(projects[currentIndex]);

  }
  return (
    <motion.section initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}}} className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/** outline num */}
              <div className="text-8xl leading-none  font-extrabold  text-outline ">
                {project.num}
              </div>
              {/**Project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category} Project</h2>
              {/**Project description */}
              <p className="text-white/60">{project.description}</p>
              {/**Stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  )
                })}
              </ul>
              {/**border */}
              <div className="border border-white/20"></div>
              {/**buttons */}
              <div className="flex items-center gap-4">
                {/**Live project button */}
                <Link href={project.live}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                      <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Live Project</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                </Link>
                {/**github project button */}
                <Link href={project.github}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                      <BsGithub className="text-white text-3xl group-hover:text-accent" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>GitHub Repository</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                </Link>
                </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12"
            onSlideChange={handleSlideChange}>
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">

                    <div className="h-[460px] relative group-flex justify-center items-center bg-pink-50/20">
                    {/** overlay */}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10">

                    </div>
                    {/** image */}
                    <div className="relative w-full h-full">
                      <Image src={project.image} fill className="object-cover"  alt=""/>
                    </div>
                    </div>
                  </SwiperSlide>
                )
              })}
              {/**Slider buttons */}
              <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] flex justify-center items-center transition-all"/>
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work