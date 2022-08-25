import React, { FC } from 'react'

export type ChapterProps = {
    image: string
    title: string
    description: string
}

const Chapter:FC<ChapterProps> = ({image, title, description}) => {
  return (
    <div>
        <img src={image} alt={title} />
        <div>{title}</div>
        <div>{description}</div>
    </div>
  )
}

export default Chapter