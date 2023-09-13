import ClientOnly from "@/components/layouts/ClientOnly";
import HomePage from "@/components/pages/Home/HomePage";

function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


export default async function Home() {
  await delay(6000)
  return (
    <ClientOnly>
      <HomePage/>
    </ClientOnly>
  )
}
