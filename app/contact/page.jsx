"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";


const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    description: '(+1) 702-849-3627'
  },
  {
  icon: <FaEnvelope />,
  title: 'Email',
  description: 'mohamadalhaddad25@gmail.com'
},
{
  icon: <FaMapMarkedAlt />,
  title: 'Location',
  description: 'Port Saint Lucie, FL'
}


];

const Contact = () => {
  return (
    <motion.section initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}}} className="py-6">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/*  form */}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                I am excited to extend an invitation to companies, software engineers, and small businesses looking for innovative and efficient solutions to their technological challenges. With a robust background in developing dynamic and user-friendly applications, I am eager to collaborate on projects that drive growth and success. Whether you need a full-stack developer to build a comprehensive platform, a React specialist for your front-end needs, or someone to streamline your backend processes, I am here to help. Let’s work together to create cutting-edge technology that meets your business goals. Contact me today to discuss how we can collaborate and bring your vision to life.
              </p>
              {/**input  */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="Firstname" />
                <Input type="lastname" placeholder="Lastname" />
                <Input type="email" placeholder="Email address" />
                <Input type="number" placeholder="Phone number" />
                </div>

                {/** Select */}
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a Service"/>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a Service</SelectLabel>
                      <SelectItem value="est">Web Development</SelectItem>
                      <SelectItem value="est">UI/UX Design</SelectItem>
                      <SelectItem value="est">Logo Design</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>

                {/**textarea */}
                <Textarea className="h-[200px]" placeholder="Type your message here." />
                <Button size="md" className="max-w-40">Send Message</Button>
              </form>
          </div>
          {/**info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 x:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent roounded-md flex items-center">
                      <div className="text-[28px]">{item.icon}</div>
                      </div>
                      <div className="flex-1">
                        <p className="text-white/60">{item.title}</p>
                        <h3 className="text-xl">{item.description}</h3>
                      </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact