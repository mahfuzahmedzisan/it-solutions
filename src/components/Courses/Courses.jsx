import React, { useState, useEffect } from 'react';

export default function Courses() {
   const [courses, setCourses] = useState([]);

   useEffect(() => {
      // Fetch data from the JSON file in the public folder
      fetch('/Courses/Courses.json')  // Use the correct relative path
         .then((res) => res.json())
         .then((data) => {
            setCourses(data);
         })
         .catch((error) => {
            console.error("Error fetching courses:", error); // Handle errors in fetching data
         });
   }, []);

   return (
      <>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-16">
            {courses.map((course) => (
               <div key={course.id}>
                  <h2>{course.title}</h2>
                  <p>{course.description}</p>
                  <p>Duration: {course.duration}</p>
                  <p>Level: {course.level}</p>
                  <p>Price: {course.price}</p>
                  <p>Rating: {course.rating}</p>
                  <img src={course.image} alt={course.title} />
               </div>
            ))}
         </div>
      </>
   );
}
