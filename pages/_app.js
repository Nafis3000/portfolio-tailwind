import { motion, AnimatePresence } from 'framer-motion'
import '../styles/globals.css'
import { useRouter } from 'next/router'
import { MotionConfig } from 'framer-motion'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  return (
  <MotionConfig reducedMotion='user'>
  <AnimatePresence exitBeforeEnter>
    <motion.div
    key={router.route}
    initial = "initalState"
    animate = "animateState"
    exit = "exitState"
    transition={{ duration: 0.75 }}
    variants = {{
      initalState: {
        opacity: 0,
      },
      animateState: {
        opacity: 1,
      },
      exitState: {
        opacity: 0,
      }
    }}
    >  
      <Component {...pageProps} />
    </motion.div>
  </AnimatePresence>
  </MotionConfig>
  )
}

export default MyApp
