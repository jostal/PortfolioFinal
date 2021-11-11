import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'

const variants = {
    hover: {scale: 1.2},
    nohover: {scale: [0.9, 1, 0.9], transition: {duration: 3, repeat: Infinity}},
}

export default function NavArrows(props) {
    const [hover, isHover] = useState(false);

    function getArrows() {
        if (props.left && props.right) {
            return (
                <div className="transform translate-y-1/2 text-orange">
                    <motion.div>
                        {'<'}
                    </motion.div>
                </div>
            )
        }

        if (props.left && !props.right) {

        }

        if (props.right && !props.left) {
            console.log('ay');
            <div className="text-orange">
                <motion.div>
                </motion.div>
            </div>
        }
    }

    return (
        <div>
            {getArrows()}
        </div>
    )
}