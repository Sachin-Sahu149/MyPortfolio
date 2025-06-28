import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Brain, ChartColumn, Code, Database, Palette } from 'lucide-react'

function TechnicalSkillsSection() {

  const skills = [
    { name: "Javascript", icon: Code, color: "bg-violet-500" },
    { name: "Java", icon: Code, color: "bg-orange-500" },
    { name: "Typescipt", icon: Code, color: "bg-green-500" },
    { name: "Python", icon: Code, color: "bg-yellow-500" },
    { name: "React.js", icon: Code, color: "bg-sky-500" },
    { name: "Node.js", icon: Database, color: "bg-blue-500" },
    { name: "Next.js", icon: Code, color: "bg-cyan-500" },
    { name: "Express.js", icon: Code, color: "bg-violet-400" },
    { name: "MongoDB", icon: Database, color: "bg-green-500" },
    { name: "Tailwind CSS", icon: Palette, color: "bg-cyan-500" },
    { name: "ShadCN/UI", icon: Palette, color: "bg-gray-500" },
  ]
  const currentlyExploring = [
    { name: "Artificial Intelligence", icon: Brain, color: "bg-violet-700" },
    { name: "Data Science", icon: ChartColumn, color: "bg-blue-500" },
    { name: "Machine Learning", icon: Brain, color: "bg-violet-500" },
  ]


  return (
    <div id='Skills' className='w-full py-14 px-4 space-y-12 bg-[#F8FAFC] '>
      <div className=' space-y-6 flex flex-col items-center justify-center '>
        <h1 className='text-xl text-accent-foreground font-bold sm:text-3xl' >Technical Skills</h1>
        <p className='text-gray-800/90 max-w-2xl text-wrap text-center' >Proficient in modern web technologies with a focus on scalable solutions</p>
      </div>
      <div className=' w-full gap-6 flex flex-wrap items-center justify-center'>
        <Card className='max-w-xl border-l-4 border-l-blue-500 '>
          <CardHeader>
            <CardTitle className='text-lg' >Core Technologies</CardTitle>
            <CardDescription>Technologies I use to build scalable web applications</CardDescription>
          </CardHeader>
          <CardContent className=' max-w-xl gap-3.5 flex flex-wrap sm:grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4' >
            {/* <CardContent className=' max-w-xl gap-3.5 flex flex-wrap items-center justify-start' > */}
            {skills.map((val, index: number) => (
              <Card key={index} className='min-w-32 py-3.5 hover:shadow-xl' >
                <CardHeader>
                  <CardTitle className=' flex items-center justify-center ' >
                    {/* card icon */}
                    <div className={`p-3.5 rounded-lg flex items-center justify-center ${val.color} `}>
                      <val.icon className='stroke-white ' />
                    </div>
                  </CardTitle>
                  <CardDescription className='text-center' > {val.name}</CardDescription>
                </CardHeader>
              </Card>
            ))
            }
          </CardContent>
        </Card>
        
        {/* exloring section */}
        <Card className='max-w-xl overflow-x-hidden border-l-4 border-l-orange-500 '>
          <CardHeader>
            <CardTitle className='text-lg' >Currently Exploring</CardTitle>
            <CardDescription>Expanding my knowledge in cutting-edge technologies</CardDescription>
          </CardHeader>
          <CardContent className=' max-w-xl gap-3.5 space-y-4.5' >
            <div className='w-xl' />

            {/* <CardContent className=' max-w-xl gap-3.5 flex flex-wrap items-center justify-start' > */}

            {currentlyExploring.map((val, index: number) => (
              <Card key={index} className='w-full py-3.5 hover:shadow-xl' >
                <CardHeader className=' flex items-center space-x-3.5 ' >
                  <CardTitle >
                    {/* card icon */}
                    <div className={`p-3.5 rounded-lg flex items-center justify-center ${val.color} `}>
                      <val.icon className='stroke-white ' />
                    </div>
                  </CardTitle>
                  <CardDescription className='text-center text-md' > {val.name}</CardDescription>
                </CardHeader>
              </Card>
            ))
            }
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default TechnicalSkillsSection