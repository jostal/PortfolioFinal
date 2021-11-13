import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import Navbar from '../components/Navbar'
import { motion, AnimatePresence } from 'framer-motion'
import router from 'next/router'

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        key={router.pathname}
        initial={{x: 2000, opacity: 0, transition: {duration: 1}}}
        animate={{x: 0, opacity: 1}}
        exit={{x: -2000, opacity: 0, transition: {duration: 1}}}
      >
      <Navbar />
      <Component {...pageProps} />
    </motion.div>
    </AnimatePresence>
    
  ) 
  
}

export default MyApp
