'use client'

import { dateFormater } from "@/components/utils"

interface Props {
  data: Comments
}

const Comment: React.FC<Props> = ({
  data
}) => {
  return (
    <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
            <span className="text-sm font-semibold">{data?.name}</span>
            <span className="text-xs font-medium sm:text-sm opacity-60">{dateFormater(data?.createdAt)}</span>
        </div>

        <p className="text-xs sm:text-sm opacity-60 font-medium">
          {data?.comment}
        </p>
    </div>
  )
}

export default Comment