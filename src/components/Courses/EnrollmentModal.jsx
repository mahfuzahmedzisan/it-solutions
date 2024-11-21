import React, { useState } from 'react';

export default function EnrollmentModal({ closeEnrollModal }) {
   const [isClosing, setIsClosing] = useState(false);

   const handleClose = () => {
      // Trigger the closing animation
      setIsClosing(true);
      
      // Wait for the animation to finish before calling the closeModal function
      setTimeout(() => {
         closeEnrollModal(); // Close the enrollment modal
      }, 400); // Duration should match the animation time (0.5s)
   };

   return (
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
         <div
            className={`bg-white rounded-lg shadow-lg w-96 p-6 ${isClosing ? 'animate-slide-down' : 'animate-slide-up'}`}
         >
            <div className="flex justify-between items-center">
               <h2 className="text-2xl font-semibold text-emerald-900">Enrollment Confirmation</h2>
               <button onClick={handleClose} className="text-xl font-semibold text-gray-500 hover:text-gray-700">&times;</button>
            </div>
            <div className="mt-4">
               <p className="text-gray-600">You are about to enroll in this course. Are you sure you want to proceed?</p>
            </div>

            <div className="mt-6 flex justify-center gap-4">
               <button
                  className="px-6 py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition duration-300"
                  onClick={() => {
                     alert('Enrollment Successful!'); // You can replace this with actual enrollment logic
                     handleClose();  // Close the modal after success
                  }}
               >
                  Yes, Enroll
               </button>
               <button
                  className="px-6 py-2 bg-gray-500 text-white font-semibold rounded-md hover:bg-gray-600 transition duration-300"
                  onClick={handleClose}
               >
                  Cancel
               </button>
            </div>
         </div>
      </div>
   );
}
