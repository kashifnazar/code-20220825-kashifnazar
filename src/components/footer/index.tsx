import Navigation from '../navigation'

import './styles.css'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer>
        <div className='flexbox vertical'>
          <img src='/images/black-logo.png' alt='Your logo' />
          <p>©2021  Company Name <br/>
            All rights reserved</p>
        </div>
        <Navigation></Navigation>
    </footer>
  )
}

export default Footer