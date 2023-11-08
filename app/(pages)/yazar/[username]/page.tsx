import ClientOnly from "@/components/layouts/ClientOnly"
import WriterPage from "@/components/pages/Writer"
import { Metadata } from "next"
import { redirect } from "next/navigation"

const getUser = async(username: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}user/getUser?username=${username}`, {
        cache: 'no-cache'
    }).then((res) => res.json()).then((data) => {
        return data.data as User
    })
    return res
} catch (error) {
    console.log(error)
}
}

interface Props {
  params: { username: string }
}

  export async function generateMetadata({params}: Props): Promise<Metadata> {
    const data = await getUser(params.username)
    if(!data) return {
      title: "Sayfa Bulunamadı",
      description: "Üzgünüz, sayfa bulunamadı...",
    }
    

    return {
      title: data.name,
      description: data.about,
      robots: 'index, follow',
      applicationName: 'ZİNCİRKIRAN',
      authors: {
        name: data.name,
        url: `${process.env.NEXT_PUBLIC_SITE}/yazar/${data.username}`
      },
      assets: data.image,
      openGraph: {
        type: 'website',
        title: data.name,
        description: data.about || '',
        siteName: "ZİNCİRKIRAN",
        images: [{
          url: data.image || '',
        }, {
          url: data.coverImage || '',
        }],
        url: `${process.env.NEXT_PUBLIC_SITE}/yazar/${data.username}`
      },
    }
  }

const Page = async ({ params }: { params: { username: string } }) => {

  const data = await getUser(params.username)

  if(!data) {
    redirect('/')
  }

  return (
    <ClientOnly>
        <WriterPage data={data} username={params.username}/>
    </ClientOnly>
  )
}

export default Page