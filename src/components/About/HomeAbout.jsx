import React from 'react'

export default function HomeAbout() {
   return (
      <>
         
         <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
               <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Album" />
            </figure>
            <div className="card-body">
               <h2 className="card-title">New album is released!</h2>
               <p>Click the button to listen on Spotiwhy app.</p>
               <div className="card-actions justify-end">
                  <button className="btn btn-primary">Listen</button>
               </div>
            </div>
         </div>
      </>
   )
}
