import ClientOnly from "@/components/layouts/ClientOnly"
import SayilarPage from "@/components/pages/Sayilar"

const Page = async () => {
  return (
    <ClientOnly>
        <SayilarPage/>
    </ClientOnly>
  )
}

export default Page