import profile from '../assets/profile.jpg'
import { HERO_CONTENT } from '../constants/constants'
import { motion } from "framer-motion"

const Hero = () => {
    return (
        <div className="border-neutral-800 border-b pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col item-center lg:items-start">
                        <motion.h1 initial={{ x: 0, opacity: 0 }} animate={{ x: 100, opacity: 1 }} transition={{ duration: 0.5, delay: 0.25 }}
                            className="pb-5 text-5xl font-thin tracking-tight lg:mt-16 lg:text-7xl">Ananthu M A</motion.h1>
                        <motion.span initial={{ x: -50, opacity: 0 }} animate={{ x: 100, opacity: 1 }} transition={{ duration: 0.75, delay: 0.35 }} className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tighter text-transparent">
                            Full Stack Developer
                        </motion.span>
                        <motion.p initial={{ x: -50, opacity: 0 }} animate={{ x: 100, opacity: 1 }} transition={{ duration: 1, delay: 0.45 }} className="my-2 max-w-xl py-6 font-light tracking-tighter">{HERO_CONTENT}</motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8 mb-20">
                    <div className="flex justify-center">
                        <motion.img src={profile} width={400} alt="Ananthu M A"
                            initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.55 }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
