import ClientOnly from "@/components/layouts/ClientOnly"
import ActualPage from "@/components/pages/Actual";


const Page = async () => {
  return (
    <ClientOnly>
        <ActualPage/>
    </ClientOnly>
  )
}

export default Page