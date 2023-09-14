import { Skeleton } from "@/components/ui/skeleton"

const loading = () => {
  return (
    <section className="container min-h-[calc(100vh_-_416px)] grid grid-cols-4 gap-4 py-5">
        <aside className="lg:col-span-1 col-span-4 relative">
            <section className="sticky top-[100px] flex flex-col gap-4 w-full h-[430px] lg:h-[500px] rounded-xl overflow-hidden">
                <Skeleton className="w-full h-full"/>
            </section>
        </aside>

        <div className="col-span-4 lg:col-span-3 rounded-xl flex flex-col gap-4 !max-h-fit">
            <div className="h-[16px] w-[260px] rounded-full overflow-hidden">
                <Skeleton className="w-full h-full"/>
            </div>

            <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 col-span-4 lg:col-span-3">
                <div className="w-full aspect-[1/1.2] rounded-xl overflow-hidden">
                <Skeleton className="w-full h-full"/>
                </div>
                <div className="w-full aspect-[1/1.2] rounded-xl overflow-hidden">
                <Skeleton className="w-full h-full"/>
                </div>
                <div className="w-full aspect-[1/1.2] rounded-xl overflow-hidden">
                <Skeleton className="w-full h-full"/>
                </div>
            </main>

            <div className="h-[16px] w-[260px] rounded-full overflow-hidden">
                <Skeleton className="w-full h-full"/>
            </div>

            <div className="flex flex-col gap-3">
                <div className="h-[144px] w-full rounded-xl overflow-hidden">
                    <Skeleton className="w-full h-full"/>
                </div>
                <div className="h-[144px] w-full rounded-xl overflow-hidden">
                    <Skeleton className="w-full h-full"/>
                </div>
                <div className="h-[144px] w-full rounded-xl overflow-hidden">
                    <Skeleton className="w-full h-full"/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default loading