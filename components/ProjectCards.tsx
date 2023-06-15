import { urlFor } from '@/sanity'
import { Project } from '@/typings'
import { motion } from 'framer-motion'
import React from 'react'

type Props = {
    project: Project;
}

function ProjectCard({ project }: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
                        w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10
                        cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img
            initial={{
                opacity:0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{opacity: 1}}
            viewport={{ once: true }}
            className='w-32 h-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
            src={urlFor(project?.image).url()}
            alt="" 
        />

        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>{ project.title }</h4>
            <div className='flex space-x-2 my-2'>
                {project.technologies.map(technology => (
                    <img
                        key={technology._id}
                        className='h-10 w-10 rounded-full'
                        src={urlFor(technology.image).url()}
                        title={technology.title}
                    />
                    ))}
            </div>
            <p className='uppercase py-5 text-gray-300'>
                {new Date(project.dateStarted).toDateString()} - {" "}
                {new Date(project.dateEnded).toDateString()}
            </p>

            <ul className='list-disc space-y-4,l-5 text-lg'>
                {project.summary}
            </ul>
        </div>

    </article>
  )
}

export default ProjectCard