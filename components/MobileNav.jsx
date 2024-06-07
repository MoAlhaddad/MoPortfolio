"use client";

import { usePathname } from "next/navigation";
import { Sheet,SheetTrigger, SheetContent } from "./ui/sheet";
import Link from "next/link";
import {CiMenuFries} from "react-icons/ci";


const links = [
    {
        name: 'home',
        path: "/"
    },
    {
        name: 'services',
        path: "/services"
    },

{
    name: 'resume',
    path: "/resume"
},
{
    name: 'work',
    path: "/work"
},
{
    name: "contact",
    path: "/contact"
}

]


const MobileNav = () => {
const pathname = usePathname();


  return <Sheet>
    <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
    </SheetTrigger>
    <SheetContent className="flex flex-col">
        {/*logo  */ }

        <div>logo</div>
    </SheetContent>
  </Sheet>
}

export default MobileNav