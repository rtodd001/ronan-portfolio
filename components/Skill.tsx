import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function Skill({}: Props) {
  return (<div className='group relative flex cursor-pointer '>
    <motion.img
        initial = {{
            opacity: 0
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1}}
        src='https://cdn.sanity.io/images/znii663s/production/a4f7be4725ada5233019dafbdafafff198bf633a-1256x1675.jpg'
        className='rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale'
    />
    <div className='absolute opacity-0 group-hover:opacity-80 group-hover:bg-white 
                    h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
        <div className='flex items-center justify-center h-full'>
            <p className='text-3xl font-bold text-black opacity-100'>100%</p>
        </div>
    </div>

  </div>
  )
}

export default Skill