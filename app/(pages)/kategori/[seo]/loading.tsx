import { Skeleton } from "@/components/ui/skeleton"

const loading = () => {
  return (
    <section className="container min-h-[calc(100vh_-_416px)] grid grid-cols-4 gap-4 py-5">
        <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 col-span-4 lg:col-span-3">
            <div className="w-full aspect-[1/1.25] rounded-xl overflow-hidden">
            <Skeleton className="w-full h-full"/>
            </div>
            <div className="w-full aspect-[1/1.25] rounded-xl overflow-hidden">
            <Skeleton className="w-full h-full"/>
            </div>
            <div className="w-full aspect-[1/1.25] rounded-xl overflow-hidden">
            <Skeleton className="w-full h-full"/>
            </div>
            <div className="w-full aspect-[1/1.25] rounded-xl overflow-hidden">
            <Skeleton className="w-full h-full"/>
            </div>
            <div className="w-full aspect-[1/1.25] rounded-xl overflow-hidden">
            <Skeleton className="w-full h-full"/>
            </div>
            <div className="w-full aspect-[1/1.25] rounded-xl overflow-hidden">
            <Skeleton className="w-full h-full"/>
            </div>
        </main>

        <aside className="lg:col-span-1 col-span-4 relative">
            <section className="sticky top-[100px] flex flex-col gap-4">
                <div className="h-[12px] w-[85%] rounded-full overflow-hidden">
                    <Skeleton className="w-full h-full"/>
                </div>
                <div className="relative overflow-hidden rounded-xl p-2">
                    <div className="w-12 aspect-square rounded-full overflow-hidden"/>
                    <Skeleton className="w-full h-full absolute top-0 left-0"/>
                </div>

                <div className="h-[12px] w-[75%] rounded-full overflow-hidden">
                    <Skeleton className="w-full h-full"/>
                </div>

                <div className="h-[76px] lg:h-[96px] w-full rounded-xl overflow-hidden">
                    <Skeleton className="w-full h-full"/>
                </div>
                <div className="h-[76px] lg:h-[96px] w-full rounded-xl overflow-hidden">
                    <Skeleton className="w-full h-full"/>
                </div>
                <div className="h-[76px] lg:h-[96px] w-full rounded-xl overflow-hidden">
                    <Skeleton className="w-full h-full"/>
                </div>
                <div className="h-[76px] lg:h-[96px] w-full rounded-xl overflow-hidden">
                    <Skeleton className="w-full h-full"/>
                </div>
            </section>
        </aside>
    </section>
  )
}

export default loading