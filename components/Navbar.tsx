import Link from 'next/link'
import React from 'react'

function Navbar() {
    return (
        <div className='w-full h-16 px-3 sm:px-12 lg:px-28 fixed top-0 flex items-center justify-between bg-[#0F172A]' >
            <p className='text-xl font-semibold text-gray-100' >Sachin Sahu</p>
            <div className='max-sm:hidden  flex gap-6' >
                <Link href={"#About_me"} ><span className='text-gray-100 font-semibold hover:text-blue-400'>About</span></Link>
                <Link href={"#ProblemSolving"}  ><span className='text-gray-100 font-semibold hover:text-blue-400 '>Achievements</span></Link>
                <Link href={"#Skills"}  ><span className='text-gray-100 font-semibold hover:text-blue-400' >Skills</span></Link>
                <Link href={"#Project"}  ><span className='text-gray-100 font-semibold hover:text-blue-400'>Project</span></Link>
                <Link href={"#Contact_me"}  ><span className='text-gray-100 font-semibold hover:text-blue-400'>Contact</span></Link>
            </div> 
        </div>
    )
}

export default Navbar