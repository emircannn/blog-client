'use client'
import { Button } from "@/components/ui/button"
import { Facebook, MessageCircle, Twitter } from "lucide-react"
import { share } from "./shareArticle"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"

interface Props {
    data: Actual
}
const Share: React.FC<Props> = ({
    data
}) => {
  return (
    <div className="flex flex-col gap-4 items-center sticky top-[100px]">
        <h6 className="text-sm font-medium uppercase">Paylaş</h6>

        <div className="grid grid-cols-3 sm:grid-cols-2 gap-4">
        <HoverCard>
            <HoverCardTrigger>
            <Button size='icon' onClick={() => share({userProfile: data.user.twitter && data.user.twitter, _title: data.title, platform: 'twitter'})}>
                <Twitter/>
            </Button>
            </HoverCardTrigger>
            <HoverCardContent className="backgroundColor border dark:border-darkerColor/60 shadow-md rounded-xl text-sm font-medium">
                <p className="shrink-0 flex">
                Yazımızı Twitter profilinde paylaş
                </p>
            </HoverCardContent>
        </HoverCard>
        <HoverCard>
            <HoverCardTrigger>
            <Button size='icon' onClick={() => share({userProfile: data.user.name, _title: data.title, platform: 'whatsapp'})}>
                <MessageCircle/>
            </Button>
            </HoverCardTrigger>
            <HoverCardContent className="backgroundColor border dark:border-darkerColor/60 shadow-md rounded-xl text-sm font-medium">
                <p className="shrink-0 flex">
                Yazımızı Whatsapp aracılığı ile paylaş
                </p>
            </HoverCardContent>
        </HoverCard>
        <HoverCard>
            <HoverCardTrigger>
            <Button size='icon' onClick={() => share({userProfile: data.user.name, _title: data.title, platform: 'facebook'})}>
                <Facebook/>
            </Button>
            </HoverCardTrigger>
            <HoverCardContent className="backgroundColor border dark:border-darkerColor/60 shadow-md rounded-xl text-sm font-medium">
                <p className="shrink-0 flex">
                Yazımızı Facebook aracılığı ile paylaş
                </p>
            </HoverCardContent>
        </HoverCard>
        </div>
    </div>
  )
}

export default Share