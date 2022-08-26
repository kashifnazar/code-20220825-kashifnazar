import { ReactNode } from 'react'
import { WithImage } from '../../types/with-image'
import './section.css'

type Props<T> = {
    title: string
    description: string
    galleryItems: Array<WithImage<T>>
    getItemDetails: (t: T) => ReactNode
}

const Section = <T extends unknown>({title, description, galleryItems, getItemDetails} : Props<WithImage<T>>) => {
  return (
    <section className='section'>
        <div>
          <h2 className='title'>{title}</h2>
          <h4 className='description'>{description}</h4>
        </div>

        <div className="gallery">
          {galleryItems.map(i => <div className="gallery-item">
                    <img src={i.image} alt={i.image}/>
                      <div className='extra-info'>
                      {getItemDetails(i)}
                      </div>
                    </div>)}
        </div>


    </section>
  )
}

export default Section