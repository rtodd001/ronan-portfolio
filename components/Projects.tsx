import React from 'react'
import { motion } from 'framer-motion'
type Props = {}

function Projects({}: Props) {

    const projects = [1, 2, 3, 4, 5]
  return (
    <motion.div 
    className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row
                    max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Projects
        </h3>

        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20
                         scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]'>
            {[projects.map((projects, i) => (
                <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                    <motion.img 
                        initial={{
                            opacity: 0
                        }}
                        transition={{ duration: 0.6 }}
                        whileInView={{ opacity: 1 }}
        
                        src='https://cdn.sanity.io/images/znii663s/production/a4f7be4725ada5233019dafbdafafff198bf633a-1256x1675.jpg'
                        alt=''
                    />
                    <div className='space-y-10 px-0 md:px-0 max-w-6xl'>
                        <h4 className='text-4xl font-semibold text-center'>
                            Project {i+1} stuff
                        </h4>
                        <p className='text-lg text-center md:text-left'>
                            Delivered high-quality software solutions as a contributing member of the 7-person Alexa Routines development team, participating in 2-week sprint cycles
                            Worked on migration project to deprecate a legacy architecture monolith to new architecture MicroServices while refactoring old Java code and unit tests
                            Successfully designed, developed, maintained, and expanded a validation & modification feature to reduce server calls by 90% for inefficient Routines by using Typescript, React Native, and Redux
                            Conducted an in-depth design review for the above feature with a focus on future scalability and using S.O.L.I.D. principles, enabling faster future expansions
                        </p>
                    </div>
                </div>
            ))]}
            {/** projects */}
            {/** projects */}
        </div>

        <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0  h-[500px] -skew-y-12'>

        </div>
    </motion.div>
  )
}

export default Projects