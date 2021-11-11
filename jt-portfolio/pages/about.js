import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'

const bubbleVariants = {
    hidden: {opacity: 0, transition: {duration: 0}},
    categoryF: {x: [0, 10, 25, 18, 0], y: [0, 20, 12, 5, 0], transition: {repeat: Infinity, duration: 6}},
    pop: {opacity: [1, 0], transition: {duration: 0.06}},
    hiddenPopF: {opacity: 0, x: [0, 10, 25, 18, 0], y: [0, 20, 12, 5, 0], transition: {repeat: Infinity, duration: 5.7}},
    list: {opacity: 1},

    categoryB: {x: [0, 17, 5, 23, 0], y: [0, 12, 21, 15, 0], transition: {repeat: Infinity, duration: 6}},
    hiddenPopB: {opacity: 0, x: [0, 17, 5, 23, 0], y: [0, 12, 21, 15, 0], transition: {repeat: Infinity, duration: 5.7}},

    categoryH: {x: [0, 5, 17, 23, 0], y: [0, 15, 2, 12, 0], transition: {repeat: Infinity, duration: 6}},
    hiddenPopH: {opacity: 0, x: [0, 5, 17, 23, 0], y: [0, 15, 2, 12, 0], transition: {repeat: Infinity, duration: 5.7}},

    categoryO: {x: [0, 12, 24, 5, 0], y: [0, 18, 9, 24, 0], transition: {repeat: Infinity, duration: 6}},
    hiddenPopO: {opacity: 0, x: [0, 12, 24, 5, 0], y: [0, 18, 9, 24, 0], transition: {repeat: Infinity, duration: 5.7}},

    hover: {scale: 1.2},
    nohover: {scale: [0.9, 1, 0.9], transition: {duration: 3, repeat: Infinity}},
}

