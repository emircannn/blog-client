'use client'
import ClientOnly from "@/components/layouts/ClientOnly"
import WriterPage from "@/components/pages/Writer"
import axios from "axios"
import { redirect } from "next/navigation"
import { useEffect, useState } from "react"



const Page = ({ params }: { params: { username: string } }) => {

  const getUser = async(username: string) => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}user/getUser?username=${username}`)
      return res.data.data as User
  } catch (error) {
      console.log(error)
  }
  }
  
  const [user, setUser] = useState<User>()

  useEffect(() => {
    const getData = async() => {
      const data = await getUser(params.username)
      if(!data) {
        redirect('/')
      }
      setUser(data)
    }

    if(params.username) {
      getData()
    }
  }, [params.username])


  return (
    <ClientOnly>
        <WriterPage data={user} username={params.username}/>
    </ClientOnly>
  )
}

export default Page