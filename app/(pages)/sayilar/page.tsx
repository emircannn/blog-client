import ClientOnly from "@/components/layouts/ClientOnly"
import SayilarPage from "@/components/pages/Sayilar"

function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  

const Page = async () => {
  return (
    <ClientOnly>
        <SayilarPage/>
    </ClientOnly>
  )
}

export default Page