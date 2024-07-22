import React from 'react'
import Cards from "./Cards"
import list from "../../public/list.json"
import {Link} from "react-router-dom"
function Course() {
  return (
   <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
       <div className="mt-28 items-center justify-center text-center">
        <h1 className="text-4xl font-semibold md:text:2xl">
            We're Delighted to have you{" "}
            <span className="text-red-500"> here!</span>
        </h1>
        <p className='mt-8'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas cursus turpis sed augue volutpat, placerat tincidunt ex egestas. Cras nec turpis cursus sapien mollis porttitor. Sed mollis venenatis leo, a porta magna finibus ac. Suspendisse potenti. Quisque lectus leo, tempor vitae lectus id, congue aliquet purus. Nunc sed ultrices tortor. Phasellus commodo, mi non hendrerit finibus, ex risus blandit augue, interdum vestibulum lorem est id massa. Morbi nunc mauris, accumsan nec faucibus vel, pharetra ut velit. Curabitur ipsum sapien, volutpat sed nunc et, sodales vulputate tellus.
        </p>
        <Link to="/">
        <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button>
        </Link>
       </div>
       <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
         { list.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
       </div>
    </div>
   </>
  )
}

export default Course
