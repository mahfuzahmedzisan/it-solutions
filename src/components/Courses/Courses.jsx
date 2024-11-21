import React from 'react'
import CourseCard from './CourseCard'

export default function Courses() {
   return (
      <>
         <div className='container py-16' id='courses'>
            <div className='text-center mb-10'>
               <h2 className='text-4xl font-bold text-green-900 uppercase mb-3'>Our Courses</h2>
               <p className='font-semibold italic text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500'>Discover a wide range of courses to enhance your skills and knowledge.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
               <CourseCard></CourseCard>
            </div>
         </div>
      </>
   )
}
