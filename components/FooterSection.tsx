'use client'

import React, { useState } from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { Github, Linkedin, Mail, Phone } from 'lucide-react'

function FooterSection() {

  const [showEamil, setShowEmail] = useState(false);

  return (
    <div id='Contact_me' className='w-full py-14 px-4 flex flex-col items-center text-center space-y-10 bg-[#0F172A] '>
      <h1 className=' text-xl sm:text-4xl font-bold text-white/95' > Let&apos;s Build Something Impactful Together</h1>
      <p className=' sm:text-xl max-w-3xl text-center text-white/90' >Let&apos;s connect and build something impactful together. I&apos;m always excited to collaborate on innovative projects and discuss new opportunities.</p>
      <div className='space-x-2.5 space-y-2.5 sm:space-x-8'>
        <Button variant={'outline'} asChild className=' h-12 w-40 !text-white/90 cursor-pointer bg-transparent hover:bg-slate-700'>
          <Link href={'https://github.com/Sachin-Sahu149'} className='flex gap-2 items-center' >
            <Github />
            <span>View My Work</span>
          </Link>
        </Button>
        <Button className=' h-12 w-40 cursor-pointer bg-blue-500 hover:bg-blue-600' asChild>
          <Link href={'https://linkedin.com/in/sachin-sahu-9027a2263'} className='flex gap-2 items-center' >
            <Linkedin />
            <span>LinkedIn</span>
          </Link>
        </Button>
        <Button onClick={() => setShowEmail(true)} className=' h-12 w-40 cursor-pointer items-center bg-orange-500 hover:bg-orange-600'>
          <>
            <Mail />
            <span>Email me</span>
          </>
        </Button>
      </div>
      {showEamil && <div className='flex flex-wrap space-x-3.5 py-4
      ' >
        <span className=' text-white/85' >
          <Mail size={20} className='stroke-rose-500 inline pr-1.5' />
          <b>Email</b> - sahusahu2026@gmail.com
        </span>
        <span className=' text-white/85' >
          <Phone size={20} className='stroke-rose-500 inline pr-1.5' />
          <b>Phone No</b> - 7453933845
        </span>
      </div>}
      <div className='h-[1px]  bg-gray-300 w-3/4' />
    </div>
  )
}

export default FooterSection