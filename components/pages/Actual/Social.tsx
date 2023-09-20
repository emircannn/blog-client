'use client'

import { TwitterTimelineEmbed } from 'react-twitter-embed'

interface Props {
    height?: number
}

const Social: React.FC<Props> = ({height=300}) => {
  return (
    <>
    <div className="rounded-xl overflow-hidden hidden dark:inline-block">
        <TwitterTimelineEmbed
        sourceType="profile"
        screenName="nazariyatdergi"
        theme="dark"
        noScrollbar
        options={{height: height}}
        />
        </div>
        <div className="rounded-xl overflow-hidden dark:hidden">
        <TwitterTimelineEmbed
        sourceType="profile"
        screenName="nazariyatdergi"
        noScrollbar
        theme="light"
        options={{height: height}}
        />
        </div>
    </>
  )
}

export default Social