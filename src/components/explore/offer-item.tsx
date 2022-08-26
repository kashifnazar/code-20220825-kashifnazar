import { FC } from 'react'

import './styles.css'

export type OfferItemProps = {
    description: string
    size: number
    price: number
}

const OfferItem: FC<OfferItemProps> = ({description, price, size}) => 
       <div className='offer-item'>
            <div className="description">{description}</div>
            <div className="price">
                <div className="button">{price}$</div>
            </div>
            <div className="size">
                <div className="button">{size}<sub>M</sub><sup>2</sup></div>
            </div>
            <div className="book">
                <div className="book-button">Book!</div>
            </div>
       </div>

export default OfferItem