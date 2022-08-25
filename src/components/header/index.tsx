import React from 'react'
import { WithChildren } from '../../types/with-children'


const Header: React.FC<WithChildren> = ({children}) => {
  return (
    <div className='horizontal flexbox space-between p-3 flex-align-center'>
      {children}
    </div>
  )
}

export default Header