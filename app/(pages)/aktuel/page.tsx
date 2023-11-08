import ClientOnly from "@/components/layouts/ClientOnly"
import ActualPage from "@/components/pages/Actual";
import { Metadata } from "next";


export async function generateMetadata(): Promise<Metadata> {

  return {
    title: 'Aktüel',
    description: 'Güncel Olaylar ve Analizler: Siyaset, Din, Gündem ve Tarihle İlgili En İyi Yazılar. Öğrenin, Tartışın ve Bilgilerinizi Genişletin!',
    robots: 'index, follow',
  }
}

const Page = async () => {
  return (
    <ClientOnly>
        <ActualPage/>
    </ClientOnly>
  )
}

export default Page