import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { motion } from "framer-motion";
import BackgroundCircles from './BackgroundCircles';
import Link from 'next/link';

type Props = {}

function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hi! My name is Ronan Todd",
            "I am a Full Stack Developer"
        ],
        loop: true,
        delaySpeed: 1500
    })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center
                    overflow-hidden'>
        <BackgroundCircles/>

        {/** Change to NextJS image */}

        <img className='relative rounded-full h-32 w-32 mx-auto object-cover'
          src="https://cdn.sanity.io/images/znii663s/production/45a8d261269a0f0bd3b8d64f0b42eafd0b8f8d21-600x600.jpg"
          alt=""
        />
        <div className='z-20'>
          <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
            Software Engineer
          </h2>
          <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
              <span className='mr-3'>{text}</span>
              <Cursor cursorColor='F7AB0A'/>
          </h1>

          <div className='pt-5'>
            <Link href="#about">
              <button className='heroButton'>About</button>
            </Link>
            <Link href="#experience">
              <button className='heroButton'>Experience</button>
            </Link>
            <Link href="#skills">
              <button className='heroButton'>Skills</button>
            </Link>
            <Link href="#projects">
              <button className='heroButton'>Projects</button>
            </Link>

          </div>
        </div>
    </div>
  )
}

export default Hero