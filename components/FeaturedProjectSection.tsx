import React from 'react'
import { Card, CardContent, CardFooter, CardHeader } from './ui/card'
import { ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { Button } from './ui/button'

function FeaturedProjectSection() {

  const keyFeatures = [
    { feature: "Secure authentication with clerk", color: "bg-green-500" },
    { feature: "Advanced full-text search functionality", color: "bg-blue-500" },
    { feature: "Clean, intuitive user interface", color: "bg-violet-500" },
    { feature: "Responsive design for all devices", color: "bg-orange-500" },
  ]

  const techStackUsed = [
    { tech: "Next.js", color: "text-violet-500 border-violet-500 " },
    { tech: "Clerk Auth", color: "text-blue-500 border-blue-500" },
    { tech: "MongoDB", color: "text-green-500 border-green-500" },
    { tech: "ShadCN/UI", color: "text-green-500 border-green-500" },
    { tech: "Zustand", color: "text-orange-500 border-orange-500 " },
    { tech: "React Query", color: "text-sky-500 border-sky-500" },
  ]

  return (
    <div id='Project' className='w-full py-14 px-4 flex flex-col items-center space-y-14 bg-[#F8FAFC] '>
      <div className=' space-y-6 flex flex-col items-center justify-center '>
        <h1 className='text-xl text-accent-foreground font-bold sm:text-3xl' >Featured Project</h1>
        <p className='text-gray-800/90 max-w-2xl text-wrap text-center' >Showcasing my latest work that demonstrates technical excellence and innovation</p>
      </div>
      <Card className='max-w-3xl overflow-x-hidden border-l-4 border-l-violet-600  py-0 '>

        <CardHeader className={`px-0 py-2.5 rounded-t-lg bg-gradient-to-r from-violet-700 to-blue-600 `} >
          <div className='w-full px-10 py-3.5 space-y-4 relative'>
            <h1 className='text-xl xs::text-3xl font-bold text-white' >StudyRoom</h1>
            <span className=' text-lg sm:text-xl block font-normal text-white/75'  >A smart learning hub with Clerk auth, full-text search, and clean UI</span>
            <Link href={'https://www.studyroom.org.in'}>
              <ExternalLink size={25} strokeWidth={2} className='absolute top-2 cursor-pointer right-6 stroke-white/75 hover:stroke-white/95' />
            </Link>
          </div>
        </CardHeader>
        {/* <div className='w-3xl' /> */}
        <CardContent className='flex space-x-8 py-4 space-y-8  max-sm:flex-col border-b border-b-gray-300' >
          <div className='space-y-5 ' >
            <h2 className='font-semibold' >Key Features</h2>
            <div className='space-y-3.5' >
              {
                keyFeatures.map((val, index: number) => (
                  <div key={index} className=' space-x-3.5 flex items-center' >
                    <span className={`block h-3 w-3 rounded-full ${val.color} `} />
                    <span>{val.feature}</span>
                  </div>
                ))
              }
            </div>
          </div>
          <div className='space-y-5 max-w-80' >
            <h2 className='font-semibold' >Technologies Used</h2>
            <div className='flex flex-wrap gap-2.5' >
              {
                techStackUsed.map((val, index: number) => (

                  <span key={index} className={`px-1.5 py-1 rounded-full text-sm border ${val.color}`} >{val.tech}</span>

                ))
              }
            </div>
          </div>
        </CardContent>
        <CardFooter className='py-4'>
          <Button className='cursor-pointer bg-violet-600 hover:bg-violet-700' >
            <Link href={'https://www.studyroom.org.in'} className='space-x-3.5 flex'>
              <ExternalLink size={25} strokeWidth={2} className=' stroke-white/75 hover:stroke-white/95' />
              <span>View Live Demo</span>
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default FeaturedProjectSection