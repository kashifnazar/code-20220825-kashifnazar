import React from 'react'

type Props = {}

const Navigation = (props: Props) => {


  return (
    <nav>
      <ul>
        <li>Explore</li>
        <li>About Us</li>
        <li>Cities <img src="/images/down-arrow.png" alt="Down" /></li>
        <li>
          <button>
            Call
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation