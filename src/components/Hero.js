import React from 'react'
import profilePic  from '../assets/picture.jpeg'
import { motion } from "framer-motion"

const container = (delay) =>({
    hidden:{x: -100, opacity:0},
    visible: {
        x:0,
        opacity: 1,
        transition: {duration:0.5, delay:delay},
    }
})

const Hero = () => {
  return (
    
    <div className='border-b border-neutral-900 pb-3 lg:mb-35'>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2'>
                 <div className='flex flex-col items-center lg:items-start'>
                    <motion.h1 
                    variants={container(0)}
                    initial='hidden'
                    animate='visible'  
                    className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl ">
                        Saqib Ali
                    </motion.h1>
                    <motion.span
                     variants={container(0.5)}
                     initial='hidden'
                     animate='visible' 
                    className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
                        Front End Developer
                    </motion.span>
                     <motion.p 
                      variants={container(1)}
                      initial='hidden'
                      animate='visible' 
                     className='my-2 max-w-xl py-6 font-light tracking-tighter'>
                        I'm student of masters and looking for breakthrough in my teach career and want to
                        enhance my skills desperately looking for opportunity in tech company.I have experience
                        frontend Developer back in Pakistan now move to Germany as a student now looking for
                        opportunity to break my career in German teach industries..I don't no the hundred percent
                        of programming but I'm a passionate want to be a software engineer in future looking for
                        one chance in teach company I'm sure I will not disappoint you and at the end of Junior
                        position there will be chance to get full time job offer in your company.
                     </motion.p>
                 </div>
            </div>
            <div className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex items-center justify-center'>
                    <motion.img
                     initial={{x:100, opacity:0}}
                     animate={{x:0, opacity: 1}}
                     transition={{duration: 1, delay:1.2}}
                    src={profilePic} alt="profile" className='w-64 h-64 rounded-2xl  lg:w-96 lg:h-96'/>
                </div>
                 
            </div>
            
        </div>
    </div>
    
  )
}

export default Hero