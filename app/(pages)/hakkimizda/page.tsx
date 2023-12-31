'use client'
import ClientOnly from "@/components/layouts/ClientOnly"
import Logo from "@/components/logo"
import { useSettings } from "@/lib/context";

const Page = () => {

  const { settings  } = useSettings();

  return (
    <ClientOnly>
    <div className="py-6 w-full px-2">
        <div className="max-w-[1280px] mx-auto p-3 md:p-8 rounded-xl backgroundColor h-fit flex flex-col items-center gap-3">
            <Logo/>

            <p className="col-span-5 sm:col-span-4 gap-3 text-sm !leading-[22.4px] sm:!leading-[25.5px] sm:text-base" 
                dangerouslySetInnerHTML={{ __html: settings?.about_us || '' }} />
        </div>
    </div>
    </ClientOnly>
  )
}

export default Page