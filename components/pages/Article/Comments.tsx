'use client'
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Comment from "./Comment"
import { Input } from "@/components/ui/input"
import React, { useState } from "react"
import { useToast } from "@/components/ui/use-toast"
import axios from 'axios'

interface Props {
    data: Actual | Texts | Magazine
    actual?: boolean
    texts?: boolean
    magazine?: boolean
}

const Comments: React.FC<Props> = ({
    data,
    texts= false,
    actual= false,
    magazine= false,
}) => {
    const { toast } = useToast()
        const [comment, setComment] = useState({
            email: '',
            name: '',
            comment: ''
        })
        const [loading, setLoading] = useState(false)
        const handleAdd = async () => {
            try {
                if(data.id && comment.name && comment.email && comment.comment) {
                    const form: any = {}; // Başlangıçta boş bir form nesnesi oluşturun

                    if (actual) {
                        form.actualId = data.id;
                    } else if (texts) {
                        form.textId = data.id;
                    } else if (magazine) {
                        form.magazineId = data.id;
                    }

                    form.name = comment.name;
                    form.email = comment.email;
                    form.comment = comment.comment;
                    setLoading(true)
                    const res = await axios.post(`${process.env.NEXT_PUBLIC_URL}comment/add`, form)
                    if(res.data.error) {
                        setLoading(false)
                        toast({title : res.data.message})
                        } else {
                        setLoading(false)
                        toast({title : res.data.message})
                        setComment({
                            email: '',
                            name: '',
                            comment: ''
                        })
                    }
                } else {
                    toast({title: 'Tüm Alanlar Zorunludur.'})
                }
            } catch (error: any) {
            setLoading(false)
            toast({title : error.response.data.message.split(':')[1] || error.response.data.message})
            }
        }

  return (
    <div id="comment" className="grid grid-cols-4 container py-5">
        <div className="flex flex-col gap-4 col-span-4 lg:col-span-3">
            <p className="heading">Yorum Yap</p>

            <div className="flex flex-col gap-3">
                <Textarea required placeholder="Yorum yap..." value={comment.comment}
                className="!resize-none rounded-xl h-32 max-h-32" 
                onChange={(e) => setComment({...comment, comment: e.target.value})}/>
                <div className="flex items-center gap-3 w-full max-md:flex-col">
                <Input
                    required
                    placeholder="İsim Soyisim" className="rounded-xl" value={comment.name} onChange={(e) => setComment({...comment, name: e.target.value})}
                />
                <Input
                    required
                    placeholder="Email" type="email" className="rounded-xl" value={comment.email} onChange={(e) => setComment({...comment, email: e.target.value})}
                />
                </div>
                <div className="flex">
                    <Button disabled={loading} onClick={handleAdd}>
                        Yorum Yap
                    </Button>
                </div>
            </div>

            <div className="flex flex-col gap-4">
                <h6 className="heading">Yorumlar</h6>

                {   data.comments.length > 0 ?
                    data.comments?.map((comment) => (
                        <Comment key={comment.id} data={comment}/>
                    ))
                    :

                    <p className="text-sm font-semibold">
                        Henüz yorum yapılmadı, ilk yorumu sen yap.
                    </p>
                }
            </div>
        </div>
    </div>
  )
}

export default Comments