import React from 'react'
import StackSpeech from './StackSpeech'
import StackIcons from './StackIcons'


function StackSection() {
  return (
    <div className='flex flex-col items-center justify-center'>
        <StackSpeech />
        <StackIcons />
         <p className='mt-20 font-medium'>But of course I rather Java after all ...</p>
    </div>
  )
}

export default StackSection