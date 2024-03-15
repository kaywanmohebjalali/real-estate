import React from 'react'

const StoryPicture = () => {
  return (
    
    <div className="story__pictures grid grid-cols-6 grid-rows-6 w-full md:w-[60%] ">
    <img
        src="/img/story-1.jpeg"
        alt="Couple happy for new house"
        className="row-start-2 row-end-6 col-start-2 col-end-6 md:row-start-3 md:row-end-6"
    />
    <img
        src="/img/story-2.jpeg"
        alt="New house"
        className="row-start-2 row-end-4 col-start-2 col-end-4 mt-[2rem] mr-[-2rem] md:mt-[-1rem] md:mr-[2rem]  md:col-start-4 md:col-end-7"
    />
</div>

  )
}

export default StoryPicture