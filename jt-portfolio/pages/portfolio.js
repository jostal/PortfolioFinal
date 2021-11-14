import { motion } from "framer-motion"
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import CategoryHeader from "../components/CategoryHeader"
import ChoreApp from "../components/projects/ChoreApp"
import Technic from "../components/projects/Technic"
import Alligator from "../components/projects/Alligator"
import OEC from "../components/projects/OEC"
import CookBook from "../components/projects/CookBook"

export default function Portfolio() {
    const [webdevArr, setWebdevArr] = useState(["CookBook", "Chore App"]);
    const [engdesignArr, setEngDesignArr] = useState(["Engineering Design 2 Final Project - Alligator Accelerator", "Lego Technic Excavator - SolidWorks Design and Assembly"]);
    const [compArr, setCompArr] = useState(["Ontario Engineering Competition 2021"]);

    return (
        <div className="m-auto">
            <div className="flex justify-center transform h-screen">
                <div className="transform translate-y-1/3 md:hidden">
                    <p className="text-lg text-center"><strong>Which projects would you like to view?</strong></p>
                    <ul className="flex flex-row gap-5 justify-center">
                        <Link href="#sxn-webdev"><motion.img whileHover={{scale: 1.2}} src="/webdev_icon.svg" height="75" width="90"></motion.img></Link>
                        <Link href="#sxn-engdesign"><motion.img whileHover={{scale: 1.2}} src="/engdesign.svg" height="65" width="80"></motion.img></Link>
                        <Link href="#sxn-comps"><motion.img whileHover={{scale: 1.2}} src="/comp.svg" height="75" width="90" className="mb-3"></motion.img></Link>
                    </ul>
                    <ul className="flex flex-row gap-4 justify-center text-md text-center"> 
                        <Link href="#sxn-webdev"><motion.li whileHover={{color: "rgb(255, 94, 0)", textShadow: "0 0 5px rgb(255, 94, 0)", scale: 1.1}}>Web<br /> Development</motion.li></Link>
                        <Link href="#sxn-engdesign"><motion.li whileHover={{color: "rgb(255, 94, 0)", textShadow: "0 0 5px rgb(255, 94, 0)", scale: 1.1}}>Engineering <br />Design</motion.li></Link>
                        <Link href="#sxn-comps"><motion.li whileHover={{color: "rgb(255, 94, 0)", textShadow: "0 0 5px rgb(255, 94, 0)", scale: 1.1}}>Competitions</motion.li></Link>
                    </ul>
                </div>
                
                <div className="hidden md:block transform md:translate-y-1/3">
                    <p className="text-3xl text-center"><strong>Which projects would you like to view?</strong></p>
                    <ul className="flex flex-row gap-20 ml-2 justify-center py-2">
                        <a href="#sxn-webdev"><motion.img whileHover={{scale: 1.2}} src="/webdev_icon.svg" height="100" width="125"></motion.img></a>
                        <a href="#sxn-engdesign"><motion.img whileHover={{scale: 1.2}} src="/engdesign.svg" height="90" width="100"></motion.img></a>
                        <a href="#sxn-comps"><motion.img whileHover={{scale: 1.2}} src="/comp.svg" height="85" width="100" className="mb-3"></motion.img></a>
                    </ul>
                    <ul className="flex flex-row gap-6 justify-center text-xl py-2"> 
                        <a href="#sxn-webdev"><motion.li whileHover={{color: "rgb(255, 94, 0)", textShadow: "0 0 5px rgb(255, 94, 0)", scale: 1.1}} className="">Web Development</motion.li></a>
                        <a href="#sxn-engdesign"><motion.li whileHover={{color: "rgb(255, 94, 0)", textShadow: "0 0 5px rgb(255, 94, 0)", scale: 1.1}} className="">Engineering Design</motion.li></a>
                        <a href="#sxn-comps"><motion.li whileHover={{color: "rgb(255, 94, 0)", textShadow: "0 0 5px rgb(255, 94, 0)", scale: 1.1}} className="">Competitions</motion.li></a>
                    </ul>
                </div>
            </div>
            <div id="sxn-webdev" className="h-auto">
                <div className="transform translate-y-1/4 md:hidden my-5">
                    <CategoryHeader name="Web Development" icon={<Image src="/webdev_icon.svg" height="75" width="90" />} projects={webdevArr}/>
                </div>
                <div className="hidden transform translate-y-1/4 md:block">
                    <CategoryHeader name="Web Development" icon={<Image src="/webdev_icon.svg" height="100" width="125" />} projects={webdevArr}/>
                </div>
                <div>
                    <CookBook />
                    <ChoreApp />
                </div>
            </div>
            
            <div id="sxn-engdesign" className="h-auto">
                <div className="md:hidden">
                    <CategoryHeader name="Engineering Design" icon={<Image src="/engdesign.svg" height="65" width="80" />} projects={engdesignArr}/>
                </div>
                <div className="hidden md:block">
                    <CategoryHeader name="Engineering Design" icon={<Image src="/engdesign.svg" height="90" width="100" />} projects={engdesignArr}/>
                </div>
                <div>
                    <Alligator />
                    <Technic />
                </div>
            </div>

            <div id="sxn-comps" className="h-auto">
                <div className="md:hidden">
                    <CategoryHeader name="Competitions" icon={<Image src="/comp.svg" height="75" width="90" />} projects={compArr}/>
                </div>
                <div className="hidden md:block">
                    <CategoryHeader name="Competitions" icon={<Image src="/comp.svg" height="100" width="125" />} projects={compArr}/>
                </div>
                <div>
                    <OEC />
                </div>
            </div>
        </div>
    )
}