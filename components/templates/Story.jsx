import React from 'react'
import StoryPicture from './StoryPicture'
import StoryContent from './StoryContent'

const Story = () => {
  return (
    <div className='bg-[#f9f7f6] flex flex-col md:flex-row gap-10 mt-10 pb-6'>
        <StoryPicture/>
        <StoryContent/>
    </div>
  )
}

export default Story