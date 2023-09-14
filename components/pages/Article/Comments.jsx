import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { ThumbsDown, ThumbsUp } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import Comment from "./Comment"
const Comments = () => {
  return (
    <div id="comment" className="grid grid-cols-4 container py-5">
        <div className="flex flex-col gap-4 col-span-4 lg:col-span-3">
            <p className="heading">Yorum Yap</p>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Avatar>
                        <AvatarImage src='/images/text.jpg'/>
                    </Avatar>
                    <span className="text-sm font-semibold">Emircan Yaşar</span>
                </div>

                <div className="sm:px-4 px-3 py-1 sm:py-2 rounded-full bg-lightColor dark:bg-darkColor grid-cols-2 flex items-center gap-2">
                    <button className="flex items-center gap-1 hover:opacity-60 duration-300 text-sm font-semibold">
                        33 <ThumbsUp/>
                    </button>
                    <Separator orientation="vertical" />
                    <button className="flex items-center gap-1 hover:opacity-60 duration-300 text-sm font-semibold">
                        <ThumbsDown/>
                    </button>
                </div>
            </div>

            <div className="flex flex-col gap-3">
                <Textarea placeholder="Yorum yap..." className="!resize-none rounded-xl h-32 max-h-32"/>
                <div className="flex justify-end">
                    <Button>
                        Yorum Yap
                    </Button>
                </div>
            </div>

            <div className="flex flex-col gap-4">
                <h6 className="heading">Yorumlar</h6>

                <Comment/>
                <Comment/>
                <Comment/>
            </div>
        </div>
    </div>
  )
}

export default Comments