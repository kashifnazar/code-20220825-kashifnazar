import React, { FC } from 'react'

import './styles.css'

export type ChapterProps = {
    title: string
    description: string
}

const Chapter:FC<ChapterProps> = ({title, description}) => {
  return (
    <div className='chapter'>
        <div className='title'>{title}</div>
        <div className='description'>{description}</div>
    </div>
  )
}

export default Chapter