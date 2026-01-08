import React from 'react'
import CourseCard from './Card/CourseCard'
import card1 from "../assets/card1.jpg";
import card2 from "../assets/card2.jpg";
import card3 from "../assets/card3.jpg";


const Courses = () => {
  return (
    <div>
        <div className='text-center my-18 space-y-4'>
            <h3 className='text-4xl font-bold'>
                Popular <span className='text-amber-400'>Courses</span>
            </h3>
            <p className='text-xl text-gray-400 py-3'>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
        </div>
        <div className='flex flex-wrap justify-center gap-8 px-6 md:px-12 lg:px-24 mb-16'>
            {/* Course Cards will go here */}
            <CourseCard title={"Political science"} instructor={"Peter Parker"} image={card1} description={"Then one day he was shootinsome When the against him bubblin"} duration={"3 y"} level={"Master’s Degree"}/>
            
            <CourseCard title={"Micro Biology"} instructor={"Peter Parker"} image={card2} description={"Then one day he was shootinsome When the against him bubblin"} duration={"3 y"} level={"Master’s Degree"}/>
            
            <CourseCard title={"Computer Science"} instructor={"Peter Parker"} image={card3} description={"Then one day he was shootinsome When the against him bubblin"} duration={"3 y"} level={"Master’s Degree"}/>
            
            
        </div>
    </div>
  )
}

export default Courses