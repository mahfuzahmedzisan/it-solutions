import React, { useState } from 'react';

export default function CourseDetailsModal({ course, closeModal, openEnrollModal }) {
   const [isClosing, setIsClosing] = useState(false);

   const handleClose = () => {
      // Trigger the closing animation
      setIsClosing(true);
      
      // Wait for the animation to finish before calling the closeModal function
      setTimeout(() => {
         closeModal(); // Close the modal after the animation
      }, 400); // Duration should match the animation time (0.5s)
   };

   if (!course) return null;  // Don't render if no course data is passed

   return (
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
         <div
            className={`bg-white rounded-lg shadow-lg w-96 p-6 ${isClosing ? 'animate-slide-down' : 'animate-slide-up'}`}
         >
            <div className="flex justify-between items-center">
               <h2 className="text-2xl font-semibold text-emerald-900">{course.title}</h2>
               <button onClick={handleClose} className="text-xl font-semibold text-gray-500 hover:text-gray-700">&times;</button>
            </div>
            <img
               src={course.image}
               alt={course.title}
               className="w-full h-48 object-cover rounded-lg mt-4"
            />
            <div className="mt-4">
               <p><strong>Description:</strong> {course.longDescription}</p>
               <p><strong>Duration:</strong> {course.duration}</p>
               <p><strong>Level:</strong> {course.level}</p>
               <p><strong>Price:</strong> ${course.price}</p>
               <p><strong>Total Classes:</strong> {course.totalClasses}</p>
            </div>

            <div className="mt-6 flex justify-center gap-4">
               <button
                  className="px-6 py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition duration-300"
                  onClick={openEnrollModal}  // Open the Enroll Modal
               >
                  Enroll Now
               </button>
            </div>
         </div>
      </div>
   );
}
