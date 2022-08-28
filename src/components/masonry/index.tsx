import { ReactNode } from 'react'
import { WithImage } from '../../types/with-image'
import './styles.css'

type Props<T> = {
    galleryItems: Array<WithImage<T>>
    getItemDetails: (t: T) => ReactNode
}

const Masonry = <T extends unknown>({galleryItems, getItemDetails} : Props<WithImage<T>>) => 
        <div className="masonry">
          <div>
            {galleryItems.filter((_1, n) => n%2).map(i => <div className="masonry-item">
                    <img src={i.image} alt={i.image}/>
                      <div className='extra-info'>
                      {getItemDetails(i)}
                      </div>
                    </div>)}
          </div>
          <div>
            {galleryItems.filter((_1, n) => !(n%2)).map(i => <div className="masonry-item">
                    <img src={i.image} alt={i.image}/>
                      <div className='extra-info'>
                      {getItemDetails(i)}
                      </div>
                    </div>)}
          </div>


          
        </div>

export default Masonry