import React from 'react'
import StoryPicture from './StoryPicture'
import StoryContent from './StoryContent'

const Story = () => {
  return (
    <div className='flex flex-col md:flex-row gap-10 mt-10'>
        <StoryPicture/>
        <StoryContent/>
    </div>
  )
}

export default Story