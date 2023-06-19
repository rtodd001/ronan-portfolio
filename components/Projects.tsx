import React, { useCallback } from 'react'
import { Project } from '@/typings'
import ProjectCard from './ProjectCards'
import useEmblaCarousel from 'embla-carousel-react'
import { Button } from '@mui/material'
type Props = {
    projects: Project[]
}

function Projects({projects}: Props) {

  const [emblaRef, emblaApi] = useEmblaCarousel()

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  return (
    <div 
    className='h-screen flex relative flex-col text-left md:flex-row
                  maw-w-full px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Projects
        </h3>

        <div  className='embla_viewport overflow-hidden' ref={emblaRef} >
          <div className='w-full flex space-x-5 p-10 snap-x snap-mandatory'>
              {[projects?.map((project) => (
                  <ProjectCard key={project._id} project={project}/>
              ))]}
          </div>

        </div>
        <Button className='absolute left-8' onClick={scrollPrev} variant='contained' color='success'>{"<"}</Button>
        <Button className='absolute right-8' onClick={scrollNext} variant='contained' color='success'>{">"}</Button>

    </div>
  )
}

export default Projects