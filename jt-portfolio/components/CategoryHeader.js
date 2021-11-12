import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

const variants = {
    visible: { opacity: 1, scale: 1, y: 800},
    hidden: { opacity: 1, scale: 1, y: 0, transition: {duration: 1}}
}

export default function CategoryHeader(props) {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("hidden");
        }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            animate={controls}
            variants={variants}
            initial="visible"
            className="flex flex-col items-center bg-orange-banner py-3 md:py-5">
            <h1 className="text-xl md:text-4xl">{props.name}</h1>
            <div className="my-2 md:py-3">{props.icon}</div>
            <div className="inline-flex flex-wrap md:text-xl md:py-3">
                {props.projects.map(proj => {
                    var projURL = "#" + proj;
                    return (
                        <a href={projURL}><p className="px-3">{proj}</p></a>
                    )
                })}
            </div>
        </motion.div>
    )
}