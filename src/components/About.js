import React from 'react'
import aboutPic from '../assets/about.jpg'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <h1 className='my-20 text-center text-4xl'>About 
          <span className='text-neutral-500'> Me</span>
        </h1>
         <div className='flex flex-wrap'>
            <motion.div
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:-100}}
            transition={{duration:0.5}}

            className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex items-center justify-center'>
                    <img className='rounded-2xl' src={aboutPic} alt='about'/>
                </div>
            </motion.div>
            <motion.div
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:100}}
            transition={{duration:0.5}}
            className='w-full lg:w-1/2'>
                     <div className='flex justify-center lg:justify-start'>
                          <p className='my-2 max-w-xl py-6'>
                             I passionate want be front developer I came from rally poor background I struggle alot in my life our family has 
                             has alot of fininical problems and now I'm in germany to start my new life in which I have fully depened on my self 
                             I want to be a Software developer to help my family and my self to have a better life that's the dream I have that one day
                             I will be a software Engineer.
                          </p>
                     </div>
                  </motion.div>
         </div>
    </div>
  )
}

export default About