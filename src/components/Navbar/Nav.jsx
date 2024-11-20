import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';  // Import social icons

export default function Nav() {
   const [isOpen, setIsOpen] = useState(false);

   const Links = [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Services", href: "/services" },
      { name: "Contact", href: "/contact" },
   ];

   const [isScrolled, setIsScrolled] = useState(false);

   // Handle scroll event
   useEffect(() => {
      const handleScroll = () => {
         if (window.scrollY > 0) {
            setIsScrolled(true);
         } else {
            setIsScrolled(false);
         }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);

   return (
      // <nav className="relative flex justify-between items-center p-4">
      <>

         <div className={`fixed top-0 left-0 w-full bg-white z-30 transition-all duration-300 ${!isScrolled ? 'h-16' : 'h-0'
            }`}
            style={{
               overflow: 'hidden', // Hide content when collapsed
            }}>
            <div className="container">
               <nav className="relative flex justify-between items-center p-4">
                  {/* Hamburger button for mobile */}
                  <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
                     {isOpen ? (
                        <FontAwesomeIcon icon={faXmark} className="text-xl" />
                     ) : (
                        <FontAwesomeIcon icon={faBars} className="text-xl" />
                     )}
                  </button>

                  {/* Brand or Logo with color change on hover */}
                  <div className="text-2xl font-bold cursor-pointer relative group">
                     <span className="text-black group-hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-500">
                        It Solution
                     </span>
                     {/* Underline animation */}
                     {/* <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-300 group-hover:w-full group-hover:origin-left group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-green-500"></span> */}
                  </div>

                  {/* Backdrop for sidebar */}
                  <div
                     className={`lg:hidden fixed inset-0 bg-black bg-opacity-50 z-10 transition-all transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
                        }`}
                     onClick={() => setIsOpen(false)} // Close the sidebar when clicking outside
                  ></div>

                  {/* Sidebar for mobile */}
                  <div
                     className={`lg:hidden fixed left-0 top-0 w-3/4 h-full bg-white z-20 transition-all transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
                        }`}
                  >
                     {/* Close button */}
                     <button
                        onClick={() => setIsOpen(false)}
                        className="absolute top-4 right-4 text-2xl text-black"
                     >
                        <FontAwesomeIcon icon={faXmark} />
                     </button>

                     {/* Navigation links */}
                     <ul className="flex flex-col items-center mt-20 space-y-4">
                        {Links.map((link) => (
                           <li key={link.name}>
                              <a
                                 href={link.href}
                                 className="text-lg text-black relative group"
                              >
                                 {link.name}
                                 {/* Underline with color change on hover */}
                                 <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-300 group-hover:w-full group-hover:origin-left group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-green-500"></span>
                              </a>
                           </li>
                        ))}
                     </ul>

                     {/* Social media icons */}
                     <div className="flex justify-center mt-10 space-x-6">
                        <a
                           href="https://www.facebook.com"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="text-xl text-black hover:text-[#1877f2] transition-all"
                        >
                           <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a
                           href="https://www.twitter.com"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="text-xl text-black hover:text-[#1da1f2] transition-all"
                        >
                           <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a
                           href="https://www.linkedin.com"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="text-xl text-black hover:text-[#0077b5] transition-all"
                        >
                           <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a
                           href="https://www.instagram.com"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="text-xl text-black hover:text-[#e4405f] transition-all"
                        >
                           <FontAwesomeIcon icon={faInstagram} />
                        </a>
                     </div>

                     {/* Login and Sign Up buttons */}
                     <div className="flex flex-col items-center mt-10 space-y-4">
                        <button className="w-3/4 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all">
                           Login
                        </button>
                        <button className="w-3/4 py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600 transition-all">
                           Sign Up
                        </button>
                     </div>
                  </div>

                  {/* Navigation links for larger screens */}
                  <ul className="hidden lg:flex space-x-4 items-center">
                     {Links.map((link) => (
                        <li key={link.name}>
                           <a
                              href={link.href}
                              className="text-lg text-black relative group"
                           >
                              {link.name}
                              {/* Underline with color change on hover */}
                              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-300 group-hover:w-full group-hover:origin-left group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-green-500"></span>
                           </a>
                        </li>
                     ))}
                     {/* Login and Sign Up buttons for large screens */}
                     <div className="flex space-x-4">
                        <button className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all">
                           Login
                        </button>
                        <button className="py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600 transition-all">
                           Sign Up
                        </button>
                     </div>
                  </ul>
               </nav>
            </div>
         </div>

         <div className={`fixed top-0 left-0 w-full bg-white z-30 transition-all duration-300 ${isScrolled ? 'h-16' : 'h-0'
            }`}
            style={{
               overflow: 'hidden', // Hide content when collapsed
            }}>
            <div className="container">
               <nav className="relative flex justify-between items-center p-4">
                  {/* Hamburger button for mobile */}
                  <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
                     {isOpen ? (
                        <FontAwesomeIcon icon={faXmark} className="text-xl" />
                     ) : (
                        <FontAwesomeIcon icon={faBars} className="text-xl" />
                     )}
                  </button>

                  {/* Brand or Logo with color change on hover */}
                  <div className="text-2xl font-bold cursor-pointer relative group">
                     <span className="text-black group-hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-500">
                        It Solution
                     </span>
                     {/* Underline animation */}
                     {/* <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-300 group-hover:w-full group-hover:origin-left group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-green-500"></span> */}
                  </div>

                  {/* Backdrop for sidebar */}
                  <div
                     className={`lg:hidden fixed inset-0 bg-black bg-opacity-50 z-10 transition-all transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
                        }`}
                     onClick={() => setIsOpen(false)} // Close the sidebar when clicking outside
                  ></div>

                  {/* Sidebar for mobile */}
                  <div
                     className={`lg:hidden fixed left-0 top-0 w-3/4 h-full bg-white z-20 transition-all transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
                        }`}
                  >
                     {/* Close button */}
                     <button
                        onClick={() => setIsOpen(false)}
                        className="absolute top-4 right-4 text-2xl text-black"
                     >
                        <FontAwesomeIcon icon={faXmark} />
                     </button>

                     {/* Navigation links */}
                     <ul className="flex flex-col items-center mt-20 space-y-4">
                        {Links.map((link) => (
                           <li key={link.name}>
                              <a
                                 href={link.href}
                                 className="text-lg text-black relative group"
                              >
                                 {link.name}
                                 {/* Underline with color change on hover */}
                                 <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-300 group-hover:w-full group-hover:origin-left group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-green-500"></span>
                              </a>
                           </li>
                        ))}
                     </ul>

                     {/* Social media icons */}
                     <div className="flex justify-center mt-10 space-x-6">
                        <a
                           href="https://www.facebook.com"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="text-xl text-black hover:text-[#1877f2] transition-all"
                        >
                           <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a
                           href="https://www.twitter.com"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="text-xl text-black hover:text-[#1da1f2] transition-all"
                        >
                           <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a
                           href="https://www.linkedin.com"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="text-xl text-black hover:text-[#0077b5] transition-all"
                        >
                           <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a
                           href="https://www.instagram.com"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="text-xl text-black hover:text-[#e4405f] transition-all"
                        >
                           <FontAwesomeIcon icon={faInstagram} />
                        </a>
                     </div>

                     {/* Login and Sign Up buttons */}
                     <div className="flex flex-col items-center mt-10 space-y-4">
                        <button className="w-3/4 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all">
                           Login
                        </button>
                        <button className="w-3/4 py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600 transition-all">
                           Sign Up
                        </button>
                     </div>
                  </div>

                  {/* Navigation links for larger screens */}
                  <ul className="hidden lg:flex space-x-4 items-center">
                     {Links.map((link) => (
                        <li key={link.name}>
                           <a
                              href={link.href}
                              className="text-lg text-black relative group"
                           >
                              {link.name}
                              {/* Underline with color change on hover */}
                              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-300 group-hover:w-full group-hover:origin-left group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-green-500"></span>
                           </a>
                        </li>
                     ))}
                     {/* Login and Sign Up buttons for large screens */}
                     <div className="flex space-x-4">
                        <button className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all">
                           Login
                        </button>
                        <button className="py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600 transition-all">
                           Sign Up
                        </button>
                     </div>
                  </ul>
               </nav>
            </div>
         </div>

      </>

   );
}
