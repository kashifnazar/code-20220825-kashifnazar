import { ReactNode } from 'react'
import { WithImage } from '../../types/with-image'
import './styles.css'

type Props<T> = {
    galleryItems: Array<WithImage<T>>
    getItemDetails: (t: T) => ReactNode
}

const Gallery = <T extends unknown>({galleryItems, getItemDetails} : Props<WithImage<T>>) => 
        <div className="gallery">
          {galleryItems.map(i => <div className="gallery-item">
                    <img src={i.image} alt={i.image}/>
                      <div className='extra-info'>
                      {getItemDetails(i)}
                      </div>
                    </div>)}
        </div>

export default Gallery