import ClientOnly from "@/components/layouts/ClientOnly";
import HomePage from "@/components/pages/Home/HomePage";

export default function Home() {
  return (
    <ClientOnly>
      <HomePage/>
    </ClientOnly>
  )
}
