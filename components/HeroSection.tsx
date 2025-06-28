import { Award } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

function HeroSection() {

  return (
    <div id='About_me' className='pt-36 min-h-screen py-20  w-full bg-gradient-to-br from-[#071026] via-[#224498] to-[#0b1225]' >
      <div className='px-4 sm:px-16  md:px-24 lg:px-52 space-y-7'>
        <div className='flex items-center justify-start  text-white' >

          <div className='font-semibold flex items-center flex-wrap rounded-full bg-green-500 hover:bg-[#0c152a] py-1 px-5'>
            <Award size={18} className='stroke-white' />
            <span>100% Scholarship Recipient</span>
          </div>

        </div>
        <div className='text-3xl md:text-5xl lg:text-6xl font-bold space flex flex-wrap gap-2.5'>
          <h1 className='text-white ' >Hi, I&apos;m </h1>
          <h1 className='text-cyan-300 ' >Sachin Sahu </h1>
        </div>
        <div className='text-white text-lg sm:text-xl lg:text-2xl ' >
          <span>Computer Engineering student and full-stack developer skilled in JavaScript, TypeScript, Java and Python.</span>
        </div>
        <div className='text-gray-100/70 text-sm xs:text-md sm:text-lg font-medium' >
          <span className='' >I&apos;ve solved 372+ problems on GeeksforGeeks and 250+ on LeetCode, showcasing strong problem-solving and DSA skills.</span>
        </div>
        <div className='text-gray-100/70 text-sm xs:text-md sm:text-lg font-medium' >
          <span>I build scalable web apps using React, Node.js, MongoDB, TailwindCSS, and ShadCN/UI, and I&apos;m currently exploring Machine Learning, AI, and Data Science.</span>
        </div>
        <div className='space-x-2.5 space-y-2.5 sm:space-x-8'  >
          <Link href={'#Project'} >
            <Button className=' h-12  text-white/90 cursor-pointer bg-orange-400 hover:bg-orange-500'>
              View Latest Project
            </Button>
          </Link>
          <Link href={'#Contact_me'} >
            <Button variant={'outline'} className='bg-transparent border-2 h-12 w-36 border-cyan-500  text-cyan-500 hover:text-accent-foreground hover:bg-cyan-500 cursor-pointer ' >
              Let&apos;s Connect
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HeroSection