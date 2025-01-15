import React from 'react'
import StackSpeech from './StackSpeech'
import StackIcons from './StackIcons'


function StackSection() {
  return (
    <div className='flex flex-col items-center justify-center'>
        <StackSpeech />
        <StackIcons />
    </div>
  )
}

export default StackSection