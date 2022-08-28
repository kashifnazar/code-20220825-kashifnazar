import { ReactNode } from 'react'
import { WithImage } from '../../types/with-image'
import Gallery from '../gallery'
import Masonry from '../masonry'
import './section.css'

type Props<T> = {
    title: string
    description: string
    galleryItems: Array<WithImage<T>>
    getItemDetails: (t: T) => ReactNode
    mode?: 'gallery' | 'masonry'
}

const Section = <T extends unknown>({title, description, galleryItems, getItemDetails, mode = 'gallery'} : Props<WithImage<T>>) => {
  return (
    <section className='section'>
        <div>
          <h2 className='title'>{title}</h2>
          <h4 className='description'>{description}</h4>
        </div>

        { mode === 'gallery' 
          ? <Gallery galleryItems={galleryItems} getItemDetails={getItemDetails} />
          : <Masonry galleryItems={galleryItems} getItemDetails={getItemDetails} />

        }

    </section>
  )
}

export default Section