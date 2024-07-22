import React from 'react'
import list from "../../public/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
function Freebook() {
    const filterData=list.filter((data)=>data.category==="Free");
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
      };
     
  return (
    <>
        <div  className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
            <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
            <p>sjdhgbfsd fsdhbfjsd fsdvhfjhsd fsdvhfjhsdf dsvfjhsd sdvfjsdv sdvjfhvsdvjvdf gvdfbgdfbg dfgbkdfbg df gfdgbdfkgjbdf gbdfkgbdf g</p>
            </div>
        
        <div>
        <Slider {...settings}>
        {filterData.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
        </Slider>
    </div>
 </div>
    </>
  );
}

export default Freebook;
