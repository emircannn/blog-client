import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { ThumbsDown, ThumbsUp } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import Comment from "./Comment"
import { Input } from "@/components/ui/input"
const Comments = () => {
  return (
    <div id="comment" className="grid grid-cols-4 container py-5">
        <div className="flex flex-col gap-4 col-span-4 lg:col-span-3">
            <p className="heading">Yorum Yap</p>

            <div className="flex flex-col gap-3">
                <Textarea placeholder="Yorum yap..." className="!resize-none rounded-xl h-32 max-h-32"/>
                <div className="flex items-center gap-3 w-full max-md:flex-col">
                <Input
                    placeholder="İsim Soyisim" className="rounded-xl"
                />
                <Input
                    placeholder="Email" className="rounded-xl"
                />
                </div>
                <div className="flex">
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