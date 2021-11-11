import { motion } from "framer-motion";
import Link from 'next/link'

export default function Portfolio() {
    return (
        <div>
            <div className="flex justify-center transform h-screen">
                <div className="transform translate-y-1/3">
                    <p className="text-lg"><strong>Which projects would you like to view?</strong></p>
                    <ul className="flex flex-col justify-center">
                        <Link href="#sxn-webdev"><motion.img whileHover={{scale: 1.2}} src="/webdev_icon.svg" height="100" width="125"></motion.img></Link>
                        <Link href="#sxn-engdesign"><motion.img whileHover={{scale: 1.2}} src="/engdesign.svg" height="100" width="125"></motion.img></Link>
                        <Link href="#sxn-comp"><motion.img whileHover={{scale: 1.2}} src="/comp.svg" height="100" width="125"></motion.img></Link>
                    </ul>
                </div>
                
            </div>
        </div>
    )
}