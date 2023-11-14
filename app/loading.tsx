import { Skeleton } from "@/components/ui/skeleton"

const HomeLoading = () => {
  return (
    <>
    <section className="flex flex-col gap-5 lg:gap-8 pb-5">
        {/* Slider */}
        <div className="w-screen xl:aspect-[3/1] relative max-xl:hidden">
                <Skeleton className="w-full h-full absolute top-0 left-0 opacity-50"/>
            <div className="w-screen aspect-[3/1] overflow-hidden flex items-center justify-center">
                <div className="max-w-[1280px] w-full flex md:aspect-[3/1] z-10 rounded-xl p-5">
                    <Skeleton className="w-full h-full"/>
                </div>
            </div>
        </div>
        {/* Slider Responsive */}
        <div className="xl:hidden">
            <div className="w-full aspect-video lg:aspect-[3/1] overflow-hidden rounded-xl p-3">
                <Skeleton className="w-full h-full"/>
            </div>
        </div>
        {/* Most Readed */}
        <main className="container py-[10px] flex flex-col gap-4">
            <div className="h-[12px] w-[280px] rounded-full overflow-hidden">
                <Skeleton className="w-full h-full"/>
            </div>
            <article className="grid grid-cols-6 gap-4 grid-rows-4 md:grid-rows-2 w-full aspect-[3/1]">
                <div className="col-span-6 md:col-span-3 row-span-2 rounded-xl overflow-hidden w-full h-full max-md:aspect-square">
                    <Skeleton className="w-full h-full"/>
                </div>
                <div className="col-span-6 md:col-span-3 row-span-1 shrink-0 rounded-xl flex justify-between overflow-hidden w-full aspect-[20/8]">
                    <Skeleton className="w-full h-full"/>
                </div>
                <div className="col-span-6 md:col-span-3 row-span-1 shrink-0 rounded-xl flex justify-between overflow-hidden w-full aspect-[20/8]">
                    <Skeleton className="w-full h-full"/>
                </div>
            </article>
        </main>
        {/* Last Article */}
        <main className="flex flex-col gap-4 container">
            <div className="h-[12px] w-[280px]  rounded-full">
                <Skeleton className="w-full h-full"/>
            </div>
            <article className="grid grid-cols-1 400:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="w-full aspect-square rounded-xl overflow-hidden">
                    <Skeleton className="w-full h-full"/>
                </div>
                <div className="w-full aspect-square rounded-xl overflow-hidden">
                    <Skeleton className="w-full h-full"/>
                </div>
                <div className="w-full aspect-square rounded-xl overflow-hidden">
                    <Skeleton className="w-full h-full"/>
                </div>
            </article>
        </main>
        {/* Writers */}
        <section className="container">
            <div className=" rounded-2xl overflow-hidden flex flex-col w-full aspect-[20/8]">
                <Skeleton className="w-full h-full"/>
            </div>
        </section>

        {/* Actual */}
        <section className="flex max-lg:flex-col gap-4 container">
            <main className="w-2/3 max-lg:w-full flex flex-col gap-4">
                <div className="h-[12px] w-[280px]  rounded-full overflow-hidden">
                    <Skeleton className="w-full h-full"/>
                </div>
                <article className="grid-cols-2 max-lg:grid-cols-3 max-md:grid-cols-2 grid gap-4">
                    <div className="w-full rounded-xl aspect-square overflow-hidden">
                        <Skeleton className="w-full h-full"/>
                    </div> 
                    <div className="w-full rounded-xl aspect-square overflow-hidden">
                        <Skeleton className="w-full h-full"/>
                    </div> 
                    <div className="w-full rounded-xl aspect-square overflow-hidden">
                        <Skeleton className="w-full h-full"/>
                    </div> 
                    <div className="w-full rounded-xl aspect-square overflow-hidden">
                        <Skeleton className="w-full h-full"/>
                    </div> 
                </article>
            </main>
            <aside className="w-1/3 max-lg:w-full flex flex-col gap-4">
                <div className="h-[12px] w-[280px]  rounded-full overflow-hidden">
                    <Skeleton className="w-full h-full"/>
                </div>
                <article className="gap-4 grid grid-cols-1 max-lg:grid-cols-2 max-sm:grid-cols-1">
                    <div className="flex gap-3 w-full relative overflow-hidden rounded-xl">
                        <span className="aspect-[1/1.3] h-[100px]"/>
                        <Skeleton className="w-full h-full absolute top-0 left-0"/>
                    </div>
                    <div className="flex gap-4 w-full relative overflow-hidden rounded-xl">
                        <span className="aspect-[1/1.3] h-[100px]"/>
                        <Skeleton className="w-full h-full absolute top-0 left-0"/>
                    </div>
                    <div className="flex gap-3 w-full relative overflow-hidden rounded-xl">
                        <span className="aspect-[1/1.3] h-[100px]"/>
                        <Skeleton className="w-full h-full absolute top-0 left-0"/>
                    </div>
                </article>
            </aside>
        </section>
        {/* Write With Us */}
        <section className="container">
            <div className=" rounded-2xl overflow-hidden flex flex-col w-full aspect-[20/8]">
                <Skeleton className="w-full h-full"/>
            </div>
        </section>
        {/* Category & Social Media */}
        <section className="flex max-lg:flex-col gap-4 container">
        <div className="w-2/3 max-lg:w-full flex flex-col gap-4">
                <div className="h-[12px] w-[280px]  rounded-full overflow-hidden">
                    <Skeleton className="w-full h-full"/>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
                    <div className="w-full rounded-xl aspect-square overflow-hidden">
                    <Skeleton className="w-full h-full"/>
                    </div>
                    <div className="w-full rounded-xl aspect-square overflow-hidden">
                    <Skeleton className="w-full h-full"/>
                    </div>
                    <div className="w-full rounded-xl aspect-square overflow-hidden">
                    <Skeleton className="w-full h-full"/>
                    </div>
                    <div className="w-full rounded-xl aspect-square overflow-hidden">
                    <Skeleton className="w-full h-full"/>
                    </div>
                </div>
        </div>
        <aside className="w-1/3 max-lg:w-full flex flex-col gap-4">
                <div className="h-[12px] w-[280px]  rounded-full overflow-hidden">
                    <Skeleton className="w-full h-full"/>
                </div>
                <div className="gap-4 grid grid-cols-1 max-lg:grid-cols-2 max-sm:grid-cols-1">
                    <div className='w-full rounded-xl aspect-[40/8] overflow-hidden'>
                        <Skeleton className="w-full h-full"/>
                    </div>
                    <div className='w-full rounded-xl aspect-[40/8] overflow-hidden'>
                        <Skeleton className="w-full h-full"/>
                    </div>
                </div>
        </aside>
        </section>
    </section>
    </>
  )
}

export default HomeLoading