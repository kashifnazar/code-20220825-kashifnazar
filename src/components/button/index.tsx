import React, { FC } from 'react'
import { WithChildren } from '../../types/with-children'

type Props = {
    variant?: 'filter-item' | 'normal'
    icon?: string
}

const Button: FC<WithChildren<Props>> = ({variant = 'normal', icon, children}) => {

  const clazz = `button gradient flexbox horizontal justify-center align-center ${variant}`

  return (
    <div className={clazz}>
        {icon && <img src={icon} alt={icon || 'icon'} className="mr-2"/>}
        {children}
    </div>
  )
}

export default Button