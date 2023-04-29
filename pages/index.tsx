import type { NextPage } from 'next'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import WorkExperience from '@/components/WorkExperience'
import Head from 'next/head'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import ContactMe from '@/components/ContactMe'
import Link from 'next/link'


const Home:NextPage = () => {
  return (
    <div className='bg-[#1B1C1B] text-white h-screen snap-y snap-mandatory
                    overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20
                    scrollbar-thumb-[#F7AB0A]/80'>
      <Head>
        <title>Ronans Portfolio</title>
      </Head>
      <h1 className='text-blue-500'></h1>

      <Header/>

      {/* Hero */}
      <section id='hero' className='snap-start'>
        <Hero/>
      </section>

      {/* About */}
      <section id='about' className='snap-center'>
        <About />
      </section>

      {/* Experience */}
      <section id='experience' className='snap-center'>
        <WorkExperience />
      </section>

      {/* Skills */}
      <section id='skills' className='snap-center'>
        <Skills />
      </section>

      {/* Projects */}
      <section id='projects' className='snap-center'>
        <Projects />
      </section>

      {/* Contact Me*/}
      <section id='contact' className='snap-center'>
        <ContactMe />
      </section>

      <Link href='#hero'>
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <img
              className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer'
              src='https://cdn.sanity.io/images/znii663s/production/a4f7be4725ada5233019dafbdafafff198bf633a-1256x1675.jpg'
              alt=''
              />
          </div>
        </footer>
      </Link>
    </div>
  )
}

export default Home;