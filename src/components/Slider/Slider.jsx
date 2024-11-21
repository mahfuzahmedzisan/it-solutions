import React, { useState, useEffect, useRef } from 'react';
import slider1 from '../../assets/images/slider_1.jpg';  
import slider2 from '../../assets/images/slider_2.jpg';

export default function Slider() {
   const [currentIndex, setCurrentIndex] = useState(0);
   const images = [slider1, slider2];
   const intervalRef = useRef(null);
   const [isHovered, setIsHovered] = useState(false);
   const [isLoaded, setIsLoaded] = useState(false); // State to track when content is loaded

   // Handle next slide
   const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
   };

   // Handle previous slide
   const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
   };

   // Start the autoplay
   const startAutoplay = () => {
      intervalRef.current = setInterval(nextSlide, 4000); // 4 seconds interval
   };

   // Stop the autoplay
   const stopAutoplay = () => {
      if (intervalRef.current) {
         clearInterval(intervalRef.current);
      }
   };

   // Handle autoplay when hover state changes
   useEffect(() => {
      if (isHovered) {
         stopAutoplay();
      } else {
         startAutoplay();
      }
   }, [isHovered]);

   // Handle autoplay when current index changes
   useEffect(() => {
      startAutoplay();
      return () => clearInterval(intervalRef.current); // Cleanup interval on unmount
   }, [currentIndex]);

   // Trigger animation after the component mounts
   useEffect(() => {
      const timer = setTimeout(() => {
         setIsLoaded(true); // Set the component as loaded after a delay
      }, 500); // Delay before animation starts (500ms)

      return () => clearTimeout(timer); // Cleanup the timeout if the component unmounts
   }, []);

   return (
      <div
         className="relative w-full h-[500px] overflow-hidden"
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}
         role="region" aria-label="Image Slider"
      >
         {/* Displaying the current slide */}
         <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-full object-cover transition-all duration-500 ease-in-out"
         />
         
         {/* Previous button */}
         <button
            onClick={prevSlide}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-4 rounded-r-lg focus:outline-none z-10 group"
            aria-label="Previous Slide"
         >
            Prev
         </button>

         {/* Next button */}
         <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-4 rounded-l-lg focus:outline-none z-10 group"
            aria-label="Next Slide"
         >
            Next
         </button>

         {/* Indicator Dots */}
         <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
               <button
                  key={index}  // Use index as key
                  onClick={() => setCurrentIndex(index)}  // Set the slide to the clicked index
                  className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-600'}`}  // Highlight the active dot
                  aria-label={`Slide ${index + 1}`}
               ></button>
            ))}
         </div>

         {/* Centered Overlay Content with Backdrop Filter */}
         <div className="absolute inset-0 flex items-center justify-center text-center text-white px-4">
            <div className={`relative backdrop-blur-lg bg-black/50 rounded-lg p-6 sm:p-8 md:p-10 lg:p-12 ${isLoaded ? 'animate-slide-up' : 'opacity-0'}`}>
               <h2 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight drop-shadow-lg ${isLoaded ? 'animate__animated animate__fadeIn animate__delay-500' : ''}`}>
                  Welcome to It Solution
               </h2>
               <p className={`mt-4 text-lg sm:text-xl md:text-2xl font-semibold opacity-90 drop-shadow-lg ${isLoaded ? 'animate__animated animate__fadeIn animate__delay-700' : ''}`}>
                  Discover the future of IT solutions
               </p>
               <a href={`#courses`} className="inline-block mt-6 bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-gradient-to-r from-blue-500 to-green-500 ">
                  Get Started
               </a>
            </div>
         </div>
      </div>
   );
}
