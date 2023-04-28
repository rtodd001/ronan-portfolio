import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function About({}: Props) {
  return (
    <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className='flex flex-col relative h-screen text-center
                    md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
    >
        <h3 className=' absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            About
        </h3>

        <motion.img
            initial={{
                x:-200,
                opacity: 0
            }}
            transition={{
                duration: 1.2
            }}
            whileInView={{opacity: 1, x: 0}}
            viewport={{ once: true }}
            src="https://cdn.sanity.io/images/znii663s/production/9757b8372ca526c27f35f36d895b9bee4eb3c825-1492x1865.jpg"
            className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
                        md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
        />

        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>Let me {" "}
                <span className='underline decoration-[#F7AB0A]/50'>introduce</span>{" "}
                myself
            </h4>
            <p className='text-sm'>
            I am a software engineer with experience in developing scalable and high-quality software solutions using a variety of programming languages and frameworks such as Java, TypeScript, Spring Boot, MicroServices, and React Native. I have a proven track record of designing and implementing robust server systems, automating processes, and mentoring and leading teams towards achieving their goals. My strong communication and problem-solving skills have helped me excel in fast-paced, agile environments.
            </p>
        </div>
    
    </motion.div>
        
  )
}

export default About