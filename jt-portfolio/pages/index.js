import Head from 'next/head'
import { motion } from 'framer-motion'
import NavArrows from '../components/NavArrows'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Joseph Talon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-wrap items-center pb-12">
        <div className="grid grid-flow-col m-auto items-center transform translate-y-1/2 px-2">
          <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 2}}} className="mr-4 ml-2">
            <motion.div animate={{y: ["0%", "400%", "0%"]}} transition={{delay: 2.7, duration: 4}} >
              <motion.div animate={{scaleY:[1, 8]}} transition={{delay: 6.6}} className="h-10 border-l-2 border-orange"></motion.div>
            </motion.div>
          </motion.div>
          <div className="">
            <motion.div 
              animate={{x: [500, 500, 0], y: [-1000, -1000, 0], opacity: [0, 0, 1]}}
              transition={{duration: 1}}
              className="text-5xl md:text-6xl">
              <motion.p
                animate={{scale: [1.2, 1]}}
                transition={{delay: 1.5}}
              >Hi,<br/>I'm Joseph Talon</motion.p>
            </motion.div>

            <ul className="py-2 text-xl">
              <motion.li initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay:2.5}} className="py-1">○ Engineering Systems & Computing Student</motion.li>
              <motion.li initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay:3}} className="py-1">○ Aspiring Mechatronics Engineer</motion.li>
              <motion.li initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay:3.5}} className="py-1">○ Web Developer</motion.li>
              <motion.li initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay:4}} className="py-1">○ Software Developer</motion.li>
            </ul>
          </div>
        </div>
      </div>
      
      <NavArrows right="/about"/>
    </div>
  )
}
