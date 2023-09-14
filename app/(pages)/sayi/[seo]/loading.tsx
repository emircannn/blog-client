import { Skeleton } from "@/components/ui/skeleton"

import React from 'react'

const loading = () => {
  return (
    <>
    <section className="container min-h-[calc(100vh_-_416px)] grid grid-cols-4 gap-4 py-5">
        <main className="col-span-4 lg:col-span-3 rounded-xl overflow-hidden h-[1000px]">
            <Skeleton className="w-full h-full"/>
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
    
    <div className="grid grid-cols-4 container py-5 w-full">
        <div className="flex flex-col gap-4 col-span-4 lg:col-span-3 w-full">
            <div className="h-[16px] w-[100px] rounded-full overflow-hidden">
                <Skeleton className="w-full h-full"/>
            </div>
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2">
                    <div className="w-[40px] aspect-square rounded-full overflow-hidden">
                        <Skeleton className="w-full h-full"/>
                    </div>
                    <div className="h-[12px] w-[165px] rounded-full overflow-hidden">
                        <Skeleton className="w-full h-full"/>
                    </div>
                </div>
                    <div className="w-[118px] h-[40px] rounded-full overflow-hidden">
                        <Skeleton className="w-full h-full"/>
                    </div>
            </div>

            <div className="flex flex-col gap-3">
                <div className="w-full h-32 rounded-xl overflow-hidden">
                    <Skeleton className="w-full h-full"/>
                </div>
                <div className="flex justify-end">
                    <div className="w-[110px] h-[40px] rounded-lg overflow-hidden">
                        <Skeleton className="w-full h-full"/>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-4">
                <div className="h-[16px] w-[100px] rounded-full overflow-hidden">
                    <Skeleton className="w-full h-full"/>
                </div>

                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                        <div className="w-[40px] aspect-square rounded-full overflow-hidden">
                            <Skeleton className="w-full h-full"/>
                        </div>
                        <div className="h-[12px] w-[165px] rounded-full overflow-hidden">
                            <Skeleton className="w-full h-full"/>
                        </div>
                    </div>

                    <div className="h-[12px] w-full rounded-full overflow-hidden">
                        <Skeleton className="w-full h-full"/>
                    </div>
                    <div className="h-[12px] w-1/2 rounded-full overflow-hidden">
                        <Skeleton className="w-full h-full"/>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                        <div className="w-[40px] aspect-square rounded-full overflow-hidden">
                            <Skeleton className="w-full h-full"/>
                        </div>
                        <div className="h-[12px] w-[165px] rounded-full overflow-hidden">
                            <Skeleton className="w-full h-full"/>
                        </div>
                    </div>

                    <div className="h-[12px] w-full rounded-full overflow-hidden">
                        <Skeleton className="w-full h-full"/>
                    </div>
                    <div className="h-[12px] w-1/2 rounded-full overflow-hidden">
                        <Skeleton className="w-full h-full"/>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                        <div className="w-[40px] aspect-square rounded-full overflow-hidden">
                            <Skeleton className="w-full h-full"/>
                        </div>
                        <div className="h-[12px] w-[165px] rounded-full overflow-hidden">
                            <Skeleton className="w-full h-full"/>
                        </div>
                    </div>

                    <div className="h-[12px] w-full rounded-full overflow-hidden">
                        <Skeleton className="w-full h-full"/>
                    </div>
                    <div className="h-[12px] w-1/2 rounded-full overflow-hidden">
                        <Skeleton className="w-full h-full"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default loading