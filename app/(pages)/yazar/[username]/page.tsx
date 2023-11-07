import ClientOnly from "@/components/layouts/ClientOnly"
import WriterPage from "@/components/pages/Writer"

const getUser = async(username: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}user/getUser?username=${username}`, {
        cache: 'no-cache'
    }).then((res) => res.json()).then((data) => {
        return data.data
    })
    return res
} catch (error) {
    console.log(error)
}
}

const Page = async ({ params }: { params: { username: string } }) => {

  const data = await getUser(params.username)

  return (
    <ClientOnly>
        <WriterPage data={data} username={params.username}/>
    </ClientOnly>
  )
}

export default Page