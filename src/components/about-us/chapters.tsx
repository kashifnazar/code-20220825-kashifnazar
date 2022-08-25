import React, { FC } from 'react'
import Chapter, { ChapterProps } from './chapter'

type Props = {
    chapterItems: Array<ChapterProps>
}

const Chapters: FC<Props> = ({chapterItems}) => {
  return (
    <div>
        {chapterItems.map(chapter => <Chapter key={chapter.title} {...chapter}></Chapter>)}
    </div>
  )
}

export default Chapters