import React from 'react'
import { motion } from 'framer-motion'
import { Project } from '@/typings'
import ProjectCard from './ProjectCards'
type Props = {
    projects: Project[]
}

function Projects({projects}: Props) {

  return (
    <motion.div 
    className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row
                maw-w-full px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Projects
        </h3>

        <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory
                       scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A] z-20'>
            {[projects?.map((project) => (
                <ProjectCard key={project._id} project={project}/>
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