'use client'

import { TwitterTimelineEmbed } from 'react-twitter-embed'

interface Props {
    height?: number
}

const Social: React.FC<Props> = ({height=460}) => {
  return (
    <>
    <div className="rounded-xl overflow-hidden hidden dark:inline-block">
        <TwitterTimelineEmbed
        sourceType="profile"
        screenName="mesniu_0"
        theme="dark"
        noScrollbar
        options={{height: height}}
        />
        </div>
        <div className="rounded-xl overflow-hidden dark:hidden">
        <TwitterTimelineEmbed
        sourceType="profile"
        screenName="mesniu_0"
        noScrollbar
        theme="light"
        options={{height: height}}
        />
        </div>
    </>
  )
}

export default Social