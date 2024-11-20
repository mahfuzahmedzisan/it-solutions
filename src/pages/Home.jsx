import React from "react";

import Slider from "../components/Slider/Slider";
import Courses from "../components/Courses/Courses";

export default function Home() {
  return (
    <>
      
      <Slider></Slider>
      <div className="container">
        <Courses></Courses>
      </div>
    </>
  );
}
