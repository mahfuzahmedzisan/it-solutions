import React, { useState, useEffect } from 'react';
import CourseDetailsModal from './CourseDetailsModal';

export default function CourseCard() {
   const [courses, setCourses] = useState([]);
   const [selectedCourse, setSelectedCourse] = useState(null);
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [isLoading, setIsLoading] = useState(true);  // Loading state

   useEffect(() => {
      fetch('/Courses/Courses.json')
         .then((res) => res.json())
         .then((data) => {
            setCourses(data);
            setIsLoading(false);  // Set loading to false when data is fetched
         })
         .catch((error) => {
            console.error("Error fetching courses:", error);
            setIsLoading(false);  // Handle error and stop loading
         });
   }, []);

   // Open the modal with the selected course
   const openModal = (course) => {
      setSelectedCourse(course);
      setIsModalOpen(true);
   };

   // Close the modal
   const closeModal = () => {
      setIsModalOpen(false);
      setSelectedCourse(null);
   };

   if (isLoading) {
      return <div>Loading courses...</div>;  // Show loading message
   }

   return (
      <>
         {isModalOpen && (
            <CourseDetailsModal course={selectedCourse} closeModal={closeModal} />
         )}

         {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-lg shadow-lg group hover:shadow-lg hover:shadow-gray-500/50 transition-all duration-500">
               <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover rounded-lg group-hover:-translate-y-1 transition-all duration-500"
               />
               <div className="p-4">
                  <h3 className="text-2xl font-semibold text-emerald-900">{course.title}</h3>
                  <p className="text-gray-600 mt-2">{course.shortDescription}</p>
                  <div className="mt-4 flex justify-between">
                     <span className="text-sm text-gray-500">{course.duration} | {course.level}</span>
                     <span className="text-sm text-gray-500">Price: ${course.price}</span>
                  </div>
                  <div className="mt-4 flex justify-between gap-4">
                     <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300" onClick={() => openModal(course)}>Details</button>
                     <button className="px-4 py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition duration-300">Enroll Now</button>
                  </div>
               </div>
            </div>
         ))}
      </>
   );
}
