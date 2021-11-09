import Link from 'next/link'
import { useState } from 'react';

export default function Navbar() {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };

    return (
        <div>
            <nav className="flex flex-wrap items-center justify-between p-5">
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
                <div className={`${active ? '' : 'hidden'} w-full md:inline-flex md:flex-grow md:w-auto`}>
                    <div className="md:inline-flex md:flex-row md:ml-auto md:w-auto w-full md:items-center items-start flex flex-col md:h-auto">
                        <Link href="/">
                            <a className="md:inline-flex md:w-auto w-full px-3 py-2 items-center justify-center">Home</a>
                        </Link>
                        <Link href="/about">
                            <a className="md:inline-flex md:w-auto w-full px-3 py-2 items-center justify-center">About</a>
                        </Link>
                        <Link href="/portfolio">
                            <a className="md:inline-flex md:w-auto w-full px-3 py-2 items-center justify-center">Portfolio</a>
                        </Link>
                        <Link href="/contact">
                            <a className="md:inline-flex md:w-auto w-full px-3 py-2 items-center justify-center">Contact</a>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}