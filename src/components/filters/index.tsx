import React from 'react'
import Button from '../button'
import { SelectBox, SelectBoxProps } from '../select-box'

import './filters.css'

type Props = {}

const filters: Array<SelectBoxProps> = [
  {
    title: "City",
    description: "Select your city"
  },
  {
    title: "Dates",
    description: "Select your dates"
  },
  {
    title: "Guests",
    description: "Add guests"
  }
]

const Filters = (props: Props) => {
  return (
    <div className='filters horizontal flexbox justify-center'>
       <div className='filters-container horizontal flexbox justify-center'>
        {
          filters.map(f => <SelectBox key={f.title} {...f} />)
        }

        <Button icon='/images/search.png' variant='filter-item'>Search</Button>
      </div>
    </div>
  )
}

export default Filters