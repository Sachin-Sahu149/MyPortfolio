import React from 'react'
import { Card, CardContent, CardHeader } from './ui/card'
import { Target, Trophy } from 'lucide-react'

function CodingAchievementsSection() {

  const problemSolvedStatus = [
    {
      platformName: "GeeksforGeeks",
      problemSolved: 372,
      color: 'bg-green-600',
      icon: Trophy
    },
    {
      platformName: "Leetcode",
      problemSolved: 250,
      color: 'bg-orange-600',
      icon: Target
    }
  ]

  return (
    <div id={"ProblemSolving"} className='w-full py-14 px-4 space-y-12 border bg-[#F0F7FE] '>
      <div className=' space-y-6 flex flex-col items-center justify-center '>
        <h1 className='text-xl text-accent-foreground font-bold sm:text-3xl' >Coding Achievements</h1>
        <p className='text-gray-800/90 max-w-xl text-wrap text-center'  >Consistent problem-solving practice across multiple competitive programming platforms</p>
      </div>

      <div className='flex flex-wrap gap-10 items-center justify-center' >
        {
          problemSolvedStatus.map((val, index: number) => {
            return (
              <Card key={index} className={`max-w-md border-l-4 ${index===0?"border-l-green-600 ":"border-l-orange-600"} py-0 `}>

                <CardHeader className={`px-0 py-2.5 rounded-t-lg ${val.color} `} >
                  <div className='w-full px-10 py-3.5 flex justify-between items-center '>
                    <div className='space-y-3' >
                      <h1 className='text-xl xs::text-3xl font-bold text-white' >{val.platformName}</h1>
                      <div>
                        <span className=' block text-3xl font-bold text-white/95'  >{val.problemSolved}+</span>
                        <span className='text-sm font-normal text-white/75'  >Problems Solved</span>
                      </div>
                    </div>
                    < val.icon size={60} strokeWidth={2} className='stroke-white/75' />
                  </div>
                </CardHeader>
                <CardContent className='' >
                  <div className='px-3 pb-4 ' >
                    <span className='text-left text-gray-800/90 '>
                      Demonstrating consistent practice and strong foundation in Data Structures & Algorithms
                    </span>
                  </div>
                </CardContent>
              </Card>
            )
          })
        }
      </div>
      <div className='flex items-center justify-center' >
        <Card className='max-w-lg border-l-4 border-l-violet-600  py-0 '>

          <CardHeader className={`px-0 py-2.5 rounded-t-lg`} >
            <div className='w-full px-10 py-3.5 space-x-2.5 flex flex-wrap justify-center items-center '>
              <Trophy size={50} strokeWidth={2} className='stroke-violet-600' />
              <span className=' block text-3xl font-bold text-gray-800'>{622}+</span>
              <span className='text-2xl font-normal text-gray-800' >Total Problems</span>
            </div>
          </CardHeader>
          <CardContent className='' >
            <div className=' pb-4 text-center' >
              <span className=' text-gray-800/90 '>
                Strong problem-solving foundation with deep undertanding in algorithms  and data structures
              </span>
            </div>
          </CardContent>
        </Card>
      </div>

    </div>
  )
}

export default CodingAchievementsSection