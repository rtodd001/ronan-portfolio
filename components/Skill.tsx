import React from 'react'
import { motion } from 'framer-motion'
import { Skill } from '@/typings'
import { urlFor } from '@/sanity'

type Props = {
  skill: Skill
}

function Skill({skill}: Props) {
  const message = `${skill.progress}/5 ${skill.title}`
  return (<div className='group relative flex cursor-pointer '>
    <motion.img
        initial = {{
            opacity: 0
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1}}
        src={urlFor(skill?.image).url()}
        className='rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale'
    />
    <div className='absolute opacity-0 group-hover:opacity-80 group-hover:bg-white 
                    h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
        <div className='flex items-center justify-center h-full'>
            <p className='text-l font-bold text-black opacity-100'>{message}</p>
        </div>
    </div>

  </div>
  )
}

export default Skill