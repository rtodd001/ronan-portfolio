import type { NextPage } from 'next'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import WorkExperience from '@/components/WorkExperience'
import Head from 'next/head'


const Home:NextPage = () => {
  return (
    <div className='bg-[#1B1C1B] text-white h-screen snap-y snap-mandatory
                    overflow-scroll z-0'>
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
      <section id='hero' className='snap-center'>
        <About />
      </section>

      {/* Experience */}
      <section className='snap-center'>
        <WorkExperience />
      </section>

      {/* Skills */}

      {/* Projects */}

      {/* Contact Me*/}
    </div>
  )
}

export default Home;