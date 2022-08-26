import React, { FC } from 'react'

export type ChapterProps = {
    title: string
    description: string
}

const Chapter:FC<ChapterProps> = ({title, description}) => {
  return (
    <div className='chapter'>
        <div>{title}</div>
        <div>{description}</div>
    </div>
  )
}

export default Chapter