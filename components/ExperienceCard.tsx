import { urlFor } from '@/sanity'
import { Experience } from '@/typings'
import { motion } from 'framer-motion'
import React from 'react'

type Props = {
    experience: Experience;
}

function ExperienceCard({ experience }: Props) {
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
            src={urlFor(experience?.companyImage).url()}
            alt="" 
        />

        <div className='px-0 md:px-10'>
            <h4 className='text-3xl font-light'>{ experience.jobTitle }</h4>
            <p className='font-bold text-2xl mt-1'>{ experience.company }</p>
            <div className='flex space-x-2 my-2'>
                {experience.technologies.map(technology => (
                    <img
                        key={technology._id}
                        className='h-10 w-10 rounded-full'
                        src={urlFor(technology.image).url()}
                    />
                ))}
            </div>
            <p className='uppercase py-5 text-gray-300'>
                {new Date(experience.dateStarted).toDateString()} - {" "}
                {experience.isCurrentlyWorkingHere
                    ? "Present"
                    : new Date(experience.dateEnded).toDateString()}
            </p>

            <ul className='list-disc space-y-4,l-5 text-lg'>
                {experience.summary}
            </ul>
        </div>

    </article>
  )
}

export default ExperienceCard