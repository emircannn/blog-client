'use client'

import { MoveUp } from 'lucide-react'
import React, { useState } from 'react'

const GoTop = () => {

    const [isTop, setIsTop] = useState(true)

    window?.addEventListener('scroll', () => {
        const currentScrollY = window?.scrollY;
        if (currentScrollY > 600) {
            setIsTop(false)
        }

        if(currentScrollY < 600) {
            setIsTop(true)
        }
      });

      const handleGoTop = () => { 
        window.scrollTo(0,0)
      }

  return (
    <div className={`fixed bottom-4 right-4 duration-300 z-50 ${isTop ? 'translate-x-[1000%]' : 'translate-x-0'}`}>
        <button onClick={handleGoTop} className='p-3 bg-darkerColor text-white dark:bg-white dark:text-darkerColor rounded-full'>
            <MoveUp/>
        </button>
    </div>
  )
}

export default GoTop