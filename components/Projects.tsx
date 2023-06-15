import React from 'react'
import { motion } from 'framer-motion'
import { Project } from '@/typings'
import { urlFor } from '@/sanity'
type Props = {
    projects: Project[]
}

function Projects({projects}: Props) {

  return (
    <motion.div 
    className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row
                    max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Projects
        </h3>

        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20
                         scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]'>
            {[projects?.map((project, i) => (
                <div key={project._id}
                    className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                    <motion.img 
                        initial={{
                            opacity: 0
                        }}
                        transition={{ duration: 0.6 }}
                        whileInView={{ opacity: 1 }}
        
                        src={urlFor(project?.image).url()}
                        alt=''
                    />
                    <div className='space-y-10 px-0 md:px-0 max-w-6xl'>
                        <h4 className='text-4xl font-semibold text-center'>
                            Project {i+1} of {projects.length}: {" "}
                            {project?.title}
                        </h4>
                        <p className='text-lg text-center md:text-left'>
                            {project?.summary}
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