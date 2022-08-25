import React, { FC } from 'react'
import { WithChildren } from '../../types/with-children'

import './section.css'

type Props = {
    title: string
    description: string
}

const Section:FC<WithChildren<Props>> = ({title, description}) => {
  return (
    <section className='section'>
        <h2 className='title'>{title}</h2>
        <h4 className='description'>{description}</h4>
    </section>
  )
}

export default Section