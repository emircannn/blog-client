import ClientOnly from "@/components/layouts/ClientOnly"
import SayilarPage from "@/components/pages/Sayilar"
import { Metadata } from "next"


export async function generateMetadata(): Promise<Metadata> {

  return {
    title: 'Sayılar',
    description: 'Güncel Olaylar ve Analizler: Siyaset, Din, Gündem ve Tarihle İlgili En İyi Yazılar. Öğrenin, Tartışın ve Bilgilerinizi Genişletin!',
    robots: 'index, follow',
  }
}

const Page = async () => {
  return (
    <ClientOnly>
        <SayilarPage/>
    </ClientOnly>
  )
}

export default Page