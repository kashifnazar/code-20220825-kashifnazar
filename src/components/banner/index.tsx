import React, { FC } from 'react'

import './index.css'

type Props = {
  title: string,
  subTitle: string
}

const Banner: FC<Props> = ({title, subTitle}) => {
  return (
    <div className='banner vertical flexbox flex-align-center'>
      <h1>{title}</h1>
      <h2>{subTitle}</h2>
    </div>
  )
}

export default Banner