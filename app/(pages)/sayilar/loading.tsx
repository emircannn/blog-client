import { Skeleton } from "@/components/ui/skeleton"

const loading = () => {
  return (
    <main className="container min-h-[calc(100vh_-_416px)] flex flex-col gap-4 py-5">
        <div className="h-[16px] w-[220px] rounded-full overflow-hidden">
            <Skeleton className="w-full h-full"/>
        </div>

        <article className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            <div className="flex flex-col pb-[16px] relative rounded-xl overflow-hidden">
                <div className="aspect-[1/1.35] shrink-0 w-full relative overflow-hidden rounded-xl flex"/>
                <Skeleton className="w-full h-full absolute top-0 left-0"/>
            </div>
            <div className="flex flex-col pb-[16px] relative rounded-xl overflow-hidden">
                <div className="aspect-[1/1.35] shrink-0 w-full relative overflow-hidden rounded-xl flex"/>
                <Skeleton className="w-full h-full absolute top-0 left-0"/>
            </div>
            <div className="flex flex-col pb-[16px] relative rounded-xl overflow-hidden">
                <div className="aspect-[1/1.35] shrink-0 w-full relative overflow-hidden rounded-xl flex"/>
                <Skeleton className="w-full h-full absolute top-0 left-0"/>
            </div>
            <div className="flex flex-col pb-[16px] relative rounded-xl overflow-hidden">
                <div className="aspect-[1/1.35] shrink-0 w-full relative overflow-hidden rounded-xl flex"/>
                <Skeleton className="w-full h-full absolute top-0 left-0"/>
            </div>
        </article>
    </main>
  )
}

export default loading