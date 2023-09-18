'use client'

import { useEffect, useState } from "react"

interface Data {
    paragraph: string
}

interface Props {
    totalPages?: number
    data?: Data[]
}


const Pagination: React.FC<Props> = ({totalPages, data }) => {

    const pageNumbers: number[] = Array.from({ length: totalPages! }, (_, index) => index + 1);
    const [currentPage, setCurrentPage] = useState(1)

    
    useEffect(() => {
        if(currentPage === 1) {
            window.scrollTo(0, 0);
        }else {
            window.scrollTo(0, 400);
        }
      }, [currentPage]);

  return (
    <div id="top" className="flex flex-col col-span-5 sm:col-span-4 gap-3">
        {data && 
        <div className="text-sm !leading-[22.4px] sm:!leading-[25.5px] sm:text-base">
        {data[currentPage -1]?.paragraph}
        </div>}

        <div className="flex gap-3 w-full flex-wrap justify-center items-center">
        {pageNumbers.map((pageNumber) => (
        <button
        key={pageNumber}
        className={`w-[40px] aspect-square rounded-xl flex items-center justify-center font-medium text-sm
        bg-darkerColor text-white  dark:bg-white dark:text-darkerColor duration-300
        ${pageNumber === currentPage && 'opacity-60'}`}
        onClick={() => setCurrentPage(pageNumber)}
        >
            {pageNumber}
        </button>
        ))}
        </div>
    </div>
  )
}

export default Pagination