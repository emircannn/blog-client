'use client'

import { Avatar, AvatarImage } from "@/components/ui/avatar"

const Comment = () => {
  return (
    <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
            <Avatar>
                <AvatarImage src='/images/text.jpg'/>
            </Avatar>
            <span className="text-sm font-semibold">Emircan Yaşar</span>
            <span className="text-xs font-medium sm:text-sm opacity-60">18/09/23</span>
        </div>

        <p className="text-xs sm:text-sm opacity-60 font-medium">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima quod, debitis ratione quos ipsa atque totam! Voluptas recusandae officiis explicabo doloremque similique, magnam rem officia.
        </p>
    </div>
  )
}

export default Comment