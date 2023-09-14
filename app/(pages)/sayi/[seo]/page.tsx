import ClientOnly from "@/components/layouts/ClientOnly"
import SayiPage from "@/components/pages/Sayi"


const Page = async ({ params }: { params: { seo: string } }) => {
  return (
    <ClientOnly>
      <SayiPage/>
    </ClientOnly>
  )
}

export default Page