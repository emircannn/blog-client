'use client'
import { Button } from "@/components/ui/button"
import { Facebook, MessageCircle, Twitter } from "lucide-react"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { share } from "../Article/shareArticle"


const Share = () => {
  return (
    <div className="flex flex-col gap-4 items-center rounded-xl p-3">
        <h6 className="text-sm font-semibold uppercase">Paylaş</h6>

        <div className="flex items-center justify-center gap-4">
        <HoverCard>
            <HoverCardTrigger>
            <Button size='icon' onClick={() => share({userProfile: 'editor', _title: 'Yazı Başlığı', platform: 'twitter'})}>
                <Twitter/>
            </Button>
            </HoverCardTrigger>
            <HoverCardContent className="backgroundColor border dark:border-darkerColor/60 shadow-md rounded-xl text-sm font-medium">
                <p className="shrink-0 flex">
                Bu Sayıyı Twitter profilinde paylaş
                </p>
            </HoverCardContent>
        </HoverCard>
        <HoverCard>
            <HoverCardTrigger>
            <Button size='icon' onClick={() => share({userProfile: 'editor', _title: 'Yazı Başlığı', platform: 'whatsapp'})}>
                <MessageCircle/>
            </Button>
            </HoverCardTrigger>
            <HoverCardContent className="backgroundColor border dark:border-darkerColor/60 shadow-md rounded-xl text-sm font-medium">
                <p className="shrink-0 flex">
                Bu Sayıyı Whatsapp aracılığı ile paylaş
                </p>
            </HoverCardContent>
        </HoverCard>
        <HoverCard>
            <HoverCardTrigger>
            <Button size='icon' onClick={() => share({userProfile: 'editor', _title: 'Yazı Başlığı', platform: 'facebook'})}>
                <Facebook/>
            </Button>
            </HoverCardTrigger>
            <HoverCardContent className="backgroundColor border dark:border-darkerColor/60 shadow-md rounded-xl text-sm font-medium">
                <p className="shrink-0 flex">
                Bu Sayıyı Facebook aracılığı ile paylaş
                </p>
            </HoverCardContent>
        </HoverCard>
        </div>
    </div>
  )
}

export default Share