export default function About() {
    const [frontPressed, setFrontPressed] = useState(false);
    const [backPressed, setBackPressed] = useState(false);
    const [hostPressed, setHostPressed] = useState(false);
    const [otherPressed, setOtherPressed] = useState(false);
    const [isHover, setIsHover] = useState(false);

    function frontendPressed() {
        setFrontPressed(true);
    }

    function backendPressed() {
        setBackPressed(true);
    }

    function hostingPressed() {
        setHostPressed(true);
    }

    function otherLangPressed() {
        setOtherPressed(true);
    }

    return (
        <div className="flex flex-col flex-wrap w-full">
            <div className="w-2/3 m-auto md:w-full transform md:-translate-x-1/4">
                <div className="w-2/4 m-auto transform md:w-1/4 translate-y-1/2 md:translate-y-1/3 md:-translate-x-1/4">
                    <div className="rounded-full border-2 w-full overflow-hidden">
                        <Image src="/me2.jpg" layout="responsive" width="2219" height="2219"></Image>
                    </div>
                </div>
                <div className="flex flex-col w-full m-auto mt-16 md:w-2/4 md:mt-auto transform md:-translate-y-2/3 md:translate-x-3/4">
                    <p className="text-2xl text-center md:text-4xl md:text-left px-3 py-2">I'm Joseph Talon</p>
                    <p className="md:text-xl">
                        &emsp;I am an Engineering Systems & Computing Student at the University of Guelph. <br className="mb-3"/>
                        &emsp;I plan on specializing in Mechatronics, but I have a great interest in Web and Software Development. <br className="mb-3"/>
                        &emsp;I have always had an interest in programming, but through my courswork I have developed an interest specifically in Software Development.
                            - Particularly Object-Oriented. <br className="mb-3"/>
                        &emsp;Through working on interesting side-projects, I have developed a great interest in Web Development. I love to make cool and useful web apps with my knowledge
                            and am always looking forward to creating something new and exciting. Working on these projects has lead me to developing great skills in various technologies.
                            These projects can be viewed on the portfolio page. <br className="mb-3"/>
                        &emsp;I am very much looking forward to using my skills to create many more creative and challenging projects! If you have a project in mind, please <a href="/contact">contact</a>
                            me nad I would love to discuss it with you.
                    </p>
                </div>
            </div>
            
            <div className="m-auto py-5 w-3/4">
                <p className="text-xl py-2 md:text-2xl text-left border-b-2 border-orange md:text-center"><strong>Skills</strong> (pop the bubbles)</p>
                <div className="flex flex-wrap w-full md:w-1/2 md:m-auto">
                    <div className="relative w-1/2 mt-5">
                        <motion.div initial="hidden" animate={frontPressed ? 'list' : 'hidden'} variants={bubbleVariants} className="text-lg md:text-xl">
                            <p><strong>Frontend:</strong></p>
                            <ul>
                                <li><Image src="/skillIcons/reactIcon.png" alt="icon" width="20" height="20" /> ReactJS</li>
                                <li><Image src="/skillIcons/nextjsIcon.png" alt="icon" width="20" height="20" /> NextJS</li>
                                <li><Image src="/skillIcons/htmlcssIcon.png" alt="icon" width="20" height="20" /> HTML/CSS </li>
                                <li><Image src="/skillIcons/jsIcon.png" alt="icon" width="20" height="20" /> Javascript</li>
                                <li><Image src="/skillIcons/bootstrapIcon.svg" alt="icon" width="20" height="20" /> Bootstrap</li>
                                <li><Image src="/skillIcons/tailwindIcon.png" alt="icon" width="20" height="20" /> Tailwind</li>
                            </ul>
                        </motion.div>
                        <motion.div initial="hiddenPopF" animate={frontPressed ? 'pop': 'hiddenPopF'} 
                            variants={bubbleVariants} 
                            className="absolute top-0 w-24 h-24 md:w-40 md:h-40 rounded-full border-2 border-dashed border-orange"
                        ></motion.div>
                        <motion.div initial="categoryF" animate={frontPressed ? 'hidden': 'categoryF'} variants={bubbleVariants}
                            className="absolute top-0 w-24 h-24 md:w-40 md:h-40 bg-gradient-to-br from-orange rounded-full text-center"
                        >
                            <button onClick={() => frontendPressed()} className="mt-8 md:text-xl">Frontend</button>
                        </motion.div>
                    </div>

                    <div className="relative w-1/2 mt-5">
                        <motion.div initial="hidden" animate={backPressed ? 'list' : 'hidden'} variants={bubbleVariants} className="absolute right-1/4 text-lg md:text-xl">
                            <p><strong>Backend:</strong></p>
                            <ul>
                                <li><Image src="/skillIcons/nodeIcon.svg" alt="icon" width="20" height="20" /> NodeJS</li>
                                <li><Image src="/skillIcons/expressIcon.png" alt="icon" width="20" height="20" /> Express</li>
                                <li><Image src="/skillIcons/djangoIcon.png" alt="icon" width="20" height="20" /> Django</li>
                                <li><Image src="/skillIcons/firestoreIcon.png" alt="icon" width="20" height="20" /> Firestore</li>
                            </ul>
                        </motion.div>
                        <motion.div initial="hiddenPopB" animate={backPressed ? 'pop': 'hiddenPopB'} 
                            variants={bubbleVariants} 
                            className="absolute top-0 right-0 w-24 h-24 md:w-40 md:h-40 rounded-full border-2 border-dashed border-orange"
                        ></motion.div>
                        <motion.div initial="categoryB" animate={backPressed ? 'hidden': 'categoryB'} variants={bubbleVariants}
                            className="absolute top-0 right-0 w-24 h-24 md:w-40 md:h-40 bg-gradient-to-br from-orange rounded-full text-center"
                        >
                            <button onClick={() => backendPressed()} className="mt-8 md:text-xl">Backend</button>
                        </motion.div>
                    </div>

                    <div className="relative w-1/2 mt-5">
                        <motion.div initial="hidden" animate={hostPressed ? 'list' : 'hidden'} variants={bubbleVariants} className="absolute left-0 text-lg md:text-xl">
                            <p><strong>Hosting/Cloud Services:</strong></p>
                            <ul>
                                <li><Image src="/skillIcons/firebaseIcon.png" alt="icon" width="25" height="20" />Firebase</li>
                                <li><Image src="/skillIcons/gCloudIcon.png" alt="icon" width="20" height="20" /> Google Cloud</li>
                                <li><Image src="/skillIcons/awsIcon.png" alt="icon" width="20" height="20" /> AWS</li>
                                <li><Image src="/skillIcons/herokuIcon.png" alt="icon" width="20" height="20" /> Heroku</li>
                                <li><Image src="/skillIcons/vercel.png" alt="icon" width="20" height="20" /> Vercel</li>
                            </ul>
                        </motion.div>
                        <motion.div initial="hiddenPopH" animate={hostPressed ? 'pop': 'hiddenPopH'} 
                            variants={bubbleVariants} 
                            className="absolute top-0 left-0 w-24 h-24 md:w-40 md:h-40 rounded-full border-2 border-dashed border-orange"
                        ></motion.div>
                        <motion.div initial="categoryH" animate={hostPressed ? 'hidden': 'categoryH'} variants={bubbleVariants}
                            className="absolute top-0 left-0 w-24 h-24 md:w-40 md:h-40 bg-gradient-to-br from-orange rounded-full text-center"
                        >
                            <button onClick={() => hostingPressed()} className="mt-8 text-sm md:text-xl">Hosting/Cloud Services</button>
                        </motion.div>
                    </div>

                    <div className="relative w-1/2 mt-5">
                        <motion.div initial="hidden" animate={otherPressed ? 'list' : 'hidden'} variants={bubbleVariants} className="absolute text-lg md:text-xl">
                            <p><strong>Other Languages:</strong></p>
                            <ul>
                                <li><Image src="/skillIcons/CIcon.png" alt="icon" width="20" height="20" /> C</li>
                                <li><Image src="/skillIcons/javaIcon.png" alt="icon" width="20" height="20" /> Java</li>
                                <li><Image src="/skillIcons/pythonIcon.webp" alt="icon" width="20" height="20" /> Python</li>
                                <li><Image src="/skillIcons/vhdlIcon.jpg" alt="icon" width="20" height="20" /> VHDL</li>
                            </ul>
                        </motion.div>
                        <motion.div initial="hiddenPopO" animate={otherPressed ? 'pop': 'hiddenPopO'} 
                            variants={bubbleVariants} 
                            className="absolute top-0 right-0 w-24 h-24 md:w-40 md:h-40 rounded-full border-2 border-dashed border-orange"
                        ></motion.div>
                        <motion.div initial="categoryB" animate={otherPressed ? 'hidden': 'categoryO'} variants={bubbleVariants}
                            className="absolute top-0 right-0 w-24 h-24 md:w-40 md:h-40 bg-gradient-to-br from-orange rounded-full text-center"
                        >
                            <button onClick={() => otherLangPressed()} className="mt-5 md:mt-12 md:text-xl">Other Languages</button>
                        </motion.div>
                    </div>
                </div>
                <div className="p-48">
                </div>
            </div>
        </div>
    )
}