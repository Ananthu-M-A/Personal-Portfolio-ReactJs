import aboutImg from '../assets/about.png'
import { ABOUT_TEXT } from '../constants/constants'

const About = () => {
    return (
        <div className="border-neutral-800 pb-4 mb-4 border-b">
            <h2 className="my-20 text-center text-4xl">
                About
                <span className="text-neutral-500"> Me</span>
            </h2>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                        <img className='rounded-2xl' width={200} src={aboutImg} alt="about image" />
                    </div>
                </div>
                <div className='w-full lg:w-1/2 pb-10'>
                    <div className='flex justify-center lg:justify-start'>
                        <p className='my-5 max-w-xl p-6'>{ABOUT_TEXT}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
