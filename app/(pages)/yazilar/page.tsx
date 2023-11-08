import { Metadata } from "next"
import ClientOnly from "@/components/layouts/ClientOnly"
import All from "./All"

export async function generateMetadata(): Promise<Metadata> {

    return {
        title: 'Tüm Yazılar',
        description: 'Güncel Olaylar ve Analizler: Siyaset, Din, Gündem ve Tarihle İlgili En İyi Yazılar. Öğrenin, Tartışın ve Bilgilerinizi Genişletin!',
        robots: 'index, follow',
    }
  }

const AllText = () => {
  return (
    <ClientOnly>
        <All/>
    </ClientOnly>
  )
}

export default AllText