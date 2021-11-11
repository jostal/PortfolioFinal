import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

export default function Navbar() {
    const [active, setActive] = useState(false);
    const router = useRouter();

    const handleClick = () => {
        setActive(!active);
    };

    return (
        <motion.div animate={{opacity: [0, 1]}} transition={{duration: 1}}>
            <nav className="flex flex-wrap items-center justify-between p-5">
                <div className="inline-flex md:hidden">
                    <a href="https://github.com/jostal"><img className="w-8 flex mx-3" src="/git.png"></img></a>
                    <a href="https://linkedin.com/in/jostal"><img className="w-8 flex mx-3" src="/linkedin.png"></img></a>
                </div>
                <button onClick={handleClick} className="inline-flex p-3 rounded md:hidden ml-auto">
                <svg
                    className='w-6 h-6'
                    fill='none'
                    stroke='white'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                    />
                </svg>
                </button>
                <div className={`${active ? '' : 'hidden'} w-full md:inline-flex md:flex-grow md:w-auto md:text-2xl filter drop-shadow-md md:m-2`} style={{"text-shadow": "1px 1px 0 rgb(114, 114, 114), 2px 2px 0 #363636, 3px 3px 0 #000000"}}>
                    <div className='md:inline-flex md:flex-row md:ml-auto md:w-auto w-full md:items-center text-right flex flex-col md:h-auto border-r-2 border-orange md:border-none'>
                        <Link href="/">
                            <a className={`${router.pathname == "/" ? 'md:border-b-2 border-orange' : ''} md:inline-flex md:w-auto w-full px-3 md:mx-3 md:px-0 py-2 items-center justify-center hover:text-orange hover:text-3xl`}>Home</a>
                        </Link>
                        <Link href="/about">
                            <a className={`${router.pathname == "/about" ? 'md:border-b-2 border-orange' : ''} md:inline-flex md:w-auto w-full px-3 md:mx-3 md:px-0 py-2 items-center justify-center hover:text-orange hover:text-3xl`}>About</a>
                        </Link>
                        <Link href="/portfolio">
                            <a className={`${router.pathname == "/portfolio" ? 'md:border-b-2 border-orange' : ''} md:inline-flex md:w-auto w-full px-3 md:mx-3 md:px-0 py-2 items-center justify-center hover:text-orange hover:text-3xl`}>Portfolio</a>
                        </Link>
                        <Link href="/contact">
                            <a className={`${router.pathname == "/contact" ? 'md:border-b-2 border-orange' : ''} md:inline-flex md:w-auto w-full px-3 md:mx-3 md:px-0 py-2 items-center justify-center hover:text-orange hover:text-3xl`}>Contact</a>
                        </Link>
                        <div className="hidden md:inline-flex">
                            <a href="https://github.com/jostal"><img className="w-10 flex mx-3 hover:w-12" src="/git.png"></img></a>
                            <a href="https://linkedin.com/in/jostal"><img className="w-10 flex mx-3 hover:w-12" src="/linkedin.png"></img></a>
                        </div>
                    </div>
                </div>
                
            </nav>
        </motion.div>
    )
}