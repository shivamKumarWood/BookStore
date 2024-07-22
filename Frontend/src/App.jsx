import React from "react";
import Home from "./home/Home";
import Courses from "./courses/Courses";
import {Route,Routes  } from "react-router-dom";
import Signup from "./components/Signup";
export default function App() {
  return (
    <>
    <div className="dark:bg-slate-800 dark:text-white">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/course" element={<Courses/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
      </div>
    </>
  );
}




