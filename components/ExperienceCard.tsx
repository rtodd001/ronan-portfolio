import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
                        w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10
                        hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img
            initial={{
                opacity:0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{opacity: 1}}
            viewport={{ once: true }}
            className='w-32 h-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
            src="https://cdn.sanity.io/images/znii663s/production/a4f7be4725ada5233019dafbdafafff198bf633a-1256x1675.jpg" 
            alt="" 
        />

        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>Software Development Engineer</h4>
            <p className='font-bold text-2xl mt-1'>Amazon</p>
            <div className='flex space-x-2 my-2'>
                <img
                    className='h-10 w-10 rounded-full'
                    src="https://cdn.sanity.io/images/znii663s/production/a4f7be4725ada5233019dafbdafafff198bf633a-1256x1675.jpg" 
                    alt=""
                />
                <img
                    className='h-10 w-10 rounded-full'
                    src="https://cdn.sanity.io/images/znii663s/production/a4f7be4725ada5233019dafbdafafff198bf633a-1256x1675.jpg" 
                    alt=""
                />
                <img
                    className='h-10 w-10 rounded-full'
                    src="https://cdn.sanity.io/images/znii663s/production/a4f7be4725ada5233019dafbdafafff198bf633a-1256x1675.jpg" 
                    alt=""
                />
                {/** Tech used */}
            </div>
            <p className='uppercase py-5 text-gray-300'>Started work... - Ended...</p>

            <ul className='list-disc space-y-4,l-5 text-lg'>
                <li>Summary stuffSummary stuffSummary stuffSummary stuffSummary stuffSummary stuff</li>
                <li>Summary stuffSummary stuffSummary stuffSummary stuffSummary stuffSummary stuff</li>
                <li>Summary stuffSummary stuffSummary stuffSummary stuffSummary stuffSummary stuff</li>
                <li>Summary stuffSummary stuffSummary stuffSummary stuffSummary stuffSummary stuff</li>
                <li>Summary stuffSummary stuffSummary stuffSummary stuffSummary stuffSummary stuff</li>
            </ul>
        </div>

    </article>
  )
}

export default ExperienceCard