import profile from '../assets/profile.jpg'
import { HERO_CONTENT } from '../constants/constants'

const Hero = () => {
    return (
        <div className="border-neutral-800 border-b pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col item-center lg:items-start lg:ml-20">
                        <h1 className="pb-5 text-5xl font-thin tracking-tight lg:mt-16 lg:text-7xl">Ananthu M A</h1>
                        <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tighter text-transparent">
                            Full Stack Developer
                        </span>
                        <p className="my-2 max-w-xl py-6 font-light tracking-tighter">{HERO_CONTENT}</p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8 mb-20">
                    <div className="flex justify-center">
                        <img src={profile} width={400} alt="Ananthu M A" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
